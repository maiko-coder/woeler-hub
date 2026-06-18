import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#2563EB";
const COLOR_LIGHT = "#EFF6FF";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: 15, fontWeight: 600, color: COLOR, marginBottom: 8, marginTop: 24 }}>{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 12 }}>{children}</p>;
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 14px", color: "#374151", borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ title, items, variant = "blue" }: { title: string; items: string[]; variant?: "blue" | "green" | "amber" | "red" }) {
  const map = {
    blue: { bg: COLOR_LIGHT, border: COLOR, title: "#1d4ed8" },
    green: { bg: "#f0fdf4", border: "#16a34a", title: "#15803d" },
    amber: { bg: "#fffbeb", border: "#f59e0b", title: "#b45309" },
    red: { bg: "#fef2f2", border: "#ef4444", title: "#dc2626" },
  };
  const s = map[variant];
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: "14px 18px", marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: s.title, marginBottom: 6 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 4, lineHeight: 1.6 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function GoogleAdsCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Google Ads" color={COLOR} basePath="/rietveld/google-ads" />

      {/* Cover */}
      <div style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", color: "white", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
            Google Ads Analyse · Rietveld Licht & Wonen · Juni 2026
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16, maxWidth: 560 }}>Google Ads<br />Complete Presentatie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
            Accountanalyse, campagneprestaties, groeikansen en strategische aanbevelingen
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[
              { l: "Spend", v: "€2,1M/jaar" },
              { l: "Omzet", v: "€12,5M/jaar" },
              { l: "Account ROAS", v: "5,87" },
              { l: "CPA", v: "€31,85" },
            ].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        {/* Sectie 1: Managementsamenvatting */}
        <H2>1. Managementsamenvatting</H2>
        <P>
          Het Google Ads-account van Rietveld Licht presteert goed en is het afgelopen jaar fors gegroeid. De spend steeg van €1,3M naar €2,1M (+67%) en de omzet van €8,2M naar €12,5M (+52%). Het account is daarmee een van de grootste groeimotoren in het digitale kanaalportfolio van Rietveld.
        </P>
        <P>
          De keerzijde van die snelle groei is dat de ROAS licht daalde van 6,43 naar 5,87 en de kosten per bestelling stegen van €26 naar €32. Dit is een normaal patroon bij opschalen — bij een groter advertentiebudget trekt Google automatisch meer nieuwe, koudere doelgroepen aan die lager converteren dan bestaande kopers. Dit geeft aan dat er ruimte is om de structuur scherper te maken.
        </P>
        <Callout
          variant="blue"
          title="Drie kernconclusies"
          items={[
            "Het account groeit sterk maar verliest licht aan efficiëntie — dit is herstelbaar met structuurwijzigingen",
            "Bestsellers en Sale campagnes draaien zonder tROAS-doel — dit kost €420k spend aan efficiëntie",
            "Het €400+ segment haalt 12–13x ROAS op slechts €12k spend — dit is de grootste onbenutte groeikans",
          ]}
        />

        {/* Sectie 2: Accountoverzicht */}
        <H2>2. Accountoverzicht — groei & efficiëntie</H2>
        <Table
          headers={["Metric", "Vorig jaar", "Huidig jaar", "Verschil"]}
          rows={[
            ["Totale spend", "€1,3M", "€2,1M", "+67%"],
            ["Totale omzet", "€8,2M", "€12,5M", "+52%"],
            ["Account ROAS", "6,43", "5,87", "-8,7%"],
            ["Kosten per bestelling (CPA)", "€26", "€31,85", "+23%"],
            ["PMax overall ROAS", "—", "4,69", "—"],
          ]}
        />
        <P>
          De ROAS-daling en CPA-stijging zijn direct gekoppeld aan de budgetverhoging. Bij opschaling neemt het aandeel prospecting toe, wat de blended ROAS drukt. Dit is inherent aan schaalvergroting — de vraag is of de accountstructuur optimaal is ingericht om het nieuwe budgetniveau efficiënt te verwerken.
        </P>

        {/* Sectie 3: Campagneanalyse */}
        <H2>3. Campagneanalyse</H2>
        <H3>3.1 Wolves / Sheep</H3>
        <P>
          De PMax-campagnes draaien gebundeld op alle producttypen — hanglampen, plafondlampen, spots, inbouwlampen en tafellampen concurreren om hetzelfde budget en hetzelfde doel. Producttypen met een lagere ROAS (bijv. volumes-hanglampen) drukken daarmee de prestaties van efficiëntere categorieën (spots, inbouwlampen: ROAS 5,3–6,5).
        </P>
        <P>Huidig ROAS: ~5,2 · Doel: 5,5+</P>

        <H3>3.2 Bestsellers</H3>
        <P>
          De Bestsellers-campagne draait zonder tROAS-instelling, wat betekent dat Google autonoom biedt op basis van een breed doel. Op €420k+ spend is dit een significante inefficiëntie. Bovendien is de campagne niet opgesplitst op apparaat, waardoor mobiel (vaak lager converterend) hetzelfde bod krijgt als desktop.
        </P>
        <P>Huidig ROAS: 3,88 · Doel: 4,5–5,0</P>

        <H3>3.3 Sale</H3>
        <P>
          De Sale-campagne heeft de laagste ROAS van het account (3,44). Bij kortingsproducten is een lagere ROAS op zichzelf niet problematisch — het hangt af van de winstmarge per product. Zodra POAS-tracking actief is, wordt op winstgevendheid gestuurd in plaats van omzet-ROAS.
        </P>
        <P>Huidig ROAS: 3,44 · Doel: 4,0+ (of POAS-basis zodra marge-data beschikbaar)</P>

        <H3>3.4 Premium €400+ (nieuw te lanceren)</H3>
        <P>
          Het segment producten boven €400 wordt momenteel nauwelijks geadverteerd. Op de €12k spend die dit segment nu ontvangt, realiseert het een ROAS van 12–13x. Dit is het sterkste rendementssignaal in het account — en het is grotendeels onbenut. Bij opschaling naar €75–100k spend is een ROAS van 10+ realistisch.
        </P>
        <P>Huidig ROAS: 12–13x op €12k · Doel: 8,0+ op €75–100k spend (+€350–500k extra omzet)</P>

        {/* Sectie 4: Technische bevindingen */}
        <H2>4. Technische bevindingen</H2>
        <Callout
          variant="red"
          title="Locatietargeting — directe actie vereist"
          items={[
            "Campagnes zijn ingesteld op 'aanwezig in of geïnteresseerd in' in plaats van 'aanwezigheid'",
            "Hierdoor worden advertenties getoond aan gebruikers buiten het doelgebied die interesse tonen — lagere conversiekansen",
            "Corrigeren naar 'Aanwezigheid' verwacht +1–3% efficiëntiewinst direct",
          ]}
        />
        <Callout
          variant="amber"
          title="Biedstrategieën — optimalisatie kans"
          items={[
            "Bestsellers en Sale campagnes draaien zonder tROAS-doel op €420k+ spend",
            "tROAS instellen verwacht ROAS van ~3,6 naar 4,0–4,5 te brengen op deze campagnes",
            "Bestsellers-campagne opsplitsen op apparaat: mobiel en desktop apart sturen",
          ]}
        />

        {/* Sectie 5: Strategie */}
        <H2>5. Strategische aanpak per fase</H2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
          {[
            {
              phase: "Fase 1",
              period: "0 – 3 maanden",
              items: ["Locatietargeting corrigeren", "tROAS instellen op Bestsellers & Sale", "Bestsellers opsplitsen op apparaat", "PMax splitsen op producttype"],
              goal: "ROAS → 6,0 · CPA → €30",
              color: "#fee2e2",
              tc: "#dc2626",
            },
            {
              phase: "Fase 2",
              period: "3 – 6 maanden",
              items: ["PMax splitsen op producttype (vervolg)", "Premium €400+ campagne lanceren", "Budgetstructuur heralloceren"],
              goal: "ROAS 6,2–6,5 · CPA <€29",
              color: COLOR_LIGHT,
              tc: COLOR,
            },
            {
              phase: "Fase 3",
              period: "6 – 12 maanden",
              items: ["POAS-bidding testen (winstmarge)", "Regionale targeting testen", "Margeklasse-label in feed"],
              goal: "ROAS 6,3–6,8 · Winstoptimalisatie",
              color: "#f0fdf4",
              tc: "#16a34a",
            },
          ].map((f) => (
            <div key={f.phase} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: f.tc, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{f.phase}</div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 12 }}>{f.period}</div>
              <ul style={{ paddingLeft: 16, margin: 0, marginBottom: 12 }}>
                {f.items.map((item) => (
                  <li key={item} style={{ fontSize: 12, color: "#374151", marginBottom: 4, lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
              <div style={{ background: f.color, color: f.tc, fontSize: 11, fontWeight: 600, padding: "6px 10px", borderRadius: 6 }}>{f.goal}</div>
            </div>
          ))}
        </div>

        {/* Sectie 6: Doelstellingen */}
        <H2>6. Doelstellingen & KPI&apos;s</H2>
        <Table
          headers={["Campagne", "ROAS Nu", "ROAS Doel"]}
          rows={[
            ["Account overall", "5,87", "6,3 – 6,8"],
            ["PMax overall", "4,69", "5,2+"],
            ["Wolves / Sheep", "~5,2", "5,5+"],
            ["Bestsellers", "3,88", "4,5 – 5,0"],
            ["Sale-producten", "3,44", "4,0+"],
            ["Premium €400+ (nieuw)", "12–13x op €12k", "8,0+ op €75–100k"],
          ]}
        />
        <Table
          headers={["KPI", "Huidig", "Doel"]}
          rows={[
            ["Account ROAS", "5,87", "6,5"],
            ["CPA (kosten per bestelling)", "€31,85", "<€28"],
            ["Spend €400+ segment", "€12k/jaar", "€50–75k/jaar"],
            ["ROAS €400+ segment", "12–13 (onbenut)", "10+ op hoger volume"],
            ["Bestsellers ROAS", "3,88", "4,5+"],
            ["Sale ROAS", "3,44", "4,0+"],
          ]}
        />

        {/* Sectie 7: Verwachting */}
        <H2>7. Realistisch verwachting</H2>
        <P>
          De quick wins (instellingen, tROAS-correcties) leveren samen een ROAS-verbetering van circa +0,10–0,15 op accountniveau. De structuurwijzigingen en het premium-segment voegen daar nog eens +0,20–0,35 aan toe. Gecombineerd betekent dat een accountbrede ROAS van 6,2–6,4 realistisch is binnen 6 tot 12 maanden, bij gelijkblijvend of beperkt hoger budget.
        </P>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { l: "Account ROAS", n: "5,87", g: "6,3 – 6,5" },
            { l: "CPA", n: "€31,85", g: "€27 – 29" },
            { l: "Omzet (zelfde spend)", n: "Basis", g: "+8 – 12%" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px", borderTop: `3px solid ${COLOR}`, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4 }}>Nu: {k.n}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: COLOR }}>{k.g}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: "20px 24px", marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
            <strong>Leerperiode na PMax-splitsing:</strong> Direct na een campagnesplitsing is er altijd een leerperiode van 2 tot 4 weken waarin Google opnieuw calibreert. Een tijdelijke ROAS-dip in die periode is normaal en geen reden tot zorg.
          </p>
        </div>

      </div>

      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht & Wonen · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
