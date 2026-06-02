import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#2563EB";
const COLOR_LIGHT = "#EFF6FF";

export default function GoogleAdsSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Google Ads" color={COLOR} basePath="/rietveld/google-ads" />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>Google Ads · Rietveld Licht</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Samenvatting</h1>
          <p style={{ fontSize: 15, opacity: 0.75 }}>Overzicht van accountprestaties en prioriteiten</p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        {/* Top KPIs */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>
          Accountprestaties op een rij
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { label: "Spend (huidig jaar)", value: "€2,1M", delta: "+67% t.o.v. vorig jaar", pos: true },
            { label: "Omzet", value: "€12,5M", delta: "+52% t.o.v. vorig jaar", pos: true },
            { label: "Account ROAS", value: "5,87", delta: "Was 6,43 vorig jaar", pos: false },
            { label: "CPA", value: "€31,85", delta: "Was €26 vorig jaar", pos: false },
          ].map((k) => (
            <div key={k.label} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px 20px", borderTop: `3px solid ${COLOR}` }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.label}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#1f2937", marginBottom: 4 }}>{k.value}</div>
              <div style={{ fontSize: 11, color: k.pos ? "#16a34a" : "#ef4444", fontWeight: 600 }}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Conclusie */}
        <div style={{ background: COLOR_LIGHT, borderLeft: `4px solid ${COLOR}`, borderRadius: 8, padding: "16px 20px", marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: "#1e40af", lineHeight: 1.7, fontWeight: 500 }}>
            Het account is het afgelopen jaar fors gegroeid. De ROAS-daling van 6,43 naar 5,87 is een normaal patroon bij opschalen. Er is concrete ruimte om de structuur scherper te maken en de efficiëntie te verhogen.
          </p>
        </div>

        {/* Campagne overzicht */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>
          Campagnes — huidige prestaties
        </h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                {["Campagne", "ROAS Nu", "Doel", "Prioriteit"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Wolves / Sheep", now: "~5,2", goal: "5,5+", prio: "Medium", color: "#fef3c7", tc: "#b45309" },
                { name: "Bestsellers", now: "3,88", goal: "4,5–5,0", prio: "Hoog", color: "#fee2e2", tc: "#dc2626" },
                { name: "Sale", now: "3,44", goal: "4,0+", prio: "Hoog", color: "#fee2e2", tc: "#dc2626" },
                { name: "Premium €400+ (nieuw)", now: "12–13x", goal: "8,0+ (op €75–100k)", prio: "Kans", color: "#dcfce7", tc: "#16a34a" },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
                  <td style={{ padding: "10px 14px", color: "#111827", fontWeight: 500 }}>{row.name}</td>
                  <td style={{ padding: "10px 14px", color: "#374151", fontWeight: 600 }}>{row.now}</td>
                  <td style={{ padding: "10px 14px", color: COLOR, fontWeight: 600 }}>{row.goal}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <span style={{ background: row.color, color: row.tc, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{row.prio}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 prioriteiten */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>
          Top 3 prioriteiten
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            {
              num: "01",
              title: "tROAS instellen op Bestsellers & Sale",
              desc: "€420k spend op campagnes zonder doelstelling — tROAS instellen verwacht ROAS van ~3,6 naar 4,0–4,5 te brengen",
              color: "#fee2e2",
              tc: "#dc2626",
            },
            {
              num: "02",
              title: "Premium €400+ campagne opschalen",
              desc: "Segment haalt 12–13x ROAS op €12k spend. Opschalen naar €75–100k levert +€350–500k extra omzet op",
              color: "#dcfce7",
              tc: "#16a34a",
            },
            {
              num: "03",
              title: "PMax splitsen op producttype",
              desc: "Spots, inbouwlampen en tafellampen concurreren nu met hanglampen — splitsing geeft elk type eigen budget en doel",
              color: COLOR_LIGHT,
              tc: COLOR,
            },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ background: p.color, color: p.tc, fontSize: 18, fontWeight: 700, width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 6-maanden doel */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>
          Doel over 6 maanden
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { label: "Account ROAS", now: "5,87", goal: "6,3 – 6,5" },
            { label: "CPA", now: "€31,85", goal: "€27 – 29" },
            { label: "Omzetgroei", now: "—", goal: "+8 – 12%" },
          ].map((k) => (
            <div key={k.label} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px 20px", borderTop: `3px solid ${COLOR}`, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{k.label}</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4 }}>Nu: {k.now}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: COLOR }}>{k.goal}</div>
            </div>
          ))}
        </div>

      </div>

      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht & Wonen · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
