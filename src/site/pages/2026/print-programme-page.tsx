import React from "react";
import { preConferenceWorkshopSchedule } from "../../content";
import { conferenceProgramme, type ProgrammeEntry, type ProgrammeSession } from "../../schedule-content";

const sponsors = [
  { src: "../images/sponsors/tup.png", alt: "Tsinghua University Press" },
  { src: "../images/sponsors/ECUST%20logo.jpg", alt: "East China University of Science and Technology" },
  { src: "../images/sponsors/nuffield-college.png", alt: "Nuffield College" },
  { src: "../images/sponsors/leverhulme-centre-demographic-science.png", alt: "Leverhulme Centre for Demographic Science" },
  { src: "../images/sponsors/Silta_Hauptlogo_V2_Farbig_RGB.png", alt: "Silta" }
];

function Entry({ entry }: { entry: ProgrammeEntry }) {
  return <li className={entry.kind === "break" ? "agenda-entry agenda-band" : "agenda-entry"}>
    <time>{entry.time}</time><p><strong>{entry.title}</strong>{entry.presenters ? <><span className="dash"> — </span><span className="presenter">{entry.presenters}</span></> : null}{entry.room ? <span className="meta"> · {entry.room}</span> : null}{entry.speakerOnline ? <span className="online"> · remote speaker</span> : null}{entry.note ? <small>{entry.note}</small> : null}</p>
  </li>;
}

function Session({ session, entries = session.entries, tone = "blue", title }: { session: ProgrammeSession; entries?: ProgrammeEntry[]; tone?: "blue" | "teal" | "gold"; title?: string }) {
  return <section className={`agenda-section tone-${tone}`}><header><h3>{title ?? session.title}</h3><p>{[session.room, session.chair ? `Chair · ${session.chair}` : null, session.onlineAudience ? "Online audience" : null].filter(Boolean).join(" · ")}</p></header>{session.notice ? <p className="notice">{session.notice}</p> : null}<ol>{entries.map((entry) => <Entry key={`${entry.time}-${entry.title}`} entry={entry} />)}</ol></section>;
}

function PageHeader({ days }: { days: string }) {
  return <header className="masthead"><div className="brand"><img src="../images/log/icsc-logo-header.svg" alt="International Conference on Social Computing" /><div><h1>ICSC 2026</h1><p>International Conference on Social Computing</p><span>Nuffield College · University of Oxford · 2–4 September 2026</span></div></div><div className="programme-title"><strong>Attendee programme</strong><span>{days}</span><small>Times BST (UTC+1) · final programme</small></div><div className="live"><strong>Live programme</strong><span>icsc-conf.github.io/2026/schedule.html</span><small>updates · posters · online access</small></div></header>;
}

function SponsorFooter({ side }: { side: string }) {
  return <footer className="sponsor-lockup"><span>With thanks to</span>{sponsors.map((sponsor) => <img key={sponsor.src} src={sponsor.src} alt={`${sponsor.alt} logo`} />)}<small>{side}</small></footer>;
}

function DayLabel({ day, date, subtitle }: { day: string; date: string; subtitle: string }) {
  return <header className="day-label"><div><h2>{day}</h2><span>{date}</span></div><p>{subtitle}</p></header>;
}

