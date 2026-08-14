import React from "react";
import { SiteShell, type SitePaths } from "../../components";
import { deadlines, latestNews, preConferenceWorkshopSchedule, quickActions, tracks } from "../../content";

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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
        <section id="announcements" className="scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.18em] text-sky-700">LATEST NEWS</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Announcements</h2>
          <div className="mt-6 divide-y divide-slate-200">
            {latestNews.map((item) => (
              <article key={item.title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">
                  {item.bodyBefore}
                  {item.link ? (
                    <a
                      href={item.link.href}
                      target={item.link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
                    >
                      {item.link.label}
                    </a>
                  ) : null}
                  {item.bodyAfter}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
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
            social theory can jointly explain interaction patterns, collective dynamics, and societal change. If you
            have any questions about the conference, please don&apos;t hesitate to get in contact via{" "}
            <a href="mailto:icsc26@demography.ox.ac.uk">icsc26@demography.ox.ac.uk</a>.
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
          <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <p>
              <strong>In-person registration closed on 7th August 2026.</strong>
            </p>
            <p className="mt-1 text-sm leading-relaxed">
              Online registration remains open until 1st September 2026.
            </p>
          </div>
          <p className="mt-4 max-w-5xl text-slate-600">
            Online registration is open now. The conference registration fees will be £150 for students, and £200 for
            all other registrants. Pre-conference workshop registration costs £100. A conference dinner
            (3rd September, 2026) has been confirmed with Nuffield College, and is entirely optional. This dinner rate
            is heavily subsidized, thanks to sponsors at the College, and will cost £30.
          </p>
          <p className="mt-4 max-w-5xl text-slate-600">
            All ICSC 2026 bursaries have now been allocated. We are no longer accepting bursary applications.
          </p>
          <a
            href="https://www.oxforduniversitystores.co.uk/conferences-and-events/nuffield-department-of-population-health/events/international-conference-on-social-computing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-sky-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-900"
          >
            Register Here!
          </a>
        </section>

        <section id="workshops" className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Pre-conference Workshops</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            The pre-conference taught workshop will take place on 2nd September 2026. The confirmed schedule is:
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            {preConferenceWorkshopSchedule.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className={`grid gap-2 border-b border-slate-200 px-5 py-4 last:border-b-0 sm:grid-cols-[8rem_1fr] ${
                  item.type === "break" ? "bg-slate-50" : "bg-white"
                }`}
              >
                <p className="font-semibold text-sky-800">{item.time}</p>
                {item.type === "break" ? (
                  <p className="font-medium text-slate-600">{item.title}</p>
                ) : (
                  <p className="text-slate-700">
                    <span className="font-medium text-slate-900">{item.title}</span> ({item.duration}, led by{" "}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
                    >
                      {item.leader}
                    </a>
                    )
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-slate-600">
            The workshop programme is aimed at early career researchers and costs £100. All available
            bursaries have now been allocated.
          </p>
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
              Selected contributions are eligible for journal fast-track opportunities in leading social computing
              venues, in addition to the conference proceedings.
            </p>
          </article>
        </section>

        <section id="tracks" className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Main Conference Tracks</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              The 2026 program centers on interdisciplinary advances in models, methods, platforms, and responsible
              deployment. We are especially in submissions related to the following subject areas, but are in no way
              limited to these:
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
              href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19238648/data/v8"
              className="mt-6 inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-700 hover:text-sky-700"
            >
              Download CFP (Template)
            </a>
          </div>
        </section>

        <section id="venue" className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Venue and Proceedings</h2>
          <p className="mt-4 text-slate-600">
            Nuffield College, University of Oxford, hosts ICSC 2026 on September 2nd-4th, 2026.
          </p>
          <p className="mt-4 text-slate-700">
            The conference publishes conference proceedings, which authors can optionally choose to publish their
            papers in. A selection of outstanding papers will be fast-tracked to the ACM Transactions on Social
            Computing or the Journal of Social Computing.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
