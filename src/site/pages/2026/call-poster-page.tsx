import React from "react";
import { ConferenceAnnouncementHero, SiteShell, type SitePaths } from "../../components";
import { posterDeadlines, posterSubmissionGuidelines, researchTopics } from "../../content";

export function ConferenceCallPosterPage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <ConferenceAnnouncementHero
        badge="CALL FOR POSTERS"
        title="ICSC 2026 Poster Track"
        description="A non-archival, discussion-oriented forum for emerging results, systems, datasets, and early-stage ideas in social computing."
        primaryAction={{ href: "call.html", label: "Main CFP" }}
        secondaryAction={{ href: "index.html#programme", label: "Programmes", variant: "secondary" }}
        compact
      />

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-800 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.18em] text-amber-800">PLACEHOLDER DETAILS</p>
          <p className="mt-3 text-sm leading-relaxed">
            This poster page currently follows the ICSC 2025 structure and requirements as placeholder content for the
            2026 edition.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Poster Track Overview</h2>
          <p className="mt-4 text-slate-700">
            The ICSC 2026 poster track is non-archival and discussion-oriented. Authors may present published or
            unpublished work, including new ideas, prototypes, demos, datasets, tools, case studies, and preliminary
            empirical or theoretical results.
          </p>
          <p className="mt-4 text-slate-700">
            The track is designed to encourage scholarly exchange and feedback. Poster presentation does not constitute
            prior archival publication and does not preclude later journal or conference submissions.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Topics of Interest</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {researchTopics.map((topic) => (
              <li key={topic} className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
                {topic}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Submission Guidance</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {posterSubmissionGuidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>
                Submission email:
                <a href="mailto:icsc2026@126.com" className="ml-2 font-semibold text-sky-700 hover:text-sky-900">
                  icsc2026@126.com
                </a>
              </li>
              <li>
                Email subject:
                <code className="ml-2 rounded bg-slate-100 px-2 py-1 text-xs">
                  icsc2026poster + Author Name + Contact Information
                </code>
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Awards</h3>
            <p className="mt-4 text-slate-700">
              A Best Poster Award will be presented during ICSC 2026.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-lg font-semibold text-slate-900">Submission Timeline</h4>
              <dl className="mt-4 space-y-3 text-sm">
                {posterDeadlines.map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <dt className="text-slate-600">{item.label}</dt>
                    <dd className="font-semibold text-slate-900">{item.date}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">What to Submit</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>A poster PDF suitable for printing and on-site presentation.</li>
            <li>An extended abstract describing the contribution, motivation, and expected discussion value.</li>
            <li>Basic author and contact details for scheduling and notification.</li>
            <li>If the poster summarizes prior work, cite the original publication clearly on the poster.</li>
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}
