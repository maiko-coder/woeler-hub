"use client";

import { useEffect, useState, ReactElement } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────

function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="9" rx="0.5" />
      <rect x="10" y="7" width="4" height="14" rx="0.5" />
      <rect x="17" y="3" width="4" height="18" rx="0.5" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconBlocks() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="0.5" />
      <rect x="14" y="3" width="7" height="7" rx="0.5" />
      <rect x="3" y="14" width="7" height="7" rx="0.5" />
      <rect x="14" y="14" width="7" height="7" rx="0.5" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="0.5" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function IconTable() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="0.5" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h10l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

interface Tool {
  id: string;
  name: string;
  url: string;
  Icon: () => ReactElement;
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

// ── App icon ──────────────────────────────────────────────────────────────────

function AppIcon({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 select-none"
    >
      <div className="w-14 h-14 rounded-xl bg-[#111] flex items-center justify-center text-[#f0eeec] p-[14px] transition-all duration-100 group-hover:bg-[#333] group-hover:scale-105 shadow-sm">
        <tool.Icon />
      </div>
      <span className="text-[10px] font-mono text-[#555] group-hover:text-[#111] text-center leading-tight max-w-[64px] transition-colors duration-100">
        {tool.name}
      </span>
    </a>
  );
}

// ── Clock ─────────────────────────────────────────────────────────────────────

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-sm text-[#f0eeec]/70 tabular-nums">
      {time.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const today = new Date().toLocaleDateString("nl-NL", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#f0eeec" }}>

      {/* Menu bar */}
      <div className="bg-[#111] flex items-center justify-between px-6 py-2.5 select-none">
        <div className="flex items-center gap-6">
          <span className="text-[#f0eeec] font-mono text-sm font-bold tracking-widest uppercase">
            Woeler
          </span>
          <div className="w-px h-4 bg-[#f0eeec]/20" />
          <span className="text-[#f0eeec]/50 font-mono text-xs">Hub v1</span>
        </div>
        <Clock />
      </div>

      {/* Desktop */}
      <div className="flex-1 flex flex-col px-10 pt-12 pb-10">

        {/* Hero heading */}
        <div className="mb-12 border-b border-[#111]/10 pb-8">
          <p className="font-mono text-xs text-[#999] uppercase tracking-[0.2em] mb-2">{today}</p>
          <h1 className="text-5xl font-black tracking-tight text-[#111] leading-none uppercase">
            Woeler<br />
            <span className="text-[#111]/25">Hub_</span>
          </h1>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#999]">
                  {group.label}
                </span>
                <div className="flex-1 h-px bg-[#111]/10" />
              </div>
              <div className="flex flex-wrap gap-6">
                {group.tools.map((tool) => (
                  <AppIcon key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Status bar */}
      <div className="border-t border-[#111]/10 px-6 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#aaa]">
          {groups.reduce((n, g) => n + g.tools.length, 0)} apps
        </span>
        <a
          href="https://www.woeler.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-[#aaa] hover:text-[#111] transition-colors"
        >
          woeler.nl ↗
        </a>
      </div>

    </main>
  );
}
