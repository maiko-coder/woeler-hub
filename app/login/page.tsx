"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "Tahoma, Verdana, sans-serif" }}
    >
      {/* XP login background – deep blue gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #082764 0%, #0d3a8e 30%, #1458c8 60%, #0a2a72 100%)",
        }}
      />

      {/* Stars / glow effect */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle 2px at 15% 20%, white 0%, transparent 100%),
            radial-gradient(circle 1px at 80% 10%, white 0%, transparent 100%),
            radial-gradient(circle 1px at 60% 35%, white 0%, transparent 100%),
            radial-gradient(circle 2px at 35% 70%, white 0%, transparent 100%),
            radial-gradient(circle 1px at 90% 55%, white 0%, transparent 100%),
            radial-gradient(circle 1px at 45% 15%, white 0%, transparent 100%),
            radial-gradient(ellipse 600px 400px at 50% 40%, rgba(100,150,255,0.15) 0%, transparent 70%)
          `,
        }}
      />

      {/* Top bar */}
      <div
        className="flex items-center justify-between px-8 py-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.2)" }}
      >
        {/* Windows XP logo style */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            <div className="w-5 h-5 rounded-sm" style={{ background: "#f25022" }} />
            <div className="w-5 h-5 rounded-sm" style={{ background: "#7fba00" }} />
            <div className="w-5 h-5 rounded-sm" style={{ background: "#00a4ef", marginTop: "22px" }} />
            <div className="w-5 h-5 rounded-sm" style={{ background: "#ffb900", marginTop: "22px" }} />
          </div>
          <div>
            <div
              className="text-white font-bold leading-none"
              style={{ fontSize: 22, textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              Woeler Hub
            </div>
            <div className="text-white/50 text-xs leading-none mt-0.5">
              Inloggen
            </div>
          </div>
        </div>

        <div className="text-white/30 text-xs">
          woeler.nl
        </div>
      </div>

      {/* Main login area */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">

          {/* User avatar */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-xl"
              style={{
                background: "linear-gradient(145deg, #4a90e2, #1a5bbf)",
                border: "3px solid rgba(255,255,255,0.3)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(74,144,226,0.3)",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <h2
              className="text-white text-lg font-semibold"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
            >
              Welkom
            </h2>
            <p className="text-white/50 text-xs mt-0.5">
              Voer je gegevens in om in te loggen
            </p>
          </div>

          {/* Login form – XP panel style */}
          <div
            className="rounded-lg overflow-hidden shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <form onSubmit={handleLogin} className="p-6 space-y-4">
              {/* Email */}
              <div>
                <label
                  className="block text-white/70 text-xs mb-1.5 font-medium"
                  htmlFor="email"
                >
                  E-mailadres
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm rounded outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "white",
                    caretColor: "white",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(100,160,255,0.8)";
                    e.target.style.background = "rgba(255,255,255,0.18)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(255,255,255,0.25)";
                    e.target.style.background = "rgba(255,255,255,0.12)";
                  }}
                  placeholder="naam@woeler.nl"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-white/70 text-xs mb-1.5 font-medium"
                  htmlFor="password"
                >
                  Wachtwoord
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm rounded outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "white",
                    caretColor: "white",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(100,160,255,0.8)";
                    e.target.style.background = "rgba(255,255,255,0.18)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(255,255,255,0.25)";
                    e.target.style.background = "rgba(255,255,255,0.12)";
                  }}
                  placeholder="••••••••"
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  className="text-xs px-3 py-2 rounded flex items-start gap-2"
                  style={{
                    background: "rgba(200,50,50,0.25)",
                    border: "1px solid rgba(255,100,100,0.4)",
                    color: "#ffaaaa",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit – XP green button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 text-sm font-bold text-white rounded transition-all mt-2 disabled:opacity-60"
                style={{
                  background: loading
                    ? "linear-gradient(180deg, #3a8a1a 0%, #2a6a10 100%)"
                    : "linear-gradient(180deg, #5dbb3e 0%, #3ca01a 40%, #2f8a10 60%, #4aaf28 100%)",
                  boxShadow: loading
                    ? "inset 0 2px 4px rgba(0,0,0,0.4)"
                    : "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {loading ? "Bezig met inloggen…" : "Aanmelden →"}
              </button>
            </form>
          </div>

          <p className="text-center text-white/30 text-[10px] mt-4">
            Geen account? Neem contact op met een beheerder.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between px-8 py-3 border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.25)" }}
      >
        <span className="text-white/30 text-[10px]">
          © Woeler – Alle rechten voorbehouden
        </span>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#4aaf28", boxShadow: "0 0 4px #4aaf28" }}
          />
          <span className="text-white/30 text-[10px]">Beveiligde verbinding</span>
        </div>
      </div>
    </div>
  );
}
