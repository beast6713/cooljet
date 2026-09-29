"use client";

export function EngineeringCallouts() {
  const callouts = [
    { code: "E-01", label: "AIR INLET", spec: "Atmospheric Intake (Ambient)", role: "Direct induction without chemical mixing" },
    { code: "E-02", label: "BLOWER FAN", spec: "Impeller Kinetic Drive", role: "Centrifugal acceleration into duct inlet" },
    { code: "E-03", label: "FLOW DIRECTION", spec: "Axial Continuity →", role: "Uninterrupted streamline path through geometry" },
    { code: "E-04", label: "CONVERGENT SECTION", spec: "Narrowing Profile", role: "Velocity ramp & streamline contraction" },
    { code: "E-05", label: "THROAT", spec: "Minimum Cross-Section", role: "Localized static pressure drop & temp decrease" },
    { code: "E-06", label: "DIVERGENT SECTION", spec: "Expanding Bell", role: "Adiabatic fluid expansion" },
    { code: "E-07", label: "COOLED AIR OUTLET", spec: "Conditioned Discharge", role: "Deliver cool air without refrigerants/compressors" },
  ];

  return (
    <div className="engineering-callouts-strip" aria-label="Aerospace Engineering Callouts and Annotations">
      <div className="callouts-header">
        <span className="callouts-tag">FEATURE 08 / AEROSPACE DRAFTING ANNOTATIONS</span>
        <h4>Systemic Engineering Nomenclature</h4>
      </div>

      <div className="callouts-grid">
        {callouts.map((item) => (
          <div key={item.code} className="callout-pill">
            <div className="callout-indicator-rail">
              <span className="callout-tick" />
              <span className="callout-leader" />
            </div>
            <div className="callout-content">
              <span className="callout-code">{item.code}</span>
              <strong className="callout-label">{item.label}</strong>
              <small className="callout-spec">{item.spec}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
