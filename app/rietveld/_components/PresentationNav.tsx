"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PresentationNavProps {
  channel: string;
  color: string;
  basePath: string;
}

export default function PresentationNav({ channel, color, basePath }: PresentationNavProps) {
  const path = usePathname();

  const tabs = [
    { label: "Compleet", href: `${basePath}/compleet` },
    { label: "Samenvatting", href: `${basePath}/samenvatting` },
    { label: "Doelstellingen", href: `${basePath}/doelstellingen` },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: 56,
          gap: 8,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#6b7280",
            fontSize: 13,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 8px",
            borderRadius: 6,
            transition: "background 0.15s",
          }}
        >
          ← Hub
        </Link>
        <span style={{ color: "#d1d5db", fontSize: 13 }}>›</span>
        <span style={{ color: "#9ca3af", fontSize: 13 }}>Rietveld</span>
        <span style={{ color: "#d1d5db", fontSize: 13 }}>›</span>
        <span style={{ color, fontSize: 13, fontWeight: 600 }}>{channel}</span>

        <div style={{ flex: 1 }} />

        <div style={{ display: "flex", gap: 2 }}>
          {tabs.map((tab) => {
            const active = path === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                style={{
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  color: active ? color : "#6b7280",
                  background: active ? `${color}18` : "transparent",
                  borderRadius: 6,
                  textDecoration: "none",
                  borderBottom: active ? `2px solid ${color}` : "2px solid transparent",
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
