import React from "react";
import { SiteShell, type SitePaths } from "../../components";

export function ConferenceSponsorsPage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight">Information for Sponsors</h1>
          <p className="mt-4 max-w-3xl text-slate-700">
            ICSC 2026 gratefully acknowledges the organisations currently supporting the conference.
          </p>
          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-xl font-semibold tracking-tight">Current Sponsors</h2>
            <ul className="mt-6 space-y-4">
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-5">
                <img
                  src="../images/sponsors/tup.png"
                  alt="Tsinghua University Press logo"
                  className="max-h-16 w-auto"
                />
                <div className="mt-4 text-lg font-semibold text-slate-900">Tsinghua University Press</div>
              </li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-5">
                <img
                  src="../images/sponsors/ECUST%20logo.jpg"
                  alt="East China University of Science and Technology logo"
                  className="max-h-16 w-auto"
                />
                <div className="mt-4 text-lg font-semibold text-slate-900">East China University of Science and Technology</div>
              </li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-5">
                <img
                  src="../images/sponsors/nuffield-college.png"
                  alt="Nuffield College logo"
                  className="max-h-16 w-auto"
                />
                <div className="mt-4 text-lg font-semibold text-slate-900">Nuffield College</div>
              </li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-5">
                <img
                  src="../images/sponsors/leverhulme-centre-demographic-science.png"
                  alt="Leverhulme Centre for Demographic Science logo"
                  className="max-h-16 w-auto"
                />
                <div className="mt-4 text-lg font-semibold text-slate-900">
                  Leverhulme Centre for Demographic Science
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-xl font-semibold tracking-tight">Sponsorship Enquiries</h2>
            <p className="mt-3 text-slate-700">
              Organisations interested in sponsoring ICSC 2026 are warmly invited to contact the organising committee
              at{" "}
              <a
                href="mailto:icsc26@demography.ox.ac.uk"
                className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
              >
                icsc26@demography.ox.ac.uk
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
