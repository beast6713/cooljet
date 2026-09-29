"use client";

import { getAssetUrl } from "../data/assetHelper";

const applications = [
  {
    code: "APP / 01",
    sector: "DATA CENTERS & MISSION CRITICAL",
    title: "High-Density Server Thermal Regulation",
    summary: "Eliminates pressurized liquid refrigerant loops and toxic chemical piping above sensitive server racks and microelectronics. CoolJet provides direct, non-conductive atmospheric airflow cooling with zero leak liability.",
    highlights: ["Zero liquid leak hazard", "Modular rack enclosure fit", "Continuous non-chemical uptime"],
  },
  {
    code: "APP / 02",
    sector: "COMMERCIAL & RESIDENTIAL BUILDINGS",
    title: "Refrigerant-Free Indoor Air Conditioning",
    summary: "Replaces traditional split-system indoor and outdoor units with a streamlined, ductless architecture. Simplifies building architectural design by removing complex refrigerant line sets, brazed copper connections, and hazardous evacuation procedures.",
    highlights: ["No refrigerant lines through walls", "Lightweight indoor chassis", "Low architectural footprint"],
  },
  {
    code: "APP / 03",
    sector: "AEROSPACE & ELECTRIC MOBILITY",
    title: "Electric Vehicle & Cabin Climate Management",
    summary: "Weight and safety are paramount in electric aviation, mass transit rail, and passenger vehicles. CoolJet’s single-blower, compressor-less design dramatically cuts mass while eliminating flammable or toxic refrigerant risks during impact.",
    highlights: ["Significant structural weight savings", "Zero flammability/toxicity risks", "Direct DC bus motor compatibility"],
  },
  {
    code: "APP / 04",
    sector: "TELECOM & INDUSTRIAL ENCLOSURES",
    title: "Remote Telecom & Switchgear Cabinets",
    summary: "Remote cell towers and utility substations face high service costs when conventional AC units suffer compressor failure or refrigerant depletion. CoolJet offers ultra-high reliability with minimal mechanical servicing.",
    highlights: ["Ideal for remote unmanned sites", "Low maintenance filter-only care", "High resistance to mechanical shock"],
  },
];

const impacts = [
  {
    stat: "100%",
    unit: "REFRIGERANT ELIMINATION",
    title: "Zero Montreal Protocol Risk",
    desc: "By removing all synthetic fluorocarbons, CoolJet completely bypasses international phase-down schedules, F-Gas quota taxes, and future chemical bans.",
  },
  {
    stat: "0",
    unit: "GWP & ODP",
    title: "Atmospheric Air Cycle",
    desc: "Global Warming Potential (GWP) of 0 and Ozone Depletion Potential (ODP) of 0. Operates exclusively on natural ambient atmospheric gas dynamics.",
  },
  {
    stat: "~65%",
    unit: "COMPONENT COUNT REDUCTION",
    title: "Streamlined Manufacturing",
    desc: "Replacing complex compressors, expansion valves, evaporators, and condensers with a single blower and aerodynamic nozzle minimizes supply chain complexity.",
  },
  {
    stat: "90%+",
    unit: "RECYCLABLE BILL OF MATERIALS",
    title: "Circularity by Design",
    desc: "Constructed using standard engineered polymers and recyclable aluminum alloys with no hazardous chemical reclamation required at product retirement.",
  },
];

export function ApplicationsSection() {
  return (
    <section className="applications-section" id="applications" aria-labelledby="apps-heading">
      <div className="section-container">
        <div className="apps-header">
          <p className="eyebrow">06 / APPLICATIONS & PROJECT IMPACT</p>
          <div className="apps-title-grid">
            <h2 id="apps-heading">
              Built for critical sectors.<br />
              <em>Targeted global impact.</em>
            </h2>
            <p className="lead">
              CoolJet’s compressor-free architecture addresses both operational vulnerabilities in mission-critical equipment and global sustainability mandates requiring rapid phase-down of chemical cooling agents.
            </p>
          </div>
        </div>

        {/* Application Cards */}
        <div className="apps-grid">
          {applications.map((app) => (
            <article key={app.code} className="app-card">
              <div className="app-card-meta">
                <span className="app-code">{app.code}</span>
                <span className="app-sector">{app.sector}</span>
              </div>
              <h3>{app.title}</h3>
              <p>{app.summary}</p>
              <ul className="app-highlights" aria-label="Key operational highlights">
                {app.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="bullet-indicator" aria-hidden="true">↗</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Market Opportunity from Pitch Deck Slide 4 */}
        <div className="market-deck-showcase">
          <div className="market-deck-header">
            <div>
              <span className="market-deck-tag">PPT SLIDE 4 · MARKET AT A GLANCE</span>
              <h3 className="market-deck-title">Global & Domestic Addressable Market</h3>
            </div>
            <div className="market-cagr-badge">
              <span>GLOBAL CAGR: 7.5% · INDIA CAGR: 6.6%</span>
            </div>
          </div>

          <div className="market-deck-body">
            <div className="market-deck-img-wrap">
              <img
                src={getAssetUrl("/ppt/market_opportunity_charts.png")}
                alt="Global AC Market Size $257.8B and India AC Market Size $14.5B from PPT Slide 4"
                className="market-deck-img"
                loading="lazy"
              />
            </div>
            <div className="market-deck-copy">
              <h4>$257.8 Billion Global Market by 2030</h4>
              <p>
                As presented in Slide 4, the global air conditioning market was valued at USD 155.6 billion in 2023 and is projected to reach USD 257.8 billion by 2030 (CAGR 7.5%). India’s domestic AC market expands from ~$9.3 billion to ~$14.5 billion by 2030.
              </p>
              <div className="market-key-drivers">
                <div className="driver-pill">✦ Global Phase-down of HFC Refrigerants</div>
                <div className="driver-pill">✦ Rising Energy Costs & Demand for Efficiency</div>
                <div className="driver-pill">✦ Increasing Adoption in Hot & Humid Climates</div>
                <div className="driver-pill">✦ Government Push for Zero-GWP Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Banner */}
        <div className="impact-container">
          <div className="impact-heading">
            <span className="impact-eyebrow">PROJECT FOOTPRINT & SUSTAINABILITY</span>
            <h3>Environmental and Industrial Significance</h3>
            <p>
              According to the Project Drawdown climate mitigation studies, refrigerant management and alternative cooling represent one of the single most impactful solutions to global greenhouse warming.
            </p>
          </div>

          <div className="impact-grid">
            {impacts.map((item, idx) => (
              <div key={idx} className="impact-card">
                <div className="impact-stat-group">
                  <strong>{item.stat}</strong>
                  <small>{item.unit}</small>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
