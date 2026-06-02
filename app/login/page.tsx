"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Inloggen mislukt");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch {
      setError("Verbindingsfout, probeer opnieuw");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col select-none"
      style={{ fontFamily: "Tahoma, Verdana, sans-serif" }}
    >
      {/* XP blue background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #1c5aba 0%, #2b6dd4 40%, #1a54b8 100%)",
        }}
      />

      {/* Main area – split screen */}
      <div className="flex-1 flex flex-col">

        {/* Top divider line (XP orange/yellow accent) */}
        <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #e8a020 0%, #f5c842 50%, #e8a020 100%)" }} />

        {/* Split content */}
        <div className="flex-1 flex">

          {/* LEFT PANEL */}
          <div
            className="flex flex-col items-center justify-center gap-8 px-12"
            style={{ width: "42%", borderRight: "1px solid rgba(255,255,255,0.2)" }}
          >
            {/* Woeler W logo */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #FF8C3A, #CC4A00)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <span
                  className="text-white font-black"
                  style={{ fontSize: 56, lineHeight: 1, textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
                >
                  W
                </span>
              </div>

              <div className="text-center">
                <div
                  className="text-white font-bold"
                  style={{ fontSize: 28, textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
                >
                  Woeler
                </div>
                <div
                  className="text-white/60 text-sm italic"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  Hub
                </div>
              </div>
            </div>

            <p
              className="text-white text-center text-base"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)", maxWidth: 220 }}
            >
              Om te beginnen, klik op je gebruikersnaam
            </p>
          </div>

          {/* RIGHT PANEL – user list */}
          <div
            className="flex-1 flex flex-col justify-center px-12 gap-4"
          >
            {!selected ? (
              /* User tile – click to expand */
              <button
                onClick={() => setSelected(true)}
                className="flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-150 group"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  maxWidth: 340,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                }}
              >
                {/* User icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(145deg, #4facf7, #1a6bc8)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>

                <div>
                  <div
                    className="text-white font-semibold text-base"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                  >
                    Woeler medewerker
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">
                    Klik om in te loggen →
                  </div>
                </div>
              </button>
            ) : (
              /* Expanded login form */
              <form
                onSubmit={handleLogin}
                className="rounded-lg overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  maxWidth: 340,
                }}
              >
                {/* User header */}
                <div
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ background: "rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(145deg, #4facf7, #1a6bc8)" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                    Woeler medewerker
                  </span>
                </div>

                <div className="px-4 py-4 space-y-3">
                  <div>
                    <input
                      type="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="E-mailadres"
                      className="w-full px-3 py-2 text-sm rounded outline-none"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "white",
                        caretColor: "white",
                      }}
                      onFocus={(e) => { e.target.style.border = "1px solid rgba(120,180,255,0.9)"; }}
                      onBlur={(e) => { e.target.style.border = "1px solid rgba(255,255,255,0.3)"; }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Wachtwoord"
                      className="flex-1 px-3 py-2 text-sm rounded outline-none"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "white",
                        caretColor: "white",
                      }}
                      onFocus={(e) => { e.target.style.border = "1px solid rgba(120,180,255,0.9)"; }}
                      onBlur={(e) => { e.target.style.border = "1px solid rgba(255,255,255,0.3)"; }}
                    />
                    {/* XP green arrow button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-60"
                      title="Aanmelden"
                      style={{
                        background: "linear-gradient(180deg, #5dbb3e 0%, #3ca01a 50%, #4aaf28 100%)",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                      }}
                    >
                      {loading ? (
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10" strokeOpacity={0.3} />
                          <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                          <path d="M8 5l8 7-8 7" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {error && (
                    <div
                      className="text-xs px-2 py-1.5 rounded"
                      style={{ background: "rgba(200,50,50,0.3)", color: "#ffaaaa", border: "1px solid rgba(255,100,100,0.3)" }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => { setSelected(false); setError(""); }}
                    className="text-white/40 text-[10px] hover:text-white/70 transition-colors"
                  >
                    ← Terug naar gebruikerslijst
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #e8a020 0%, #f5c842 50%, #e8a020 100%)" }} />

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-6 py-3"
          style={{ background: "linear-gradient(180deg, #1040a0 0%, #0d3585 100%)" }}
        >
          {/* Turn off button */}
          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs transition-all hover:bg-white/10"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              fontFamily: "Tahoma, sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
            onClick={() => window.close()}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(145deg, #4a7fc8, #1a3a8a)" }}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="white">
                <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
              </svg>
            </div>
            Computer uitzetten
          </button>

          <p
            className="text-white/50 text-[10px] text-right max-w-xs"
            style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
          >
            Na het inloggen kun je accountbeheer vinden via de beheerder.
          </p>
        </div>
      </div>
    </div>
  );
}
