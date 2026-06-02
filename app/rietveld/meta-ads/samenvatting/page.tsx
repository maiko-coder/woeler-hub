import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#1877F2";
const COLOR_LIGHT = "#EBF3FF";

export default function MetaAdsSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Meta Ads" color={COLOR} basePath="/rietveld/meta-ads" />

      <div style={{ background: "linear-gradient(135deg, #1558b0 0%, #1877f2 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>Meta Ads · Rietveld Licht</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Samenvatting</h1>
          <p style={{ fontSize: 15, opacity: 0.75 }}>Kern van de analyse en aanbevelingen op één pagina</p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Accountprestaties (sept 2023 – mei 2026)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
          {[
            { l: "Omzet ROAS", v: "15,74x", sub: "Totale periode" },
            { l: "Totaal spend", v: "€115k", sub: "Totale periode" },
            { l: "POAS", v: "9,46x", sub: "aug 2024 – mei 2026" },
            { l: "CPA", v: "€17,78", sub: "kosten per aankoop" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px", borderTop: `3px solid ${COLOR}` }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k.l}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#1f2937" }}>{k.v}</div>
              <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: COLOR_LIGHT, borderLeft: `4px solid ${COLOR}`, borderRadius: 8, padding: "14px 18px", marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: "#1558b0", lineHeight: 1.7, fontWeight: 500 }}>
            Het account presteert ruim boven de minimale ROAS-doelstelling van 6x voor Nederland. De POAS-tracking via Conversions API is een geavanceerde implementatie die de meeste concurrenten niet hebben en die optimalisatie op winstgevendheid mogelijk maakt.
          </p>
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Top campagnes</h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead><tr style={{ background: "#f9fafb" }}>{["Campagnetype", "ROAS", "POAS", "Beoordeling"].map((h) => <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                { n: "RTG USP 2026", r: "69,6x", p: "40,93x", b: "Uitzonderlijk sterk", bc: "#dcfce7", tc: "#15803d" },
                { n: "StoreTraffic (showroom)", r: "35,6x", p: "20,25x", b: "Zeer sterk", bc: "#dcfce7", tc: "#15803d" },
                { n: "Retargeting RTG ROAS", r: "12,7x", p: "7,11x", b: "Sterk", bc: "#dcfce7", tc: "#15803d" },
                { n: "Advantage+ Shopping", r: "14,8x", p: "8,18x", b: "Solide", bc: "#dcfce7", tc: "#15803d" },
                { n: "Qvisits (branding)", r: "0,76x", p: "—", b: "Bewust brandingdoel", bc: "#fef3c7", tc: "#b45309" },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
                  <td style={{ padding: "10px 14px", color: "#111827", fontWeight: 500 }}>{row.n}</td>
                  <td style={{ padding: "10px 14px", color: "#374151", fontWeight: 600 }}>{row.r}</td>
                  <td style={{ padding: "10px 14px", color: "#374151" }}>{row.p}</td>
                  <td style={{ padding: "10px 14px" }}><span style={{ background: row.bc, color: row.tc, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{row.b}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>3 directe prioriteiten</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            { num: "01", t: "Pixel koppelen aan catalogus (DPA's)", d: "Grootste technische gemiste kans. Verwachte retargeting ROAS stijgt van 29x naar 35–45x. Lage inspanning, maximale impact.", color: "#fee2e2", tc: "#dc2626" },
            { num: "02", t: "Budgetverschuiving op basis van POAS", d: "65+ vrouwen krijgen 22% van budget op 3,10x POAS. 55–64 mannen presteren op 31,10x op slechts 5,8% budget. Verschuiving -20% → +ROAS direct.", color: COLOR_LIGHT, tc: COLOR },
            { num: "03", t: "Event match quality verbeteren (q_visit)", d: "Score nu 4,9/10, doel 7+. Betere kwaliteit verbetert doelgroepoptimalisatie van Qvisits-campagnes significant.", color: "#fef3c7", tc: "#b45309" },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 16 }}>
              <div style={{ background: p.color, color: p.tc, fontSize: 18, fontWeight: 700, width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Groeidoelstellingen</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { l: "Blended ROAS NL", n: "16,36x", g: "≥20x (fase 3)" },
            { l: "POAS", n: "9,46x", g: "≥13x (fase 3)" },
            { l: "CPA webshop", n: "€17,18", g: "≤€15 (fase 3)" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px", borderTop: `3px solid ${COLOR}`, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4 }}>Nu: {k.n}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: COLOR }}>{k.g}</div>
            </div>
          ))}
        </div>

      </div>
      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht B.V. · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
