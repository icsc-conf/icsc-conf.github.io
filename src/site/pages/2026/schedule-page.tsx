import { SiteShell, type SitePaths } from "../../components";
import { preConferenceWorkshopSchedule } from "../../content";

export function ConferenceSchedulePage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths}>
      <main className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold tracking-[0.18em] text-sky-700">ICSC 2026</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Pre-conference Workshop Schedule</h1>
          <p className="mt-4 text-lg text-slate-600">
            Wednesday, 2nd September 2026 · Nuffield College, University of Oxford
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            {preConferenceWorkshopSchedule.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className={`grid gap-3 border-b border-slate-200 px-5 py-5 last:border-b-0 sm:grid-cols-[9rem_1fr] ${
                  item.type === "break" ? "bg-slate-50" : "bg-white"
                }`}
              >
                <p className="font-semibold text-sky-800">{item.time}</p>
                {item.type === "break" ? (
                  <p className="font-medium text-slate-600">{item.title}</p>
                ) : (
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-1 text-slate-600">
                      {item.duration}, led by{" "}
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
                      >
                        {item.leader}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600">
            The pre-conference taught workshop costs £100. All available bursaries have now been allocated.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-amber-800">3RD–4TH SEPTEMBER 2026</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-amber-950">Research Talks</h2>
          <p className="mt-4 text-lg leading-relaxed text-amber-950">
            The scheduling of the research talks on 3rd and 4th September is still to be determined.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
