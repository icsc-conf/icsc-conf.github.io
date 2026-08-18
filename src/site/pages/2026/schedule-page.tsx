import { SiteShell, type SitePaths } from "../../components";
import { posterPresentations, preConferenceWorkshopSchedule } from "../../content";
import {
  conferenceProgramme,
  type ProgrammeDay,
  type ProgrammeEntry,
  type ProgrammeSession
} from "../../schedule-content";

const linkClasses =
  "font-semibold text-sky-800 underline decoration-2 underline-offset-4 hover:text-sky-950";

function getDateTime(date: string, displayedTime: string) {
  return /^\d{2}:\d{2}$/.test(displayedTime) ? `${date}T${displayedTime}:00+01:00` : undefined;
}

function TimeRange({ date, value, className }: { date: string; value: string; className: string }) {
  const [start, end] = value.split("–");

  return (
    <span className={className}>
      <time dateTime={getDateTime(date, start)}>{start}</time>
      {end ? (
        <>
          <span aria-hidden="true">–</span>
          <span className="sr-only"> to </span>
          <time dateTime={getDateTime(date, end)}>{end}</time>
        </>
      ) : null}
    </span>
  );
}

function AttendanceBadge({ online }: { online: boolean }) {
  return online ? (
    <span className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-900">
      Online attendance available
    </span>
  ) : (
    <span className="inline-flex rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800">
      In-person attendance only
    </span>
  );
}

function ProgrammeEntryRow({ entry, date }: { entry: ProgrammeEntry; date: string }) {
  const isBreak = entry.kind === "break";

  return (
    <li
      className={`grid min-w-0 gap-3 border-t px-4 py-4 first:border-t-0 sm:grid-cols-[7.5rem_1fr] sm:px-5 ${
        isBreak ? "border-slate-300 bg-slate-100" : "border-slate-200 bg-white"
      }`}
    >
      <TimeRange date={date} value={entry.time} className="font-mono text-sm font-bold text-sky-900" />
      <div className="min-w-0">
        <h5 className={`leading-snug font-semibold break-words ${isBreak ? "text-slate-800" : "text-slate-950"}`}>
          {entry.title}
        </h5>
        {entry.presenters ? <p className="mt-2 text-sm leading-relaxed text-slate-700">Presented by {entry.presenters}</p> : null}
        {entry.room ? <p className="mt-1 text-sm leading-relaxed text-slate-600">Room: {entry.room}</p> : null}
        {entry.note ? <p className="mt-2 text-sm leading-relaxed text-slate-700">{entry.note}</p> : null}
        {entry.speakerOnline || entry.onlineAudience !== undefined ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.speakerOnline ? (
              <span className="inline-flex rounded-full border border-violet-300 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-900">
                Speaker joining online
              </span>
            ) : null}
            {entry.onlineAudience !== undefined ? <AttendanceBadge online={entry.onlineAudience} /> : null}
          </div>
        ) : null}
      </div>
    </li>
  );
}

