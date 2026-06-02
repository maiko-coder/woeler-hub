import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#2563EB";
const COLOR_LIGHT = "#EFF6FF";

function KpiCard({ label, now, goal, accent }: { label: string; now: string; goal: string; accent?: boolean }) {
  return (
    <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px 20px", borderTop: `3px solid ${accent ? COLOR : "#e5e7eb"}` }}>
      <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: "#1f2937" }}>{now}</span>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>→</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: COLOR }}>{goal}</span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", paddingBottom: 10, borderBottom: `2px solid ${COLOR}`, marginBottom: 20, marginTop: 40 }}>
      {children}
    </h2>
  );
}

function Callout({ title, items, variant = "blue" }: { title: string; items: string[]; variant?: "blue" | "green" | "amber" }) {
  const map = {
    blue: { bg: COLOR_LIGHT, border: COLOR, title: "#1d4ed8" },
    green: { bg: "#f0fdf4", border: "#16a34a", title: "#15803d" },
    amber: { bg: "#fffbeb", border: "#f59e0b", title: "#b45309" },
  };
  const s = map[variant];
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: "14px 18px", marginBottom: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: s.title, marginBottom: 6 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 4, lineHeight: 1.6 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
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

function Badge({ children, color }: { children: React.ReactNode; color: "green" | "amber" | "blue" }) {
  const map = { green: { bg: "#dcfce7", c: "#15803d" }, amber: { bg: "#fef3c7", c: "#b45309" }, blue: { bg: COLOR_LIGHT, c: COLOR } };
  const s = map[color];
  return <span style={{ display: "inline-block", background: s.bg, color: s.c, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>{children}</span>;
}

export default function GoogleAdsDoelstellingen() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Google Ads" color={COLOR} basePath="/rietveld/google-ads" />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1e40af 0%, #2563eb 100%)`, color: "white", padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>Google Ads · Rietveld Licht</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>Doelstellingen & KPI&apos;s</h1>
          <p style={{ fontSize: 15, opacity: 0.75, maxWidth: 560 }}>Accountdoelstellingen voor de komende 12 maanden op basis van de Rietveld-analyse</p>
          <div style={{ marginTop: 32, display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Huidige account ROAS", value: "5,87" },
              { label: "Doel jaar 1", value: "6,3 – 6,8" },
              { label: "Huidige CPA", value: "€31,85" },
              { label: "Doel CPA", value: "<€28" },
            ].map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: 11, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.label}</div>
                <div style={{ fontSize: 26, fontWeight: 700 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        {/* Accountoverzicht */}
        <SectionTitle>Accountprestaties — groei & uitdaging</SectionTitle>
        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 20 }}>
          Het account presteert goed en is het afgelopen jaar fors gegroeid: spend steeg van €1,3M naar €2,1M (+67%) en de omzet van €8,2M naar €12,5M (+52%). De keerzijde van die snelle groei is dat de ROAS licht daalde van 6,43 naar 5,87 en de kosten per bestelling stegen van €26 naar €32. Dat is een normaal patroon bij opschalen, maar het geeft aan dat er ruimte is om de structuur scherper te maken.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
          <KpiCard label="Spend" now="€1,3M" goal="€2,1M" accent />
          <KpiCard label="Omzet" now="€8,2M" goal="€12,5M" accent />
          <KpiCard label="ROAS" now="6,43" goal="5,87" />
          <KpiCard label="CPA" now="€26" goal="€32" />
        </div>

        {/* Tijdlijn doelstellingen */}
        <SectionTitle>Doelstellingen per periode</SectionTitle>

        <Callout
          variant="blue"
          title="Korte termijn (0 – 3 maanden)"
          items={[
            "Campagnes met een verkeerde instelling corrigeren",
            "Bestsellers- en Sale-campagnes scherper aansturen op een tROAS die past bij die producten",
            "Bestsellers-campagne opsplitsen op apparaat zodat mobiel en desktop apart gestuurd worden",
            "Doel: accountbrede ROAS richting 6,0 — kosten per bestelling terug naar ca. €30",
          ]}
        />
        <Callout
          variant="green"
          title="Middellange termijn (3 – 6 maanden)"
          items={[
            "PMax-campagnes opsplitsen op producttype: spots, inbouwlampen en tafellampen (ROAS 5,3–6,5) krijgen eigen budget",
            "Aparte campagne lanceren voor producten boven €400 — segment haalt nu ROAS 12–13x op slechts €12k spend",
            "Doel: accountbrede ROAS 6,2–6,5 en kosten per bestelling onder de €29",
          ]}
        />
        <Callout
          variant="amber"
          title="Langere termijn (6 – 12 maanden)"
          items={[
            "Testen met bieden op werkelijke winstmarge (POAS) in plaats van omzet-ROAS",
            "Regionale targeting implementeren",
            "Vereist margeklasse-label in de feed — fundamentelere aanpassing met meer sturing op werkelijke winstgevendheid",
          ]}
        />

        {/* ROAS doelen tabel */}
        <SectionTitle>ROAS-doelen per campagne</SectionTitle>
        <Table
          headers={["Campagne", "ROAS Nu", "ROAS Doel", "Status"]}
          rows={[
            ["Account overall", "5,87", "6,3 – 6,8", <Badge key="a" color="amber">Bijsturen</Badge>],
            ["PMax overall", "4,69", "5,2+", <Badge key="b" color="amber">Bijsturen</Badge>],
            ["Wolves / Sheep", "~5,2", "5,5+", <Badge key="c" color="amber">Bijsturen</Badge>],
            ["Bestsellers", "3,88", "4,5 – 5,0", <Badge key="d" color="amber">Prioriteit</Badge>],
            ["Sale-producten", "3,44", "4,0+", <Badge key="e" color="amber">Prioriteit</Badge>],
            ["Premium €400+ (nieuw)", "12–13x", "8,0+ op €75–100k", <Badge key="f" color="green">Opschalen</Badge>],
          ]}
        />
        <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 32 }}>
          * Bij Sale geldt: een lagere ROAS bij kortingsproducten is niet per se problematisch — het hangt af van de marge per stuk. Zodra POAS-tracking actief is, sturen we op winstgevendheid in plaats van omzet-ROAS.
        </p>

        {/* KPI tabel */}
        <SectionTitle>KPI-overzicht</SectionTitle>
        <Table
          headers={["KPI", "Huidig", "Doel"]}
          rows={[
            ["Account ROAS", "5,87", "6,5"],
            ["CPA (kosten per bestelling)", "€31,85", "<€28"],
            ["Spend €400+ segment", "€12k/jaar", "€50 – 75k/jaar"],
            ["ROAS €400+ segment", "12–13 (onbenut)", "10+ op hoger volume"],
            ["Bestsellers ROAS", "3,88", "4,5+"],
            ["Sale ROAS", "3,44", "4,0+"],
          ]}
        />

        {/* Acties */}
        <SectionTitle>Acties met direct meetbaar effect</SectionTitle>
        <Table
          headers={["#", "Actie", "Verwacht effect"]}
          rows={[
            ["1", "Locatietargeting corrigeren naar 'Aanwezigheid'", "+1–3% efficiëntie accountbreed, direct"],
            ["2", "tROAS instellen op Bestsellers & Sale (€420k spend)", "ROAS van ~3,6 naar 4,0–4,5"],
            ["3", "High-AOV campagne €400+ opschalen", "+€350–500k extra omzet bij ROAS 10+"],
            ["4", "PMax splitsen op producttype (spots/inbouw los van hanglampen)", "Efficiëntie-campagnes naar ROAS 5,5–6,5"],
          ]}
        />

        {/* Verwachting */}
        <SectionTitle>Verwachting in 6 maanden</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
          <KpiCard label="Account ROAS" now="5,87" goal="6,3 – 6,5" accent />
          <KpiCard label="CPA" now="€31,85" goal="€27 – 29" accent />
          <KpiCard label="Omzetgroei (zelfde spend)" now="Basis" goal="+8 – 12%" accent />
        </div>
        <div style={{ background: COLOR_LIGHT, borderRadius: 10, padding: "20px 24px", marginBottom: 32 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1d4ed8", marginBottom: 10 }}>Realistisch verwachting — toelichting</h3>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, marginBottom: 8 }}>
            De quick wins (instellingen, tROAS-correcties) leveren samen een ROAS-verbetering van circa +0,10–0,15 op accountniveau. De structuurwijzigingen en het premium-segment voegen daar nog eens +0,20–0,35 aan toe. Gecombineerd betekent dat een accountbrede ROAS van 6,2–6,4 realistisch is binnen 6 tot 12 maanden, bij gelijkblijvend of beperkt hoger budget.
          </p>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
            <strong>Let op:</strong> direct na een PMax-splitsing is er altijd een leerperiode van 2 tot 4 weken waarin Google opnieuw calibreert. Een tijdelijke ROAS-dip in die periode is normaal en geen reden tot zorg.
          </p>
        </div>

        {/* €400+ segment */}
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: "20px 24px", marginBottom: 48 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#b45309", marginBottom: 8 }}>€400+ segment — grootste onbenutte kans</h3>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
            Het segment producten boven €400 haalt momenteel een ROAS van 12–13x op slechts €12k spend per jaar. Dit is een nauwelijks geadverteerd segment dat bij opschaling naar €75–100k spend nog steeds een ROAS van 10+ kan realiseren, goed voor +€350–500k extra omzet. Dit is de meest concrete groeikans in het account.
          </p>
        </div>

      </div>

      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Licht & Wonen · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
