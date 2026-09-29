"use client";

export function FlowStateVisualizer() {
  return (
    <div className="flow-state-visualizer" aria-label="Inlet vs Outlet Engineering Flow State Comparison">
      <div className="state-header">
        <span className="state-eyebrow">FEATURE 06 / FLUID STATE COMPARISON</span>
        <h3 className="state-title">Inlet vs. Outlet Aerodynamic State</h3>
        <p className="state-desc">
          Qualitative transformation of atmospheric air traversing the CoolJet convergent-divergent nozzle.
        </p>
      </div>

      <div className="state-comparison-grid">
        {/* State 01: Inlet */}
        <div className="state-card state-inlet">
          <div className="state-badge-row">
            <span className="state-stage-badge">01 · INLET</span>
            <span className="state-type">AMBIENT AIR INTAKE</span>
          </div>

          <h4 className="state-headline">Atmospheric Ambient State</h4>
          <p className="state-text">
            Natural room air inducted directly from the surrounding environment prior to nozzle acceleration.
          </p>

          <div className="state-parameter-group">
            <div className="param-item">
              <span className="param-name">FLUID MEDIUM</span>
              <strong className="param-val">Natural Atmospheric Air</strong>
            </div>
            <div className="param-item">
              <span className="param-name">STATIC PRESSURE</span>
              <strong className="param-val">HIGHER (Ambient Baseline)</strong>
            </div>
            <div className="param-item">
              <span className="param-name">TEMPERATURE STATE</span>
              <strong className="param-val temp-warm">HIGHER (Room Baseline)</strong>
            </div>
            <div className="param-item">
              <span className="param-name">CHEMICAL ADDITIVES</span>
              <strong className="param-val zero-chem">0% (Zero Refrigerant)</strong>
            </div>
          </div>
        </div>

        {/* Transition Connector: The CoolJet Mechanism */}
        <div className="state-transition-bridge" aria-hidden="true">
          <div className="bridge-track">
            <span className="bridge-line" />
            <div className="bridge-nozzle-glyph">
              <span className="glyph-conv" />
              <span className="glyph-throat" />
              <span className="glyph-div" />
            </div>
            <span className="bridge-line" />
          </div>
          <div className="bridge-annotation">
            <strong>COOLJET C-D NOZZLE DYNAMICS</strong>
            <small>Throat Pressure Drop → Adiabatic Expansion</small>
          </div>
          <div className="bridge-arrow">→</div>
        </div>

        {/* State 02: Outlet */}
        <div className="state-card state-outlet">
          <div className="state-badge-row">
            <span className="state-stage-badge outlet-badge">02 · OUTLET</span>
            <span className="state-type outlet-type">COOLED AIR DISCHARGE</span>
          </div>

          <h4 className="state-headline">Conditioned Cooled Stream</h4>
          <p className="state-text">
            Air exiting the divergent nozzle expansion section into the living or equipment space.
          </p>

          <div className="state-parameter-group">
            <div className="param-item">
              <span className="param-name">FLUID MEDIUM</span>
              <strong className="param-val">Atmospheric Air (Single Phase)</strong>
            </div>
            <div className="param-item">
              <span className="param-name">STATIC PRESSURE</span>
              <strong className="param-val">LOWER (Expansion Stabilization)</strong>
            </div>
            <div className="param-item">
              <span className="param-name">TEMPERATURE STATE</span>
              <strong className="param-val temp-cold">LOWER (Cooled Output)</strong>
            </div>
            <div className="param-item">
              <span className="param-name">HAZARDOUS RESIDUE</span>
              <strong className="param-val zero-chem">None (Clean Discharge)</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="state-footer-note">
        <span>QUALITATIVE ENGINEERING STATE MAP · GROUNDED IN PPT SLIDE 3 & 5 · NO ARBITRARY CFD VALUES</span>
      </div>
    </div>
  );
}
