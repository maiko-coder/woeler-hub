import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#1877F2";
const COLOR_LIGHT = "#EBF3FF";

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
function Badge({ children, c }: { children: React.ReactNode; c: string }) {
  return <span style={{ display: "inline-block", background: `${c}20`, color: c, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{children}</span>;
}

export default function MetaAdsDoelstellingen() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Meta Ads" color={COLOR} basePath="/rietveld/meta-ads" />

      <div style={{ background: "linear-gradient(135deg, #1558b0 0%, #1877f2 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>Meta Ads · Rietveld Licht</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Doelstellingen & KPI&apos;s</h1>
          <div style={{ display: "flex", gap: 32, marginTop: 24 }}>
            {[{ l: "Huidig blended ROAS", v: "16,36x" }, { l: "Streef ROAS jaar 1", v: "≥20x" }, { l: "Huidig POAS", v: "9,46x" }, { l: "Streef POAS jaar 1", v: "≥13x" }].map((m) => (
              <div key={m.l}><div style={{ fontSize: 11, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div><div style={{ fontSize: 26, fontWeight: 700 }}>{m.v}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>ROAS-doelstellingen per markt</h2>
        <Table
          headers={["Markt", "Min. ROAS", "Streef ROAS", "Huidig", "Status"]}
          rows={[
            ["NL blended", "6x", "10x", "16,36x", <Badge key="a" c="#16a34a">Ruim boven target</Badge>],
            ["NL conversie only", "4x", "12x", "13–35x", <Badge key="b" c="#16a34a">Boven target</Badge>],
            ["BE uitrol fase 2", "5x", "8x", "n.v.t.", <Badge key="c" c="#b45309">Op te starten</Badge>],
            ["DE uitrol fase 3", "5x", "7x", "n.v.t.", <Badge key="d" c="#b45309">Op te starten</Badge>],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>KPI&apos;s per fase</h2>
        <Table
          headers={["KPI", "Huidig", "Fase 1 (mnd 1–2)", "Fase 2 (mnd 3–6)", "Fase 3 (mnd 7–12)"]}
          rows={[
            ["Blended ROAS NL", "16,36x", "≥16x", "≥18x", "≥20x"],
            ["POAS", "9,46x", "≥9,5x", "≥11x", "≥13x"],
            ["CPA (webshop)", "€17,18", "≤€20", "≤€18", "≤€15"],
            ["Event match quality q_visit", "4,9/10", "5,5+", "7,0+", "7,5+"],
            ["DPA ROAS", "n.v.t.", "n.v.t.", "30x+", "40x+"],
            ["E-mail opt-ins via Lead Ads/mnd", "0", "n.v.t.", "200+", "400+"],
            ["StoreTraffic CPA", "€8,67", "€8–10", "€6–8", "€5–7"],
            ["Bereik brandingcampagnes", "Basis", "Meten", "+20% t.o.v. basis", "+35% t.o.v. basis"],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>Prioriteitenmatrix</h2>
        <Table
          headers={["Actie", "Impact", "Inspanning", "Fase", "Prioriteit"]}
          rows={[
            ["Pixel koppelen aan catalogus (DPA's)", <Badge key="a" c="#dc2626">Zeer hoog</Badge>, "Laag", "1", "Direct"],
            ["Budgetverschuiving doelgroepen op POAS", <Badge key="b" c="#dc2626">Hoog</Badge>, "Laag", "1", "Direct"],
            ["Event match quality verbeteren", <Badge key="c" c="#dc2626">Hoog</Badge>, "Middel", "1", "Direct"],
            ["POAS-waardeparameter valideren", <Badge key="d" c="#dc2626">Hoog</Badge>, "Laag", "1", "Direct"],
            ["DPA retargeting verlaten winkelwagen", <Badge key="e" c="#dc2626">Zeer hoog</Badge>, "Middel", "2", "Fase 2"],
            ["Meta Lead Ads + e-mailflow", <Badge key="f" c="#b45309">Hoog</Badge>, "Middel", "2", "Fase 2"],
            ["België uitrollen", <Badge key="g" c="#b45309">Hoog</Badge>, "Laag", "2", "Fase 2"],
            ["StoreTraffic budget opschalen", <Badge key="h" c="#b45309">Hoog</Badge>, "Laag", "2", "Fase 2"],
            ["Duitsland uitrollen (Lumidora)", <Badge key="i" c="#16a34a">Hoog</Badge>, "Hoog", "3", "Fase 3"],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>Onderbouwing ROAS-doelstellingen</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {[
            {
              num: "01",
              t: "Budgetverschuiving naar beter presterende doelgroepen",
              d: "65+ vrouwen ontvangen 22% van het budget op 3,10x POAS. 55–64 mannen presteren 31,10x POAS op slechts 5,8% budget. Een verschuiving van 20% kost geen extra euro maar verhoogt de blended ROAS structureel.",
            },
            {
              num: "02",
              t: "Activering van dynamische productadvertenties (DPA's)",
              d: "Huidige retargeting draait al op 29,37x ROAS zonder productspecifieke personalisatie. Na DPA-activering verwachten wij een ROAS van 34–40x. De RTG VarB USP campagne liet al 81x ROAS zien als benchmark voor wat relevante retargeting kan doen.",
            },
            {
              num: "03",
              t: "Betere verantwoording brandingbudget",
              d: "Qvisits vertegenwoordigt 37% van Meta-budget en genereert 2,2% van aankopen op 0,76x ROAS. Door awareness en conversie gescheiden te rapporteren, wordt de werkelijke conversie-ROAS zichtbaar: al 25–35x.",
            },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px 20px" }}>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 18, fontWeight: 700, width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.num}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{p.t}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.d}</div>
                </div>
              </div>
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
