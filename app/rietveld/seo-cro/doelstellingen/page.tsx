import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#16A34A";
const COLOR_LIGHT = "#F0FDF4";

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

export default function SeoCroDoelstellingen() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="SEO / CRO" color={COLOR} basePath="/rietveld/seo-cro" />

      <div style={{ background: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>SEO & CRO · Rietveld Licht</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Doelstellingen & KPI&apos;s</h1>
          <div style={{ display: "flex", gap: 32, marginTop: 24 }}>
            {[{ l: "Huidige conversieratio", v: "2,41%" }, { l: "Doel conversieratio", v: "2,6–2,8%" }, { l: "Organisch effect", v: "+5–10%" }, { l: "ROAS-effect", v: "+0,1–0,2×" }].map((m) => (
              <div key={m.l}><div style={{ fontSize: 11, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div><div style={{ fontSize: 26, fontWeight: 700 }}>{m.v}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>SEO — doelstellingen & verwacht effect</h2>
        <Table
          headers={["Actie", "Impact", "Inspanning", "Verwacht effect", "Tijdshorizon"]}
          rows={[
            ["Alt-teksten (989 pagina's)", <Badge key="a" c="#dc2626">Hoog</Badge>, "Middel", "+2–4% verkeer via Afbeeldingen", "Direct"],
            ["Product + Offer schema", <Badge key="b" c="#dc2626">Zeer hoog</Badge>, "Middel", "+3–8% CTR productpagina's", "Direct"],
            ["Breadcrumb schema", <Badge key="c" c="#dc2626">Hoog</Badge>, "Laag", "+2–5% CTR sitebreed", "Direct"],
            ["FAQ schema", <Badge key="d" c="#dc2626">Hoog</Badge>, "Laag", "+2–5% CTR (uitklapbare FAQ)", "Direct"],
            ["Hreflang fixes", <Badge key="e" c="#dc2626">Hoog</Badge>, "Middel", "Internationaal verlies stoppen", "Direct"],
            ["Categorieteksten uitbreiden", <Badge key="f" c="#b45309">Hoog</Badge>, "Hoog", "+3–8% organisch verkeer", "3–6 maanden"],
            ["Interne linking optimaliseren", <Badge key="g" c="#b45309">Hoog</Badge>, "Middel", "Ondersteunt categorierankings", "Indirect"],
            ["2 SEO-blogs per maand", <Badge key="h" c="#6b7280">Middel</Badge>, "Hoog", "Moeilijk meetbaar", "6–12 maanden"],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>CRO — doelstellingen per fase</h2>
        <Table
          headers={["Actie", "Vertrouwen", "Verwacht effect", "Inspanning"]}
          rows={[
            ["Mobiel menu + USP-balk", <Badge key="a" c="#16a34a">Zeker</Badge>, "+0,2–0,6% rel. conv.rate mobiel", "Laag"],
            ["Review score prominenter", <Badge key="b" c="#16a34a">Zeker</Badge>, "+0,2–0,8% rel. conv.rate sitebreed", "Laag"],
            ["Winkelwagen sticky desktop", <Badge key="c" c="#16a34a">Zeker</Badge>, "+0,1–0,4% rel. minder afhaken", "Laag"],
            ["Actielabels productkaarten", <Badge key="d" c="#b45309">Twijfel</Badge>, "+2–5% rel. doorklik naar product", "Middel"],
            ["Klarna / Afterpay integreren", <Badge key="e" c="#b45309">Twijfel</Badge>, "+0,5–1,5% conv.rate bij orders >€150", "Middel"],
            ["Filtering naar zijbalk", <Badge key="f" c="#b45309">Twijfel</Badge>, "+0,5–2% conv.rate categoriepagina's", "Middel"],
            ["Chatfunctie expert advies", <Badge key="g" c="#b45309">Twijfel</Badge>, "+0,2–0,8% conv.rate productpagina's", "Middel"],
            ["Upsell module winkelwagen", <Badge key="h" c="#b45309">Twijfel</Badge>, "AOV +1–3% (~€2–5/order)", "Hoog"],
            ["Homepage herontwerp", <Badge key="i" c="#dc2626">Onzeker</Badge>, "Onduidelijk — A/B-test vereist", "Hoog"],
          ]}
        />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>Totaaldoelstellingen na implementatie</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 24 }}>
          {[
            { l: "Organisch verkeer (SEO fase 1+2)", n: "Basis", g: "+5–10% na 3–6 mnd" },
            { l: "CTR-verbetering (structured data)", n: "Basis", g: "+3–7% relatief" },
            { l: "Conversieratio (CRO fase 1+2)", n: "2,41%", g: "2,6–2,8%" },
            { l: "ROAS-effect (indirect via CRO)", n: "—", g: "+0,1–0,2× accountbreed" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "20px", borderTop: `3px solid ${COLOR}` }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                <span style={{ fontSize: 13, color: "#9ca3af" }}>Nu: {k.n}</span>
                <span style={{ fontSize: 11, color: "#d1d5db" }}>→</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: COLOR }}>{k.g}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodologische noot */}
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "20px 24px", marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Methodologische noot</div>
          <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, margin: 0 }}>
            Alle vermelde percentages zijn <strong>relatieve verbeteringen</strong> ten opzichte van de huidige waarden, niet absolute toevoegingen. Een CTR-verbetering van +5% op een huidige CTR van 4,0% resulteert in 4,2%, niet 9,0%. Schattingen zijn gebaseerd op sectorgemiddelden — werkelijke resultaten zijn afhankelijk van implementatiekwaliteit en concurrentiepositie.
          </p>
        </div>

      </div>
      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht & Wonen · Mei 2026 · Opgesteld door Woeler</p>
      </footer>
    </div>
  );
}
