"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MinesweeperGame from "./_components/MinesweeperGame";

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

function IconRooms() {
  return (
    <XpIcon from="#a78bfa" to="#5b21b6">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="14" rx="1" fill="white" fillOpacity={0.15} />
        <path d="M3 10h18" />
        <path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
        <rect x="9" y="13" width="6" height="5" rx="0.5" fill="white" fillOpacity={0.4} />
        <line x1="12" y1="13" x2="12" y2="18" />
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

// ── New tool icons ────────────────────────────────────────────────────────────

function IconGoogleAds() {
  return (
    <XpIcon from="#34a853" to="#1a7a35">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <text x="12" y="14" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" stroke="none" fontFamily="Arial,sans-serif">G</text>
        <rect x="4" y="16" width="4" height="5" rx="0.5" fill="white" fillOpacity={0.8} />
        <rect x="10" y="13" width="4" height="8" rx="0.5" fill="white" fillOpacity={0.8} />
        <rect x="16" y="10" width="4" height="11" rx="0.5" fill="white" fillOpacity={0.8} />
      </svg>
    </XpIcon>
  );
}

function IconMetaAds() {
  return (
    <XpIcon from="#1877F2" to="#0c52bb">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 14c-2.5 0-4.7-1.2-6-3.1.1-2 4-3.1 6-3.1 2.1 0 5.9 1.1 6 3.1-1.3 1.9-3.5 3.1-6 3.1z" fillOpacity={0.9} />
      </svg>
    </XpIcon>
  );
}

function IconMetaContentCalendar() {
  return (
    <XpIcon from="#1877F2" to="#0c52bb">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" fill="white" fillOpacity={0.12} />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <rect x="7" y="14" width="3" height="3" rx="0.5" fill="white" fillOpacity={0.7} stroke="none" />
        <rect x="14" y="14" width="3" height="3" rx="0.5" fill="white" fillOpacity={0.4} stroke="none" />
      </svg>
    </XpIcon>
  );
}

function IconPinterestAds() {
  return (
    <XpIcon from="#e60023" to="#a3001a">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" fillOpacity={0.95}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.2 1.23-5.2s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.63-3.5-3.63-2.39 0-3.79 1.79-3.79 3.64 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.11-.52-1.8-2.14-1.8-3.44 0-2.8 2.03-5.37 5.85-5.37 3.07 0 5.46 2.19 5.46 5.11 0 3.05-1.92 5.5-4.58 5.5-.89 0-1.73-.46-2.02-1.01l-.55 2.05c-.2.77-.74 1.73-1.1 2.32.83.26 1.71.4 2.62.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </XpIcon>
  );
}

function IconMicrosoftAds() {
  return (
    <XpIcon from="#0078d4" to="#004f8f">
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect x="3" y="3" width="8.5" height="8.5" fill="#f25022" rx="0.5" />
        <rect x="12.5" y="3" width="8.5" height="8.5" fill="#7fba00" rx="0.5" />
        <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00a4ef" rx="0.5" />
        <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#ffb900" rx="0.5" />
      </svg>
    </XpIcon>
  );
}

function IconTikTokAds() {
  return (
    <XpIcon from="#1a1a2e" to="#16213e">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.73z" fillOpacity={0.9} />
      </svg>
    </XpIcon>
  );
}

function IconGmail() {
  return (
    <XpIcon from="#EA4335" to="#b5170a">
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="white" fillOpacity={0.2} stroke="white" strokeWidth={1.5} />
        <polyline points="2,6 12,13 22,6" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" />
      </svg>
    </XpIcon>
  );
}

function IconGoogleAgenda() {
  return (
    <XpIcon from="#4285F4" to="#1a56c4">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" fill="white" fillOpacity={0.15} />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <text x="12" y="18" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" stroke="none" fontFamily="Arial,sans-serif">31</text>
      </svg>
    </XpIcon>
  );
}

function IconGoogleSheets() {
  return (
    <XpIcon from="#0F9D58" to="#076b39">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1.5" fill="white" fillOpacity={0.15} />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="13" x2="20" y2="13" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <line x1="9" y1="8" x2="9" y2="22" />
        <line x1="14" y1="8" x2="14" y2="22" />
      </svg>
    </XpIcon>
  );
}

function IconGoogleDrive() {
  return (
    <XpIcon from="#1a73e8" to="#0d47a1">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <polygon points="12,3 22,20 2,20" fill="white" fillOpacity={0.15} stroke="white" strokeWidth={1.5} strokeLinejoin="round" />
        <polygon points="12,3 18,14 6,14" fill="white" fillOpacity={0.4} stroke="none" />
        <line x1="2" y1="20" x2="22" y2="20" stroke="white" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    </XpIcon>
  );
}

function IconLookerStudio() {
  return (
    <XpIcon from="#4285F4" to="#1967d2">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" fill="white" fillOpacity={0.1} />
        <path d="M7 16 Q9 8 12 8 Q15 8 17 16" fill="white" fillOpacity={0.3} stroke="white" strokeWidth={1.5} />
        <line x1="7" y1="16" x2="17" y2="16" />
        <circle cx="12" cy="12" r="2" fill="white" fillOpacity={0.8} stroke="none" />
      </svg>
    </XpIcon>
  );
}

function IconMonday() {
  return (
    <XpIcon from="#FF3D57" to="#c42040">
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <circle cx="6" cy="12" r="3.5" fill="#FF9F1C" />
        <circle cx="13" cy="12" r="3.5" fill="white" fillOpacity={0.9} />
        <circle cx="20" cy="12" r="3.5" fill="#00C875" />
      </svg>
    </XpIcon>
  );
}

function IconLastPass() {
  return (
    <XpIcon from="#CC0000" to="#8b0000">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" fill="white" fillOpacity={0.2} />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="white" stroke="none" />
        <line x1="12" y1="17.5" x2="12" y2="19" />
      </svg>
    </XpIcon>
  );
}

function IconClaude() {
  return (
    <XpIcon from="#d4763b" to="#9a4a1a">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <path d="M12 3C8.5 3 6 5.5 5 8.5L3 17h3l1-3h10l1 3h3l-2-8.5C18 5.5 15.5 3 12 3zm-2.5 8.5L11 6.5h2l1.5 5H9.5z" fillOpacity={0.9} />
      </svg>
    </XpIcon>
  );
}

function IconChatGPT() {
  return (
    <XpIcon from="#10a37f" to="#05694f">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" fillOpacity={0.95}>
        <path d="M20.5 9.5a4.5 4.5 0 0 0-3.5-4.4A4.5 4.5 0 0 0 8.5 4a4.5 4.5 0 0 0-4.4 3.5A4.5 4.5 0 0 0 3.5 14.5a4.5 4.5 0 0 0 3.5 4.4A4.5 4.5 0 0 0 15.5 20a4.5 4.5 0 0 0 4.4-3.5 4.5 4.5 0 0 0 .6-7zm-9 8a3 3 0 0 1-2.9-2.2l-.1-.5.4-.3c.5-.3 1-.5 1.6-.5h2c.6 0 1.1.2 1.6.5l.4.3-.1.5A3 3 0 0 1 11.5 17.5zm-3.5-7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
      </svg>
    </XpIcon>
  );
}

function IconGemini() {
  return (
    <XpIcon from="#4285F4" to="#8b00ff">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fillOpacity={0.95} />
      </svg>
    </XpIcon>
  );
}

function IconEnvato() {
  return (
    <XpIcon from="#81b441" to="#4a7a18">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" fillOpacity={0.9}>
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l6.5 3.6-2.2 1.2L12 6.5 7.7 9.1 5.5 7.9 12 4.3zM5 9.2l2.2 1.2v4.4L5 13.6V9.2zm12 0v4.4l-2.2 1.2v-4.4L17 9.2zm-3.3 5.6L12 16l-1.7-1.2V10l1.7.9 1.7-.9v4.8z" />
      </svg>
    </XpIcon>
  );
}

function IconCanva() {
  return (
    <XpIcon from="#7d2ae8" to="#4a0ea8">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" fillOpacity={0.95}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5c-.4.4-1 .5-1.5.2l-2-1.2-2 1.2c-.5.3-1.1.2-1.5-.2-.4-.4-.5-1-.2-1.5l1.2-2-1.2-2c-.3-.5-.2-1.1.2-1.5.4-.4 1-.5 1.5-.2l2 1.2 2-1.2c.5-.3 1.1-.2 1.5.2.4.4.5 1 .2 1.5l-1.2 2 1.2 2c.3.5.2 1.1-.2 1.5z" />
      </svg>
    </XpIcon>
  );
}

function IconFireflies() {
  return (
    <XpIcon from="#6c3fc5" to="#3d1a8a">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" fillOpacity={0.95}>
        <path d="M12 3c-1.2 2.4-3.5 3.8-6 4 2 1.5 3.2 3.8 3 6.5 1.8-2 4.5-3 7-2.5-1.5-2-1.8-4.8-.5-7C14.5 5.5 13.2 4 12 3z" />
        <circle cx="17.5" cy="6" r="1.5" fillOpacity={0.7} />
        <circle cx="7" cy="17" r="1.2" fillOpacity={0.6} />
        <circle cx="19" cy="15" r="1" fillOpacity={0.5} />
      </svg>
    </XpIcon>
  );
}

function IconTagManager() {
  return (
    <XpIcon from="#4285F4" to="#1a56c4">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="white" fillOpacity={0.15} stroke="white" strokeWidth={1.5} />
        <path d="M8 12l3 3 5-6" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        <text x="12" y="9" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="white" stroke="none" fontFamily="Arial,sans-serif">GTM</text>
      </svg>
    </XpIcon>
  );
}

function IconAnalytics() {
  return (
    <XpIcon from="#E37400" to="#a34e00">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="14" width="4" height="7" rx="0.5" fill="white" fillOpacity={0.9} />
        <rect x="10" y="9" width="4" height="12" rx="0.5" fill="white" fillOpacity={0.9} />
        <rect x="17" y="4" width="4" height="17" rx="0.5" fill="white" fillOpacity={0.9} />
      </svg>
    </XpIcon>
  );
}

function IconMerchant() {
  return (
    <XpIcon from="#34a853" to="#1a7a35">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" fill="white" fillOpacity={0.15} />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    </XpIcon>
  );
}

function IconMinesweeper() {
  return (
    <XpIcon from="#4a9a4a" to="#1a6a1a">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        {/* Grid */}
        <rect x="3" y="3" width="18" height="18" rx="2" fill="white" fillOpacity={0.15} stroke="white" strokeWidth={1.5} />
        <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth={1} strokeOpacity={0.7} />
        <line x1="3" y1="15" x2="21" y2="15" stroke="white" strokeWidth={1} strokeOpacity={0.7} />
        <line x1="9" y1="3" x2="9" y2="21" stroke="white" strokeWidth={1} strokeOpacity={0.7} />
        <line x1="15" y1="3" x2="15" y2="21" stroke="white" strokeWidth={1} strokeOpacity={0.7} />
        {/* Mine */}
        <circle cx="12" cy="12" r="3" fill="white" />
        <line x1="12" y1="7" x2="12" y2="17" stroke="white" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="8.9" y1="8.9" x2="15.1" y2="15.1" stroke="white" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="15.1" y1="8.9" x2="8.9" y2="15.1" stroke="white" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    </XpIcon>
  );
}

function IconDocFull() {
  return (
    <XpIcon from="#4169e1" to="#1a3aa0">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="white" fillOpacity={0.2} />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
        <line x1="8" y1="9" x2="11" y2="9" />
      </svg>
    </XpIcon>
  );
}

function IconDocSummary() {
  return (
    <XpIcon from="#27ae60" to="#0d6b30">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="white" fillOpacity={0.2} />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    </XpIcon>
  );
}

function IconDocGoal() {
  return (
    <XpIcon from="#f97316" to="#c2410c">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="white" fillOpacity={0.15} />
        <circle cx="12" cy="12" r="6" fill="white" fillOpacity={0.15} />
        <circle cx="12" cy="12" r="2" fill="white" fillOpacity={0.6} />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    </XpIcon>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

type IconType = "link" | "folder" | "game";

interface DesktopIcon {
  id: string;
  name: string;
  type: IconType;
  url?: string;
  folderId?: string;
  desktopHidden?: boolean;
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

const folderDefs: FolderDef[] = [];

const groups: Group[] = [
  {
    label: "Inhouse Tools",
    icons: [
      { id: "adoptimizer", name: "AdOptimizer", type: "link", url: "https://adoptimizer.nl", Icon: IconAdOptimizer },
      { id: "meta-optimizer", name: "Meta Optimizer", type: "link", url: "https://www.meta-optimizer.nl", Icon: IconMetaOptimizer },
      { id: "intake", name: "Intake", type: "link", url: "https://intake.woeler.nl", Icon: IconIntake },
    ],
  },
  {
    label: "Tools",
    icons: [
      { id: "monday", name: "Monday", type: "link", url: "https://monday.com", Icon: IconMonday },
      { id: "lastpass", name: "LastPass", type: "link", url: "https://www.lastpass.com", Icon: IconLastPass },
      { id: "betty", name: "Betty Blocks", type: "link", url: "https://woeler.bettyblocks.com/", Icon: IconBetty },
      { id: "nmbrs", name: "Nmbrs", type: "link", url: "https://connect.visma.com/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dvismanmbrs%26response_type%3Dcode%2520id_token%26scope%3Demail%2520openid%2520profile%2520offline_access%2520graphapi%253Aread%26response_mode%3Dform_post%26nonce%3Dnonce%26state%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL2xvZ2luLm5tYnJzYXBwLmNvbSJ9.h0uNG5FFnaNEIvp3JnvF2rLrPq386Sx85BmD0YAzy7F7kj9rR6I53TpAckveUiHWtZvyrnE7ByhI1_3WNKNLVw%26redirect_uri%3Dhttps%253A%252F%252Fcorebff.nmbrsapp.com%252Fapi%252Fuseraccount%252Flogin%252Fsignin-oidc", Icon: IconNmbrs },
    ],
  },
  {
    label: "Ad Platformen",
    icons: [
      { id: "google-ads", name: "Google Ads", type: "link", url: "https://ads.google.com", Icon: IconGoogleAds },
      { id: "meta-ads", name: "Meta Ads", type: "link", url: "https://adsmanager.facebook.com", Icon: IconMetaAds },
      { id: "pinterest-ads", name: "Pinterest Ads", type: "link", url: "https://ads.pinterest.com", Icon: IconPinterestAds },
      { id: "microsoft-ads", name: "Microsoft Ads", type: "link", url: "https://ads.microsoft.com", Icon: IconMicrosoftAds },
      { id: "tiktok-ads", name: "TikTok Ads", type: "link", url: "https://ads.tiktok.com", Icon: IconTikTokAds },
    ],
  },
  {
    label: "Google",
    icons: [
      { id: "gmail", name: "Gmail", type: "link", url: "https://mail.google.com", Icon: IconGmail },
      { id: "agenda", name: "Agenda", type: "link", url: "https://calendar.google.com", Icon: IconGoogleAgenda },
      { id: "sheets", name: "Sheets", type: "link", url: "https://docs.google.com/spreadsheets", Icon: IconGoogleSheets },
      { id: "drive", name: "Drive", type: "link", url: "https://drive.google.com", Icon: IconGoogleDrive },
      { id: "datastudio", name: "Datastudio", type: "link", url: "https://lookerstudio.google.com", Icon: IconLookerStudio },
      { id: "analytics", name: "Analytics", type: "link", url: "https://analytics.google.com", Icon: IconAnalytics },
      { id: "tagmanager", name: "Tag Manager", type: "link", url: "https://tagmanager.google.com", Icon: IconTagManager },
      { id: "merchant", name: "Merchant", type: "link", url: "https://merchants.google.com", Icon: IconMerchant },
      { id: "minesweeper", name: "Minesweeper", type: "game", desktopHidden: true, Icon: IconMinesweeper },
    ],
  },
  {
    label: "Overzichten",
    icons: [
      { id: "masteroverzicht", name: "Masteroverzicht", type: "link", url: "https://docs.google.com/spreadsheets/d/1aN7l4TnXLXGIBmspGnTukyTkJ3wzCscHVPe-nIbxzCs/edit?gid=1011232414#gid=1011232414", Icon: IconMasteroverzicht },
      { id: "sales", name: "Sales", type: "link", url: "https://docs.google.com/spreadsheets/d/1UurKWRkc8E9cK8V0lVGbprYBH-A5gHuqMTV76oBT85M/edit?ts=6005ac02#gid=1447656458", Icon: IconSales },
    ],
  },
  {
    label: "AI",
    icons: [
      { id: "claude", name: "Claude", type: "link", url: "https://claude.ai", Icon: IconClaude },
      { id: "chatgpt", name: "ChatGPT", type: "link", url: "https://chatgpt.com", Icon: IconChatGPT },
      { id: "gemini", name: "Gemini", type: "link", url: "https://gemini.google.com", Icon: IconGemini },
      { id: "envato", name: "Envato", type: "link", url: "https://app.envato.com", Icon: IconEnvato },
      { id: "canva", name: "Canva", type: "link", url: "https://www.canva.com", Icon: IconCanva },
      { id: "fireflies", name: "Fireflies", type: "link", url: "https://fireflies.ai", Icon: IconFireflies },
    ],
  },
  {
    label: "Content",
    icons: [
      { id: "meta-content-calendar", name: "Meta Kalender", type: "link", url: "https://business.facebook.com/latest/content_calendar", Icon: IconMetaContentCalendar },
    ],
  },
  {
    label: "Intern",
    icons: [
      { id: "auto", name: "Pool auto", type: "link", url: "https://auto.woeler.nl", Icon: IconAuto },
      { id: "rooms", name: "Rooms", type: "link", url: "https://reservations.bettywebblocks.com/calendars/room", Icon: IconRooms },
    ],
  },
];

// ── XP Explorer Window ────────────────────────────────────────────────────────

interface WinState {
  instanceId: string;
  type: "folder" | "minesweeper";
  folderId?: string;
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
  const folder = win.type === "folder" ? folderDefs.find((f) => f.id === win.folderId) : undefined;;
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
      style={{ left: win.pos.x, top: win.pos.y, zIndex: win.zIndex, width: win.type === "minesweeper" ? "auto" : 560 }}
      onMouseDown={() => onFocus(win.instanceId)}
    >
      {/* Drop shadow */}
      <div className="rounded-t-lg overflow-hidden" style={{ boxShadow: "4px 4px 16px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.3)" }}>

        {/* Title bar */}
        <div
          className="flex items-center gap-2.5 px-3 py-2.5 cursor-move"
          style={{
            background: "linear-gradient(180deg, #2a6dd4 0%, #1a50b8 50%, #1848a8 100%)",
            borderBottom: "1px solid #1035a0",
          }}
          onMouseDown={startDrag}
        >
          {/* Title icon */}
          {win.type === "minesweeper" ? (
            <span className="text-base flex-shrink-0">💣</span>
          ) : (
            <svg viewBox="0 0 20 16" className="w-5 h-4 flex-shrink-0">
              <path d="M1 3 C1 2 2 1 3 1 L8 1 L10 3 L17 3 C18 3 19 4 19 5 L19 14 C19 15 18 16 17 16 L3 16 C2 16 1 15 1 14 Z" fill="#F5C842" />
              <path d="M1 5.5 L19 5.5 L19 14 C19 15 18 16 17 16 L3 16 C2 16 1 15 1 14 Z" fill="#F9D959" />
            </svg>
          )}
          <span className="text-white text-sm font-bold flex-1 truncate" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
            {win.type === "minesweeper" ? "Minesweeper" : folder?.title ?? ""}
          </span>
          {/* Window controls */}
          <div className="flex gap-1.5">
            <button
              onClick={() => onMinimize(win.instanceId)}
              className="w-6 h-6 rounded-sm flex items-center justify-center text-white text-xs font-bold hover:brightness-125"
              style={{ background: "linear-gradient(180deg, #4a8ae8 0%, #2a5ac8 100%)", border: "1px solid #1035a0" }}
              title="Minimaliseren"
            >─</button>
            <button
              className="w-6 h-6 rounded-sm flex items-center justify-center text-white text-xs hover:brightness-125 opacity-40 cursor-not-allowed"
              style={{ background: "linear-gradient(180deg, #4a8ae8 0%, #2a5ac8 100%)", border: "1px solid #1035a0" }}
              title="Maximaliseren (niet beschikbaar)"
            >□</button>
            <button
              onClick={() => onClose(win.instanceId)}
              className="w-6 h-6 rounded-sm flex items-center justify-center text-white text-xs font-bold hover:brightness-125"
              style={{ background: "linear-gradient(180deg, #e85050 0%, #c02020 100%)", border: "1px solid #901010" }}
              title="Sluiten"
            >✕</button>
          </div>
        </div>

        {win.type === "minesweeper" ? (
          /* Minesweeper content */
          <div className="flex items-center justify-center p-3" style={{ background: "#c0c0c0" }}>
            <MinesweeperGame />
          </div>
        ) : (
          <>
            {/* Address bar */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 text-[11px] text-gray-700"
              style={{ background: "#ece9d8", borderBottom: "1px solid #b0a890" }}
            >
              <span className="text-gray-500">Adres:</span>
              <span className="font-semibold">Bureaublad \ {folder?.title}</span>
            </div>

            {/* Content */}
            <div
              className="min-h-[160px] p-4"
              style={{ background: "white", borderTop: "1px solid #dfdfdf" }}
            >
              {!folder || folder.items.length === 0 ? (
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
              {folder?.items.length ?? 0} object{(folder?.items.length ?? 0) !== 1 ? "en" : ""}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Desktop icon tile ─────────────────────────────────────────────────────────

function DesktopIconTile({ icon, onOpenFolder }: { icon: DesktopIcon; onOpenFolder: (id: string) => void }) {
  const [selected, setSelected] = useState(false);

  if (icon.desktopHidden) return null;

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

function StartMenu({ onClose, onOpenFolder, onOpenGame }: { onClose: () => void; onOpenFolder: (id: string) => void; onOpenGame: (gameId: string) => void }) {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data?.name) setUserName(data.name); })
      .catch(() => {});
  }, []);

  const displayName = userName ?? "Woeler";
  const initials = displayName
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

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
            {initials}
          </div>
          <div>
            <div className="text-white font-bold text-sm" style={{ fontFamily: "Tahoma, sans-serif" }}>{displayName}</div>
            <div className="text-white/70 text-[11px]" style={{ fontFamily: "Tahoma, sans-serif" }}>Hub gebruiker</div>
          </div>
        </div>

        {/* Body: two columns */}
        <div className="flex" style={{ background: "#fff" }}>
          {/* Left: grouped apps – scrollable */}
          <div className="flex-1 border-r border-gray-200 overflow-y-auto" style={{ maxHeight: 420 }}>
            {groups.map((group) => (
              <div key={group.label}>
                {/* Group label */}
                <div className="px-3 pt-2 pb-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">
                  {group.label}
                </div>
                {group.icons.map((item) => {
                  const iconEl = (
                    <div className="flex-shrink-0 overflow-hidden rounded" style={{ width: 22, height: 22 }}>
                      <div style={{ transform: "scale(0.458)", transformOrigin: "top left", width: 48, height: 48 }}>
                        <item.Icon />
                      </div>
                    </div>
                  );
                  const label = (
                    <span className="text-[12px] text-gray-800 group-hover:text-white truncate" style={{ fontFamily: "Tahoma, sans-serif" }}>
                      {item.name}
                    </span>
                  );
                  if (item.type === "folder" && item.folderId) {
                    return (
                      <button
                        key={item.id}
                        onClick={() => { onClose(); onOpenFolder(item.folderId!); }}
                        className="w-full flex items-center gap-2 px-3 py-1 hover:bg-[#316ac5] group text-left"
                      >
                        {iconEl}{label}
                      </button>
                    );
                  }
                  if (item.type === "game") {
                    return (
                      <button
                        key={item.id}
                        onClick={() => { onClose(); onOpenGame(item.id); }}
                        className="w-full flex items-center gap-2 px-3 py-1 hover:bg-[#316ac5] group text-left"
                      >
                        {iconEl}{label}
                      </button>
                    );
                  }
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="flex items-center gap-2 px-3 py-1 hover:bg-[#316ac5] group"
                    >
                      {iconEl}{label}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right: places */}
          <div className="w-36 py-2 bg-[#dce5f5] flex-shrink-0">
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

// ── Modern dark minimal theme ─────────────────────────────────────────────────

// Flat monochrome icon wrapper for modern theme
function FlatIcon({ Icon }: { Icon: () => React.ReactElement }) {
  return (
    <div
      style={{
        width: 44, height: 44, borderRadius: 11,
        background: "rgba(0,0,0,0.05)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ filter: "saturate(0.85) brightness(1.05)", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ transform: "scale(0.9)", transformOrigin: "center" }}>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function ModernWindow({ win, onClose, onFocus, onMinimize, onMove, onOpenFolder }: XpWindowProps) {
  const folder = win.type === "folder" ? folderDefs.find((f) => f.id === win.folderId) : undefined;
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
      onMove(win.instanceId, { x: e.clientX - dragOffset.current.dx, y: e.clientY - dragOffset.current.dy });
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

  const title = win.type === "minesweeper" ? "Minesweeper" : (folder?.title ?? "");

  return (
    <div
      className="fixed select-none"
      style={{ left: win.pos.x, top: win.pos.y, zIndex: win.zIndex, width: win.type === "minesweeper" ? "auto" : 560 }}
      onMouseDown={() => onFocus(win.instanceId)}
    >
      <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.08)" }}>
        {/* Title bar */}
        <div
          className="flex items-center px-4 gap-3 cursor-move"
          style={{ height: 42, background: "#f5f5f7", borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}
          onMouseDown={startDrag}
        >
          <div className="flex gap-1.5 flex-shrink-0">
            <button onClick={() => onClose(win.instanceId)} className="group w-3 h-3 rounded-full flex items-center justify-center" style={{ background: "#ff5f57" }}>
              <svg viewBox="0 0 8 8" className="w-1.5 h-1.5 opacity-0 group-hover:opacity-80" fill="none" stroke="#7a0000" strokeWidth={1.5}><line x1="1.5" y1="1.5" x2="6.5" y2="6.5" /><line x1="6.5" y1="1.5" x2="1.5" y2="6.5" /></svg>
            </button>
            <button onClick={() => onMinimize(win.instanceId)} className="group w-3 h-3 rounded-full flex items-center justify-center" style={{ background: "#febc2e" }}>
              <svg viewBox="0 0 8 8" className="w-1.5 h-1.5 opacity-0 group-hover:opacity-80" fill="none" stroke="#7a5000" strokeWidth={1.5}><line x1="1.5" y1="4" x2="6.5" y2="4" /></svg>
            </button>
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840", opacity: 0.35 }} />
          </div>
          <span className="flex-1 text-center text-[13px] font-medium" style={{ color: "rgba(0,0,0,0.55)", letterSpacing: "-0.01em" }}>
            {title}
          </span>
          <div className="w-14 flex-shrink-0" />
        </div>

        {/* Content */}
        {win.type === "minesweeper" ? (
          <div className="flex items-center justify-center p-5" style={{ background: "#ffffff" }}>
            <MinesweeperGame />
          </div>
        ) : (
          <div className="p-5 min-h-[200px]" style={{ background: "#ffffff" }}>
            {!folder || folder.items.length === 0 ? (
              <div className="flex items-center justify-center h-24 text-[13px]" style={{ color: "rgba(0,0,0,0.25)" }}>
                Deze map is leeg
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {folder.items.map((item) => (
                  <button
                    key={item.id}
                    className="flex flex-col items-center gap-2 w-[72px] p-2 rounded-xl cursor-pointer transition-all"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={() => {
                      if (item.type === "link" && item.url) window.open(item.url, "_blank");
                      else if (item.type === "folder" && item.folderId) onOpenFolder(item.folderId);
                    }}
                  >
                    <FlatIcon Icon={item.Icon} />
                    <span className="text-[10px] text-center leading-tight break-words max-w-full" style={{ color: "rgba(0,0,0,0.45)" }}>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ModernMenuBar({ onSwitchTheme, searchQuery, onSearchChange }: {
  onSwitchTheme: () => void;
  searchQuery: string;
  onSearchChange: (v: string) => void;
}) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="flex items-center px-5 gap-4 z-50 flex-shrink-0 select-none"
      style={{ height: 44, background: "#ffffff", borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <div className="w-6 h-6 rounded-md flex items-center justify-center text-white font-black text-sm" style={{ background: "linear-gradient(145deg, #FF8C3A, #CC4A00)", fontSize: 13 }}>W</div>
        <span className="font-semibold text-[13px]" style={{ color: "rgba(0,0,0,0.7)", letterSpacing: "-0.01em" }}>Woeler Hub</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 flex-1 max-w-xs mx-auto px-3 py-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.05)", border: "0.5px solid rgba(0,0,0,0.1)" }}>
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 flex-shrink-0 pointer-events-none" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth={1.5}>
          <circle cx="6.5" cy="6.5" r="4.5" /><line x1="10" y1="10" x2="14" y2="14" />
        </svg>
        <input
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Zoeken…"
          className="flex-1 text-[12px] outline-none bg-transparent"
          style={{ color: "rgba(0,0,0,0.7)", caretColor: "#000" }}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 flex-shrink-0" style={{ color: "rgba(0,0,0,0.4)", fontSize: 12 }}>
        <span style={{ color: "rgba(0,0,0,0.55)" }}>
          {time.toLocaleTimeString("nl-NL", { weekday: "short", hour: "2-digit", minute: "2-digit" })}
        </span>
        <button
          onClick={onSwitchTheme}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all"
          style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.45)", border: "0.5px solid rgba(0,0,0,0.1)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.09)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.05)"; }}
          title="Wisselen naar Windows XP"
        >
          XP
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

let winCounter = 0;

export default function Home() {
  const [theme, setTheme] = useState<"xp" | "modern">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("woeler-hub-theme");
      if (saved === "modern" || saved === "xp") return saved;
    }
    return "xp";
  });
  const [startOpen, setStartOpen] = useState(false);
  const [launchpadOpen, setLaunchpadOpen] = useState(false);
  const [modernSearch, setModernSearch] = useState("");
  const [windows, setWindows] = useState<WinState[]>([]);
  const maxZ = useRef(100);

  function openFolder(folderId: string) {
    const existing = windows.find((w) => w.type === "folder" && w.folderId === folderId && !w.minimized);
    if (existing) { focusWindow(existing.instanceId); return; }
    maxZ.current += 1;
    const id = `win-${++winCounter}`;
    setWindows((ws) => [
      ...ws,
      {
        instanceId: id,
        type: "folder",
        folderId,
        zIndex: maxZ.current,
        pos: {
          x: Math.max(40, (window.innerWidth - 560) / 2 + ws.length * 24),
          y: Math.max(40, (window.innerHeight - 320) / 2 + ws.length * 24 - 40),
        },
        minimized: false,
      },
    ]);
  }

  function openMinesweeper() {
    const existing = windows.find((w) => w.type === "minesweeper" && !w.minimized);
    if (existing) { focusWindow(existing.instanceId); return; }
    maxZ.current += 1;
    const id = `win-${++winCounter}`;
    setWindows((ws) => [
      ...ws,
      {
        instanceId: id,
        type: "minesweeper",
        zIndex: maxZ.current,
        pos: {
          x: Math.max(40, (window.innerWidth - 260) / 2 + ws.length * 24),
          y: Math.max(80, (window.innerHeight - 320) / 2 + ws.length * 24 - 40),
        },
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

  function switchTheme() {
    setTheme((t) => {
      const next = t === "xp" ? "modern" : "xp";
      localStorage.setItem("woeler-hub-theme", next);
      return next;
    });
    setStartOpen(false);
    setLaunchpadOpen(false);
  }

  if (theme === "modern") {
    const q = modernSearch.trim().toLowerCase();
    const filteredGroups = groups
      .map((g) => ({
        ...g,
        icons: g.icons.filter((i) => !i.desktopHidden && (q === "" || i.name.toLowerCase().includes(q))),
      }))
      .filter((g) => g.icons.length > 0);

    return (
      <div className="h-screen flex flex-col overflow-hidden" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif", background: "#f5f5f7" }}>
        {/* Subtle background */}
        <div className="absolute inset-0 -z-10" style={{ background: "#f5f5f7" }} />

        {/* Floating ModernWindows */}
        {windows.map((win) => (
          <ModernWindow key={win.instanceId} win={win} onClose={closeWindow} onFocus={focusWindow} onMinimize={minimizeWindow} onMove={moveWindow} onOpenFolder={openFolder} />
        ))}

        <ModernMenuBar onSwitchTheme={switchTheme} searchQuery={modernSearch} onSearchChange={setModernSearch} />

        {/* App grid */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl px-8 py-10">
            {filteredGroups.map((group) => (
              <div key={group.label} className="mb-8">
                {/* Group header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                    {group.label}
                  </span>
                  <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
                </div>

                {/* Icons */}
                <div className="flex flex-wrap gap-1">
                  {group.icons.map((icon) => {
                    const tileClass = "flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer select-none transition-all duration-100";
                    const tileStyle = { width: 78, background: "transparent" };
                    const iconEl = (
                      <>
                        <FlatIcon Icon={icon.Icon} />
                        <span className="text-[11px] text-center leading-tight w-full truncate" style={{ color: "rgba(0,0,0,0.45)" }}>
                          {icon.name}
                        </span>
                      </>
                    );

                    const hoverIn = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.background = "rgba(0,0,0,0.05)");
                    const hoverOut = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.background = "transparent");

                    if (icon.type === "folder" && icon.folderId) {
                      return (
                        <button key={icon.id} className={tileClass} style={tileStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut} onClick={() => openFolder(icon.folderId!)}>
                          {iconEl}
                        </button>
                      );
                    }
                    if (icon.type === "game") {
                      return (
                        <button key={icon.id} className={tileClass} style={tileStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut} onClick={openMinesweeper}>
                          {iconEl}
                        </button>
                      );
                    }
                    return (
                      <a key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer" className={tileClass} style={tileStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                        {iconEl}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar — open windows */}
        {windows.length > 0 && (
          <div
            className="flex items-center gap-2 px-5 flex-shrink-0"
            style={{ height: 44, background: "#ffffff", borderTop: "0.5px solid rgba(0,0,0,0.08)" }}
          >
            <span className="text-[10px] uppercase tracking-widest mr-2 flex-shrink-0" style={{ color: "rgba(0,0,0,0.25)" }}>Open</span>
            {windows.map((win) => {
              const folder = win.type === "folder" ? folderDefs.find((f) => f.id === win.folderId) : undefined;
              const label = win.type === "minesweeper" ? "Minesweeper" : (folder?.title ?? "Venster");
              return (
                <button
                  key={win.instanceId}
                  onClick={() => win.minimized ? restoreWindow(win.instanceId) : minimizeWindow(win.instanceId)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[12px] transition-all flex-shrink-0"
                  style={{
                    background: win.minimized ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.08)",
                    color: win.minimized ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.65)",
                    border: "0.5px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: win.minimized ? "rgba(0,0,0,0.2)" : "#28c840" }} />
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>
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

      {/* Desktop icons area — responsive columns */}
      <div className="flex-1 overflow-y-auto pt-4 px-3 pb-2">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, max-content))",
            alignItems: "start",
            gap: "16px 8px",
          }}
        >
          {groups.map((group) => (
            <div key={group.label} style={{ minWidth: 84 }}>
              {/* Group label */}
              <div className="mb-1 pl-1">
                <span
                  className="text-[9px] text-white/65 uppercase tracking-widest whitespace-nowrap"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.9)" }}
                >
                  {group.label}
                </span>
              </div>
              {/* Icons wrap within the group column */}
              <div className="flex flex-row flex-wrap gap-0.5">
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
        {startOpen && <StartMenu onClose={() => setStartOpen(false)} onOpenFolder={(id) => { setStartOpen(false); openFolder(id); }} onOpenGame={(id) => { setStartOpen(false); if (id === "minesweeper") openMinesweeper(); }} />}

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
            const folder = win.type === "folder" ? folderDefs.find((f) => f.id === win.folderId) : undefined;
            const title = win.type === "minesweeper" ? "Minesweeper" : (folder?.title ?? win.folderId ?? "Venster");
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
                {win.type === "minesweeper" ? (
                  <span className="text-xs flex-shrink-0">💣</span>
                ) : (
                  <svg viewBox="0 0 20 16" className="w-3.5 h-3 flex-shrink-0">
                    <path d="M1 3 C1 2 2 1 3 1 L8 1 L10 3 L17 3 C18 3 19 4 19 5 L19 14 C19 15 18 16 17 16 L3 16 C2 16 1 15 1 14 Z" fill="#F5C842" />
                  </svg>
                )}
                {title}
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
          {/* Theme switch button */}
          <button
            onClick={switchTheme}
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-white/15 text-[10px]"
            style={{ fontFamily: "Tahoma, sans-serif" }}
            title="Wisselen naar modern thema"
          >
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth={1} fill="none" />
              <path d="M8 1.5 A6.5 6.5 0 0 1 8 14.5 Z" fill="currentColor" />
            </svg>
            <span>Thema</span>
          </button>
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
