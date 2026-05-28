"use client";

import { useEffect, useState } from "react";

// ── SVG icons (flat, monochrome, stroke-based) ──────────────────────────────

function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconBlocks() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function IconTable() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h10l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
    </svg>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

interface Tool {
  id: string;
  name: string;
  url: string;
  Icon: () => JSX.Element;
}

interface Group {
  label: string;
  tools: Tool[];
}

const groups: Group[] = [
  {
    label: "Tools",
    tools: [
      { id: "adoptimizer", name: "AdOptimizer", url: "https://adoptimizer.nl", Icon: IconBarChart },
      { id: "meta-optimizer", name: "Meta Optimizer", url: "https://www.meta-optimizer.nl", Icon: IconZap },
      { id: "betty", name: "Betty Blocks", url: "https://woeler.bettyblocks.com/", Icon: IconBlocks },
      { id: "intake", name: "Intake", url: "https://intake.woeler.nl", Icon: IconClipboard },
    ],
  },
  {
    label: "Overzichten",
    tools: [
      { id: "masteroverzicht", name: "Masteroverzicht", url: "https://docs.google.com/spreadsheets/d/1aN7l4TnXLXGIBmspGnTukyTkJ3wzCscHVPe-nIbxzCs/edit?gid=1011232414#gid=1011232414", Icon: IconTable },
      { id: "masteroverzicht-sales", name: "Sales", url: "https://docs.google.com/spreadsheets/d/1UurKWRkc8E9cK8V0lVGbprYBH-A5gHuqMTV76oBT85M/edit?ts=6005ac02#gid=1447656458", Icon: IconTrendingUp },
    ],
  },
  {
    label: "Auto",
    tools: [
      { id: "auto", name: "Pool auto", url: "https://auto.woeler.nl", Icon: IconCar },
    ],
  },
];

// ── App icon tile ────────────────────────────────────────────────────────────

function AppIcon({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 w-20 select-none"
    >
      <div className="w-16 h-16 rounded-2xl bg-neutral-100 group-hover:bg-neutral-200 transition-colors duration-150 flex items-center justify-center text-neutral-600 group-hover:text-neutral-900 p-4">
        <tool.Icon />
      </div>
      <span className="text-[11px] text-neutral-500 group-hover:text-neutral-700 text-center leading-tight transition-colors duration-150">
        {tool.name}
      </span>
    </a>
  );
}

// ── Clock ────────────────────────────────────────────────────────────────────

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
  const date = time.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="select-none mb-10">
      <div className="text-4xl font-light text-neutral-800 tabular-nums">{hours}</div>
      <div className="text-sm text-neutral-400 mt-0.5 capitalize">{date}</div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="px-8 py-5 border-b border-neutral-100 flex items-center gap-2.5">
        <div className="w-5 h-5 rounded bg-neutral-900 flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">W</span>
        </div>
        <span className="text-sm font-medium text-neutral-700">Woeler Hub</span>
      </header>

      <div className="flex-1 flex items-start justify-center px-8 pt-16 pb-12">
        <div className="w-full max-w-md">
          <Clock />

          <div className="space-y-10">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-4">
                  {group.tools.map((tool) => (
                    <AppIcon key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
