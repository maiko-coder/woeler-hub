import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#16A34A";
const COLOR_LIGHT = "#F0FDF4";

function H1({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>{children}</h2>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: 15, fontWeight: 600, color: COLOR, marginBottom: 8, marginTop: 24 }}>{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 12 }}>{children}</p>;
}
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
function Callout({ title, items, variant = "green" }: { title: string; items: string[]; variant?: "green" | "amber" | "red" | "blue" }) {
  const map = { green: { bg: COLOR_LIGHT, border: COLOR, tc: "#15803d" }, amber: { bg: "#fffbeb", border: "#f59e0b", tc: "#b45309" }, red: { bg: "#fef2f2", border: "#ef4444", tc: "#dc2626" }, blue: { bg: "#eff6ff", border: "#2563eb", tc: "#1d4ed8" } };
  const s = map[variant];
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: "14px 18px", marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: s.tc, marginBottom: 6 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>{items.map((item, i) => <li key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 4, lineHeight: 1.6 }}>{item}</li>)}</ul>
    </div>
  );
}
function Badge({ children, c }: { children: React.ReactNode; c: string }) {
  return <span style={{ display: "inline-block", background: `${c}20`, color: c, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{children}</span>;
}

export default function SeoCroCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="SEO / CRO" color={COLOR} basePath="/rietveld/seo-cro" />

      <div style={{ background: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)", color: "white", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>SEO & CRO Analyse · Rietveld Licht & Wonen · Mei 2026</div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>SEO & CRO<br />Complete Presentatie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>Zoekmachineoptimalisatie en conversie-optimalisatie voor rietveldlicht.nl</p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[{ l: "Health Score", v: "92/100" }, { l: "Huidige conv.rate", v: "2,41%" }, { l: "Mobiel conv.rate", v: "2,26%" }, { l: "Desktop conv.rate", v: "3,12%" }].map((m) => (
              <div key={m.l}><div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div><div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        {/* SEO Deel */}
        <div style={{ background: COLOR_LIGHT, borderRadius: 10, padding: "16px 20px", marginBottom: 32, borderLeft: `4px solid ${COLOR}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#15803d", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Deel 1 — SEO</div>
          <P>Rietveldlicht.nl staat technisch sterk met een Health Score van 92/100. De grootste SEO-groeikansen liggen in structured data, contentstrategie en internationale SEO — niet in de technische basis.</P>
        </div>

        <H1>1. Technische SEO — bevindingen</H1>

        <H2>1.1 Ontbrekende alt-teksten — 989 pagina&apos;s</H2>
        <P>Bijna 1.000 afbeeldingen missen een alt-attribuut op productpagina&apos;s, categoriepagina&apos;s, blogs, FAQ en homepage. Hierdoor begrijpt Google de afbeeldingen minder goed, gaan rankingkansen in Google Afbeeldingen verloren en verslechtert de toegankelijkheid.</P>
        <Callout variant="green" title="Aanbevolen aanpak" items={["Beschrijvende alt-teksten op basis van merk, producttype, kleur, materiaal, stijl", "Voorbeeld: 'Lumidora hanglamp zwart mat metaal industrieel'", "Verwacht effect: +2–4% relatief meer verkeer via Google Afbeeldingen"]} />

        <H2>1.2 Hreflang-problemen — 424 pagina&apos;s</H2>
        <P>393 pagina&apos;s missen een return-link en x-default attribuut. 31 hreflang-URLs verwijzen naar foutieve responses. Google kan hierdoor niet altijd bepalen welke taalversie aan gebruikers getoond moet worden.</P>
        <Callout variant="amber" title="Gevolg" items={["Internationale rankingkansen worden actief geblokkeerd", "Correctie is verplicht voor Belgium en Duitsland uitrol", "Inspanning: Middel · Impact: Verlies stoppen (geen nieuwe groei maar fouten corrigeren)"]} />

        <H2>1.3 Meta tags & headings</H2>
        <P>2 pagina&apos;s met dubbele title tags, 7 pagina&apos;s met dubbele meta descriptions, FAQ-pagina met te korte title, 2 pagina&apos;s zonder H1-tag. Lage inspanning, middel impact.</P>

        <H1>2. Structured Data — grootste SEO-kans</H1>
        <P>Structured data is momenteel nauwelijks aanwezig. Dit is de grootste kans op extra zichtbaarheid binnen Google voor een webshop van deze omvang.</P>
        <Table
          headers={["Schema type", "Verwachte impact", "Inspanning", "Prioriteit"]}
          rows={[
            ["Product + Offer schema", <Badge key="a" c="#dc2626">Zeer hoog</Badge>, "Middel", "1 — Direct"],
            ["FAQ Schema", <Badge key="b" c="#dc2626">Hoog</Badge>, "Laag", "1 — Direct"],
            ["Breadcrumb Schema", <Badge key="c" c="#dc2626">Hoog</Badge>, "Laag", "1 — Direct"],
          ]}
        />
        <P>Product + Offer schema maakt prijzen, voorraadstatus en reviews zichtbaar in Google op alle 2.340 productpagina&apos;s. Verwacht: +15–30% CTR (realistisch +3–8% bij goede implementatie). Breadcrumb en FAQ schema zijn lage-inspanning kansen met directe CTR-verbetering.</P>

        <H1>3. Contentstrategie</H1>

        <H2>3.1 Categorieteksten uitbreiden</H2>
        <P>Categoriepagina&apos;s missen momenteel content voor rankings op commerciële zoekwoorden zoals &apos;hanglampen kopen&apos;, &apos;industriële verlichting&apos;, &apos;plafondlamp zwart&apos;. Aanbeveling: introductietekst (100–150 woorden), H2/H3-secties per subcategorie, keuzetips en FAQ-sectie per pagina.</P>

        <H2>3.2 Blogstrategie — 2 artikelen per maand</H2>
        <P>Informatieve zoekvragen vroeg in de funnel: &apos;hoe hoog hanglamp boven eettafel?&apos;, &apos;warm vs koud wit licht&apos;. Effect pas na 6–12 maanden meetbaar. Werkt alleen bij consistente publicatie en kwalitatieve content.</P>

        {/* CRO Deel */}
        <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "16px 20px", marginBottom: 32, marginTop: 40, borderLeft: `4px solid ${COLOR}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#15803d", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Deel 2 — CRO</div>
          <P>Huidige conversieratio: 2,41% (mobiel 2,26% · desktop 3,12%). 69% van het verkeer is mobiel. Elke procentpunt hogere conversieratio op het huidige verkeer verbetert de ROAS van alle betaalde kanalen automatisch mee.</P>
        </div>

        <H1>4. CRO — directe verbeterpunten (Fase 1)</H1>
        <Table
          headers={["Actie", "Vertrouwen", "Verwacht effect", "Inspanning"]}
          rows={[
            ["Mobiel menu contrast + USP-balk compacter", <Badge key="a" c="#16a34a">Zeker</Badge>, "+0,2–0,6% rel. conv.rate mobiel", "Laag"],
            ["Review score prominenter (9,4 / 24.450 reviews)", <Badge key="b" c="#16a34a">Zeker</Badge>, "+0,2–0,8% rel. conv.rate sitebreed", "Laag"],
            ["Winkelwagen sticky op desktop", <Badge key="c" c="#16a34a">Zeker</Badge>, "+0,1–0,4% rel. minder afhaken", "Laag"],
            ["Actielabels op productkaarten", <Badge key="d" c="#b45309">Twijfel</Badge>, "+2–5% rel. doorklik categorie", "Middel"],
          ]}
        />

        <H1>5. CRO — korte termijn (Fase 2)</H1>
        <Table
          headers={["Actie", "Vertrouwen", "Verwacht effect", "Voorwaarde"]}
          rows={[
            ["Klarna / Afterpay integreren", <Badge key="a" c="#b45309">Twijfel</Badge>, "+0,5–1,5% conv.rate bij orders >€150", "Eerst checkout-uitvaldata checken"],
            ["Filtering naar zijbalk + prijssortering", <Badge key="b" c="#b45309">Twijfel</Badge>, "+0,5–2% conv.rate categoriepagina's", "—"],
            ["Chatfunctie — expert advies", <Badge key="c" c="#b45309">Twijfel</Badge>, "+0,2–0,8% conv.rate productpagina's", "Capaciteit voor goede opvolging"],
          ]}
        />

        <H1>6. CRO — middellange termijn (Fase 3)</H1>
        <Table
          headers={["Actie", "Vertrouwen", "Verwacht effect", "Risico"]}
          rows={[
            ["Upsell module in winkelwagen", <Badge key="a" c="#b45309">Twijfel</Badge>, "AOV +1–3% (~€2–5/order)", "Alleen met relevante productdata"],
            ["Homepage herontwerp", <Badge key="b" c="#dc2626">Onzeker</Badge>, "Onduidelijk", "Niet doen zonder A/B-test en heatmap"],
          ]}
        />

        <H1>7. Totaaloverzicht & verwachting</H1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { l: "SEO verkeerseffect fase 1+2", n: "Basis", g: "+5–10% organisch" },
            { l: "CRO conversieratio doel", n: "2,41%", g: "2,6–2,8%" },
            { l: "ROAS-effect (indirect)", n: "—", g: "+0,1–0,2×" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px", borderTop: `3px solid ${COLOR}`, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4 }}>Nu: {k.n}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: COLOR }}>{k.g}</div>
            </div>
          ))}
        </div>
        <Callout
          variant="green"
          title="Aanbeveling — begin hier"
          items={[
            "SEO: Alt-teksten, hreflang en breadcrumb/FAQ schema zijn laaghangend fruit — lage inspanning, geen risico",
            "CRO: Drie 'zekere' fase 1-acties — mobiel menu, reviews en sticky winkelwagen zijn direct uit te voeren",
            "Klarna/Afterpay: Eerst checkout-uitvaldata analyseren voordat beslissing genomen wordt",
            "Homepage herontwerp: Uitstellen tot A/B-testdata beschikbaar is — risico op conversieverlies is reëel",
          ]}
        />

      </div>
      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht & Wonen · Rapport mei 2026 · Opgesteld door Woeler</p>
      </footer>
    </div>
  );
}
