import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const outputDirectory = path.join(repositoryRoot, "assets", "2026", "holding-slides");

const slides = [
  {
    filename: "before start september 3rd.pdf",
    date: "THURSDAY · 3 SEPTEMBER 2026",
    day: "CONFERENCE DAY ONE",
    state: "BEFORE WE BEGIN",
    title: "Good morning — welcome to ICSC’26",
    time: "Online programme begins at 09:30 BST",
    place: "Main Lecture Theatre · Nuffield College",
    message: "We’re delighted you’re joining us. Settle in and we’ll begin very shortly.",
    now: [
      ["08:45–09:30", "Registration", "Porters’ Lodge"],
      ["08:45–09:30", "Poster setup", "Fellows’ Garden"]
    ],
    nextLabel: "Opening programme · Main Lecture Theatre · Online",
    next: [
      ["09:30", "Welcome to day one of ICSC 2026", "Charles Rahal"],
      ["09:35", "From Online Traces to Material Imprints: Articulating a Vision for Planetary Social Computing", "Adel Daoud"],
      ["09:55", "When Human Records Become Data: Opportunities and Pitfalls for Social Computing", "Xiaoming Fu"],
      ["10:15", "Understanding the Behavior of LLM-Driven Social Agents", "Yang Chen"]
    ]
  },
  {
    filename: "morning break september 3rd.pdf",
    date: "THURSDAY · 3 SEPTEMBER 2026",
    day: "CONFERENCE DAY ONE",
    state: "MORNING BREAK",
    title: "Time for a short break",
    time: "10:35–11:00 BST",
    place: "Refreshments · Dining Hall",
    message: "Stretch, refill your cup, and say hello. The online programme resumes at 11:00.",
    nextLabel: "Coming up next · Main Lecture Theatre · Online",
    next: [
      ["11:00", "Social Event Prediction with Context-Adaptive Temporal Knowledge Graph Reasoning", "Wenzhong Li"],
      ["11:15", "From Analysis to Simulation: Exploring Public Opinion, AIGC-Mediated Engagement, and Emergent Social Dynamics", "Bo Zhao"],
      ["11:30–13:00", "Digital and Computational Demography: Special Session", "Chaired by Ridhi Kashyap"]
    ]
  },
  {
    filename: "lunch september 3rd.pdf",
    date: "THURSDAY · 3 SEPTEMBER 2026",
    day: "CONFERENCE DAY ONE",
    state: "LUNCH & POSTERS",
    title: "Enjoy the lunch break",
    time: "13:00–14:30 BST",
    place: "Across Nuffield College",
    message: "Enjoy lunch, meet the poster presenters, and take a breather. The online stream returns at 14:30.",
    now: [
      ["13:00–13:05", "Group photograph", "Nuffield College Quad"],
      ["13:05–14:00", "Lunch & late registration", "Dining Hall"],
      ["13:00–14:30", "Poster displays", "Fellows’ Garden"]
    ],
    nextLabel: "Parallel sessions · 14:30–15:30",
    next: [
      ["ONLINE", "Session 1 — Crime, Space, Mobility, and Urban Perception", "Main Lecture Theatre"],
      ["IN PERSON", "Session 2 — Sequence Analysis and Life-Course Dynamics", "Butler Room"],
      ["IN PERSON", "Session 3 — Political Discourse, Framing, and Computational Text Analysis", "Chester Room"]
    ]
  },
  {
    filename: "afternoon break september 3rd.pdf",
    date: "THURSDAY · 3 SEPTEMBER 2026",
    day: "CONFERENCE DAY ONE",
    state: "AFTERNOON BREAK",
    title: "We’ll be back at 16:00",
    time: "15:30–16:00 BST",
    place: "Refreshments · Dining Hall",
    message: "Take a moment to recharge. Three new parallel sessions begin on the hour.",
    nextLabel: "Parallel sessions · from 16:00",
    next: [
      ["ONLINE", "Session 4 — Computational Science of Science", "Main Lecture Theatre · until 17:15"],
      ["IN PERSON", "Session 5 — LLMs as Social Simulators and Measurement Instruments", "Butler Room · until 17:15"],
      ["IN PERSON", "Session 6 — AI and Inequality in Work and Science", "Chester Room · until 17:15"]
    ]
  },
  {
    filename: "before evening programme september 3rd.pdf",
    date: "THURSDAY · 3 SEPTEMBER 2026",
    day: "CONFERENCE DAY ONE",
    state: "SHORT PAUSE",
    title: "Evening programme up next",
    time: "Online stream resumes at 17:45 BST",
    place: "Main Lecture Theatre",
    message: "A brief pause before our evening keynotes. Please note that no refreshments are provided during this transition.",
    now: [["17:15–17:45", "Break before the evening programme", "No refreshments provided"]],
    nextLabel: "Evening programme · Main Lecture Theatre · Online",
    next: [
      ["17:45", "Who Expects Technology to Replace Human Work? Positional Dependence and Beliefs about AI in China’s Labor Market", "Xuejie Ding · joining online"],
      ["18:00", "Goodthink: The New Science of Collective Intelligence", "Damon Centola · joining online"],
      ["18:30", "Posters", "Fellows’ Garden"],
      ["19:00", "Conference dinner", "Dining Hall"]
    ]
  },
  {
    filename: "before start september 4th.pdf",
    date: "FRIDAY · 4 SEPTEMBER 2026",
    day: "CONFERENCE DAY TWO",
    state: "BEFORE WE BEGIN",
    title: "Welcome back to ICSC’26",
    time: "Online programme begins at 09:25 BST",
    place: "Main Lecture Theatre · Nuffield College",
    message: "Good morning. We hope you had a wonderful evening — day two will begin very shortly.",
    now: [["09:00–09:25", "Late registration", "Porters’ Lodge"]],
    nextLabel: "Opening programme · Main Lecture Theatre · Online",
    next: [
      ["09:25", "Welcome to day two of ICSC 2026", "Charles Rahal"],
      ["09:30", "Algorithmic Realism: Data Science Practices to Promote Social Justice", "Ben Green"],
      ["09:50", "Sequence analysis of partnership formation: A case of Japan", "Jun Kobayashi"],
      ["10:10", "A Social Experiment for Community Revitalisation", "Jar-Der Luo"]
    ]
  },
  {
    filename: "morning break september 4th.pdf",
    date: "FRIDAY · 4 SEPTEMBER 2026",
    day: "CONFERENCE DAY TWO",
    state: "MORNING BREAK",
    title: "Time for a short break",
    time: "10:30–11:00 BST",
    place: "Refreshments · Dining Hall",
    message: "Stretch, refill your cup, and say hello. We have a full programme ahead before lunch.",
    nextLabel: "Coming up next · Main Lecture Theatre · Online",
    next: [
      ["11:00", "Measuring and Utilizing Temporal Network Dissimilarity", "Xiuxiu Zhan"],
      ["11:20–12:05", "Special Session — Video Games and Education", "Chaired by Huilian Sophie Qiu"],
      ["12:05–12:35", "Online talks", "Chaired by Yuqi Liang"],
      ["12:35–13:05", "Conference awards", "ACM TSC · JSC · ICSC"]
    ]
  },
  {
    filename: "lunch september 4th.pdf",
    date: "FRIDAY · 4 SEPTEMBER 2026",
    day: "CONFERENCE DAY TWO",
    state: "LUNCH & POSTERS",
    title: "Enjoy the lunch break",
    time: "13:05–14:15 BST · online pause",
    place: "Lunch · Dining Hall  |  Posters · Fellows’ Garden",
    message: "Enjoy lunch and visit the poster displays. The online stream returns at 14:15 — slightly before the other afternoon tracks.",
    now: [
      ["13:05–14:00", "Lunch & late registration", "Dining Hall"],
      ["13:05–14:30", "Poster displays", "Fellows’ Garden"]
    ],
    nextLabel: "Afternoon parallel sessions",
    next: [
      ["14:15 · ONLINE", "Session 7 — AI Governance, Norms, and Uncertainty", "Main Lecture Theatre"],
      ["14:30 · IN PERSON", "Session 8 — Law, Platforms, and Information Governance", "Butler Room"],
      ["14:30 · IN PERSON", "Session 9 — Networks, Communities, and Collective Dynamics", "Chester Room"]
    ]
  },
  {
    filename: "afternoon break september 4th.pdf",
    date: "FRIDAY · 4 SEPTEMBER 2026",
    day: "CONFERENCE DAY TWO",
    state: "AFTERNOON BREAK",
    title: "We’ll be back at 16:00",
    time: "15:30–16:00 BST",
    place: "Refreshments · Dining Hall",
    message: "Take a moment to recharge. The final parallel sessions begin on the hour.",
    nextLabel: "Parallel sessions · 16:00–17:15",
    next: [
      ["ONLINE", "Session 10 — Digital and Computational Demography", "Main Lecture Theatre"],
      ["IN PERSON", "Session 11 — Digital Populations, Behaviour, and Social Classification", "Butler Room"],
      ["IN PERSON", "Session 12 — Frontiers of Computational Social Science", "Chester Room"]
    ],
    footnote: "Closing keynotes follow in the Main Lecture Theatre at 17:30."
  },
  {
    filename: "before closing keynotes september 4th.pdf",
    date: "FRIDAY · 4 SEPTEMBER 2026",
    day: "CONFERENCE DAY TWO",
    state: "SHORT PAUSE",
    title: "Closing keynotes up next",
    time: "17:15–17:30 BST",
    place: "Online stream resumes · Main Lecture Theatre",
    message: "One final pause before we come together for the closing keynotes and conference close.",
    promo: {
      eyebrow: "CONTINUE THE CONVERSATION",
      title: "Metrics and Models",
      copy: "More talks like these happen online every two weeks. Everyone is welcome to attend.",
      href: "https://metrics-and-models.github.io/",
      label: "metrics-and-models.github.io"
    },
    nextLabel: "Closing programme · Main Lecture Theatre · Online",
    next: [
      ["17:30", "The impact of generative AI on social media: an experimental study", "Daniel Romero"],
      ["18:00", "Interpretability or Guesswork: What Happens When We Open Up Large Language Models", "Germans Savcisens"],
      ["18:30", "Conference close", "Charles Rahal"]
    ]
  }
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const renderMiniSchedule = (items = []) =>
  items.length
    ? `<div class="now-list">${items
        .map(
          ([time, title, detail]) => `<div class="now-item">
            <span>${escapeHtml(time)}</span>
            <div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(detail)}</small></div>
          </div>`
        )
        .join("")}</div>`
    : "";

