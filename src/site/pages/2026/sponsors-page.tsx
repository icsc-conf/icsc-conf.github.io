import React from "react";
import { SiteShell, type SitePaths } from "../../components";

export function ConferenceSponsorsPage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight">Information for Sponsors</h1>
          <p className="mt-4 max-w-3xl text-slate-700">
            Sponsorship information for ICSC 2026 will be published on this page.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
