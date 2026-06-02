import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#1877F2";
const COLOR_LIGHT = "#EBF3FF";

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
function Callout({ title, items, variant = "blue" }: { title: string; items: string[]; variant?: "blue" | "green" | "amber" }) {
  const map = { blue: { bg: COLOR_LIGHT, border: COLOR, tc: "#1558b0" }, green: { bg: "#f0fdf4", border: "#16a34a", tc: "#15803d" }, amber: { bg: "#fffbeb", border: "#f59e0b", tc: "#b45309" } };
  const s = map[variant];
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: "14px 18px", marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: s.tc, marginBottom: 6 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>{items.map((item, i) => <li key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 4, lineHeight: 1.6 }}>{item}</li>)}</ul>
    </div>
  );
}
function Badge({ children, color }: { children: React.ReactNode; color: "green" | "amber" | "blue" | "red" | "teal" }) {
  const map = { green: { bg: "#dcfce7", c: "#15803d" }, amber: { bg: "#fef3c7", c: "#b45309" }, blue: { bg: COLOR_LIGHT, c: COLOR }, red: { bg: "#fee2e2", c: "#dc2626" }, teal: { bg: "#e0f2fe", c: "#0369a1" } };
  const s = map[color];
  return <span style={{ display: "inline-block", background: s.bg, color: s.c, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{children}</span>;
}

export default function MetaAdsCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Meta Ads" color={COLOR} basePath="/rietveld/meta-ads" />

      <div style={{ background: "linear-gradient(135deg, #1558b0 0%, #1877f2 100%)", color: "white", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>Meta Ads Analyse · Rietveld Licht B.V. · Juni 2026</div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>Meta Ads<br />Complete Presentatie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>Huidige positie · Kansen · Strategie · Doelstellingen · Sept 2023 – mei 2026</p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[{ l: "Omzet ROAS", v: "15,74x" }, { l: "Totaal aankopen", v: "6.496" }, { l: "Conversiewaarde", v: "€1,82M" }, { l: "Gem. CPA", v: "€17,78" }].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <H1>1. Managementsamenvatting</H1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          {[
            { l: "Omzet ROAS", v: "15,74x", sub: "sept 2023 – mei 2026", color: "green" as const },
            { l: "Totaal aankopen", v: "6.496", sub: "sept 2023 – mei 2026", color: "blue" as const },
            { l: "POAS", v: "9,46x", sub: "aug 2024 – mei 2026", color: "teal" as const },
            { l: "Gem. CPA", v: "€17,78", sub: "kosten per aankoop", color: "amber" as const },
          ].map((k) => {
            const colorMap = { green: "#16a34a", blue: COLOR, teal: "#0369a1", amber: "#b45309" };
            return (
              <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px", borderTop: `3px solid ${colorMap[k.color]}` }}>
                <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k.l}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: colorMap[k.color] }}>{k.v}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{k.sub}</div>
              </div>
            );
          })}
        </div>
        <P>Rietveld Licht zet Meta Ads in als een groeiend onderdeel van de betaalde mediastrategie. Het account is in de periode 2023–2026 sterk doorontwikkeld: van een eerste test met €1.000 spend in september 2023 naar een volwassen accountstructuur met meerdere campagnetypes en bijna €109.000 totale spend.</P>
        <P>Een bijzonder sterk punt: Rietveld heeft een volledig operationele POAS-tracking via de Conversions API. Per transactie wordt de werkelijke brutowinst doorgegeven aan Meta, wat optimalisatie op winstgevendheid mogelijk maakt. Dit is een geavanceerde implementatie die de meeste adverteerders in de verlichtingsbranche niet hebben.</P>

        <H1>2. Accountontwikkeling per periode</H1>
        <Table
          headers={["Periode", "Besteed", "Aankopen", "Omzet", "ROAS", "CPA"]}
          rows={[
            ["Sept 2023", "€1.000", "52", "€13.129", <Badge key="a" color="green">13,13x</Badge>, "€19,23"],
            ["Feb – apr 2024", "€5.914", "126", "€27.690", <Badge key="b" color="amber">4,68x</Badge>, "€46,93"],
            ["Jun 2024 – mei 2026", "€108.570", "6.318", "€1.776.502", <Badge key="c" color="green">16,36x</Badge>, "€17,18"],
            ["Totaal", "€115.484", "6.496", "€1.817.320", <Badge key="d" color="green">15,74x</Badge>, "€17,78"],
          ]}
        />
        <P>De ROAS-dip in feb–apr 2024 (4,68x) is het directe gevolg van budgetopschaling. In de periode juni 2024–mei 2026 is de ROAS gestegen naar 16,36x door een betere campagnemix met meer gewicht op retargeting en StoreTraffic.</P>

        <H1>3. Campagneprestaties</H1>
        <Table
          headers={["Campagnetype", "Spend", "Aankopen", "ROAS", "POAS", "Beoordeling"]}
          rows={[
            ["RTG USP 2026", "€5.537", "1.348", "69,6x", "40,93x", <Badge key="a" color="green">Uitzonderlijk sterk</Badge>],
            ["StoreTraffic (showroom)", "€25.532", "3.082", "35,6x", "20,25x", <Badge key="b" color="green">Zeer sterk</Badge>],
            ["Retargeting RTG ROAS", "€10.600", "616", "12,7x", "7,11x", <Badge key="c" color="green">Sterk</Badge>],
            ["Advantage+ Shopping", "€15.506", "819", "14,8x", "8,18x", <Badge key="d" color="green">Solide</Badge>],
            ["Nieuwe structuur 2025–26", "€5.172", "254", "13,5x", "7,95x", <Badge key="e" color="teal">Veelbelovend</Badge>],
            ["Traffic/Qvisits (branding)", "€39.816", "137", "0,76x", "n.v.t.", <Badge key="f" color="amber">Brandingdoel</Badge>],
          ]}
        />

        <H1>4. Doelgroepanalyse</H1>
        <Table
          headers={["Doelgroep", "Spend", "ROAS", "POAS", "Marge%", "Insight"]}
          rows={[
            ["55–64 mannen", "€6.216", "55,1x", "31,10x", "56%", <Badge key="a" color="green">Hoog volume + hoge POAS</Badge>],
            ["25–34 mannen", "€4.869", "17,5x", "11,83x", "68%", <Badge key="b" color="green">Hoogste marge%</Badge>],
            ["55–64 vrouwen", "€19.577", "27,5x", "15,16x", "55%", <Badge key="c" color="green">Solide</Badge>],
            ["35–44 vrouwen", "€11.842", "8,7x", "5,46x", "63%", <Badge key="d" color="teal">Hoge marge%</Badge>],
            ["45–54 vrouwen", "€11.290", "13,9x", "7,89x", "57%", "Solide"],
            ["65+ vrouwen", "€23.384", "5,4x", "3,10x", "58%", <Badge key="e" color="amber">Bijsturen</Badge>],
          ]}
        />
        <P>Het segment 25–34 jarige mannen springt eruit met een marge% van 68%, ver boven het accountgemiddelde van 56,9%. Dit segment koopt niet alleen goed maar ook duurdere, winstgevendere producten. De doelgroep 65+ vrouwen ontvangt het meeste budget (€23.384) maar heeft de laagste POAS van 3,10x.</P>

        <H1>5. Tracking & Technische infrastructuur</H1>
        <Callout
          variant="green"
          title="Sterk: Conversions API en POAS-tracking volledig uitgerold"
          items={[
            "Vrijwel alle events draaien server-side via de Conversions API",
            "POAS-tracking actief sinds augustus 2024 — per transactie wordt werkelijke brutowinst doorgegeven",
            "€1.008.110 aan brutomargewaarde gemeten (aug 2024 – mei 2026), gem. brutomarge 56,9%",
            "Feed wordt dagelijks bijgewerkt via Channable/BGenius",
          ]}
        />
        <Callout
          variant="amber"
          title="Aandachtspunten"
          items={[
            "Catalogus is niet gekoppeld aan de pixel — DPA's zijn de grootste onbenutte groeikans",
            "q_visit event match quality score is 4,9/10 (doel: 6+) — beperkt optimalisatie Qvisits-campagnes",
            "PageView gebruikt meerdere integraties — risico op dubbele event-registratie",
          ]}
        />

        <H1>6. Kansen</H1>
        <H2>6.1 Dynamische productadvertenties (DPA&apos;s)</H2>
        <P>Door de pixel te koppelen aan de catalogus kunnen bezoekers die een specifiek product hebben bekeken automatisch dat product terugzien in hun feed. Verwachte impact: retargeting ROAS stijgt van 29x naar 35–45x door hogere relevantie.</P>

        <H2>6.2 Doelgroepoptimalisatie</H2>
        <P>25–34 mannen activeren (marge% 68%), 55–64 mannen verder uitbouwen (sterkste ROAS+volume), 65+ vrouwen bijsturen op campagnetype en creatief.</P>

        <H2>6.3 Internationale uitrol</H2>
        <P>Meta-campagnes zijn vrijwel volledig gefocust op Nederland. België is een logische eerste uitrol met herbruikbare NL-content. Duitsland (Lumidora) vraagt aparte assets.</P>

        <H2>6.4 Meta als leadgenerator voor e-mail</H2>
        <P>Meta Lead Ads gekoppeld aan de welkomstflow in het e-mailplatform — bezoekers die een product bekeken maar niet kochten zijn de primaire doelgroep.</P>

        <H1>7. Strategie per fase</H1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
          {[
            { phase: "Fase 1", period: "Maand 1–2", items: ["Pixel koppelen aan catalogus", "Event match quality verbeteren", "Budgetverschuiving doelgroepen", "Rapportagestructuur opzetten"], color: "#fee2e2", tc: "#dc2626" },
            { phase: "Fase 2", period: "Maand 3–6", items: ["DPA's live zetten", "Meta Lead Ads activeren", "België uitrollen", "StoreTraffic opschalen"], color: COLOR_LIGHT, tc: COLOR },
            { phase: "Fase 3", period: "Maand 7–12", items: ["Advantage+ opschalen", "Duitsland uitrollen (Lumidora)", "Advantage+ Catalog Ads testen", "Seizoensgebonden campagnes"], color: "#f0fdf4", tc: "#16a34a" },
          ].map((f) => (
            <div key={f.phase} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: f.tc, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{f.phase}</div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 10 }}>{f.period}</div>
              <ul style={{ paddingLeft: 16, margin: 0 }}>{f.items.map((item) => <li key={item} style={{ fontSize: 12, color: "#374151", marginBottom: 3, lineHeight: 1.5 }}>{item}</li>)}</ul>
            </div>
          ))}
        </div>

        <H1>8. Doelstellingen & KPI&apos;s</H1>
        <Table
          headers={["Markt", "Min. ROAS", "Streef ROAS", "Huidig", "Status"]}
          rows={[
            ["NL blended", "6x", "10x", "16,36x", <Badge key="a" color="green">Ruim boven target</Badge>],
            ["NL conversie only", "4x", "12x", "13–35x", <Badge key="b" color="green">Boven target</Badge>],
            ["BE uitrol fase 2", "5x", "8x", "n.v.t.", <Badge key="c" color="amber">Op te starten</Badge>],
            ["DE uitrol fase 3", "5x", "7x", "n.v.t.", <Badge key="d" color="amber">Op te starten</Badge>],
          ]}
        />
        <Table
          headers={["KPI", "Huidig", "Fase 1", "Fase 2", "Fase 3"]}
          rows={[
            ["Blended ROAS NL", "16,36x", "≥16x", "≥18x", "≥20x"],
            ["POAS", "9,46x", "≥9,5x", "≥11x", "≥13x"],
            ["CPA (webshop)", "€17,18", "≤€20", "≤€18", "≤€15"],
            ["DPA ROAS", "n.v.t.", "n.v.t.", "30x+", "40x+"],
            ["E-mail opt-ins via Lead Ads", "0", "n.v.t.", "200+/mnd", "400+/mnd"],
            ["StoreTraffic CPA", "€8,67", "€8–10", "€6–8", "€5–7"],
          ]}
        />

      </div>

      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht B.V. · Periode analyse: sept 2023 – mei 2026 · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
