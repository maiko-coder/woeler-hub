"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// ── XP-style coloured app icons (SVG with gradient fills) ────────────────────

function XpIcon({ children, from, to }: { children: React.ReactNode; from: string; to: string }) {
  return (
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0"
      style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
    >
      {children}
    </div>
  );
}

function IconAdOptimizer() {
  return (
    <XpIcon from="#4facf7" to="#1565c0">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="0.5" fill="white" fillOpacity={0.3} stroke="white" />
        <rect x="10" y="7" width="4" height="14" rx="0.5" fill="white" fillOpacity={0.3} stroke="white" />
        <rect x="17" y="3" width="4" height="18" rx="0.5" fill="white" fillOpacity={0.3} stroke="white" />
      </svg>
    </XpIcon>
  );
}

function IconMetaOptimizer() {
  return (
    <XpIcon from="#c471f5" to="#6a0dad">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fillOpacity={0.9} />
      </svg>
    </XpIcon>
  );
}

function IconBetty() {
  return (
    <XpIcon from="#ff6b6b" to="#c0392b">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="white" fillOpacity={0.35} />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="white" fillOpacity={0.35} />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="white" fillOpacity={0.35} />
        <rect x="14" y="14" width="7" height="7" rx="1" fill="white" fillOpacity={0.35} />
      </svg>
    </XpIcon>
  );
}

function IconIntake() {
  return (
    <XpIcon from="#ffe259" to="#e67e22">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" fill="white" fillOpacity={0.2} />
        <rect x="9" y="3" width="6" height="4" rx="1" fill="white" fillOpacity={0.4} />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    </XpIcon>
  );
}

function IconMasteroverzicht() {
  return (
    <XpIcon from="#56ab2f" to="#1a6b06">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1" fill="white" fillOpacity={0.2} />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="9" x2="9" y2="21" />
        <line x1="15" y1="9" x2="15" y2="21" />
      </svg>
    </XpIcon>
  );
}

function IconSales() {
  return (
    <XpIcon from="#43e97b" to="#0d7c4e">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3,18 9,11 14,14 21,5" />
        <polyline points="16,5 21,5 21,10" />
      </svg>
    </XpIcon>
  );
}

function IconAuto() {
  return (
    <XpIcon from="#74b9ff" to="#1e3c8a">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h10l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" fill="white" fillOpacity={0.2} />
        <circle cx="7.5" cy="17" r="2" fill="white" fillOpacity={0.5} />
        <circle cx="16.5" cy="17" r="2" fill="white" fillOpacity={0.5} />
        <line x1="8" y1="9" x2="16" y2="9" />
      </svg>
    </XpIcon>
  );
}

function IconNmbrs() {
  return (
    <XpIcon from="#00c9a7" to="#007a63">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="1.5" fill="white" fillOpacity={0.15} />
        <line x1="3" y1="9" x2="21" y2="9" />
        <text x="12" y="17" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" stroke="none" fontFamily="Tahoma,sans-serif">€ LOON</text>
      </svg>
    </XpIcon>
  );
}

