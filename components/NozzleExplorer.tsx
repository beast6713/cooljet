"use client";

import { useState } from "react";
import { NOZZLE_SECTIONS, NozzleSectionData } from "../data/technologyData";

export function NozzleExplorer() {
  const [selectedSection, setSelectedSection] = useState<"overview" | "convergent" | "throat" | "divergent">("throat");

  const current: NozzleSectionData = NOZZLE_SECTIONS[selectedSection];

  return (
    <div className="nozzle-explorer-card" aria-label="Dedicated C-D Nozzle Geometry Explorer">
      {/* Header and Section Filter */}
      <div className="nozzle-explorer-header">
        <div>
          <span className="nozzle-tag">FEATURE 02 / C-D NOZZLE EXPLORER</span>
          <h3 className="nozzle-title">Aerospace Convergent-Divergent Geometry</h3>
          <p className="nozzle-sub">
            Inspect the solid-state nozzle geometry where pressure drop and adiabatic expansion occur.
          </p>
        </div>

        <div className="nozzle-filter-tabs" role="tablist" aria-label="Select C-D Nozzle Section">
          {(["overview", "convergent", "throat", "divergent"] as const).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={selectedSection === key}
              className={`nozzle-tab ${selectedSection === key ? "is-active" : ""}`}
              onClick={() => setSelectedSection(key)}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Schematic Diagram with Dynamic Sectional Highlighting */}
      <div className="nozzle-schematic-stage">
        <div className="schematic-hud-bar">
          <span className="hud-label">AIRFLOW DIRECTION: LEFT TO RIGHT</span>
          <span className="hud-badge">QUALITATIVE ENGINEERING VISUALIZATION</span>
        </div>

        {/* SVG Aero Contour Diagram */}
        <div className="schematic-canvas" aria-hidden="true">
          <svg
            viewBox="0 0 900 320"
            className="nozzle-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#55c9f4" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#2b64ea" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#12458a" stopOpacity="1" />
                <stop offset="100%" stopColor="#55c9f4" stopOpacity="0.7" />
              </linearGradient>

              <linearGradient id="pressureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2453d8" />
                <stop offset="48%" stopColor="#1a6ddb" />
                <stop offset="52%" stopColor="#0d2e5a" />
                <stop offset="100%" stopColor="#55c9f4" />
              </linearGradient>

              <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="900" height="320" fill="url(#gridPattern)" />

            {/* Central Streamlines Axis */}
            <line x1="20" y1="160" x2="880" y2="160" stroke="#1f4f80" strokeWidth="1" strokeDasharray="6 4" />

            {/* Outer Nozzle Casing Walls (Top and Bottom) */}
            {/* Top wall: Convergent (x: 80->430, y: 30->115) -> Throat (430->470, y: 115) -> Divergent (470->840, y: 115->30) */}
            <path
              d="M 60,30 L 430,115 L 470,115 L 840,30"
              fill="none"
              stroke="#588eb8"
              strokeWidth="4"
              className="nozzle-wall top-wall"
            />
            {/* Bottom wall */}
            <path
              d="M 60,290 L 430,205 L 470,205 L 840,290"
              fill="none"
              stroke="#588eb8"
              strokeWidth="4"
              className="nozzle-wall bottom-wall"
            />

            {/* Interior Flow Area Shapes with highlighting */}
            {/* 1. Convergent Area */}
            <polygon
              points="60,34 430,117 430,203 60,286"
              className={`duct-zone zone-convergent ${selectedSection === "convergent" || selectedSection === "overview" ? "is-highlighted" : ""}`}
            />

            {/* 2. Throat Area */}
            <polygon
              points="430,117 470,117 470,203 430,203"
              className={`duct-zone zone-throat ${selectedSection === "throat" || selectedSection === "overview" ? "is-highlighted" : ""}`}
            />

            {/* 3. Divergent Area */}
            <polygon
              points="470,117 840,34 840,286 470,203"
              className={`duct-zone zone-divergent ${selectedSection === "divergent" || selectedSection === "overview" ? "is-highlighted" : ""}`}
            />

            {/* Animated Flow Streamlines */}
            <path
              d="M 70,80 Q 280,135 450,138 T 830,80"
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="2.5"
              className="flow-streamline stream-1"
            />
            <path
              d="M 70,160 L 830,160"
              fill="none"
              stroke="#62d8fb"
              strokeWidth="3"
              className="flow-streamline stream-center"
            />
            <path
              d="M 70,240 Q 280,185 450,182 T 830,240"
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="2.5"
              className="flow-streamline stream-2"
            />

            {/* Engineering Callout Leader Lines and Marks */}
            {/* Convergent Section marker */}
            <line x1="240" y1="40" x2="240" y2="10" stroke="#7bb0d6" strokeWidth="1" />
            <circle cx="240" cy="40" r="3" fill="#7bb0d6" />
            <text x="240" y="8" fill="#a4cbe6" fontSize="11" fontFamily="DM Mono" textAnchor="middle">
              CONVERGENT SECTION
            </text>

            {/* Throat Minimum Cross Section marker */}
            <line x1="450" y1="115" x2="450" y2="15" stroke="#55c9f4" strokeWidth="1.5" />
            <circle cx="450" cy="115" r="4" fill="#55c9f4" />
            <text x="450" y="12" fill="#55c9f4" fontSize="11" fontFamily="DM Mono" textAnchor="middle" fontWeight="bold">
              THROAT (MIN. AREA)
            </text>

            {/* Divergent Section marker */}
            <line x1="660" y1="40" x2="660" y2="10" stroke="#7bb0d6" strokeWidth="1" />
            <circle cx="660" cy="40" r="3" fill="#7bb0d6" />
            <text x="660" y="8" fill="#a4cbe6" fontSize="11" fontFamily="DM Mono" textAnchor="middle">
              DIVERGENT SECTION
            </text>

            {/* Inlet and Outlet Callouts */}
            <text x="70" y="312" fill="#88b5dc" fontSize="10" fontFamily="DM Mono">
              AIR INLET (FROM BLOWER) →
            </text>
            <text x="830" y="312" fill="#62d8fb" fontSize="10" fontFamily="DM Mono" textAnchor="end">
              → COOLED DISCHARGE (OUTLET)
            </text>
          </svg>
        </div>

        {/* Feature 3: Qualitative Pressure & Temperature Behavior Meters */}
        <div className="nozzle-qualitative-gauges">
          <div className="gauge-item">
            <div className="gauge-header">
              <span className="gauge-title">QUALITATIVE PRESSURE BEHAVIOR</span>
              <strong className="gauge-status">{current.qualitativePressureLevel}</strong>
            </div>
            <div className="gauge-track" aria-hidden="true">
              <div
                className="gauge-fill gauge-pressure-fill"
                style={{ width: `${current.qualitativePressureBar}%` }}
              />
            </div>
            <div className="gauge-axis-labels">
              <span>HIGH (UPSTREAM)</span>
              <span>PRESSURE DROP AT THROAT</span>
              <span>LOW (EXPANSION)</span>
            </div>
          </div>

          <div className="gauge-item">
            <div className="gauge-header">
              <span className="gauge-title">QUALITATIVE TEMPERATURE BEHAVIOR</span>
              <strong className="gauge-status temp-status">{current.qualitativeTemperatureLevel}</strong>
            </div>
            <div className="gauge-track" aria-hidden="true">
              <div
                className="gauge-fill gauge-temp-fill"
                style={{ width: `${current.qualitativeTemperatureBar}%` }}
              />
            </div>
            <div className="gauge-axis-labels">
              <span>HIGHER (AMBIENT)</span>
              <span>DROP AT THROAT</span>
              <span>LOWER (COOLED OUTLET)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Section Technical Details */}
      <div className="nozzle-section-detail-pane">
        <div className="detail-tag-strip">
          <span className="detail-tag">{current.tag}</span>
          <span className="detail-disclaimer">Grounded in PPT Slide 3 & 5 · Zero Refrigerants</span>
        </div>

        <div className="detail-grid">
          <div className="detail-col">
            <h4>{current.title}</h4>
            <p className="detail-role">{current.role}</p>
          </div>

          <div className="detail-col">
            <strong className="detail-subhead">GEOMETRY ARCHITECTURE</strong>
            <p className="detail-body">{current.geometryDescription}</p>
          </div>

          <div className="detail-col">
            <strong className="detail-subhead">AERO-THERMAL BEHAVIOR</strong>
            <p className="detail-body">{current.fluidBehavior}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
