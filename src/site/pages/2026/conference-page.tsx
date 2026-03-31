import React from "react";
import { SiteShell, type SitePaths } from "../../components";
import { deadlines, quickActions, tracks } from "../../content";

export function Conference2026Page({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <section className="relative w-full overflow-hidden border-b border-slate-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${paths.assetPrefix}images/icsc2026/nuffield-1.jpg')` }}
        />
        <div className="absolute inset-0 bg-slate-950/58" />
        <div className="scientific-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.3em] text-cyan-200">ICSC 2026 MAIN CONFERENCE</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            International Conference on Social Computing 2026
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-100">
            ICSC 2026 is at Nuffield College, University of Oxford on September 2nd-4th, 2026. The conference
            will be held in-person.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {quickActions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                className="rounded-xl border border-slate-300/35 bg-slate-900/45 p-5 backdrop-blur transition hover:border-cyan-200/75 hover:bg-slate-900/65"
              >
                <p className="text-xl font-semibold text-white">{action.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{action.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.18em] text-sky-700">ICSC 2026 INTRODUCTION</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Advancing Social Computing Through Data and Theory</h2>
          <p className="mt-5 max-w-5xl text-slate-700">
            The International Conference on Social Computing (ICSC 2026) seeks to accelerate collaborative research at
            the intersection of big data analytics and social science theory. Hosted at Nuffield College, University of
            Oxford, on September 2nd-4th, 2026, the conference brings together leading scholars and experts from
            around the world to foster cross-cultural exchange and interdisciplinary collaboration.
          </p>
          <p className="mt-4 max-w-5xl text-slate-700">
            Building on Oxford&apos;s strengths in sociology and demographic data science, ICSC 2026 supports research that
            links data-driven methods with deeper social mechanisms shaping human behavior. By examining social
            networks across online and offline contexts, the conference highlights how computational evidence and
            social theory can jointly explain interaction patterns, collective dynamics, and societal change.
          </p>
          <div className="mt-6">
            <a
              href="oc.html"
              className="inline-flex rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-700 hover:text-sky-700"
            >
              View Committee
            </a>
          </div>
        </section>

        <section id="registration" className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Registration</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Registration opens soon. This page will publish fee categories, deadlines, and attendance guidance for the
            in-person conference.
          </p>
          <a
            href="call.html"
            className="mt-6 inline-flex rounded-md bg-sky-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-900"
          >
            Registration Details (Coming Soon)
          </a>
        </section>

        <section id="about" className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">01</p>
            <h2 className="mt-2 text-xl font-semibold">Conference Scope</h2>
            <p className="mt-3 text-slate-600">
              Core research and systems across social computing, online communities, and socio-technical intelligence.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">02</p>
            <h2 id="programme" className="mt-2 text-xl font-semibold">In-Person Programmes</h2>
            <p className="mt-3 text-slate-600">
              Two full days of keynotes, paper sessions, posters, and networking at Nuffield College.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">03</p>
            <h2 className="mt-2 text-xl font-semibold">Publication Pathways</h2>
            <p className="mt-3 text-slate-600">
              Selected contributions are eligible for journal fast-track opportunities in leading social computing venues.
            </p>
          </article>
        </section>

        <section id="tracks" className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Main Conference Tracks</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              The 2026 program centers on interdisciplinary advances in models, methods, platforms, and responsible
              deployment.
            </p>
            <ul className="mt-8 grid gap-4">
              {tracks.map((track) => (
                <li
                  key={track}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-sm"
                >
                  {track}
                </li>
              ))}
            </ul>
          </div>
          <div id="dates" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Important Dates</h3>
            <dl className="mt-6 space-y-4">
              {deadlines.map((deadline) => (
                <div
                  key={deadline.label}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm"
                >
                  <dt className="text-slate-600">{deadline.label}</dt>
                  <dd className="font-semibold text-slate-900">{deadline.date}</dd>
                </div>
              ))}
            </dl>
            <a
              href="call.html"
              className="mt-6 inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-700 hover:text-sky-700"
            >
              Download CFP (Template)
            </a>
          </div>
        </section>

        <section id="venue" className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Venue and Proceedings</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Nuffield College, University of Oxford, hosts ICSC 2026 on September 2nd-4th, 2026.
          </p>
          <p className="mt-4 max-w-3xl text-slate-700">
            A selection of outstanding papers will be fast-tracked to the ACM Transactions on Social Computing or the
            Journal of Social Computing.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