export function ConferencePrintProgrammePage() {
  const [thursday, friday] = conferenceProgramme;
  const thu = new Map(thursday.periods.flatMap((p) => p.sessions).map((s) => [s.id, s]));
  const fri = new Map(friday.periods.flatMap((p) => p.sessions).map((s) => [s.id, s]));
  const get = (map: Map<string, ProgrammeSession>, id: string) => map.get(id)!;
  const thuKeynotes = get(thu, "thursday-keynotes");

  return <><style>{`
    *{box-sizing:border-box}html,body{margin:0;background:#fff;color:#102a43;font-family:Arial,Helvetica,sans-serif}@page{size:A4 landscape;margin:0}
    .sheet{position:relative;width:297mm;height:208mm;padding:6mm 6mm 15mm;overflow:hidden;page-break-after:always;background:#fff}.sheet:last-child{page-break-after:auto}
    .masthead{position:relative;height:22mm;display:grid;grid-template-columns:1.35fr .9fr .7fr;gap:7mm;align-items:center;border-bottom:1.3pt solid #0f766e;padding-bottom:3mm}.masthead:after{content:"";position:absolute;left:0;right:0;bottom:-1.6mm;border-bottom:.7pt solid #0b3b67}.brand{display:flex;align-items:center;gap:4mm}.brand img{width:18mm;height:17mm;object-fit:contain}.brand h1{margin:0;color:#102a43;font-size:19pt;line-height:.95}.brand p{margin:1.1mm 0 .8mm;color:#0b3b67;font-size:6.2pt;font-weight:700;text-transform:uppercase}.brand span,.programme-title small,.live small{display:block;color:#64748b;font-size:5pt}.programme-title strong{display:block;font-size:8.5pt;text-transform:uppercase}.programme-title span{display:block;margin:1.3mm 0;font-size:6.2pt;font-weight:700;text-transform:uppercase}.live{text-align:right;border-right:1.3pt solid #0f766e;padding-right:3mm}.live strong{display:block;font-size:6pt;text-transform:uppercase}.live span{display:block;margin:1.2mm 0;color:#075985;font-size:5.2pt;font-weight:700}
    .page-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:3mm;height:164mm;margin-top:3mm}.column{min-width:0;border-left:.45pt solid #d6e1ea;padding-left:2.7mm}.column:first-child{border-left:0;padding-left:0}.day-label{margin:0 0 2.2mm}.day-label>div{display:flex;align-items:baseline;justify-content:space-between;border-bottom:.65pt solid #cbd5e1;padding-bottom:1mm}.day-label h2{margin:0;font-size:12pt;line-height:1}.day-label span{color:#0f766e;font-size:6pt;font-weight:700;text-transform:uppercase}.day-label p{margin:1mm 0 0;color:#64748b;font-size:5pt}
    .agenda-section{margin:0 0 2.2mm;padding-left:2.2mm;border-left:1.8pt solid #0369a1;break-inside:avoid}.tone-teal{border-color:#0f766e}.tone-gold{border-color:#a16207}.agenda-section header{margin-bottom:1mm}.agenda-section h3{margin:0;color:#123f64;font-size:7.1pt;line-height:1.08;text-transform:uppercase}.agenda-section header p{margin:.6mm 0 0;color:#64748b;font-size:4.55pt;text-transform:uppercase}.agenda-section ol{margin:0;padding:0;list-style:none}.agenda-entry{display:grid;grid-template-columns:14.5mm 1fr;gap:1.2mm;padding:.47mm 1mm;font-size:4.7pt;line-height:1.15}.agenda-entry time{color:#075985;font-weight:700;white-space:normal;line-height:1.1}.agenda-entry p{margin:0}.agenda-entry strong{font-weight:600}.presenter{color:#536779}.meta{color:#64748b}.online{color:#0f766e;font-weight:800;text-transform:uppercase}.agenda-entry small{display:block;margin-top:.3mm;color:#7c8794;font-size:4.1pt;font-style:italic}.agenda-band{margin:.65mm 0;border-radius:1mm;background:#f1f5f9;padding-top:1mm;padding-bottom:1mm}.tone-teal .agenda-band{background:#ecfdf5}.tone-gold .agenda-band{background:#fffbeb}.notice{margin:0 0 1mm;padding:1mm;background:#fffbeb;font-size:4.5pt}
    .workshop-list{margin:0;padding:0;list-style:none}.workshop-list li{display:grid;grid-template-columns:15mm 1fr;gap:1.2mm;padding:.42mm 1mm;font-size:4.65pt;line-height:1.15}.workshop-list time{color:#075985;font-weight:700}.workshop-list strong{font-weight:600}.workshop-list span{color:#64748b}.editorial{margin-top:3mm}.editorial .agenda-entry{padding-top:.9mm;padding-bottom:.9mm}
    .sponsor-lockup{position:absolute;z-index:2;left:6mm;right:6mm;bottom:7mm;height:10mm;display:grid;grid-template-columns:29mm repeat(5,1fr) 23mm;align-items:center;gap:4mm;border-top:.6pt solid #d6e1ea;background:#fff;padding-top:1.5mm}.sponsor-lockup>span{font-size:4.5pt;font-weight:700;text-transform:uppercase;color:#52677b;white-space:nowrap}.sponsor-lockup img{display:block;justify-self:center;max-width:39mm;max-height:8.3mm;object-fit:contain}.sponsor-lockup small{text-align:right;color:#52677b;font-size:4.2pt;font-weight:700;text-transform:uppercase}
    .reverse .agenda-section{margin-bottom:2mm}.reverse .agenda-entry{font-size:4.6pt;padding-top:.43mm;padding-bottom:.43mm}@media screen{body{background:#cbd5e1}.sheet{margin:8mm auto;box-shadow:0 2mm 8mm #33415555}}@media print{.sheet{margin:0;box-shadow:none}}
  `}</style><main>
    <section className="sheet" aria-label="Programme side one"><PageHeader days="Wednesday 2 + Thursday 3 September" /><div className="page-grid">
      <div className="column"><DayLabel day="Wednesday" date="2 September" subtitle="Pre-conference workshop" /><section className="agenda-section tone-teal"><header><h3>Pre-conference workshop · in-person only</h3><p>Nuffield College</p></header><ol className="workshop-list">{preConferenceWorkshopSchedule.map((item)=><li key={`${item.time}-${item.title}`}><time>{item.time}</time><p><strong>{item.title}</strong><span> — {item.type === "session" ? `${item.leader} · ` : ""}{item.room}</span></p></li>)}</ol></section><section className="agenda-section tone-gold editorial"><header><h3>Parallel editorial board meeting</h3><p>Chester Room · Invitation only · Online option available</p></header><ol><Entry entry={{time:"14:00–16:00",title:"Joint Journal of Social Computing and ACM Transactions on Social Computing Editorial Board Meeting"}} /></ol></section><DayLabel day="Thursday" date="3 September" subtitle="Conference day one" /><Session session={get(thu,"thursday-arrivals")} tone="teal" /><Session session={thuKeynotes} entries={thuKeynotes.entries.slice(0,4)} title="Welcome + opening keynotes" /><Session session={get(thu,"thursday-morning-break")} tone="teal" /><Session session={thuKeynotes} entries={thuKeynotes.entries.slice(4)} title="Opening keynotes · continued" /></div>
      <div className="column"><Session session={get(thu,"digital-demography-special-session")} tone="teal" /><Session session={get(thu,"thursday-lunch")} tone="teal" /><Session session={get(thu,"session-1")} /><Session session={get(thu,"session-2")} /><Session session={get(thu,"thursday-afternoon-break")} tone="teal" /><Session session={get(thu,"session-3")} /></div>
      <div className="column"><Session session={get(thu,"session-4")} /><Session session={get(thu,"session-5")} /><Session session={get(thu,"session-6")} /><Session session={get(thu,"thursday-transition-break")} tone="gold" /><Session session={get(thu,"thursday-evening-keynotes")} tone="gold" /><Session session={get(thu,"thursday-posters-dinner")} tone="teal" /></div>
    </div><SponsorFooter side="Side 1 / 2" /></section>
    <section className="sheet reverse" aria-label="Programme side two"><PageHeader days="Friday 4 September" /><DayLabel day="Friday" date="4 September" subtitle="Conference day two" /><div className="page-grid" style={{height:"155mm",marginTop:0}}>
      <div className="column"><Session session={get(fri,"friday-arrivals")} tone="teal" /><Session session={get(fri,"friday-keynotes")} /><Session session={get(fri,"friday-morning-break")} tone="teal" /><Session session={get(fri,"friday-post-break-keynote")} /><Session session={get(fri,"video-games-education")} tone="teal" /><Session session={get(fri,"friday-online-talks")} /><Session session={get(fri,"friday-awards")} tone="gold" /><Session session={get(fri,"friday-lunch")} tone="teal" /></div>
      <div className="column"><Session session={get(fri,"session-7")} /><Session session={get(fri,"session-8")} /><Session session={get(fri,"session-9")} /><Session session={get(fri,"friday-afternoon-break")} tone="teal" /></div>
      <div className="column"><Session session={get(fri,"session-10")} /><Session session={get(fri,"session-11")} /><Session session={get(fri,"session-12")} /><Session session={get(fri,"friday-closing-keynotes")} tone="gold" /></div>
    </div><SponsorFooter side="Side 2 / 2" /></section>
  </main></>;
}
