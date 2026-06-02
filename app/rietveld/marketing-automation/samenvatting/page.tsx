import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#0891B2";
const COLOR_LIGHT = "#ECFEFF";

export default function MarketingAutomationSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Marketing Automation" color={COLOR} basePath="/rietveld/marketing-automation" />

      <div style={{ background: "linear-gradient(135deg, #164e63 0%, #0891b2 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>Marketing Automation · Rietveld Verlichting</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Samenvatting</h1>
          <p style={{ fontSize: 15, opacity: 0.75 }}>De kern van de e-mail strategie op één pagina</p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Vier kernflows</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { num: "01", title: "Welkomst & Onboarding", priority: "Start", desc: "3 e-mails over 7 dagen. Direct → Dag 3 (inspiratie) → Dag 7 (aanbod met vervaldatum).", items: ["Vertrouwen opbouwen vóór producten tonen", "Klikgedrag meten om klantinteresse te bepalen", "Eerste aankoop stimuleren via urgentie-aanbod"] },
            { num: "02", title: "Verlaten Winkelwagen", priority: "Start", desc: "3 e-mails over 48 uur. 60min → 24u → 48u.", items: ["Herinnering zonder korting (60 min)", "Hulp aanbieden + alternatieven (24u)", "Gratis bezorging of €10 korting (48u — laatste kans)"] },
            { num: "03", title: "Post-aankoop & Loyaliteit", priority: "Jaar 1", desc: "4 e-mails over 30 dagen. Direct → Dag 3 → Dag 14 → Dag 30.", items: ["Bevestiging + installatie-tips (retourkans verlagen)", "Review uitnodiging (dag 14 — optimale timing)", "Cross-sell op basis van aankoopcategorie (dag 30)"] },
            { num: "04", title: "Win-back", priority: "Jaar 1", desc: "3 e-mails over 28 dagen bij inactiviteit >90 dagen.", items: ["Inspiratie zonder druk (dag 0)", "Concreet aanbod 15% korting (dag 14)", "Laatste kans of uitschrijven (dag 28 — lijstkwaliteit)"] },
          ].map((f) => {
            const pColor = f.priority === "Start" ? "#dc2626" : "#b45309";
            return (
              <div key={f.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 16, fontWeight: 700, width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.num}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{f.title}</div>
                    <span style={{ background: `${pColor}20`, color: pColor, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>Prioriteit: {f.priority}</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: COLOR, fontWeight: 600, marginBottom: 8 }}>{f.desc}</div>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  {f.items.map((item) => <li key={item} style={{ fontSize: 12, color: "#6b7280", marginBottom: 3, lineHeight: 1.5 }}>{item}</li>)}
                </ul>
              </div>
            );
          })}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>3 strategische principes</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            { t: "Automation boven campagnes", d: "Flows draaien 24/7 en zijn altijd relevant. Nieuwsbrieven zijn eenmalig en generisch. Elke investering in automation betaalt zich terug zolang het platform draait." },
            { t: "Segmentatie als voorwaarde voor relevantie", d: "Eén bericht aan de hele lijst is een gemiste kans. Zelfs een simpele tweedeling (nieuwe vs. terugkerende klanten) verdubbelt de effectiviteit." },
            { t: "Consistente meting en bijsturing", d: "Een e-mailprogramma dat niet gemeten wordt, verbetert niet. Plan de maandelijkse KPI-review als vaste afspraak en handel op de uitkomsten." },
          ].map((p, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 20px", borderLeft: `4px solid ${COLOR}` }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{p.t}</div>
              <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.d}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>KPI-targets (12 maanden)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 32 }}>
          {[
            { l: "Openrate nieuwsbrief", v: "32%" },
            { l: "Click-through rate", v: "5%" },
            { l: "Winkelwagen conv.", v: "11%" },
            { l: "E-mail aandeel omzet", v: "22%" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px", borderTop: `3px solid ${COLOR}`, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: COLOR }}>{k.v}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Eerste 60 dagen — begin hier</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 48 }}>
          {[
            "E-mailplatform kiezen en koppelen aan webshop — zonder dit kan niets starten",
            "Welkomstflow live zetten — elke nieuwe abonnee verdient een goede eerste indruk",
            "Verlaten winkelwagen flow activeren — snelste directe ROI-generator binnen e-mail",
            "Exit-intent pop-up live op webshop + medewerkers instrueren in winkel",
            "Bestaande e-maillijst importeren en opschonen",
          ].map((item, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 12, fontWeight: 700, width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{item}</div>
            </div>
          ))}
        </div>

      </div>
      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Verlichting · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
