"use client";

import { useState, useEffect } from "react";

interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  accent: string;
  initials: string;
}

const tools: Tool[] = [
  {
    id: "adoptimizer",
    name: "AdOptimizer",
    url: "https://adoptimizer.nl",
    description: "Google Ads optimalisatie",
    accent: "#2563EB",
    initials: "AO",
  },
  {
    id: "intake",
    name: "Intake",
    url: "https://intake.woeler.nl",
    description: "Klant intake",
    accent: "#059669",
    initials: "IN",
  },
  {
    id: "auto",
    name: "Auto",
    url: "https://auto.woeler.nl",
    description: "Pool auto beheer",
    accent: "#D97706",
    initials: "AU",
  },
  {
    id: "meta-optimizer",
    name: "Meta Optimizer",
    url: "https://www.meta-optimizer.nl",
    description: "Meta advertenties",
    accent: "#7C3AED",
    initials: "MO",
  },
  {
    id: "betty",
    name: "Betty Blocks",
    url: "https://woeler.bettyblocks.com/",
    description: "Woeler applicaties",
    accent: "#E11D48",
    initials: "BB",
  },
  {
    id: "masteroverzicht",
    name: "Masteroverzicht",
    url: "https://docs.google.com/spreadsheets/d/1aN7l4TnXLXGIBmspGnTukyTkJ3wzCscHVPe-nIbxzCs/edit?gid=1011232414#gid=1011232414",
    description: "Algemeen overzicht",
    accent: "#0F9D58",
    initials: "MO",
  },
  {
    id: "masteroverzicht-sales",
    name: "Masteroverzicht Sales",
    url: "https://docs.google.com/spreadsheets/d/1UurKWRkc8E9cK8V0lVGbprYBH-A5gHuqMTV76oBT85M/edit?ts=6005ac02#gid=1447656458",
    description: "Sales overzicht",
    accent: "#0F9D58",
    initials: "MS",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-200 select-none"
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xs font-semibold tracking-wide"
        style={{ backgroundColor: tool.accent }}
      >
        {tool.initials}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-neutral-800 leading-tight">
          {tool.name}
        </div>
        <div className="text-xs text-neutral-400 mt-0.5 truncate">
          {tool.description}
        </div>
      </div>

      {/* Arrow */}
      <svg
        className="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = time.toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="select-none">
      <div className="text-5xl font-light text-neutral-800 tracking-tight tabular-nums">
        {hours}
      </div>
      <div className="text-sm text-neutral-400 mt-1 capitalize font-normal">
        {date}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-neutral-100 bg-white">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-tight">W</span>
          </div>
          <span className="text-sm font-semibold text-neutral-800">Woeler Hub</span>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm space-y-10">
          {/* Clock */}
          <Clock />

          {/* Tools */}
          <div className="space-y-2">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
