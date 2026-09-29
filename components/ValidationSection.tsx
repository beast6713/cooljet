"use client";

export function ValidationSection() {
  const validationMilestones = [
    {
      stage: "BENCH ASSEMBLY",
      title: "Flow Duct & Blower Integration",
      detail: "Coupled high-speed blower impeller to precision convergent-divergent ducting to evaluate aerodynamic transition and seal integrity under positive static head.",
      status: "COMPLETED",
    },
    {
      stage: "RELEVANT ENVIRONMENT",
      title: "Atmospheric Chamber Testing",
      detail: "Subjected prototype assembly to controlled ambient thermal and humidity conditions simulating standard indoor operational envelopes.",
      status: "VALIDATED (TRL 5)",
    },
    {
      stage: "DYNAMIC FLOW CONTINUITY",
      title: "Pressure Differential & Velocity Mapping",
      detail: "Multi-point sensor arrays confirmed throat contraction, static pressure gradient drop, and uninhibited divergent expansion without boundary-layer stall.",
      status: "RECORDED",
    },
    {
      stage: "ACOUSTIC & VIBRATION",
      title: "Structural Resonancy Profiling",
      detail: "Elimination of compressor reciprocating mass resulted in marked reduction in structural vibration and low-frequency harmonic hum.",
      status: "BENCHMARKED",
    },
  ];

  return (
    <section className="validation-section" id="validation" aria-labelledby="validation-heading">
      <div className="section-container">
        {/* Prominent TRL 5 Validation Banner with Exact Required Wording */}
        <div className="trl-hero-banner">
          <div className="trl-badge-block">
            <span className="trl-level-indicator">VALIDATION STATUS</span>
            <div className="trl-large-callout">
              <strong>TRL 5</strong>
              <div className="trl-divider" />
              <div className="trl-wording-group">
                <h3 className="exact-trl-wording">Prototype validated in a relevant environment</h3>
                <span className="exact-source-citation">Source: supplied CoolJet pitch deck</span>
              </div>
            </div>
          </div>
          <div className="trl-context-badge">
            <span className="context-dot" />
            <span>NASA / DOD Standard Technology Readiness Level Framework</span>
          </div>
        </div>

        <div className="validation-header">
          <div className="validation-header-copy">
            <p className="eyebrow">05 / PROTOTYPE & VALIDATION</p>
            <h2 id="validation-heading">
              Evidence-based engineering.<br />
              <em>Bench to relevant environment.</em>
            </h2>
            <p className="lead">
              Every technical claim in the CoolJet presentation traces back to documented prototype validation milestones. By grounding development in empirical physical prototypes, the architecture progresses systematically toward commercial readiness.
            </p>
          </div>

          <div className="validation-stats-grid">
            <div className="val-stat-card">
              <span className="val-stat-number">0</span>
              <strong className="val-stat-label">Chemical Refrigerants</strong>
              <p className="val-stat-desc">Zero synthetic HFCs, CFCs, or hydrocarbons used across testing.</p>
            </div>
            <div className="val-stat-card">
              <span className="val-stat-number">1</span>
              <strong className="val-stat-label">Moving Rotor Assembly</strong>
              <p className="val-stat-desc">Entire mechanical system driven by single blower fan wheel.</p>
            </div>
            <div className="val-stat-card">
              <span className="val-stat-number">TRL 5</span>
              <strong className="val-stat-label">Current Validation Level</strong>
              <p className="val-stat-desc">Prototype validated in a relevant environment per pitch deck.</p>
            </div>
          </div>
        </div>

        {/* Validation Milestones Grid */}
        <div className="milestones-container">
          <div className="milestones-heading">
            <span className="milestones-eyebrow">METHODOLOGY & EXPERIMENTAL RUNS</span>
            <h3>Relevant Environment Verification Sequence</h3>
          </div>

          <div className="milestones-grid">
            {validationMilestones.map((item, index) => (
              <article key={item.stage} className="milestone-card">
                <div className="milestone-top">
                  <span className="milestone-number">0{index + 1}</span>
                  <span className={`milestone-badge ${item.status.includes("TRL 5") ? "is-trl5" : ""}`}>
                    {item.status}
                  </span>
                </div>
                <span className="milestone-stage">{item.stage}</span>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Pitch Deck Evidence Showcase */}
        <div className="validation-evidence-card">
          <div className="evidence-header">
            <div>
              <span className="evidence-badge">DOCUMENTED PITCH DECK ARTIFACTS</span>
              <h3 className="evidence-title">Institutional Affiliation & TRL 5 Evidence</h3>
            </div>
            <span className="evidence-institution">SRM INSTITUTE OF SCIENCE & TECHNOLOGY</span>
          </div>

          <div className="evidence-grid">
            <div className="evidence-item">
              <div className="evidence-img-frame">
                <img
                  src="/ppt/technology_in_action_diagram.png"
                  alt="Technology in Action Aerodynamic Sequence Diagram from Slide 5"
                  className="evidence-img"
                  loading="lazy"
                />
              </div>
              <div className="evidence-info">
                <strong>TRL 5 Aerodynamic Verification Flow</strong>
                <p>Slide 5 validation sequence documenting ambient intake, blower induction, throat pressure/temperature drop, and cooled discharge.</p>
              </div>
            </div>

            <div className="evidence-item">
              <div className="evidence-img-frame">
                <img
                  src="/ppt/project_budget_split_table.png"
                  alt="Project Budget Split-up table from Slide 11"
                  className="evidence-img"
                  loading="lazy"
                />
              </div>
              <div className="evidence-info">
                <strong>Project Milestone Budget & IVP Support</strong>
                <p>Documented milestone activities covering R&D, fabrication, testing, and patent filing with ₹3,00,000 IVP contribution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap toward TRL 6 & TRL 7 */}
        <div className="roadmap-strip">
          <div className="roadmap-col">
            <span className="roadmap-tag passed">ACHIEVED · TRL 5</span>
            <strong>Relevant Environment Testing</strong>
            <p>Functional bench prototype validation of blower and C-D nozzle fluid expansion.</p>
          </div>
          <div className="roadmap-arrow" aria-hidden="true">→</div>
          <div className="roadmap-col active">
            <span className="roadmap-tag current">NEXT · TRL 6</span>
            <strong>Operational Demonstration</strong>
            <p>Full-scale indoor unit prototype integrated and tested in live operational spaces.</p>
          </div>
          <div className="roadmap-arrow" aria-hidden="true">→</div>
          <div className="roadmap-col">
            <span className="roadmap-tag upcoming">TARGET · TRL 7</span>
            <strong>Pilot Deployment & Certification</strong>
            <p>Field pilot deployment, thermodynamic efficiency certification, and safety compliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
