import React from "react";
import { ConferenceAnnouncementHero, SiteShell, type SitePaths } from "../components";
import { focusAreas, researchTopics, snapshotItems } from "../content";

export function RootLandingPage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <ConferenceAnnouncementHero
        badge="Upcoming Conference"
        title="International Conference on Social Computing 2026"
        description="A global venue for researchers and practitioners advancing theory, systems, and real-world impact in social computing."
        primaryAction={{ href: paths.conferenceHref, label: "Conference Page" }}
        secondaryAction={{ href: `${paths.conferenceHref}#dates`, label: "View Deadlines", variant: "secondary" }}
        snapshotItems={snapshotItems}
      />

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section
          id="about"
          className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-sky-700">ABOUT ICSC</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">The conference</h2>
              <p className="mt-5 max-w-4xl text-slate-700">
                ICSC is a long-running research conference focused on connecting computational methods and social
                science insight to better understand human behavior, social networks, and societal change.
              </p>
              <p className="mt-4 max-w-4xl text-slate-700">
                ICSC consistently positions itself as a venue for collaborative
                research at the intersection of big data analytics and social science mechanisms. The conference
                evolved from early editions focused on online social behaviour into a broader international social
                computing forum.
              </p>
              <p className="mt-4 max-w-4xl text-slate-700">
                Recent editions emphasize global collaboration, interdisciplinary dialogue, and the combination of
                computational evidence with social theory to explain interaction patterns, collective behavior, and
                emerging societal trends.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-2xl font-semibold tracking-tight">Core Focus</h3>
              <ul className="mt-5 grid gap-4">
                {focusAreas.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[minmax(280px,340px)_1fr]">
            <aside className="relative aspect-square overflow-hidden rounded-2xl border border-sky-300/30 bg-linear-to-br from-slate-950 via-blue-900 to-cyan-700 p-7 shadow-lg">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(125,211,252,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.22) 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />
              <p className="relative text-2xl leading-snug font-semibold tracking-tight text-white md:text-3xl">
                We invite original, unpublished research on all aspects of social computing.
              </p>
            </aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <ul className="grid gap-3 md:gap-4">
                {researchTopics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-600" />
                    <span className="text-base leading-relaxed font-medium text-slate-800 md:text-lg">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
