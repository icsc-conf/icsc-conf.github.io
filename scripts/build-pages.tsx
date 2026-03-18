import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Conference2026Page,
  ConferenceCallPaperPage,
  ConferenceCallPosterPage,
  ConferenceCommitteePage,
  PastConferencesPage,
  RootLandingPage
} from "../src/site/pages/index";
import { createSitePaths } from "../src/site/components";

type PageSpec = {
  outputPath: string;
  title?: string;
  description?: string;
  cssHref?: string;
  rawHtml?: string;
  render?: () => JSX.Element;
};

function renderDocument({
  title,
  description,
  cssHref,
  bodyHtml
}: {
  title: string;
  description: string;
  cssHref: string;
  bodyHtml: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="Keywords" content="EdgeSys, ICSC, Social Computing">
  <link rel="stylesheet" href="${cssHref}">
</head>
<body>
${bodyHtml}
</body>
</html>
`;
}

async function writePage(repoRoot: string, page: PageSpec) {
  const fullPath = path.join(repoRoot, page.outputPath);
  await mkdir(path.dirname(fullPath), { recursive: true });
  const html =
    page.rawHtml ??
    renderDocument({
      title: page.title!,
      description: page.description!,
      cssHref: page.cssHref!,
      bodyHtml: renderToStaticMarkup(page.render!())
    });
  await writeFile(fullPath, html, "utf8");
  console.log(`Generated ${fullPath}`);
}

function renderRedirectDocument({
  title,
  description,
  redirectTo
}: {
  title: string;
  description: string;
  redirectTo: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta http-equiv="refresh" content="0; url=${redirectTo}">
  <link rel="canonical" href="${redirectTo}">
</head>
<body>
  <p>Redirecting to <a href="${redirectTo}">${redirectTo}</a>...</p>
</body>
</html>
`;
}

const scriptFilename = fileURLToPath(import.meta.url);
const scriptDirname = path.dirname(scriptFilename);
const repositoryRoot = path.resolve(scriptDirname, "..");

const rootPaths = createSitePaths("root");
const standalonePaths = createSitePaths("standalone");
const conferencePaths = createSitePaths("conference");

const pages: PageSpec[] = [
  {
    outputPath: "index.html",
    title: "International Conference on Social Computing",
    description:
      "Official website for the International Conference on Social Computing (ICSC), featuring the 2026 conference at Oxford.",
    cssHref: "site.css",
    render: () => <RootLandingPage paths={rootPaths} />
  },
  {
    outputPath: "past-conferences.html",
    title: "ICSC Past Conferences",
    description: "Archive page for past ICSC and COSB conference editions.",
    cssHref: "site.css",
    render: () => <PastConferencesPage paths={standalonePaths} />
  },
  {
    outputPath: "about.html",
    rawHtml: renderRedirectDocument({
      title: "About ICSC Redirect",
      description: "Redirect to the ICSC about section on the landing page.",
      redirectTo: "index.html#about"
    })
  },
  {
    outputPath: "2026/index.html",
    title: "ICSC 2026 Main Conference",
    description: "Main conference page for ICSC 2026 at the University of Oxford.",
    cssHref: "../site.css",
    render: () => <Conference2026Page paths={conferencePaths} />
  },
  {
    outputPath: "2026/about.html",
    rawHtml: renderRedirectDocument({
      title: "ICSC About Redirect",
      description: "Redirect to the ICSC about section on the landing page.",
      redirectTo: "../index.html#about"
    })
  },
  {
    outputPath: "2026/call.html",
    title: "ICSC 2026 Call For Papers",
    description: "Call for papers for ICSC 2026.",
    cssHref: "../site.css",
    render: () => <ConferenceCallPaperPage paths={conferencePaths} />
  },
  {
    outputPath: "2026/oc.html",
    title: "ICSC 2026 Organizing Committee",
    description: "Organizing committee for ICSC 2026.",
    cssHref: "../site.css",
    render: () => <ConferenceCommitteePage paths={conferencePaths} />
  },
  {
    outputPath: "2026/poster.html",
    title: "ICSC 2026 Call For Posters",
    description: "Poster track information for ICSC 2026.",
    cssHref: "../site.css",
    render: () => <ConferenceCallPosterPage paths={conferencePaths} />
  }
];

for (const page of pages) {
  await writePage(repositoryRoot, page);
}