const renderNextItems = (items) => {
  const dense = items.length >= 4 || items.some(([, title]) => title.length > 92);
  return `<div class="next-list${dense ? " dense" : ""}">${items
    .map(
      ([time, title, detail]) => `<div class="next-item">
        <div class="next-time">${escapeHtml(time)}</div>
        <div class="next-copy"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span></div>
      </div>`
    )
    .join("")}</div>`;
};

const renderPromo = (promo) =>
  promo
    ? `<aside class="promo-card">
        <span>${escapeHtml(promo.eyebrow)}</span>
        <strong>${escapeHtml(promo.title)}</strong>
        <p>${escapeHtml(promo.copy)}</p>
        <a href="${escapeHtml(promo.href)}">${escapeHtml(promo.label)}</a>
      </aside>`
    : "";

const sponsorStrip = `<footer class="sponsor-strip">
  <div class="thanks">With thanks to<br><strong>our sponsors</strong></div>
  <img src="../../../images/sponsors/tup.png" alt="Tsinghua University Press">
  <img src="../../../images/sponsors/ECUST%20logo.jpg" alt="East China University of Science and Technology">
  <img class="nuffield" src="../../../images/sponsors/nuffield-college.png" alt="Nuffield College">
  <img class="leverhulme" src="../../../images/sponsors/leverhulme-centre-demographic-science.png" alt="Leverhulme Centre for Demographic Science">
  <img class="silta" src="../../../images/sponsors/Silta_Hauptlogo_V2_Farbig_RGB.png" alt="Silta">
</footer>`;

