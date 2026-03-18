import React from "react";
import { ConferenceAnnouncementHero, SiteShell, type SitePaths } from "../../components";
import {
  deadlines,
  paperSubmissionGuidelines,
  placeholderTpcCoChairs,
  researchTopics
} from "../../content";

export function ConferenceCallPaperPage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <ConferenceAnnouncementHero
        badge="CALL FOR PAPERS"
        title="ICSC 2026 Call For Papers"
        description="We invite original, unpublished submissions for the in-person conference at Nuffield College, Oxford on September 4-5, 2026."
        primaryAction={{ href: "poster.html", label: "Call For Posters" }}
        secondaryAction={{ href: "index.html#dates", label: "Important Dates", variant: "secondary" }}
        compact
      />

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-800 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.18em] text-amber-800">PLACEHOLDER DETAILS</p>
          <p className="mt-3 text-sm leading-relaxed">
            The structure and submission guidance below are adapted from ICSC 2025 and are being used as placeholder
            content until the final ICSC 2026 CFP is released.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Scope and Publication</h2>
          <p className="mt-4 text-slate-700">
            The 6th International Conference on Social Computing (ICSC 2026) convenes researchers, practitioners, and
            policymakers to advance and critically assess the theory, systems engineering, and societal consequences of
            social computing.
          </p>
          <p className="mt-4 text-slate-700">
            A selection of outstanding papers will be fast-tracked to ACM Transactions on Social Computing or the
            Journal of Social Computing. The conference proceedings and the above journals are all indexed by Ei
            Compendex. Best Paper and Best Student Paper awards will be presented at the conference banquet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="https://dl.acm.org/journal/tsc"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800 hover:border-sky-700 hover:text-sky-700"
            >
              ACM Transactions on Social Computing
            </a>
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8964404"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800 hover:border-sky-700 hover:text-sky-700"
            >
              Journal of Social Computing
            </a>
          </div>
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

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">Submission Guidelines</h2>
            <p className="mt-4 text-slate-700">
              Placeholder submission portal:
              <a
                href="https://openreview.net/group?id=icsc-conf.github.io/ICSC/2025/Conference"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-semibold text-sky-700 transition hover:text-sky-900"
              >
                OpenReview (2025 placeholder)
              </a>
            </p>
            <ul className="mt-6 space-y-4 text-slate-700">
              {paperSubmissionGuidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Each submission will receive at least three independent blind peer reviews from the program committee.</li>
              <li>At least one author of each accepted paper must register and present at the conference.</li>
              <li>Accepted papers are expected to appear in the conference proceedings published by Springer CCIS.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800 hover:border-sky-700 hover:text-sky-700"
              >
                Springer LaTeX Template
              </a>
              <a
                href="https://www.springer.com/gp/authors-editors/conference-proceedings/editors/word-template/19338734"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800 hover:border-sky-700 hover:text-sky-700"
              >
                Springer Word Template
              </a>
            </div>
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
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm">
                <dt className="text-slate-600">Conference</dt>
                <dd className="font-semibold text-slate-900">September 4-5, 2026</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm text-slate-500">These dates are placeholders pending the formal CFP release.</p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">TPC Co-Chairs</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {placeholderTpcCoChairs.map((chair) => (
                <li key={chair}>{chair}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">Review and Presentation Policy</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>All submissions should present original work and must not be under review elsewhere.</li>
              <li>Reviews will be blind and based on novelty, technical quality, clarity, and relevance.</li>
              <li>Accepted papers must be presented in person at ICSC 2026 unless an exception is approved by chairs.</li>
              <li>Final publication instructions will be released with the camera-ready package.</li>
            </ul>
          </article>
        </section>
      </main>
    </SiteShell>
  );
}
