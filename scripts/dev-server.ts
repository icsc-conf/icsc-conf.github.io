import { spawn } from "node:child_process";
import { createReadStream, existsSync, statSync, watch } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptFilename = fileURLToPath(import.meta.url);
const scriptDirname = path.dirname(scriptFilename);
const repositoryRoot = path.resolve(scriptDirname, "..");

const defaultPort = 4173;
const host = process.env.HOST ?? "127.0.0.1";
const port = readPort();

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".zip": "application/zip"
};

let buildRunning = false;
let buildQueued = false;
let rebuildTimer: NodeJS.Timeout | undefined;

await runBuild();
startServer();
startWatcher();

function readPort() {
  const portFlag = process.argv.find((arg) => arg.startsWith("--port="));
  const rawPort = portFlag?.split("=")[1] ?? process.env.PORT;
  const parsedPort = Number(rawPort);

  if (!rawPort) {
    return defaultPort;
  }

  if (!Number.isInteger(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
    throw new Error(`Invalid port: ${rawPort}`);
  }

  return parsedPort;
}

function runBuild() {
  if (buildRunning) {
    buildQueued = true;
    return Promise.resolve();
  }

  buildRunning = true;
  console.log("Building site...");

  return new Promise<void>((resolve, reject) => {
    const child = spawn("pnpm", ["run", "build"], {
      cwd: repositoryRoot,
      shell: process.platform === "win32",
      stdio: "inherit"
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      buildRunning = false;

      if (code === 0) {
        console.log("Build finished.");
        resolve();
      } else {
        reject(new Error(`Build failed with exit code ${code ?? "unknown"}.`));
      }

      if (buildQueued) {
        buildQueued = false;
        void runBuild().catch((error: unknown) => {
          console.error(error);
        });
      }
    });
  });
}

function queueBuild() {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => {
    void runBuild().catch((error: unknown) => {
      console.error(error);
    });
  }, 150);
}

function startWatcher() {
  const watchedPaths = [path.join(repositoryRoot, "src"), path.join(repositoryRoot, "scripts")];

  for (const watchedPath of watchedPaths) {
    watch(watchedPath, { recursive: true }, (_eventType, filename) => {
      if (!filename) {
        return;
      }

      const changedPath = path.join(watchedPath, filename.toString());
      if (changedPath.endsWith("dev-server.ts")) {
        return;
      }

      queueBuild();
    });
  }

  console.log("Watching src/ and scripts/ for changes.");
}

function startServer() {
  const server = createServer((request, response) => {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" });
      response.end("Method not allowed");
      return;
    }

    const requestedUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
    const filePath = resolveFilePath(requestedUrl.pathname);

    if (!filePath) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    if (!existsSync(filePath)) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    let responseFilePath = filePath;
    let fileStat = statSync(responseFilePath);

    if (fileStat.isDirectory()) {
      if (!requestedUrl.pathname.endsWith("/")) {
        response.writeHead(308, { Location: `${requestedUrl.pathname}/${requestedUrl.search}` });
        response.end();
        return;
      }

      responseFilePath = path.join(responseFilePath, "index.html");

      if (!existsSync(responseFilePath)) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      fileStat = statSync(responseFilePath);
    }

    response.writeHead(200, {
      "Cache-Control": "no-cache",
      "Content-Length": fileStat.size,
      "Content-Type": contentTypes[path.extname(responseFilePath).toLowerCase()] ?? "application/octet-stream"
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(responseFilePath).pipe(response);
  });

  server.listen(port, host, () => {
    console.log(`Serving site at http://${host}:${port}/`);
  });
}

function resolveFilePath(pathname: string) {
  let decodedPathname: string;

  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }

  const normalizedPath = path.normalize(decodedPathname).replace(/^[/\\]+/, "");
  const filePath = path.resolve(repositoryRoot, normalizedPath || "index.html");

  if (filePath !== repositoryRoot && !filePath.startsWith(`${repositoryRoot}${path.sep}`)) {
    return undefined;
  }

  return filePath;
}
