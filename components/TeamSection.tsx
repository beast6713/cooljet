"use client";

interface TeamMemberPlaceholder {
  roleCode: string;
  roleTitle: string;
  discipline: string;
  responsibilities: string;
}

const teamPlaceholders: TeamMemberPlaceholder[] = [
  {
    roleCode: "TEAM / 01",
    roleTitle: "Lead Aerodynamicist & Founder",
    discipline: "Gas Dynamics & C-D Nozzle Engineering",
    responsibilities: "Responsible for convergent-divergent nozzle profile generation, boundary-layer mitigation, and aerodynamic CFD simulations.",
  },
  {
    roleCode: "TEAM / 02",
    roleTitle: "Thermal Systems Architect",
    discipline: "Thermodynamics & Heat Transfer",
    responsibilities: "Directs thermodynamic cycle modeling, temperature drop verification, and atmospheric energy balance analysis across operational envelopes.",
  },
  {
    roleCode: "TEAM / 03",
    roleTitle: "Mechanical Design & Prototyping Lead",
    discipline: "Chassis Packaging & Rotor Integration",
    responsibilities: "Oversees physical prototype construction, blower fan dynamic balancing, acoustic isolation, and TRL relevant environment test fixture assembly.",
  },
  {
    roleCode: "TEAM / 04",
    roleTitle: "Strategic & Technical Advisor",
    discipline: "Aerospace Propulsion & HVAC Industry",
    responsibilities: "Advises on certification roadmaps, technology scale-up from TRL 5 to TRL 7, and commercial pilot deployment across target industrial sectors.",
  },
];

export function TeamSection() {
  return (
    <section className="team-section" id="team" aria-labelledby="team-heading">
      <div className="section-container">
        <div className="team-header">
          <p className="eyebrow">07 / ENGINEERING & ADVISORY TEAM</p>
          <div className="team-title-grid">
            <h2 id="team-heading">
              Multidisciplinary expertise.<br />
              <em>Aerospace to thermal systems.</em>
            </h2>
            <div className="team-notice-box">
              <span className="notice-icon" aria-hidden="true">ℹ</span>
              <div>
                <strong>Team Roster: Placeholder Profiles</strong>
                <p>
                  Official names, bios, and photography will be updated upon final roster confirmation. The technical disciplines below reflect the active competencies guiding the project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamPlaceholders.map((member) => (
            <article key={member.roleCode} className="team-card">
              <div className="team-avatar-placeholder">
                <div className="avatar-schematic-bg" />
                <div className="avatar-glyph" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="24" cy="18" r="7" stroke="currentColor" strokeWidth="1.75" />
                    <path d="M12 36C12 29.3726 17.3726 24 24 24C30.6274 24 36 29.3726 36 36" stroke="currentColor" strokeWidth="1.75" />
                    <line x1="24" y1="2" x2="24" y2="7" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="24" y1="41" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="placeholder-pill">AWAITING PHOTO</span>
              </div>

              <div className="team-card-content">
                <div className="team-role-meta">
                  <span className="team-code">{member.roleCode}</span>
                  <span className="team-status-tag">ACTIVE ROLE</span>
                </div>
                <h3 className="team-name-placeholder">[ Team Member Name ]</h3>
                <h4 className="team-role-title">{member.roleTitle}</h4>
                <p className="team-discipline">
                  <strong>Focus:</strong> {member.discipline}
                </p>
                <p className="team-desc">{member.responsibilities}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