function IconFolder() {
  return (
    <div className="w-12 h-12 flex items-center justify-center drop-shadow-md flex-shrink-0">
      <svg viewBox="0 0 48 40" className="w-12 h-10">
        <path d="M2 8 C2 6 3.5 4 6 4 L18 4 L22 8 L42 8 C44.5 8 46 9.5 46 12 L46 36 C46 38 44.5 40 42 40 L6 40 C3.5 40 2 38 2 36 Z" fill="#F5C842" />
        <path d="M2 13 L46 13 L46 36 C46 38 44.5 40 42 40 L6 40 C3.5 40 2 38 2 36 Z" fill="#F9D959" />
        <path d="M2 8 C2 6 3.5 4 6 4 L18 4 L22 8 L42 8 C44.5 8 46 9.5 46 12 L46 13 L2 13 Z" fill="#E8B420" />
      </svg>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

type IconType = "link" | "folder";

interface DesktopIcon {
  id: string;
  name: string;
  type: IconType;
  url?: string;
  folderId?: string;
  Icon: () => React.ReactElement;
}

interface Group {
  label: string;
  icons: DesktopIcon[];
}

interface FolderItem {
  id: string;
  name: string;
  type: IconType;
  url?: string;
  folderId?: string;
  Icon: () => React.ReactElement;
}

interface FolderDef {
  id: string;
  title: string;
  items: FolderItem[];
}

const folderDefs: FolderDef[] = [
  {
    id: "sales-folder",
    title: "Sales",
    items: [
      {
        id: "sales-sheet",
        name: "Overzicht",
        type: "link",
        url: "https://docs.google.com/spreadsheets/d/1UurKWRkc8E9cK8V0lVGbprYBH-A5gHuqMTV76oBT85M/edit?ts=6005ac02#gid=1447656458",
        Icon: IconSales,
      },
      {
        id: "prospects-folder",
        name: "Prospects",
        type: "folder",
        folderId: "prospects-folder",
        Icon: IconFolder,
      },
    ],
  },
  {
    id: "prospects-folder",
    title: "Prospects",
    items: [],
  },
];

const groups: Group[] = [
  {
    label: "Tools",
    icons: [
      { id: "adoptimizer", name: "AdOptimizer", type: "link", url: "https://adoptimizer.nl", Icon: IconAdOptimizer },
      { id: "meta", name: "Meta Optimizer", type: "link", url: "https://www.meta-optimizer.nl", Icon: IconMetaOptimizer },
      { id: "betty", name: "Betty Blocks", type: "link", url: "https://woeler.bettyblocks.com/", Icon: IconBetty },
      { id: "intake", name: "Intake", type: "link", url: "https://intake.woeler.nl", Icon: IconIntake },
      { id: "nmbrs", name: "Nmbrs", type: "link", url: "https://www.nmbrs.com/nl/inloggen", Icon: IconNmbrs },
    ],
  },
  {
    label: "Overzichten",
    icons: [
      { id: "masteroverzicht", name: "Masteroverzicht", type: "link", url: "https://docs.google.com/spreadsheets/d/1aN7l4TnXLXGIBmspGnTukyTkJ3wzCscHVPe-nIbxzCs/edit?gid=1011232414#gid=1011232414", Icon: IconMasteroverzicht },
      { id: "sales", name: "Sales", type: "folder", folderId: "sales-folder", Icon: IconFolder },
    ],
  },
  {
    label: "Auto",
    icons: [
      { id: "auto", name: "Pool auto", type: "link", url: "https://auto.woeler.nl", Icon: IconAuto },
    ],
  },
];

// ── XP Explorer Window ────────────────────────────────────────────────────────

interface WinState {
  instanceId: string;
  folderId: string;
  zIndex: number;
  pos: { x: number; y: number };
  minimized: boolean;
}

interface XpWindowProps {
  win: WinState;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  onMove: (id: string, pos: { x: number; y: number }) => void;
  onOpenFolder: (folderId: string) => void;
}

function XpWindow({ win, onClose, onFocus, onMinimize, onMove, onOpenFolder }: XpWindowProps) {
  const folder = folderDefs.find((f) => f.id === win.folderId)!;
  const dragging = useRef(false);
  const dragOffset = useRef({ dx: 0, dy: 0 });

  function startDrag(e: React.MouseEvent) {
    dragging.current = true;
    dragOffset.current = { dx: e.clientX - win.pos.x, dy: e.clientY - win.pos.y };
    onFocus(win.instanceId);
    e.preventDefault();
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      onMove(win.instanceId, {
        x: e.clientX - dragOffset.current.dx,
        y: e.clientY - dragOffset.current.dy,
      });
    }
    function onMouseUp() { dragging.current = false; }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [win.instanceId, onMove]);

  if (win.minimized) return null;

  return (
    <div
      className="fixed select-none"
      style={{ left: win.pos.x, top: win.pos.y, zIndex: win.zIndex, width: 420 }}
      onMouseDown={() => onFocus(win.instanceId)}
    >
      {/* Drop shadow */}
      <div className="rounded-t-lg overflow-hidden" style={{ boxShadow: "4px 4px 16px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.3)" }}>

        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-2 py-1.5 cursor-move"
          style={{
            background: "linear-gradient(180deg, #2a6dd4 0%, #1a50b8 50%, #1848a8 100%)",
            borderBottom: "1px solid #1035a0",
          }}
          onMouseDown={startDrag}
        >
          {/* Folder icon tiny */}
          <svg viewBox="0 0 20 16" className="w-4 h-3.5 flex-shrink-0">
            <path d="M1 3 C1 2 2 1 3 1 L8 1 L10 3 L17 3 C18 3 19 4 19 5 L19 14 C19 15 18 16 17 16 L3 16 C2 16 1 15 1 14 Z" fill="#F5C842" />
            <path d="M1 5.5 L19 5.5 L19 14 C19 15 18 16 17 16 L3 16 C2 16 1 15 1 14 Z" fill="#F9D959" />
          </svg>
          <span className="text-white text-xs font-bold flex-1 truncate" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
            {folder.title}
          </span>
          {/* Window controls */}
          <div className="flex gap-1">
            <button
              onClick={() => onMinimize(win.instanceId)}
              className="w-5 h-5 rounded-sm flex items-center justify-center text-white text-[10px] hover:brightness-125"
              style={{ background: "linear-gradient(180deg, #4a8ae8 0%, #2a5ac8 100%)", border: "1px solid #1035a0" }}
              title="Minimaliseren"
            >─</button>
            <button
              className="w-5 h-5 rounded-sm flex items-center justify-center text-white text-[10px] hover:brightness-125 opacity-40 cursor-not-allowed"
              style={{ background: "linear-gradient(180deg, #4a8ae8 0%, #2a5ac8 100%)", border: "1px solid #1035a0" }}
              title="Maximaliseren (niet beschikbaar)"
            >□</button>
            <button
              onClick={() => onClose(win.instanceId)}
              className="w-5 h-5 rounded-sm flex items-center justify-center text-white text-[11px] font-bold hover:brightness-125"
              style={{ background: "linear-gradient(180deg, #e85050 0%, #c02020 100%)", border: "1px solid #901010" }}
              title="Sluiten"
            >✕</button>
          </div>
        </div>

        {/* Address bar */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 text-[11px] text-gray-700"
          style={{ background: "#ece9d8", borderBottom: "1px solid #b0a890" }}
        >
          <span className="text-gray-500">Adres:</span>
          <span className="font-semibold">Bureaublad \ {folder.title}</span>
        </div>

        {/* Content */}
        <div
          className="min-h-[160px] p-4"
          style={{ background: "white", borderTop: "1px solid #dfdfdf" }}
        >
          {folder.items.length === 0 ? (
            <div className="flex items-center justify-center h-24 text-gray-400 text-xs italic">
              Deze map is leeg
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              {folder.items.map((item) => (
                <button
                  key={item.id}
                  className="flex flex-col items-center gap-1.5 w-20 p-2 rounded cursor-pointer group hover:bg-[#dce8f8] transition-colors"
                  onClick={() => {
                    if (item.type === "link" && item.url) window.open(item.url, "_blank");
                    else if (item.type === "folder" && item.folderId) onOpenFolder(item.folderId);
                  }}
                >
                  <div className="group-hover:brightness-105 transition-all">
                    <item.Icon />
                  </div>
                  <span className="text-[11px] text-gray-800 text-center leading-tight break-words max-w-full">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Status bar */}
        <div
          className="px-3 py-1 text-[10px] text-gray-600"
          style={{ background: "#ece9d8", borderTop: "1px solid #b0a890" }}
        >
          {folder.items.length} object{folder.items.length !== 1 ? "en" : ""}
        </div>
      </div>
    </div>
  );
}

// ── Desktop icon tile ─────────────────────────────────────────────────────────

function DesktopIconTile({ icon, onOpenFolder }: { icon: DesktopIcon; onOpenFolder: (id: string) => void }) {
  const [selected, setSelected] = useState(false);

  function handleClick(e: React.MouseEvent) {
    setSelected(true);
    if (icon.type === "folder" && icon.folderId) {
      e.preventDefault();
      onOpenFolder(icon.folderId);
    }
  }

  const inner = (
    <>
      <div className="group-hover:brightness-110 transition-all duration-100 drop-shadow-lg">
        <icon.Icon />
      </div>
      <span
        className="text-[11px] text-white text-center leading-tight font-normal max-w-full break-words px-0.5"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.7)" }}
      >
        {icon.name}
      </span>
    </>
  );

  const cls = "flex flex-col items-center gap-1.5 w-20 p-2 rounded cursor-pointer select-none group";
  const style = { background: selected ? "rgba(49,106,197,0.35)" : "transparent" };

  if (icon.type === "folder") {
    return (
      <button className={cls} style={style} onClick={handleClick} onBlur={() => setSelected(false)}>
        {inner}
      </button>
    );
  }

  return (
    <a href={icon.url} target="_blank" rel="noopener noreferrer"
      className={cls} style={style}
      onClick={() => setSelected(true)} onBlur={() => setSelected(false)}
    >
      {inner}
    </a>
  );
}

// ── Start menu ───────────────────────────────────────────────────────────────

const allTools = groups.flatMap((g) => g.icons).filter((i) => i.type === "link");

function StartMenu({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  async function handleLogout() {
    onClose();
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-20" onClick={onClose} />

      {/* Menu */}
      <div
        className="absolute bottom-10 left-0 z-30 w-80 rounded-tr-xl overflow-hidden"
        style={{
          boxShadow: "3px -3px 12px rgba(0,0,0,0.6)",
          border: "1px solid #1a3a8f",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-3 py-2.5"
          style={{ background: "linear-gradient(90deg, #1e54c0 0%, #3a7bd4 100%)" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ background: "linear-gradient(145deg, #FF6B1A, #c04a00)" }}
          >
            W
          </div>
          <div>
            <div className="text-white font-bold text-sm" style={{ fontFamily: "Tahoma, sans-serif" }}>Woeler</div>
            <div className="text-white/70 text-[11px]" style={{ fontFamily: "Tahoma, sans-serif" }}>Hub gebruiker</div>
          </div>
        </div>

        {/* Body: two columns */}
        <div className="flex" style={{ background: "#fff" }}>
          {/* Left: pinned apps */}
          <div className="flex-1 border-r border-gray-200 py-2">
            <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
              Programma&apos;s
            </div>
            {allTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#316ac5] group"
              >
                <div className="w-7 h-7 flex-shrink-0 rounded scale-[0.58] origin-left">
                  <tool.Icon />
                </div>
                <span
                  className="text-[12px] text-gray-800 group-hover:text-white truncate"
                  style={{ fontFamily: "Tahoma, sans-serif" }}
                >
                  {tool.name}
                </span>
              </a>
            ))}
          </div>

          {/* Right: places */}
          <div className="w-36 py-2 bg-[#dce5f5]">
            <div className="px-3 py-1 text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider border-b border-[#b8caea] mb-1">
              Woeler
            </div>
            {[
              { label: "woeler.nl", url: "https://www.woeler.nl" },
              { label: "E-mail", url: "mailto:" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center px-3 py-1.5 text-[12px] text-[#1e3a8a] hover:bg-[#316ac5] hover:text-white group"
                style={{ fontFamily: "Tahoma, sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex justify-end gap-2 px-3 py-2 border-t border-[#1a3a8f]"
          style={{ background: "linear-gradient(90deg, #1e54c0 0%, #3a7bd4 100%)" }}
        >
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-white text-[11px] px-3 py-1 rounded hover:bg-white/20 transition-colors"
            style={{ fontFamily: "Tahoma, sans-serif" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Uitloggen
          </button>
        </div>
      </div>
    </>
  );
}

// ── Clock for taskbar ─────────────────────────────────────────────────────────

function TaskbarClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-xs text-right leading-tight select-none px-2">
      <div className="font-normal" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.6)" }}>
        {time.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}
      </div>
      <div className="text-[10px] opacity-80">
        {time.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit", year: "numeric" })}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

let winCounter = 0;

export default function Home() {
  const [startOpen, setStartOpen] = useState(false);
  const [windows, setWindows] = useState<WinState[]>([]);
  const maxZ = useRef(100);

  function openFolder(folderId: string) {
    // Bring existing window to front instead of duplicating
    const existing = windows.find((w) => w.folderId === folderId && !w.minimized);
    if (existing) {
      focusWindow(existing.instanceId);
      return;
    }
    maxZ.current += 1;
    const id = `win-${++winCounter}`;
    setWindows((ws) => [
      ...ws,
      {
        instanceId: id,
        folderId,
        zIndex: maxZ.current,
        pos: { x: 120 + windows.length * 24, y: 80 + windows.length * 24 },
        minimized: false,
      },
    ]);
  }

  function closeWindow(instanceId: string) {
    setWindows((ws) => ws.filter((w) => w.instanceId !== instanceId));
  }

  function focusWindow(instanceId: string) {
    maxZ.current += 1;
    setWindows((ws) =>
      ws.map((w) => w.instanceId === instanceId ? { ...w, zIndex: maxZ.current } : w)
    );
  }

  function minimizeWindow(instanceId: string) {
    setWindows((ws) =>
      ws.map((w) => w.instanceId === instanceId ? { ...w, minimized: true } : w)
    );
  }

  function moveWindow(instanceId: string, pos: { x: number; y: number }) {
    setWindows((ws) =>
      ws.map((w) => w.instanceId === instanceId ? { ...w, pos } : w)
    );
  }

  function restoreWindow(instanceId: string) {
    maxZ.current += 1;
    setWindows((ws) =>
      ws.map((w) => w.instanceId === instanceId ? { ...w, minimized: false, zIndex: maxZ.current } : w)
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" style={{ fontFamily: "Tahoma, Verdana, sans-serif" }}>

      {/* Bliss wallpaper */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/bliss.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* XP Windows */}
      {windows.map((win) => (
        <XpWindow
          key={win.instanceId}
          win={win}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={minimizeWindow}
          onMove={moveWindow}
          onOpenFolder={openFolder}
        />
      ))}

      {/* Desktop icons area */}
      <div className="flex-1 flex flex-col justify-start pt-6 pl-4 pr-4">
        <div className="flex flex-col gap-6">
          {groups.map((group) => (
            <div key={group.label}>
              {/* Subtle group label */}
              <div className="mb-1 pl-2">
                <span
                  className="text-[10px] text-white/70 uppercase tracking-widest"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  {group.label}
                </span>
              </div>
              <div className="flex flex-row flex-wrap gap-1">
                {group.icons.map((icon) => (
                  <DesktopIconTile key={icon.id} icon={icon} onOpenFolder={openFolder} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* XP Taskbar */}
      <div
        className="relative h-10 flex items-center px-0 select-none z-10"
        style={{
          background: "linear-gradient(180deg, #2a5fbd 0%, #1a4aaa 4%, #2060c8 8%, #1e54b8 45%, #1648a0 50%, #1040a0 51%, #1848b0 100%)",
          boxShadow: "0 -1px 0 rgba(255,255,255,0.3) inset, 0 1px 3px rgba(0,0,0,0.5)"
        }}
      >
        {startOpen && <StartMenu onClose={() => setStartOpen(false)} />}

        {/* Start button */}
        <button
          onClick={() => setStartOpen((o) => !o)}
          className="h-full flex items-center gap-1.5 px-3 pr-4 text-white font-bold text-sm rounded-r-full z-10 relative"
          style={{
            background: startOpen
              ? "linear-gradient(180deg, #2f8a10 0%, #3ca01a 40%, #5dbb3e 100%)"
              : "linear-gradient(180deg, #5dbb3e 0%, #3ca01a 40%, #2f8a10 60%, #4aaf28 100%)",
            boxShadow: startOpen
              ? "inset 2px 2px 4px rgba(0,0,0,0.4)"
              : "2px 0 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
            minWidth: "90px",
            fontFamily: "Tahoma, sans-serif",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="white">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.5,7,11.1V19c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v2.9 c4.5-1.6,7.6-6.1,7-11.1C20.2,6.3,16.1,1.6,10.9,2.1z M16,13c0,0.6-0.4,1-1,1h-2v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H9 c-0.6,0-1-0.4-1-1s0.4-1,1-1h2V9c0-0.6,0.4-1,1-1s1,0.4,1,1v3h2C15.6,12,16,12.4,16,13z" />
          </svg>
          <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)", fontSize: 13 }}>start</span>
        </button>

        {/* Separator */}
        <div className="w-px h-full bg-white/10 mx-2" />

        {/* Open windows in taskbar */}
        <div className="flex items-center gap-1 flex-1 px-1 overflow-x-auto overflow-y-hidden">
          {windows.map((win) => {
            const folder = folderDefs.find((f) => f.id === win.folderId);
            return (
              <button
                key={win.instanceId}
                onClick={() => win.minimized ? restoreWindow(win.instanceId) : minimizeWindow(win.instanceId)}
                className="h-8 flex items-center px-2 gap-1.5 rounded text-white text-xs truncate max-w-[160px] flex-shrink-0"
                style={{
                  background: win.minimized ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: win.minimized ? "inset 0 1px 2px rgba(0,0,0,0.4)" : "none",
                  fontFamily: "Tahoma, sans-serif",
                  fontSize: 11,
                }}
              >
                <svg viewBox="0 0 20 16" className="w-3.5 h-3 flex-shrink-0">
                  <path d="M1 3 C1 2 2 1 3 1 L8 1 L10 3 L17 3 C18 3 19 4 19 5 L19 14 C19 15 18 16 17 16 L3 16 C2 16 1 15 1 14 Z" fill="#F5C842" />
                </svg>
                {folder?.title ?? win.folderId}
              </button>
            );
          })}
        </div>

        {/* System tray */}
        <div
          className="h-full flex items-center px-3 gap-3 border-l border-white/10"
          style={{
            background: "linear-gradient(180deg, #1040a0 0%, #0d3585 50%, #1040a0 100%)",
            boxShadow: "inset 1px 0 0 rgba(255,255,255,0.15)"
          }}
        >
          {/* Volume icon */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/80" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          </svg>
          <TaskbarClock />
        </div>
      </div>
    </div>
  );
}
