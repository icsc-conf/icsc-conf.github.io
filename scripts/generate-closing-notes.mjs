import { execFileSync } from "node:child_process";
import { accessSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const outputDirectory = path.join(repositoryRoot, "assets", "2026", "holding-slides");
const htmlPath = path.join(outputDirectory, "closing-notes-source.html");
const pdfPath = path.join(outputDirectory, "closing_notes.pdf");
const pandaPath = path.join(outputDirectory, "panda-spicy-noodles.png");
const jscCoverPath = path.join(outputDirectory, "journal-of-social-computing-cover.jpg");
const acmTscCoverPath = path.join(outputDirectory, "acm-transactions-social-computing-cover.jpg");
const metricsUrl = "https://metrics-and-models.github.io/";
const jscUrl = "https://www.sciopen.com/journal/2688-5255";
const acmTscUrl = "https://dl.acm.org/journal/tsc";

const qrPackageRoot = path.resolve(path.dirname(require.resolve("qrcode-terminal")), "..");
const QRCode = require(path.join(qrPackageRoot, "vendor", "QRCode"));
const QRErrorCorrectLevel = require(path.join(qrPackageRoot, "vendor", "QRCode", "QRErrorCorrectLevel"));

function renderQrCode(value) {
  const code = new QRCode(-1, QRErrorCorrectLevel.Q);
  code.addData(value);
  code.make();

  const pathCommands = [];
  for (let row = 0; row < code.getModuleCount(); row += 1) {
    let column = 0;
    while (column < code.getModuleCount()) {
      if (!code.isDark(row, column)) {
        column += 1;
        continue;
      }

      const start = column;
      while (column < code.getModuleCount() && code.isDark(row, column)) column += 1;
      pathCommands.push(`M${start} ${row}h${column - start}v1H${start}z`);
    }
  }

  const size = code.getModuleCount() + 8;
  return `<svg viewBox="-4 -4 ${size} ${size}" role="img" aria-label="QR code for Metrics and Models" shape-rendering="crispEdges">
    <rect x="-4" y="-4" width="${size}" height="${size}" fill="#fff"/>
    <path d="${pathCommands.join("")}" fill="#082b4c"/>
  </svg>`;
}

const header = `<header class="topbar">
  <div class="brand">
    <img src="../../../images/log/icsc-logo.png" alt="ICSC logo">
    <div><strong>ICSC’26 · OXFORD</strong><span>International Conference on Social Computing</span></div>
  </div>
  <div class="date-lockup"><strong>FRIDAY · 4 SEPTEMBER 2026</strong><span>CONFERENCE CLOSE</span></div>
</header>`;

const sponsorStrip = `<footer class="sponsor-strip">
  <div class="thanks">With thanks to<br><strong>our sponsors</strong></div>
  <img src="../../../images/sponsors/tup.png" alt="Tsinghua University Press">
  <img src="../../../images/sponsors/ECUST%20logo.jpg" alt="East China University of Science and Technology">
  <img class="nuffield" src="../../../images/sponsors/nuffield-college.png" alt="Nuffield College">
  <img class="leverhulme" src="../../../images/sponsors/leverhulme-centre-demographic-science.png" alt="Leverhulme Centre for Demographic Science">
  <img class="silta" src="../../../images/sponsors/Silta_Hauptlogo_V2_Farbig_RGB.png" alt="Silta">
</footer>`;

const confetti = `<div class="confetti" aria-hidden="true">
  <i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i><i class="c5"></i><i class="c6"></i>
</div>`;

const gratitudeCards = [
  {
    number: "01",
    title: "Our volunteers",
    copy: "For the time, energy and care that made everything possible."
  },
  {
    number: "02",
    title: "Nuffield College",
    copy: "For the warm welcome, wonderful spaces and generous hospitality."
  },
  {
    number: "03",
    title: "Our online attendees",
    copy: "For joining the conversation from around the world."
  },
  {
    number: "04",
    title: "Our research community",
    copy: "For all the wonderful research shared and the thoughtful discussions we had."
  }
];

function renderThankYouBuild(visibleCount) {
  const cards = gratitudeCards.map((card, index) => {
    const revealed = index < visibleCount;
    return `<article class="${revealed ? "revealed" : "pending"}"${revealed ? "" : ' aria-hidden="true"'}>
      <span>${card.number}</span><strong>${card.title}</strong><p>${card.copy}</p>
    </article>`;
  }).join("");

  return `<section class="slide thanks-slide" aria-label="Thank you — build ${visibleCount} of 4">
    ${confetti}${header}
    <main class="closing-body thanks-body">
      <div class="thanks-intro">
        <span class="chip">THANK YOU</span>
        <h1>Thank you all for coming</h1>
        <p>You made ICSC’26 a wonderfully generous, curious and connected conference.</p>
      </div>
      <div class="gratitude-grid">${cards}</div>
      <p class="happy-line ${visibleCount === gratitudeCards.length ? "revealed" : "pending"}">We’re so glad you were part of it.</p>
    </main>
    ${sponsorStrip}<div class="slide-number">01 / 04</div>
  </section>`;
}

const qrCode = renderQrCode(metricsUrl);
const slides = [
  ...[0, 1, 2, 3, 4].map(renderThankYouBuild),
  `<section class="slide journals-slide" aria-label="Submit your next social computing paper">
    ${confetti}${header}
    <main class="closing-body journals-body">
      <div class="journals-intro">
        <span class="chip">KEEP SHARING THE WORK</span>
        <h1>Where will your next paper go?</h1>
        <p>Keep today’s ideas and conversations moving in two journals at the heart of social computing.</p>
      </div>
      <div class="journal-grid">
        <a class="journal-card jsc-card" href="${jscUrl}" aria-label="Explore the Journal of Social Computing">
          <span class="journal-cover"><img src="./journal-of-social-computing-cover.jpg" alt="Official 2026 Journal of Social Computing cover"></span>
          <span class="journal-copy">
            <span class="journal-kicker">JOURNAL OF SOCIAL COMPUTING</span>
            <strong>Journal of<br>Social Computing</strong>
            <span class="journal-publisher">Tsinghua University Press · available on IEEE Xplore</span>
            <span class="journal-cta">Explore the journal <b aria-hidden="true">→</b></span>
          </span>
        </a>
        <a class="journal-card acm-card" href="${acmTscUrl}" aria-label="Explore ACM Transactions on Social Computing">
          <span class="journal-cover"><img src="./acm-transactions-social-computing-cover.jpg" alt="Official ACM Transactions on Social Computing cover"></span>
          <span class="journal-copy">
            <span class="journal-kicker">ACM TSC</span>
            <strong>ACM Transactions on Social Computing</strong>
            <span class="journal-publisher">Research at the intersection of computing and society</span>
            <span class="journal-cta">Explore the journal <b aria-hidden="true">→</b></span>
          </span>
        </a>
      </div>
      <p class="journals-close">We’d love to see today’s conversations become tomorrow’s papers.</p>
    </main>
    ${sponsorStrip}<div class="slide-number">02 / 04</div>
  </section>`,
  `<section class="slide metrics-slide" aria-label="Metrics and Models">
    ${confetti}${header}
    <main class="closing-body metrics-body">
      <section class="metrics-copy">
        <span class="chip">KEEP THE CONVERSATION GOING</span>
        <h1>Metrics and Models</h1>
        <p class="lead">More talks like these happen online every two weeks at Metrics and Models. All are welcome to attend.</p>
        <div class="feature-pills"><span>ONLINE</span><span>EVERY TWO WEEKS</span><span>OPEN TO EVERYONE</span></div>
        <a class="url" href="${metricsUrl}">metrics-and-models.github.io</a>
      </section>
      <a class="qr-card" href="${metricsUrl}" aria-label="Visit the Metrics and Models website">
        ${qrCode}
        <strong>Scan for upcoming talks</strong>
        <span>Join us online</span>
      </a>
    </main>
    ${sponsorStrip}<div class="slide-number">03 / 04</div>
  </section>`,
  `<section class="slide chengdu-slide" aria-label="See you in Chengdu">
    ${confetti}${header}
    <main class="closing-body chengdu-body">
      <section class="chengdu-copy">
        <span class="chip">UNTIL NEXT TIME</span>
        <h1>See you next year in Chengdu!</h1>
        <p>Thank you, safe travels, and <span lang="zh-Hans">再见!</span></p>
        <div class="next-year"><span>ICSC’27</span><strong>CHENGDU</strong></div>
      </section>
      <div class="panda-wrap"><div class="sun"></div><img src="./panda-spicy-noodles.png" alt="A happy panda eating a bowl of spicy noodles"></div>
    </main>
    ${sponsorStrip}<div class="slide-number">04 / 04</div>
  </section>`
];

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ICSC 2026 closing notes</title>
  <style>
    @page { size: 13.333333in 10in; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #fff; color: #082b4c; font-family: Arial, Helvetica, sans-serif; }
    .slide { position: relative; width: 1280px; height: 960px; overflow: hidden; padding: 30px 48px 0; background: #fff; page-break-after: always; break-after: page; }
    .slide:last-child { page-break-after: auto; break-after: auto; }
    .slide::before { content: ""; position: absolute; inset: 0 0 auto; height: 8px; background: linear-gradient(90deg,#082b4c 0 58%,#e49a32 58% 75%,#d85863 75% 88%,#10a9a2 88%); }
    .topbar { position: relative; z-index: 3; height: 78px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #dce7ef; padding-bottom: 16px; }
    .brand { display: flex; align-items: center; gap: 15px; }
    .brand img { width: 45px; height: 60px; object-fit: contain; }
    .brand div { display: flex; flex-direction: column; gap: 3px; }
    .brand strong { color: #082b4c; font-size: 20px; letter-spacing: .045em; }
    .brand span { color: #547188; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
    .date-lockup { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .date-lockup strong { font-size: 15px; letter-spacing: .07em; }
    .date-lockup span { border-radius: 999px; padding: 5px 10px; background: #082b4c; color: #fff; font-size: 10px; font-weight: 700; letter-spacing: .13em; }
    .closing-body { position: relative; z-index: 2; height: 732px; padding: 34px 0 26px; }
    .chip { display: inline-flex; border-radius: 999px; padding: 7px 12px; background: #fff0da; color: #995a05; font-size: 11px; font-weight: 900; letter-spacing: .14em; }
    h1 { margin: 12px 0 8px; color: #082b4c; font-size: 46px; line-height: 1.03; letter-spacing: -.035em; }
    .confetti { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
    .confetti i { position: absolute; display: block; opacity: .85; }
    .confetti .c1 { width: 18px; height: 8px; top: 142px; right: 76px; background: #e49a32; transform: rotate(27deg); }
    .confetti .c2 { width: 9px; height: 19px; top: 181px; right: 128px; background: #d85863; transform: rotate(-18deg); }
    .confetti .c3 { width: 12px; height: 12px; top: 148px; left: 28px; border-radius: 50%; background: #10a9a2; }
    .confetti .c4 { width: 16px; height: 7px; top: 455px; left: 25px; background: #e49a32; transform: rotate(-35deg); }
    .confetti .c5 { width: 10px; height: 10px; top: 600px; right: 32px; border-radius: 50%; background: #d85863; }
    .confetti .c6 { width: 8px; height: 17px; top: 700px; right: 84px; background: #10a9a2; transform: rotate(38deg); }
    .thanks-body { display: grid; grid-template-rows: auto 260px auto; align-content: center; gap: 20px; }
    .thanks-intro { text-align: center; }
    .thanks-intro h1 { margin-top: 9px; font-size: 43px; }
    .thanks-intro p { margin: 0; color: #466477; font-size: 18px; line-height: 1.3; }
    .gratitude-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; align-items: stretch; }
    .gratitude-grid article { position: relative; overflow: hidden; min-width: 0; border: 1px solid #d8e5ee; border-radius: 18px; padding: 26px 20px 20px; background: linear-gradient(145deg,#f7fbfe,#fffaf4); box-shadow: 0 10px 24px rgba(8,43,76,.055); }
    .gratitude-grid article::before { content: ""; position: absolute; inset: 0 0 auto; height: 5px; background: #10a9a2; }
    .gratitude-grid article:nth-child(2)::before { background: #e49a32; }
    .gratitude-grid article:nth-child(3)::before { background: #d85863; }
    .gratitude-grid article:nth-child(4)::before { background: #082b4c; }
    .gratitude-grid article > span { color: #94a8b5; font-size: 11px; font-weight: 900; letter-spacing: .12em; }
    .gratitude-grid article > strong { display: block; margin: 11px 0 10px; color: #123f64; font-size: 21px; line-height: 1.13; }
    .gratitude-grid article > p { margin: 0; color: #526f83; font-size: 16px; line-height: 1.4; }
    .gratitude-grid article.pending, .happy-line.pending { visibility: hidden; }
    .happy-line { margin: 0; text-align: center; color: #0b6f82; font-size: 20px; font-weight: 800; }
    .journals-body { display: grid; grid-template-rows: auto 360px auto; align-content: center; gap: 20px; padding: 26px 28px 22px; }
    .journals-intro { text-align: center; }
    .journals-intro h1 { margin: 10px 0 7px; font-size: 44px; }
    .journals-intro p { margin: 0; color: #466477; font-size: 19px; line-height: 1.3; }
    .journal-grid { display: grid; min-height: 0; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 22px; }
    .journal-card { display: grid; min-width: 0; grid-template-columns: 190px minmax(0,1fr); gap: 22px; align-items: center; overflow: hidden; border: 1px solid #d8e5ee; border-radius: 20px; padding: 20px; background: #fff; box-shadow: 0 12px 28px rgba(8,43,76,.075); color: #082b4c; text-decoration: none; }
    .journal-card.jsc-card { background: linear-gradient(140deg,#fbf9ff,#fffaf3); }
    .journal-card.acm-card { background: linear-gradient(140deg,#f4fbfd,#fbfdff); }
    .journal-cover { display: flex; height: 300px; align-items: center; justify-content: center; overflow: hidden; border-radius: 10px; background: #fff; box-shadow: 0 5px 14px rgba(8,43,76,.16); }
    .journal-cover img { display: block; width: 100%; height: 100%; object-fit: contain; }
    .journal-copy { display: flex; min-width: 0; height: 100%; flex-direction: column; justify-content: center; }
    .journal-kicker { color: #0a7d86; font-size: 10px; font-weight: 900; letter-spacing: .1em; }
    .journal-copy > strong { display: block; margin: 12px 0 14px; color: #123f64; font-size: 28px; line-height: 1.08; letter-spacing: -.02em; }
    .journal-publisher { color: #536f82; font-size: 16px; line-height: 1.4; }
    .journal-cta { align-self: flex-start; margin-top: 20px; border-radius: 999px; padding: 8px 12px; background: #082b4c; color: #fff; font-size: 13px; font-weight: 800; }
    .journal-cta b { margin-left: 3px; color: #f8c877; font-size: 14px; }
    .journals-close { margin: 0; text-align: center; color: #0b6f82; font-size: 19px; font-weight: 800; }
    .metrics-body { display: grid; grid-template-columns: minmax(0,1.35fr) minmax(340px,.65fr); gap: 62px; align-items: center; padding-left: 42px; padding-right: 42px; }
    .metrics-copy h1 { margin-top: 18px; font-size: 66px; }
    .metrics-copy .lead { max-width: 650px; margin: 22px 0 25px; color: #38566c; font-size: 26px; line-height: 1.42; }
    .feature-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 27px; }
    .feature-pills span { border: 1px solid #c7dfe4; border-radius: 999px; padding: 8px 11px; background: #eaf5f7; color: #086978; font-size: 12px; font-weight: 900; letter-spacing: .07em; }
    .url { color: #086978; font-size: 22px; font-weight: 900; text-decoration: underline; text-underline-offset: 5px; }
    .qr-card { justify-self: end; display: flex; width: 340px; flex-direction: column; align-items: center; border: 2px solid #082b4c; border-radius: 22px; padding: 22px 22px 19px; background: #fff; box-shadow: 0 14px 32px rgba(8,43,76,.1); color: #082b4c; text-decoration: none; }
    .qr-card svg { display: block; width: 270px; height: 270px; }
    .qr-card strong { margin-top: 8px; font-size: 17px; }
    .qr-card span { margin-top: 3px; color: #60798a; font-size: 13px; font-weight: 700; }
    .chengdu-body { display: grid; grid-template-columns: 46% 54%; align-items: center; padding-left: 34px; }
    .chengdu-copy { align-self: center; padding-bottom: 22px; }
    .chengdu-copy h1 { max-width: 550px; margin-top: 18px; font-size: 66px; line-height: 1.02; }
    .chengdu-copy > p { margin: 24px 0 28px; color: #38566c; font-size: 26px; line-height: 1.4; }
    .chengdu-copy [lang] { color: #d04b56; font-family: "Noto Sans CJK SC", "Microsoft YaHei", Arial, sans-serif; font-weight: 800; }
    .next-year { display: inline-flex; align-items: center; gap: 12px; border-radius: 14px; padding: 10px 15px; background: #082b4c; color: #fff; }
    .next-year span { color: #f8c877; font-size: 13px; font-weight: 900; letter-spacing: .08em; }
    .next-year strong { font-size: 18px; letter-spacing: .08em; }
    .panda-wrap { position: relative; align-self: stretch; min-width: 0; }
    .panda-wrap .sun { position: absolute; width: 430px; height: 430px; right: 72px; top: 112px; border-radius: 50%; background: radial-gradient(circle,#fff0d8 0 58%,rgba(255,240,216,0) 59%); }
    .panda-wrap img { position: absolute; z-index: 1; right: -10px; bottom: -8px; width: 690px; height: 610px; object-fit: contain; }
    .sponsor-strip { position: relative; z-index: 3; height: 110px; display: grid; grid-template-columns: 125px 1.1fr 1.15fr .88fr 1.2fr .8fr; gap: 24px; align-items: center; border-top: 1px solid #dce7ef; background: #fff; }
    .sponsor-strip .thanks { padding-left: 4px; color: #748997; font-size: 10px; line-height: 1.25; letter-spacing: .08em; text-transform: uppercase; }
    .sponsor-strip .thanks strong { color: #274b63; font-size: 12px; }
    .sponsor-strip img { display: block; width: 100%; max-width: 100%; max-height: 64px; object-fit: contain; }
    .sponsor-strip img.nuffield { max-height: 70px; }
    .sponsor-strip img.leverhulme { max-height: 62px; }
    .sponsor-strip img.silta { max-height: 54px; }
    .slide-number { position: absolute; z-index: 4; right: 18px; bottom: 12px; color: #c5d1d8; font-size: 8px; }
    @media screen { body { padding: 20px; background: #dbe3e8; } .slide { margin: 0 auto 20px; box-shadow: 0 8px 35px rgba(0,0,0,.18); } }
  </style>
</head>
<body>${slides.join("\n")}</body>
</html>`;

accessSync(pandaPath);
accessSync(jscCoverPath);
accessSync(acmTscCoverPath);
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(htmlPath, html, "utf8");

const temporaryDirectory = mkdtempSync(path.join(tmpdir(), "icsc-closing-notes-"));
const chromeProfile = path.join(temporaryDirectory, "chrome-profile");

try {
  execFileSync(
    process.env.CHROME_BIN || "/usr/bin/google-chrome",
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--allow-file-access-from-files",
      `--user-data-dir=${chromeProfile}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href
    ],
    { stdio: "inherit" }
  );

  const pdfInformation = execFileSync("/usr/bin/pdfinfo", [pdfPath], { encoding: "utf8" });
  const pageCount = Number(pdfInformation.match(/^Pages:\s+(\d+)$/m)?.[1]);
  if (pageCount !== slides.length) {
    throw new Error(`Expected ${slides.length} PDF pages, but Chrome produced ${pageCount}.`);
  }

  if (!/^Page size:\s+960 x 720 pts$/m.test(pdfInformation)) {
    throw new Error("Expected 16:12 PDF pages at 960 × 720 points.");
  }

  if (readFileSync(pdfPath).subarray(0, 4).toString() !== "%PDF") {
    throw new Error("The generated closing notes did not pass the PDF signature check.");
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}

console.log(`Generated ${pdfPath} (${slides.length} pages).`);
