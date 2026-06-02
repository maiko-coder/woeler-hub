import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#16A34A";
const COLOR_LIGHT = "#F0FDF4";

export default function SeoCroSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="SEO / CRO" color={COLOR} basePath="/rietveld/seo-cro" />

      <div style={{ background: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)", color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>SEO & CRO · Rietveld Licht</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Samenvatting</h1>
          <p style={{ fontSize: 15, opacity: 0.75 }}>Kern van de bevindingen en prioriteiten op één pagina</p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        {/* Uitgangspositie */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Uitgangspositie</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
          {[
            { l: "Health Score", v: "92/100", sub: "Technisch sterk" },
            { l: "Huidige conv.rate", v: "2,41%", sub: "Sitebreed" },
            { l: "Mobiel conv.rate", v: "2,26%", sub: "69% van verkeer" },
            { l: "Desktop conv.rate", v: "3,12%", sub: "31% van verkeer" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px", borderTop: `3px solid ${COLOR}` }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k.l}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#1f2937" }}>{k.v}</div>
              <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: COLOR_LIGHT, borderLeft: `4px solid ${COLOR}`, borderRadius: 8, padding: "14px 18px", marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: "#15803d", lineHeight: 1.7, fontWeight: 500 }}>
            De technische basis is sterk. De grootste SEO-kansen liggen niet in de techniek maar in structured data en content. CRO-verbeteringen zijn direct meetbaar via conversieratio en verhogen de ROAS van alle betaalde kanalen automatisch mee.
          </p>
        </div>

        {/* SEO prioriteiten */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>SEO — top prioriteiten</h2>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead><tr style={{ background: "#f9fafb" }}>{["Actie", "Impact", "Inspanning", "Effect"].map((h) => <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                { a: "Product + Offer schema (2.340 productpagina's)", i: "Zeer hoog", e: "Middel", r: "+3–8% CTR productpagina's", rc: "#dc2626" },
                { a: "FAQ + Breadcrumb schema", i: "Hoog", e: "Laag", r: "+2–5% CTR sitebreed", rc: "#dc2626" },
                { a: "Alt-teksten (989 pagina's)", i: "Hoog", e: "Middel", r: "+2–4% via Google Afbeeldingen", rc: "#dc2626" },
                { a: "Hreflang fixes (424 pagina's)", i: "Hoog", e: "Middel", r: "Internationaal verlies stoppen", rc: "#b45309" },
                { a: "Categorieteksten uitbreiden", i: "Hoog", e: "Hoog", r: "+3–8% organisch na 4–6 mnd", rc: "#b45309" },
                { a: "2 SEO-blogs per maand", i: "Middel", e: "Hoog", r: "Effect na 6–12 maanden", rc: "#6b7280" },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
                  <td style={{ padding: "10px 14px", color: "#111827", fontWeight: 500 }}>{row.a}</td>
                  <td style={{ padding: "10px 14px" }}><span style={{ background: `${row.rc}20`, color: row.rc, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{row.i}</span></td>
                  <td style={{ padding: "10px 14px", color: "#6b7280" }}>{row.e}</td>
                  <td style={{ padding: "10px 14px", color: "#374151" }}>{row.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CRO prioriteiten */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>CRO — top prioriteiten</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            { num: "01", t: "Review score prominenter (9,4 / 24.450 reviews)", d: "Uitzonderlijk sterk social proof — nu statisch en nauwelijks zichtbaar op het beslissingsmoment. Reviewslider homepage + badge bij checkout.", c: "#dcfce7", tc: "#16a34a" },
            { num: "02", t: "Mobiel menu + USP-balk verbeteren", d: "69% verkeer is mobiel maar converteert 27% slechter dan desktop. Transparant menu en hoge USP-balk zijn aantoonbare frictie. Lage inspanning.", c: "#dcfce7", tc: "#16a34a" },
            { num: "03", t: "Winkelwagen sticky op desktop", d: "Verdwijnt nu bij scrollen — gemiste kans op het moment dat iemand klaar is om te kopen. Technisch eenvoudig.", c: "#dcfce7", tc: "#16a34a" },
            { num: "04", t: "Klarna / Afterpay integreren", d: "Gemiddelde orderwaarde €183–246 — spreid betalen verlaagt aankoopdrempel. Eerst checkout-uitvaldata analyseren voor beslissing.", c: "#fef3c7", tc: "#b45309" },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 16 }}>
              <div style={{ background: p.c, color: p.tc, fontSize: 16, fontWeight: 700, width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Resultaten */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20 }}>Verwachte resultaten (3–6 maanden)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { l: "Organisch verkeer", n: "Basis", g: "+5–10%" },
            { l: "Conversieratio doel", n: "2,41%", g: "2,6–2,8%" },
            { l: "ROAS-effect (indirect)", n: "—", g: "+0,1–0,2×" },
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
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht & Wonen · Mei 2026 · Opgesteld door Woeler</p>
      </footer>
    </div>
  );
}
