import { ConferenceAnnouncementHero, SiteShell, type SitePaths } from "../../components";
import {
  deadlines,
  paperSubmissionGuidelines,
  programCommittee
} from "../../content";

export function ConferenceCallPaperPage({ paths }: { paths: SitePaths }) {
  const callTopics = [
    "Digital and Computational Demography",
    "Social applications of Large Language Models.",
    "Large-scale social media analytics and intelligence",
    "Digital inclusion in the Global South",
    "The Science of (Open) Science",
    "Applied social computing applications in diverse areas such as health and finance"
  ];

  return (
    <SiteShell
      paths={paths}
      footerLinks={[
        { href: "index.html#registration", label: "Registration" },
        { href: "index.html#programme", label: "Programme" },
        { href: "index.html#venue", label: "Venue" },
        { href: "index.html#venue", label: "Travel" }
      ]}
    >
      <ConferenceAnnouncementHero
        badge="CALL FOR PAPERS"
        title="ICSC 2026 Call For Papers"
        description="We invite submissions for the in-person conference at Nuffield College, Oxford on September 2nd-4th, 2026. Participation in conference proceedings is optional."
        primaryAction={{ href: "index.html#dates", label: "Important Dates" }}
        compact
      />

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Scope and Publication</h2>
          <p className="mt-4 text-slate-700">
            The 6th International Conference on Social Computing (ICSC 2026) convenes researchers, practitioners, and
            policymakers to advance and critically assess the theory, systems engineering, and societal consequences of
            social computing. Importantly, it has an optional conference proceedings which will be published by Springer
            Nature (in the Communications in Computer and Information Science series).
          </p>
          <p className="mt-4 text-slate-700">
            A selection of outstanding papers will be fast-tracked to ACM Transactions on Social Computing or the
            Journal of Social Computing. Papers will be invited as either:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>An invited keynote talk</li>
            <li>A parallel track session</li>
            <li>A poster</li>
          </ul>
          <p className="mt-4 text-slate-700">
            If authors have a strong preference for either of these tracks, please feel free to indicate this on your
            title page. The conference proceedings and the above journals are all indexed by all major scholarly
            services. Best Paper and Best Student Paper awards will be presented at the conference dinner.
          </p>
          <p className="mt-4 text-slate-700">
            A media pack announcing the call for papers can{" "}
            <a
              href="../assets/2026/ICSC_flyers.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 transition hover:text-sky-900"
            >
              be found here.
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="https://link.springer.com/book/9789819598762"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800 hover:border-sky-700 hover:text-sky-700"
            >
              Springer Nature
            </a>
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
            {callTopics.map((topic) => (
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
              Submission and review are managed via{" "}
              <a
                href="https://openreview.net/group?id=icsc-conf.github.io/ICSC/2026"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-700 transition hover:text-sky-900"
              >
                OpenReview
              </a>
              .
            </p>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>{paperSubmissionGuidelines.join(" ")}</p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Submissions for consideration in the conference proceedings must be 12–15 pages, including
                  references, in Springer CCIS format.
                </li>
                <li>
                  For authors who are not interested in being considered for the conference proceedings, submissions
                  can come in two formats:
                  <ol className="mt-2 space-y-2 pl-6">
                    <li>2.a Extended abstracts of two pages for preliminary work in progress</li>
                    <li>2.b Full, open access version of previously published work.</li>
                  </ol>
                </li>
              </ol>
              <p>
                Each submission will receive at least three independent blind peer reviews (single or double, at the
                author's preference), with reviewers chosen by the program committee.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19238648/data/v8"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800 hover:border-sky-700 hover:text-sky-700"
              >
                Springer LaTeX Template
              </a>
              <a
                href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/7117506/data/v1"
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
            </dl>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">Program Committee</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {programCommittee.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">Review and Presentation Policy</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>All submissions should present original work and must not be under review elsewhere.</li>
              <li>
                Reviews will be blind (single or double, at the author's preference), and papers will be evaluated
                based on their novelty, technical quality, clarity, and relevance.
              </li>
              <li>Accepted papers must be presented in person at ICSC 2026 unless an exception is approved by chairs.</li>
              <li>Final publication instructions will be released with the camera-ready package.</li>
            </ul>
          </article>
        </section>
      </main>
    </SiteShell>
  );
}
