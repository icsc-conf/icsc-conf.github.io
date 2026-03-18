import React, { type ReactNode } from "react";

export type SitePaths = {
  homeHref: string;
  conferenceHref: string;
  aboutHref: string;
  pastConferencesHref: string;
  tracksHref: string;
  datesHref: string;
  contactHref: string;
  assetPrefix: string;
};

export type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type SnapshotItem = {
  label: string;
  value: string;
};

type AnnouncementAction = {
  href: string;
  label: string;
};

type AnnouncementBannerProps = {
  badge: string;
  body: ReactNode;
  action?: AnnouncementAction;
  className?: string;
};

type ConferenceAnnouncementHeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  snapshotTitle?: string;
  snapshotItems?: SnapshotItem[];
  compact?: boolean;
};

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#") || href.endsWith(".html") || !href.includes("://");
}

function getActionClasses(variant: HeroAction["variant"] = "primary") {
  if (variant === "secondary") {
    return "rounded-md border border-slate-300/60 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:border-cyan-300 hover:text-cyan-200";
  }

  return "rounded-md bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200";
}

export function createSitePaths(scope: "root" | "conference" | "standalone"): SitePaths {
  if (scope === "root") {
    return {
      homeHref: "index.html",
      conferenceHref: "2026/index.html",
      aboutHref: "#about",
      pastConferencesHref: "past-conferences.html",
      tracksHref: "2026/index.html#tracks",
      datesHref: "2026/index.html#dates",
      contactHref: "#contact",
      assetPrefix: ""
    };
  }

  if (scope === "standalone") {
    return {
      homeHref: "index.html",
      conferenceHref: "2026/index.html",
      aboutHref: "index.html#about",
      pastConferencesHref: "past-conferences.html",
      tracksHref: "2026/index.html#tracks",
      datesHref: "2026/index.html#dates",
      contactHref: "#contact",
      assetPrefix: ""
    };
  }

  return {
    homeHref: "../index.html",
    conferenceHref: "index.html",
    aboutHref: "../index.html#about",
    pastConferencesHref: "../past-conferences.html",
    tracksHref: "index.html#tracks",
    datesHref: "index.html#dates",
    contactHref: "#contact",
    assetPrefix: "../"
  };
}

export function AnnouncementBanner({
  badge,
  body,
  action,
  className
}: AnnouncementBannerProps) {
  return (
    <section
      aria-live="polite"
      className={`w-full border-y border-sky-400/45 bg-linear-to-r from-slate-950 via-blue-950 to-sky-900 shadow-[inset_0_1px_0_rgba(125,211,252,0.18)] ${className ?? ""}`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-start gap-3">
          <span className="inline-flex shrink-0 items-center rounded-full border border-cyan-300/70 bg-sky-100 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-sky-900 uppercase">
            {badge}
          </span>
          <div className="text-sm leading-relaxed text-slate-100">{body}</div>
        </div>

        {action ? (
          <a
            href={action.href}
            className="inline-flex shrink-0 items-center rounded-md border border-emerald-700 bg-emerald-700 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-emerald-800"
            target={isInternalHref(action.href) ? undefined : "_blank"}
            rel={isInternalHref(action.href) ? undefined : "noopener noreferrer"}
          >
            {action.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function GlobalAnnouncement({ paths }: { paths: SitePaths }) {
  return (
    <AnnouncementBanner
      badge="Announcement"
      body={
        <div className="font-medium">
          ICSC 2026 will be held in-person at Nuffield College, University of Oxford on September 4th and 5th, 2026.
        </div>
      }
      action={{ href: paths.conferenceHref, label: "View" }}
    />
  );
}

export function SiteHeader({ paths }: { paths: SitePaths }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href={paths.homeHref} className="flex items-center gap-3">
          <img
            src={`${paths.assetPrefix}images/log/icsc-logo-header.svg`}
            alt="ICSC Conference logo"
            width={60}
            height={15}
            loading="eager"
          />
        </a>
        <a
          href={paths.conferenceHref}
          className="rounded-xl border border-cyan-200/40 bg-gradient-to-r from-slate-900 via-sky-800 to-cyan-700 px-6 py-3 text-base font-semibold tracking-wide shadow-[0_10px_25px_-12px_rgba(14,165,233,0.85)] ring-1 ring-cyan-100/20 transition hover:from-slate-800 hover:via-sky-700 hover:to-cyan-600"
        >
          <span className="bg-gradient-to-r from-cyan-100 via-white to-sky-100 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(2,6,23,0.6)]">
            ICSC 2026 @ Oxford, UK
          </span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter({ paths }: { paths: SitePaths }) {
  return (
    <footer id="contact" className="w-full border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-10">
        <div>
          <a href={paths.homeHref} className="inline-block">
            <img
              src={`${paths.assetPrefix}images/log/icsc-logo.svg`}
              alt="ICSC Conference logo"
              width={130}
              height={46}
              className="brightness-0 invert"
            />
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-cyan-200">QUICK LINKS</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={paths.pastConferencesHref} className="transition hover:text-cyan-200">
                Past Conferences
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-cyan-200">ICSC2026 @ OXFORD</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`${paths.conferenceHref}#registration`} className="transition hover:text-cyan-200">
                Registration
              </a>
            </li>
            <li>
              <a href={`${paths.conferenceHref}#programme`} className="transition hover:text-cyan-200">
                Programme
              </a>
            </li>
            <li>
              <a href={`${paths.conferenceHref}#venue`} className="transition hover:text-cyan-200">
                Venue
              </a>
            </li>
            <li>
              <a href={`${paths.conferenceHref}#venue`} className="transition hover:text-cyan-200">
                Travel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t border-slate-800/80 px-6 py-4 text-center text-xs text-slate-500">
        &copy; ICSC (International Conference on Social Computing) 2019 - 2026.
        <br />
        All rights reserved.
      </div>
    </footer>
  );
}

export function ConferenceAnnouncementHero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  snapshotTitle = "CONFERENCE SNAPSHOT",
  snapshotItems,
  compact = false
}: ConferenceAnnouncementHeroProps) {
  const hasSnapshot = Boolean(snapshotItems && snapshotItems.length > 0);
  const sectionPadding = compact ? "py-12 lg:py-16" : "py-18 lg:py-28";

  return (
    <section className="relative w-full overflow-hidden border-b border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="scientific-grid absolute inset-0 opacity-50" />
      <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div
        className={`relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 ${sectionPadding} lg:px-10 ${
          hasSnapshot ? "lg:flex-row lg:items-end lg:justify-between" : ""
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.32em] text-cyan-200">{badge}</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={primaryAction.href} className={getActionClasses(primaryAction.variant)}>
              {primaryAction.label}
            </a>
            {secondaryAction ? (
              <a href={secondaryAction.href} className={getActionClasses(secondaryAction.variant)}>
                {secondaryAction.label}
              </a>
            ) : null}
          </div>
        </div>
        {hasSnapshot ? (
          <aside className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900/75 p-6 shadow-2xl backdrop-blur">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-cyan-200">{snapshotTitle}</h2>
            <dl className="mt-4 space-y-4 text-slate-200">
              {snapshotItems!.map((item) => (
                <div key={item.label} className="border-b border-slate-800 pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-xs font-medium tracking-wide text-slate-400 uppercase">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

export function SiteShell({
  paths,
  children
}: {
  paths: SitePaths;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-page)] text-slate-900">
      <SiteHeader paths={paths} />
      <GlobalAnnouncement paths={paths} />
      {children}
      <SiteFooter paths={paths} />
    </div>
  );
}
