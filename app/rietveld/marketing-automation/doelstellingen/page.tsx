import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#0891B2";
const COLOR_LIGHT = "#ECFEFF";

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr style={{ background: "#f9fafb" }}>{headers.map((h, i) => <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>{row.map((cell, j) => <td key={j} style={{ padding: "10px 14px", color: "#374151", borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none" }}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function MarketingAutomationDoelstellingen() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Marketing Automation" color={COLOR} basePath="/rietveld/marketing-automation" />

      <div style={{ background: "linear-gradient(135deg, #164e63 0%, #0891b2 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>Marketing Automation · Rietveld Verlichting</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Doelstellingen & KPI&apos;s</h1>
          <div style={{ display: "flex", gap: 32, marginTop: 24 }}>
            {[{ l: "Openrate doel jaar 1", v: "32%" }, { l: "CTR doel jaar 1", v: "5%" }, { l: "Winkelwagen conv. doel", v: "11%" }, { l: "Omzetaandeel doel jaar 1", v: "22%" }].map((m) => (
              <div key={m.l}><div style={{ fontSize: 11, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div><div style={{ fontSize: 26, fontWeight: 700 }}>{m.v}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>E-mail performance KPI&apos;s</h2>
        <Table
          headers={["KPI", "Streefwaarde", "Doel 12 maanden", "Doel 24 maanden"]}
          rows={[
            ["Gem. openrate (nieuwsbrief)", ">28%", "32%", "38%"],
            ["Gem. click-through rate", ">3,5%", "5%", "7%"],
            ["Automation openrate (flows)", ">42%", "48%", "55%"],
            ["Verlaten winkelwagen conversie", ">8%", "11%", "14%"],
            ["Uitschrijfpercentage per mailing", "<0,3%", "<0,25%", "<0,2%"],
            ["Spamklachtpercentage", "<0,08%", "<0,05%", "<0,04%"],
            ["Lijstgroei (netto, per maand)", "+3%", "+4%", "+5%"],
            ["Aandeel e-mail in online omzet", ">18%", "22%", "30%"],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>Business KPI&apos;s</h2>
        <Table
          headers={["KPI", "Streefwaarde", "Doel 12 maanden", "Doel 24 maanden"]}
          rows={[
            ["Herhaalaankooppercentage (via e-mail)", ">20%", "25%", "35%"],
            ["Gem. orderwaarde e-mailtraffic", "+10% vs overig", "+12%", "+18%"],
            ["Customer Lifetime Value actief segment", "Groei t.o.v. inactief", "+20%", "+35%"],
            ["B2B leads gegenereerd via e-mail (kwartaal)", ">15", "20+", "40+"],
            ["Post-purchase NPS score", ">40", ">48", ">55"],
            ["Review-conversie na uitnodiging", ">8%", "12%", "15%"],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>Flow-specifieke doelstellingen</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { title: "Flow 1 — Welkomst & Onboarding", kpis: [{ l: "Openrate", v: ">55%" }, { l: "Klik op Dag-7 aanbod", v: ">12%" }, { l: "Conversie binnen 14 dagen", v: ">8%" }] },
            { title: "Flow 2 — Verlaten Winkelwagen", kpis: [{ l: "Openrate e-mail 1", v: ">60%" }, { l: "Conversie na 3 e-mails", v: ">11%" }, { l: "Recovery per periode", v: "Meten" }] },
            { title: "Flow 3 — Post-aankoop", kpis: [{ l: "Review-conversie", v: ">12%" }, { l: "Cross-sell klikratio", v: ">8%" }, { l: "Retourpercentage effect", v: "-15% rel." }] },
            { title: "Flow 4 — Win-back", kpis: [{ l: "Re-activatie na flow", v: ">15%" }, { l: "Uitschrijfpercentage flow", v: "<5%" }, { l: "Lijstkwaliteit verbetering", v: "Meten" }] },
          ].map((f) => (
            <div key={f.title} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>{f.title}</div>
              {f.kpis.map((k) => (
                <div key={k.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f9fafb" }}>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>{k.l}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: COLOR }}>{k.v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Segmentatie-doelstellingen</h2>
        <div style={{ background: COLOR_LIGHT, borderLeft: `4px solid ${COLOR}`, borderRadius: 8, padding: "16px 20px", marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: "#164e63", lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
            Segmentatie is geen extra functie maar de randvoorwaarde voor effectieve e-mail marketing. Het doel is om binnen 6 maanden minimaal 3 gedragssegmenten actief te draaien: nieuwe klanten, actieve klanten en slapende klanten. Elke segment ontvangt een andere content-mix die automatisch wordt samengesteld op basis van aankoophistorie en engagementgedrag.
          </p>
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Prioriteitenmatrix — implementatie</h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 48 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead><tr style={{ background: "#f9fafb" }}>{["Actie", "Prioriteit", "Impact", "Tijdshorizon"].map((h) => <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                { a: "Platform koppelen aan webshop", p: "Start", i: "Randvoorwaarde", t: "Week 1–2", pc: "#dc2626" },
                { a: "Welkomstflow live (Flow 1)", p: "Start", i: "Hoog", t: "Week 2–3", pc: "#dc2626" },
                { a: "Verlaten winkelwagen (Flow 2)", p: "Start", i: "Hoog (directe ROI)", t: "Week 3–4", pc: "#dc2626" },
                { a: "Opt-in zichtbaar webshop + winkel", p: "Start", i: "Lijstgroei", t: "Week 2", pc: "#dc2626" },
                { a: "Lijst importeren en opschonen", p: "Start", i: "Deliverability", t: "Week 1", pc: "#dc2626" },
                { a: "Post-aankoop flow (Flow 3)", p: "Jaar 1", i: "Loyaliteit + reviews", t: "Maand 2–3", pc: "#b45309" },
                { a: "Win-back flow (Flow 4)", p: "Jaar 1", i: "Lijstkwaliteit", t: "Maand 3–4", pc: "#b45309" },
                { a: "Dynamische personalisatie", p: "Jaar 1+", i: "Relevantie", t: "Maand 6+", pc: "#0891b2" },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
                  <td style={{ padding: "10px 14px", color: "#111827", fontWeight: 500 }}>{row.a}</td>
                  <td style={{ padding: "10px 14px" }}><span style={{ background: `${row.pc}20`, color: row.pc, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{row.p}</span></td>
                  <td style={{ padding: "10px 14px", color: "#374151" }}>{row.i}</td>
                  <td style={{ padding: "10px 14px", color: "#6b7280" }}>{row.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Verlichting · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