function ProgrammeSessionCard({ session, date }: { session: ProgrammeSession; date: string }) {
  const headingId = `${session.id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="min-w-0 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm"
      data-schedule-card="true"
    >
      <header data-schedule-heading="true" className="border-b border-slate-300 bg-slate-900 px-5 py-5 text-white">
        <h4 id={headingId} className="text-xl leading-snug font-semibold">
          {session.title}
        </h4>
        {session.room || session.chair ? (
          <dl className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            {session.room ? (
              <div>
                <dt className="font-semibold text-white">Room</dt>
                <dd className="mt-0.5">{session.room}</dd>
              </div>
            ) : null}
            {session.chair ? (
              <div>
                <dt className="font-semibold text-white">Chair</dt>
                <dd className="mt-0.5">{session.chair}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
        {session.onlineAudience !== undefined ? (
          <div className="mt-4">
            <AttendanceBadge online={session.onlineAudience} />
          </div>
        ) : null}
      </header>
      {session.notice ? (
        <p className="border-b border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-relaxed font-medium text-amber-950">
          {session.notice}
        </p>
      ) : null}
      <ol>
        {session.entries.map((entry) => (
          <ProgrammeEntryRow key={`${entry.time}-${entry.title}`} entry={entry} date={date} />
        ))}
      </ol>
    </article>
  );
}

function ConferenceDay({ day }: { day: ProgrammeDay }) {
  return (
    <section id={day.id} aria-labelledby={`${day.id}-heading`} className="scroll-mt-28">
      <header data-schedule-heading="true" className="rounded-2xl bg-linear-to-r from-slate-950 via-sky-950 to-sky-800 px-5 py-7 text-white shadow-sm sm:px-8">
        <p className="font-mono text-sm font-bold tracking-wide text-cyan-200 uppercase">
          <time dateTime={day.date}>{day.dateLabel}</time>
        </p>
        <h2 id={`${day.id}-heading`} className="mt-2 text-3xl font-semibold tracking-tight">
          {day.title}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-200">{day.description}</p>
      </header>

      <div className="mt-8 space-y-12">
        {day.periods.map((period) => (
          <section key={period.id} aria-labelledby={`${period.id}-heading`}>
            <div className="mb-5 flex items-center gap-4">
              <h3 id={`${period.id}-heading`} className="text-2xl font-semibold tracking-tight text-slate-950">
                {period.title}
              </h3>
              <span className="h-px flex-1 bg-slate-300" aria-hidden="true" />
            </div>
            <div className={period.id.includes("afternoon") ? "grid items-start gap-6 xl:grid-cols-3" : "space-y-6"}>
              {period.sessions.map((session) => (
                <div
                  key={session.id}
                  className={period.id.includes("afternoon") && session.id.includes("break") ? "xl:col-span-3" : ""}
                >
                  <ProgrammeSessionCard session={session} date={day.date} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function WorkshopDay() {
  return (
    <section id="wednesday-2-september" aria-labelledby="workshop-heading" className="scroll-mt-28">
      <header data-schedule-heading="true" className="rounded-2xl bg-linear-to-r from-slate-950 via-indigo-950 to-indigo-800 px-5 py-7 text-white shadow-sm sm:px-8">
        <p className="font-mono text-sm font-bold tracking-wide text-indigo-200 uppercase">
          <time dateTime="2026-09-02">Wednesday, 2 September 2026</time>
        </p>
        <h2 id="workshop-heading" className="mt-2 text-3xl font-semibold tracking-tight">
          Pre-conference workshop
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-200">
          A full day of practical training at Nuffield College. Workshop sessions are in person only.
        </p>
      </header>

      <div className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(20rem,1fr)]">
        <article className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm" data-schedule-card="true">
          <header data-schedule-heading="true" className="border-b border-slate-300 bg-slate-900 px-5 py-5 text-white">
            <h3 className="text-xl font-semibold">Workshop programme</h3>
            <div className="mt-4">
              <AttendanceBadge online={false} />
            </div>
          </header>
          <ol>
            {preConferenceWorkshopSchedule.map((item) => (
              <li
                key={`${item.time}-${item.title}`}
                className={`grid gap-3 border-t border-slate-200 px-4 py-4 first:border-t-0 sm:grid-cols-[7.5rem_1fr] sm:px-5 ${
                  item.type === "break" ? "bg-slate-100" : "bg-white"
                }`}
              >
                <TimeRange
                  date="2026-09-02"
                  value={item.time}
                  className="font-mono text-sm font-bold text-indigo-900"
                />
                <div className="min-w-0">
                  <h4 className="leading-snug font-semibold text-slate-950">{item.title}</h4>
                  {item.type === "session" ? (
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      Led by{" "}
                      <a href={item.href} className={linkClasses}>
                        {item.leader}
                      </a>
                      <span className="sr-only">. </span>
                      <span aria-hidden="true"> · </span>
                      {item.duration}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-slate-600">Room: {item.room}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="overflow-hidden rounded-2xl border border-indigo-300 bg-indigo-50 shadow-sm" data-schedule-card="true">
          <header className="border-b border-indigo-300 px-5 py-5">
            <p className="text-sm font-bold tracking-wide text-indigo-800 uppercase">Parallel programme</p>
            <h3 className="mt-1 text-xl font-semibold text-indigo-950">Editorial board meetings</h3>
            <p className="mt-2 text-sm leading-relaxed text-indigo-900">Chester Room · Invitation only · Online option available</p>
          </header>
          <ol className="divide-y divide-indigo-200">
            <li className="px-5 py-4">
              <TimeRange
                date="2026-09-02"
                value="14:00–15:00"
                className="font-mono text-sm font-bold text-indigo-900"
              />
              <p className="mt-2 font-semibold text-indigo-950">Journal of Social Computing Editorial Board Meeting</p>
            </li>
            <li className="px-5 py-4">
              <TimeRange
                date="2026-09-02"
                value="15:00–16:00"
                className="font-mono text-sm font-bold text-indigo-900"
              />
              <p className="mt-2 font-semibold text-indigo-950">ACM Transactions on Social Computing Editorial Board Meeting</p>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}

export function ConferenceSchedulePage({ paths }: { paths: SitePaths }) {
  return (
    <SiteShell paths={paths} skipToContentId="main-content">
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <header className="rounded-3xl border border-slate-300 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          <p className="text-sm font-bold tracking-[0.18em] text-sky-800 uppercase">ICSC 2026 · Oxford</p>
          <h1 className="mt-3 max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-slate-950 md:text-6xl">
            Conference programme
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
            Wednesday, 2 September to Friday, 4 September 2026 at Nuffield College, University of Oxford.
          </p>

          <div className="mt-7 grid gap-4 rounded-2xl border border-sky-300 bg-sky-50 p-5 text-sky-950 md:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase">Time zone</p>
              <p className="mt-1 leading-relaxed">All times are British Summer Time (BST, UTC+1).</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase">Online access</p>
              <p className="mt-1 leading-relaxed">Available only where explicitly marked in the programme.</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase">Programme status</p>
              <p className="mt-1 leading-relaxed">
                Updated <time dateTime="2026-08-18">18 August 2026</time>; details remain subject to change.
              </p>
            </div>
          </div>

          <nav aria-label="Programme by day" className="mt-7" data-print-hidden="true">
            <ul className="grid gap-3 sm:grid-cols-3">
              <li>
                <a href="#wednesday-2-september" className="flex min-h-12 items-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-sky-900">
                  Wed 2 Sep · Workshop
                </a>
              </li>
              <li>
                <a href="#thursday-3-september" className="flex min-h-12 items-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-sky-900">
                  Thu 3 Sep · Day one
                </a>
              </li>
              <li>
                <a href="#friday-4-september" className="flex min-h-12 items-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-sky-900">
                  Fri 4 Sep · Day two
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="mt-14 space-y-20">
          <WorkshopDay />
          {conferenceProgramme.map((day) => (
            <ConferenceDay key={day.id} day={day} />
          ))}
        </div>

        <section id="poster-presentations" aria-labelledby="posters-heading" className="mt-20 scroll-mt-28 rounded-3xl border border-amber-300 bg-amber-50 p-5 shadow-sm sm:p-8 md:p-10">
          <p className="text-sm font-bold tracking-[0.18em] text-amber-900 uppercase">Poster programme</p>
          <h2 id="posters-heading" className="mt-2 text-3xl font-semibold tracking-tight text-amber-950">
            Poster presentations
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-amber-950">
            Poster displays take place during lunch on both conference days and again before the conference dinner on Thursday.
          </p>
          <ul className="mt-7 grid gap-4 md:grid-cols-2">
            {posterPresentations.map((poster) => (
              <li key={poster.href} className="min-w-0 rounded-xl border border-amber-300 bg-white p-5" data-schedule-card="true">
                <a href={poster.href} className={`${linkClasses} leading-relaxed break-words`}>
                  {poster.title}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">Presented by {poster.presenter}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="access" aria-labelledby="access-heading" className="mt-12 rounded-3xl border border-sky-300 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          <p className="text-sm font-bold tracking-[0.18em] text-sky-800 uppercase">Plan your visit</p>
          <h2 id="access-heading" className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Venue and accessibility
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">
            The Nuffield College map identifies the Worcester Street entrance and Porter&apos;s Lodge, conference rooms,
            toilets including accessible toilets, bicycle parking, exits and the fire assembly point.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li>
              <a href={`${paths.assetPrefix}assets/2026/accessibility-statement.md`} className={`inline-flex min-h-12 items-center rounded-lg border border-sky-300 bg-sky-50 px-4 py-3 ${linkClasses}`}>
                Accessibility statement (plain text)
              </a>
            </li>
            <li>
              <a href={`${paths.assetPrefix}assets/2026/accessibility-statement.pdf`} className={`inline-flex min-h-12 items-center rounded-lg border border-sky-300 bg-sky-50 px-4 py-3 ${linkClasses}`}>
                Accessibility statement (PDF)
              </a>
            </li>
            <li>
              <a href={`${paths.assetPrefix}assets/2026/nuffield-map-2026.png`} className={`inline-flex min-h-12 items-center rounded-lg border border-sky-300 bg-sky-50 px-4 py-3 ${linkClasses}`}>
                Nuffield College map (image)
              </a>
            </li>
            <li>
              <a href={`${paths.assetPrefix}assets/2026/Nuffield%20Map%202026.docx`} className={`inline-flex min-h-12 items-center rounded-lg border border-sky-300 bg-sky-50 px-4 py-3 ${linkClasses}`}>
                Nuffield College map (Word)
              </a>
            </li>
          </ul>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-slate-300 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">From Oxford railway station</h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                Walk east along Park End Street towards the city centre. After about five minutes, turn left onto Worcester Street. The College entrance is through the large gates on your right.
              </p>
            </article>
            <article className="rounded-xl border border-slate-300 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">From Gloucester Green bus station</h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                Leave towards George Street, walk west to Worcester Street, then turn left. The College entrance is through the large gates on your left.
              </p>
            </article>
          </div>
        </section>

        <aside aria-labelledby="presenter-info-heading" className="mt-12 rounded-3xl border border-indigo-300 bg-indigo-50 p-5 shadow-sm sm:p-8">
          <h2 id="presenter-info-heading" className="text-2xl font-semibold tracking-tight text-indigo-950">
            Information for presenters
          </h2>
          <p className="mt-3 leading-relaxed text-indigo-950">
            Poster presenters should complete the{" "}
            <a href="https://docs.google.com/forms/d/1uXy4yLC2Ug536z_MlYWTeXJCz2Ge20IlgCA_Eh8XMGE/viewform" className="font-semibold underline decoration-2 underline-offset-4 hover:text-indigo-700">
              poster form
            </a>
            . Speakers should complete the{" "}
            <a href="https://docs.google.com/forms/d/1Kn7pY24nYSf6spzjKRJ00TfA6t9V2-sRjVE-XHvoxoM/viewform" className="font-semibold underline decoration-2 underline-offset-4 hover:text-indigo-700">
              talk form
            </a>
            .
          </p>
        </aside>
      </main>
    </SiteShell>
  );
}
