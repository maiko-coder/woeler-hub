import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#0891B2";
const COLOR_LIGHT = "#ECFEFF";

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
function FlowCard({ num, title, priority, steps }: { num: string; title: string; priority: string; steps: { trigger: string; goal: string }[] }) {
  const pColor = priority === "Start" ? "#dc2626" : "#b45309";
  return (
    <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "20px", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 16, fontWeight: 700, width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{num}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{title}</div>
          <span style={{ background: `${pColor}20`, color: pColor, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10 }}>Prioriteit: {priority}</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, background: "#f9fafb", borderRadius: 8, padding: "10px 14px" }}>
            <div>
              <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>Trigger & timing</div>
              <div style={{ fontSize: 12, color: "#374151" }}>{step.trigger}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>Doel & actie</div>
              <div style={{ fontSize: 12, color: "#374151" }}>{step.goal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarketingAutomationCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Marketing Automation" color={COLOR} basePath="/rietveld/marketing-automation" />

      <div style={{ background: "linear-gradient(135deg, #164e63 0%, #0891b2 100%)", color: "white", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>E-mail & Marketing Automation · Rietveld Verlichting</div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>Marketing Automation<br />Complete Strategie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 40 }}>
            Strategie voor e-mail marketing en marketing automation — van welkomstflow tot win-back
          </p>
          <div style={{ display: "flex", gap: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[{ l: "Kernflows", v: "4" }, { l: "Aandeel e-mail doel", v: ">18%" }, { l: "Winkelwagen conv. doel", v: ">8%" }, { l: "Automation openrate doel", v: ">42%" }].map((m) => (
              <div key={m.l}><div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div><div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>

        <H1>1. Waarom e-mail</H1>
        <P>E-mail is het meest directe, meetbare en schaalbare kanaal dat Rietveld Verlichting volledig in eigen hand heeft. Waar social media-bereik afhankelijk is van algoritmes en betaald adverteren verloopt via externe platformen, is e-mail een directe communicatielijn met de klant: geen tussenpartij, geen veiling, geen organisch bereikprobleem.</P>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
          {[
            { l: "Activering", d: "E-mail zet klanten in beweging — naar de webshop, winkel of adviesgesprek" },
            { l: "Verbinding", d: "Houdt het gesprek levend tussen aankoopmomenten en verbindt alle kanalen aan elkaar" },
            { l: "Personalisatie", d: "Op schaal relevante communicatie op basis van aankoopgeschiedenis en gedrag" },
          ].map((p) => (
            <div key={p.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px", borderTop: `3px solid ${COLOR}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLOR, marginBottom: 6 }}>{p.l}</div>
              <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.d}</div>
            </div>
          ))}
        </div>

        <H1>2. Leidende principes</H1>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
          {[
            { num: "①", t: "Relevantie boven frequentie", d: "Liever één e-mail die raak is dan vijf die genegeerd worden. Elk bericht moet een aanleiding hebben die voor de ontvanger betekenisvol is." },
            { num: "②", t: "Gedragsgestuurd, niet kalendergestuurd", d: "De meeste e-mails worden verstuurd op basis van wat een klant doet, niet op een vaste dag in de week." },
            { num: "③", t: "Eén klantprofiel", d: "Data uit alle kanalen — webshop, winkel, social — voeden hetzelfde profiel. E-mail communiceert vanuit dat profiel, niet vanuit productcategorieën." },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 14 }}>
              <div style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 18, fontWeight: 700, width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>

        <H1>3. Doelgroepen & Segmentatie</H1>
        <Table
          headers={["Segment", "Kenmerken", "E-mail aanpak"]}
          rows={[
            ["Nieuwe klanten", "Eerste aankoop, onbekend gedrag", "Welkomst- en onboardingflow; vertrouwen opbouwen, tweede aankoop stimuleren"],
            ["Actieve klanten", "Regelmatige aankopen, hoge engagement", "Gepersonaliseerde aanbevelingen, loyaliteitsvoordelen, exclusieve previews"],
            ["Slapende klanten", "Geen aankoop of opening >90 dagen", "Win-back flow; re-engagement met waardevoorstel of kortimpuls"],
          ]}
        />
        <H2>Segmentatiedimensies</H2>
        <P>Aankoopgedrag (productcategorie, besteedwaarde, aantal orders) · Engagementgedrag (openpercentage 90 dagen, klikgedrag) · Klantfase (nieuw, groeiend, loyaal, inactief — maandelijks herberekend)</P>

        <H1>4. De vier kernflows</H1>
        <FlowCard
          num="1"
          title="Welkomst & Onboarding"
          priority="Start"
          steps={[
            { trigger: "Direct na inschrijving of eerste aankoop", goal: "Bevestig inschrijving, introduceer merk en kernwaarden. Geen producten — eerst vertrouwen. CTA: Bestsellers" },
            { trigger: "Dag 3", goal: "Wooninspiratiemail: sfeervolle beelden, stylingtips. Subtiele productverwijzingen. Doel: betrokkenheid meten." },
            { trigger: "Dag 7", goal: "Concrete kortingsprikkel of gratis bezorging. Urgentie via vervaldatum. CTA: Gebruik je voordeel." },
          ]}
        />
        <FlowCard
          num="2"
          title="Verlaten Winkelwagen"
          priority="Start"
          steps={[
            { trigger: "60 minuten na verlaten", goal: "Vriendelijke herinnering: Je hebt iets achtergelaten. Exact product met afbeelding, prijs, review. Geen korting nog." },
            { trigger: "24 uur later", goal: "Hulp aanbieden. Alternatieve producten uit dezelfde categorie. Chat of telefoonnummer prominent." },
            { trigger: "48 uur later (alleen als nog geen aankoop)", goal: "Gratis bezorging of €10 korting. Duidelijke vervaldatum. Dit is de laatste e-mail in deze flow." },
          ]}
        />
        <FlowCard
          num="3"
          title="Post-aankoop & Loyaliteit"
          priority="Jaar 1"
          steps={[
            { trigger: "Direct na aankoop (transactioneel)", goal: "Bestelbevestiging met verwachte levertijd, klantenservice-info. Warm en persoonlijk van toon." },
            { trigger: "Dag 3 na levering", goal: "Praktische tips voor het product. How-to video of PDF. Doel: tevredenheid verhogen, retourkans verlagen." },
            { trigger: "Dag 14 na levering", goal: "Review uitnodiging. Eenvoudig formulier of directe link. Leg uit waarom reviews anderen helpen." },
            { trigger: "Dag 30", goal: "Cross-sell aanbeveling passend op de aankoop (bijv. dimmer bij sfeerverlichting, buitenlamp bij hal-verlichting)." },
          ]}
        />
        <FlowCard
          num="4"
          title="Win-back"
          priority="Jaar 1"
          steps={[
            { trigger: "90 dagen na laatste aankoop of opening", goal: "Persoonlijk aangesproken. Recente bestsellers of nieuwe collectie. Geen druk, wel nieuwsgierigheid wekken." },
            { trigger: "14 dagen later (als geen reactie)", goal: "Concreet aanbod: 15% korting of gratis bezorging. CTA duidelijk en eenvoudig." },
            { trigger: "14 dagen later (als nog geen reactie)", goal: "Eerlijk en kort: Wil je op onze lijst blijven? Twee opties: blijven (met incentief) of uitschrijven." },
          ]}
        />

        <H1>5. Micro-automations</H1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 24 }}>
          {[
            { t: "Verjaardag", d: "Één e-mail met persoonlijk voordeel op de dag zelf of een week van tevoren" },
            { t: "Prijsdaling", d: "Klant bekijkt product, product daalt in prijs → directe notificatie" },
            { t: "Voorraad terug", d: "Klant bekeek uitverkocht product → melding bij terugkomst op voorraad" },
            { t: "Productaanvulling", d: "30 dagen na aankoop plafondlamp → e-mail met bijpassende producten" },
          ].map((m) => (
            <div key={m.t} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLOR, marginBottom: 4 }}>{m.t}</div>
              <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{m.d}</div>
            </div>
          ))}
        </div>

        <H1>6. Nieuwsbriefstrategie</H1>
        <Table
          headers={["Type", "Frequentie", "Ontvanger", "Doel"]}
          rows={[
            ["Inspiratiemail", "2× per maand", "B2C actief segment", "Woontrends, stylingtips, sfeerbeelden, nieuwe collecties"],
            ["Aanbieding / Seizoen", "1× per maand", "B2C alle segmenten", "Gerichte actie gekoppeld aan seizoen — altijd met urgentie en CTA"],
            ["Nieuwe collectie", "Niet gepland", "B2C alle segmenten", "Nieuwe collectie en/of producten"],
          ]}
        />

        <H1>7. E-mail als omnichannel verbindingsstuk</H1>
        <Table
          headers={["Kanaal", "Signaal naar e-mail", "E-mail respons"]}
          rows={[
            ["Webshop", "Verlaten winkelwagen, productbezoek, bestelling", "Verlaten winkelwagen flow, prijsdaling alert, post-purchase flow"],
            ["Fysieke winkel", "Kassaregistratie, adviesgesprek", "Post-aankoop flow, follow-up adviesgesprek"],
            ["Social media (Meta)", "Klik op advertentie, Lead Ad inschrijving", "Welkomstflow, retargeting voor non-converters"],
            ["Google Ads", "Klik gevolgd door inschrijving", "Welkomstflow met productcategorie-focus"],
            ["Klantenservice", "Klacht of vraag via chat/telefoon", "Follow-up e-mail, tevredenheidscheck"],
          ]}
        />

        <H1>8. Doelstellingen & KPI&apos;s</H1>
        <Table
          headers={["KPI", "Streefwaarde", "Doel 12 mnd", "Doel 24 mnd"]}
          rows={[
            ["Gem. openrate nieuwsbrief", ">28%", "32%", "38%"],
            ["Click-through rate", ">3,5%", "5%", "7%"],
            ["Automation openrate", ">42%", "48%", "55%"],
            ["Winkelwagen conversie", ">8%", "11%", "14%"],
            ["Uitschrijfpercentage/mailing", "<0,3%", "<0,25%", "<0,2%"],
            ["Lijstgroei (netto, per maand)", "+3%", "+4%", "+5%"],
            ["Aandeel e-mail in online omzet", ">18%", "22%", "30%"],
          ]}
        />

        <H1>9. Prioritaire aanbevelingen — eerste 60 dagen</H1>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 48 }}>
          {[
            { num: "1", t: "E-mailplatform kiezen en koppelen aan webshop", d: "Zonder dit kan niets anders in dit plan starten. Prioriteit 1." },
            { num: "2", t: "Welkomstflow live zetten (Flow 1)", d: "Elke nieuwe abonnee verdient een goede eerste indruk — laagste inspanning met hoogste strategische waarde." },
            { num: "3", t: "Verlaten winkelwagen flow activeren (Flow 2)", d: "Snelste directe ROI-generator binnen e-mail marketing." },
            { num: "4", t: "Opt-in zichtbaar maken op webshop", d: "Exit-intent pop-up met concreet voordeel, medewerkers instrueren in winkel." },
            { num: "5", t: "Bestaande e-maillijst importeren en opschonen", d: "Verwijder ongeldige adressen voordat de eerste mailing verstuurd wordt." },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 14 }}>
              <div style={{ background: COLOR_LIGHT, color: COLOR, fontSize: 14, fontWeight: 700, width: 32, height: 32, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.num}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 3 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <footer style={{ background: "#f3f4f6", borderTop: "1px solid #e5e7eb", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>Vertrouwelijk · Rietveld Verlichting · Opgesteld door Woeler · Juni 2026</p>
      </footer>
    </div>
  );
}
