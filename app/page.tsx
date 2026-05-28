"use client";

import { useState, useEffect } from "react";

interface Tool {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

const tools: Tool[] = [
  {
    id: "adoptimizer",
    name: "AdOptimizer",
    url: "https://adoptimizer.nl",
    icon: "📊",
    color: "from-blue-500 to-blue-700",
    description: "Google Ads optimalisatie tool",
  },
  {
    id: "intake",
    name: "Intake",
    url: "https://intake.woeler.nl",
    icon: "📋",
    color: "from-emerald-500 to-emerald-700",
    description: "Klant intake formulieren",
  },
  {
    id: "auto",
    name: "Auto",
    url: "https://auto.woeler.nl",
    icon: "🚗",
    color: "from-orange-500 to-orange-700",
    description: "Woeler pool auto beheer",
  },
  {
    id: "meta-optimizer",
    name: "Meta Optimizer",
    url: "https://www.meta-optimizer.nl",
    icon: "⚡",
    color: "from-purple-500 to-purple-700",
    description: "Meta advertentie optimizer",
  },
];

function ToolIcon({ tool }: { tool: Tool }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
          w-20 h-20 rounded-2xl bg-gradient-to-br ${tool.color}
          flex items-center justify-center text-4xl shadow-lg
          transition-all duration-150 ease-out
          ${hovered ? "scale-110 shadow-2xl -translate-y-1" : ""}
          border border-white/20
        `}
      >
        {tool.icon}
      </div>
      <span
        className={`
          text-white text-sm font-medium text-center drop-shadow-md
          transition-all duration-150
          ${hovered ? "opacity-100" : "opacity-90"}
        `}
      >
        {tool.name}
      </span>
      {hovered && (
        <span className="absolute mt-24 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none z-10 backdrop-blur-sm border border-white/10">
          {tool.description}
        </span>
      )}
    </a>
  );
}

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateFormatted = time.toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="text-center text-white select-none">
      <div className="text-7xl font-thin tracking-tight drop-shadow-lg">
        {formatted}
      </div>
      <div className="text-lg font-light opacity-80 mt-1 capitalize">
        {dateFormatted}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
          Woeler Hub
        </span>
        <div className="w-16" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-16 px-8 py-12">
        {/* Clock */}
        <Clock />

        {/* Tools grid */}
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-white/50 text-xs font-semibold tracking-widest uppercase">
            Mijn Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {tools.map((tool) => (
              <ToolIcon key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom dock */}
      <div className="relative z-10 flex justify-center pb-6">
        <div className="flex items-end gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              title={tool.name}
              className={`
                w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color}
                flex items-center justify-center text-2xl shadow-md
                transition-all duration-150 hover:scale-125 hover:-translate-y-2
                border border-white/20
              `}
            >
              {tool.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