const slideMarkup = slides
  .map(
    (slide, index) => `<section class="slide" data-filename="${escapeHtml(slide.filename)}">
      <div class="warm-orb one"></div><div class="warm-orb two"></div>
      <header class="topbar">
        <div class="brand">
          <img src="../../../images/log/icsc-logo.png" alt="ICSC logo">
          <div><strong>ICSC’26 · OXFORD</strong><span>International Conference on Social Computing</span></div>
        </div>
        <div class="date-lockup"><strong>${escapeHtml(slide.date)}</strong><span>${escapeHtml(slide.day)}</span></div>
      </header>
      <main class="slide-body">
        <section class="status-panel">
          <div class="state">${escapeHtml(slide.state)}</div>
          <h1>${escapeHtml(slide.title)}</h1>
          <div class="time-line">${escapeHtml(slide.time)}</div>
          <div class="place">${escapeHtml(slide.place)}</div>
          <p>${escapeHtml(slide.message)}</p>${slide.promo ? `\n          ${renderPromo(slide.promo)}` : ""}
          ${renderMiniSchedule(slide.now)}
        </section>
        <section class="next-panel">
          <div class="next-heading"><span>UP NEXT</span><small>${escapeHtml(slide.nextLabel)}</small></div>
          ${renderNextItems(slide.next)}
          ${slide.footnote ? `<div class="footnote">${escapeHtml(slide.footnote)}</div>` : ""}
        </section>
      </main>
      ${sponsorStrip}
      <div class="slide-number">${String(index + 1).padStart(2, "0")}</div>
    </section>`
  )
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ICSC 2026 holding slides</title>
  <style>
    @page { size: 13.333333in 10in; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #fff; font-family: Arial, Helvetica, sans-serif; color: #082b4c; }
    .slide { position: relative; width: 1280px; height: 960px; overflow: hidden; background: #fff; page-break-after: always; break-after: page; padding: 38px 48px 0; }
    .slide:last-child { page-break-after: auto; break-after: auto; }
    .slide::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 8px; background: linear-gradient(90deg,#082b4c 0 58%,#e49a32 58% 75%,#d85863 75% 88%,#10a9a2 88%); }
    .warm-orb { position: absolute; border-radius: 999px; pointer-events: none; }
    .warm-orb.one { width: 330px; height: 330px; right: -180px; top: -210px; background: rgba(228,154,50,.10); }
    .warm-orb.two { width: 230px; height: 230px; left: -135px; bottom: 72px; border: 30px solid rgba(16,169,162,.055); }
    .topbar { position: relative; z-index: 1; height: 92px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border-bottom: 1px solid #dce7ef; padding-bottom: 18px; }
    .brand { min-width: 0; display: flex; align-items: center; gap: 15px; }
    .brand img { width: 52px; height: 70px; object-fit: contain; }
    .brand div { display: flex; flex-direction: column; gap: 3px; }
    .brand strong { font-size: 21px; letter-spacing: .045em; color: #082b4c; }
    .brand span { font-size: 11px; letter-spacing: .08em; color: #547188; text-transform: uppercase; }
    .date-lockup { flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .date-lockup strong { font-size: 16px; letter-spacing: .07em; }
    .date-lockup span { display: inline-flex; background: #082b4c; color: white; padding: 5px 10px; border-radius: 999px; font-size: 10px; letter-spacing: .13em; font-weight: 700; }
    .slide-body { position: relative; z-index: 1; height: 670px; display: grid; grid-template-columns: minmax(0, 39%) minmax(0, 61%); gap: 24px; padding: 30px 0 26px; }
    .status-panel { display: flex; flex-direction: column; border: 1px solid #d8e5ee; border-radius: 22px; padding: 34px 32px 28px; background: linear-gradient(145deg,#f7fbfe 0%,#fffaf4 100%); box-shadow: 0 12px 30px rgba(8,43,76,.06); }
    .state { display: inline-flex; padding: 7px 12px; border-radius: 999px; background: #fff0da; color: #995a05; font-size: 11px; font-weight: 800; letter-spacing: .14em; }
    h1 { margin: 20px 0 12px; max-width: 430px; font-size: 40px; line-height: 1.04; letter-spacing: -.03em; color: #082b4c; }
    .time-line { font-size: 23px; line-height: 1.2; font-weight: 800; color: #0b6f82; }
    .place { margin-top: 7px; font-size: 15px; font-weight: 700; color: #466477; }
    .status-panel > p { margin: 18px 0 0; font-size: 17px; line-height: 1.45; color: #38566c; }
    .promo-card { margin-top: 20px; padding: 16px 17px 17px; border-left: 4px solid #e49a32; border-radius: 0 12px 12px 0; background: #fff4e4; }
    .promo-card > span { display: block; margin-bottom: 4px; color: #995a05; font-size: 10px; font-weight: 900; letter-spacing: .13em; }
    .promo-card > strong { display: block; color: #082b4c; font-size: 20px; line-height: 1.15; }
    .promo-card > p { margin: 6px 0 9px; color: #38566c; font-size: 14px; line-height: 1.35; }
    .promo-card > a { color: #086978; font-size: 15px; line-height: 1.2; font-weight: 800; text-decoration: underline; text-underline-offset: 3px; }
    .now-list { margin-top: auto; padding-top: 24px; display: grid; gap: 10px; }
    .now-item { display: grid; grid-template-columns: 110px 1fr; gap: 11px; align-items: start; padding-top: 10px; border-top: 1px solid #d9e4e9; }
    .now-item > span { font-size: 12px; line-height: 1.25; font-weight: 800; color: #a15b09; }
    .now-item div { display: flex; flex-direction: column; gap: 2px; }
    .now-item strong { font-size: 14px; line-height: 1.25; color: #173d59; }
    .now-item small { font-size: 12px; color: #61798a; }
    .next-panel { display: flex; flex-direction: column; border: 2px solid #082b4c; border-radius: 22px; overflow: hidden; background: #fff; box-shadow: 0 12px 30px rgba(8,43,76,.07); }
    .next-heading { min-height: 84px; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 16px 24px; color: white; background: #082b4c; }
    .next-heading > span { font-size: 13px; font-weight: 900; letter-spacing: .18em; color: #f8c877; }
    .next-heading small { font-size: 16px; font-weight: 700; letter-spacing: .015em; color: #e9f2f7; }
    .next-list { flex: 1; min-height: 0; display: flex; flex-direction: column; padding: 12px 22px 8px; }
    .next-item { flex: 1; min-height: 0; display: grid; grid-template-columns: 96px 1fr; gap: 16px; align-items: center; padding: 12px 0; border-bottom: 1px solid #dbe6ed; }
    .next-item:last-child { border-bottom: 0; }
    .next-time { justify-self: start; max-width: 96px; padding: 8px 10px; border-radius: 9px; background: #eaf5f7; color: #086978; font-size: 12px; line-height: 1.15; font-weight: 900; letter-spacing: .035em; text-align: center; }
    .next-copy { display: flex; flex-direction: column; gap: 4px; }
    .next-copy strong { font-size: 19px; line-height: 1.2; color: #082b4c; }
    .next-copy span { font-size: 14px; line-height: 1.22; font-weight: 700; color: #647c8c; }
    .next-list.dense .next-item { padding: 10px 0; }
    .next-list.dense .next-copy strong { font-size: 17px; line-height: 1.18; }
    .next-list.dense .next-copy span { font-size: 13px; }
    .footnote { margin: 0 22px 16px; border-radius: 10px; padding: 10px 13px; background: #fff4e4; color: #85500b; font-size: 13px; font-weight: 700; }
    .sponsor-strip { position: relative; z-index: 1; height: 160px; display: grid; grid-template-columns: 125px 1.1fr 1.15fr .88fr 1.2fr .8fr; gap: 24px; align-items: center; border-top: 1px solid #dce7ef; }
    .sponsor-strip .thanks { padding-left: 4px; font-size: 10px; line-height: 1.25; letter-spacing: .08em; color: #748997; text-transform: uppercase; }
    .sponsor-strip .thanks strong { font-size: 12px; color: #274b63; }
    .sponsor-strip img { display: block; max-width: 100%; width: 100%; max-height: 72px; object-fit: contain; }
    .sponsor-strip img.nuffield { max-height: 80px; }
    .sponsor-strip img.leverhulme { max-height: 70px; }
    .sponsor-strip img.silta { max-height: 62px; }
    .slide-number { position: absolute; right: 18px; bottom: 12px; font-size: 8px; color: #c5d1d8; }
    @media screen { body { background: #dbe3e8; padding: 20px; } .slide { margin: 0 auto 20px; box-shadow: 0 8px 35px rgba(0,0,0,.18); } }
  </style>
</head>
<body>${slideMarkup}</body>
</html>`;

mkdirSync(outputDirectory, { recursive: true });
const htmlPath = path.join(outputDirectory, "holding-slides-source.html");
writeFileSync(htmlPath, html, "utf8");

const temporaryDirectory = mkdtempSync(path.join(tmpdir(), "icsc-holding-slides-"));
const chromeProfile = path.join(temporaryDirectory, "chrome-profile");
const combinedPdf = path.join(temporaryDirectory, "holding-slides.pdf");
const splitPattern = path.join(temporaryDirectory, "slide-%d.pdf");

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
      `--print-to-pdf=${combinedPdf}`,
      pathToFileURL(htmlPath).href
    ],
    { stdio: "inherit" }
  );

  execFileSync("/usr/bin/pdfseparate", [combinedPdf, splitPattern], { stdio: "inherit" });

  for (const [index, slide] of slides.entries()) {
    const source = path.join(temporaryDirectory, `slide-${index + 1}.pdf`);
    const destination = path.join(outputDirectory, slide.filename);
    copyFileSync(source, destination);
    console.log(`Generated ${destination}`);
  }

  const pdfInformation = execFileSync("/usr/bin/pdfinfo", [combinedPdf], { encoding: "utf8" });
  const pageCount = Number(pdfInformation.match(/^Pages:\s+(\d+)$/m)?.[1]);
  if (pageCount !== slides.length) {
    throw new Error(`Expected ${slides.length} PDF pages, but Chrome produced ${pageCount}.`);
  }

  if (!/^Page size:\s+960 x 720 pts$/m.test(pdfInformation)) {
    throw new Error("Expected 16:12 PDF pages at 960 × 720 points.");
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}

const expected = new Set(slides.map((slide) => slide.filename));
const generated = slides.filter((slide) => readFileSync(path.join(outputDirectory, slide.filename)).subarray(0, 4).toString() === "%PDF");
if (generated.length !== expected.size) {
  throw new Error(`Only ${generated.length} of ${expected.size} slide PDFs passed the PDF signature check.`);
}

console.log(`Done: ${generated.length} individual holding-slide PDFs.`);
