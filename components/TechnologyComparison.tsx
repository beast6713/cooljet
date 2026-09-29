"use client";

import { CONVENTIONAL_COMPARISON } from "../data/technologyData";

export function TechnologyComparison() {
  return (
    <div className="tech-comparison-container" aria-label="Objective Architectural Comparison">
      <div className="comparison-intro-bar">
        <div>
          <span className="comparison-meta-tag">FEATURE 07 / ARCHITECTURAL COMPARISON</span>
          <h3 className="comparison-section-title">CoolJet Aerodynamic Architecture vs. Conventional Vapor-Compression</h3>
          <p className="comparison-section-lead">
            Documented engineering differences between CoolJet’s single-blower nozzle cycle and traditional chemical refrigerant HVAC systems.
          </p>
        </div>

        <div className="comparison-source-pill">
          <span>SOURCE: PPT SLIDES 2, 3 & 5 · OBJECTIVE ARCHITECTURAL DIFFERENCES</span>
        </div>
      </div>

      <div className="comparison-matrix-wrapper">
        <table className="engineering-matrix-table">
          <thead>
            <tr>
              <th scope="col" className="matrix-th-param">ARCHITECTURAL CATEGORY</th>
              <th scope="col" className="matrix-th-conv">CONVENTIONAL HVAC (VAPOR-COMPRESSION)</th>
              <th scope="col" className="matrix-th-cooljet">COOLJET AERODYNAMIC DESIGN</th>
              <th scope="col" className="matrix-th-source">PITCH DECK BASIS</th>
            </tr>
          </thead>
          <tbody>
            {CONVENTIONAL_COMPARISON.map((item, index) => (
              <tr key={index} className="matrix-row">
                <td className="matrix-td-param">
                  <strong>{item.category}</strong>
                </td>
                <td className="matrix-td-conv">
                  <span className="matrix-content-badge conv-badge">Conventional</span>
                  <p>{item.conventional}</p>
                </td>
                <td className="matrix-td-cooljet">
                  <span className="matrix-content-badge cooljet-badge">CoolJet Architecture</span>
                  <p>{item.cooljet}</p>
                </td>
                <td className="matrix-td-source">
                  <small>{item.sourceAnnotation}</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="comparison-footer-disclaimer">
        <span>FACTUAL ENGINEERING COMPARISON · NO UNSUPPORTED CLAIMS · DERIVED DIRECTLY FROM PPT SOURCE MATERIAL</span>
      </div>
    </div>
  );
}
