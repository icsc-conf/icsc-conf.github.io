import React from "react";
import { ConferenceAnnouncementHero, SiteShell, type SitePaths } from "../../components";
import { organizingCommittee } from "../../content";

export function ConferenceCommitteePage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <ConferenceAnnouncementHero
        badge="ORGANIZING COMMITTEE"
        title="ICSC 2026 Committee"
        description="Leadership and committee roles for the International Conference on Social Computing 2026."
        primaryAction={{ href: "call.html", label: "Call For Papers" }}
        secondaryAction={{ href: "poster.html", label: "Call For Posters", variant: "secondary" }}
        compact
      />

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Organizing Committee</h2>
          <p className="mt-4 text-slate-600">
            Committee roles are being finalized. This page will be updated continuously as confirmations are completed.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {organizingCommittee.map((group) => (
              <article key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {group.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
