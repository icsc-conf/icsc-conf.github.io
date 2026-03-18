import React from "react";
import { ConferenceAnnouncementHero, SiteShell, type SitePaths } from "../components";
import { history } from "../content";

export function PastConferencesPage({ paths }: { paths: SitePaths }) {
  const archiveHistory = [...history]
    .sort((left, right) => Number(right.year) - Number(left.year))
    .map((item) => ({
      ...item,
      href: item.href.replace(/^\.\.\//, "")
    }));

  return (
    <SiteShell paths={paths}>
      <ConferenceAnnouncementHero
        badge="ICSC ARCHIVE"
        title="Past Conferences"
        description="Explore the conference archive from 2016 to 2025, including venues, dates, and historical conference pages."
        primaryAction={{ href: paths.conferenceHref, label: "ICSC 2026 Main Page" }}
        secondaryAction={{ href: paths.homeHref, label: "Home", variant: "secondary" }}
      />

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Conference Timeline</h2>
          <p className="mt-4 max-w-4xl text-slate-700">
            The ICSC series has evolved from its early editions as the Conference on Online Social Behaviour into an
            international social computing venue. Use the archive cards below to access each year&apos;s legacy site.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {archiveHistory.map((item) => (
              <article key={item.year} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold tracking-wide text-sky-700">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.date}</p>
                <p className="mt-1 text-sm text-slate-700">{item.venue}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-900"
                >
                  Open Archive Page -&gt;
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
