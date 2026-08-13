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

          <section className="mt-10 rounded-xl border border-sky-200 bg-sky-50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Arrivals</h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              The Nuffield College map identifies the Worcester Street entrance and Porter&apos;s Lodge, conference
              rooms, toilets (including accessible toilets), bicycle parking, exits and the fire assembly point. Please
              download the{" "}
              <a
                href={`${paths.assetPrefix}assets/2026/Nuffield%20Map%202026.docx`}
                download
                className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
              >
                Nuffield Map 2026 (Word document)
              </a>{" "}
              before travelling, or{" "}
              <a
                href={`${paths.assetPrefix}assets/2026/nuffield-map-2026.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
              >
                view the map as a full-size image
              </a>
              . Please also read our{" "}
              <a
                href={`${paths.assetPrefix}assets/2026/accessibility-statement.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800"
              >
                Accessibility Statement
              </a>{" "}
              before arriving.
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-sky-100 bg-white p-5">
                <h3 className="font-semibold text-slate-900">From Oxford railway station</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Exit the station and walk east along Park End Street towards the city centre. After about five
                  minutes, turn left onto Worcester Street where Park End Street meets New Road; the College&apos;s main
                  entrance and Porter&apos;s Lodge are through the large gates on your right.
                </p>
              </div>
              <div className="rounded-lg border border-sky-100 bg-white p-5">
                <h3 className="font-semibold text-slate-900">From Gloucester Green bus station</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Leave the bus station towards George Street and walk west to Worcester Street. Turn left and walk
                  south for a few minutes; the College&apos;s main entrance and Porter&apos;s Lodge are through the large gates
                  on your left.
                </p>
              </div>
            </div>

            <a
              href={`${paths.assetPrefix}assets/2026/nuffield-map-2026.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block overflow-hidden rounded-lg border border-sky-200 bg-white shadow-sm transition hover:border-sky-400"
            >
              <img
                src={`${paths.assetPrefix}assets/2026/nuffield-map-2026.png`}
                alt="Nuffield College map showing entrances, rooms, facilities and accessible toilets"
                width={1378}
                height={2067}
                className="max-h-[34rem] w-full object-contain"
              />
              <span className="block border-t border-sky-100 px-4 py-3 text-sm font-medium text-sky-700">
                Open the full-size Nuffield College map
              </span>
            </a>
          </section>

          <section className="mt-8 rounded-xl border border-indigo-200 bg-indigo-50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Information for presenters</h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Poster presenters, please ensure that you have completed the{" "}
              <a
                href="https://docs.google.com/forms/d/1uXy4yLC2Ug536z_MlYWTeXJCz2Ge20IlgCA_Eh8XMGE/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-700 underline underline-offset-4 hover:text-indigo-800"
              >
                poster form
              </a>
              . If you are giving a talk, please complete the{" "}
              <a
                href="https://docs.google.com/forms/d/1Kn7pY24nYSf6spzjKRJ00TfA6t9V2-sRjVE-XHvoxoM/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-700 underline underline-offset-4 hover:text-indigo-800"
              >
                talk form
              </a>
              .
            </p>
          </section>

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
