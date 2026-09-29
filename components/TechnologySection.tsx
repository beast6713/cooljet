"use client";

import { useState } from "react";
import { EngineeringCallouts } from "./EngineeringCallouts";
import { FlowStateVisualizer } from "./FlowStateVisualizer";
import { HowItWorksMode } from "./HowItWorksMode";
import { NozzleExplorer } from "./NozzleExplorer";
import { TechnologyComparison } from "./TechnologyComparison";
import { TechnologyFlow } from "./TechnologyFlow";

export function TechnologySection() {
  const [activeTab, setActiveTab] = useState<"flow" | "nozzle" | "states" | "comparison">("flow");
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [syncedStageIdx, setSyncedStageIdx] = useState(0);

  return (
    <section className="tech-innovation-section" id="technology" aria-labelledby="tech-heading">
      <div className="section-container">
        {/* Header with Title and "How CoolJet Works" Trigger */}
        <div className="tech-header">
          <div className="tech-eyebrow-row">
            <p className="eyebrow">01 / TECHNOLOGY & ENGINEERING PRINCIPLES</p>
            <button
              type="button"
              className="button button-how-it-works"
              onClick={() => setIsHowItWorksOpen(true)}
              aria-label="Launch interactive guided How CoolJet Works tour"
            >
              <span className="how-icon" aria-hidden="true">▶</span>
              <span>HOW COOLJET WORKS (GUIDED TOUR)</span>
            </button>
          </div>

          <div className="tech-title-grid">
            <h2 id="tech-heading">
              Aerospace fluid mechanics<br />
              <em>engineered for cooling.</em>
            </h2>
            <p className="lead">
              CoolJet challenges the century-old reliance on chemical vapor-compression. By harnessing high-velocity blower induction and aerodynamic de Laval nozzle contours, ambient air is conditioned through gas-dynamic expansion rather than chemical phase transitions.
            </p>
          </div>
        </div>

        {/* Engineering Callouts Strip */}
        <EngineeringCallouts />

        {/* Phase 5 Interactive Exploration Tabs */}
        <div className="tech-tab-nav" role="tablist" aria-label="Technology interaction views">
          <button
            role="tab"
            aria-selected={activeTab === "flow"}
            className={`tech-tab-btn ${activeTab === "flow" ? "is-active" : ""}`}
            onClick={() => setActiveTab("flow")}
          >
            <span>01</span> 6-Stage Airflow Sequence
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "nozzle"}
            className={`tech-tab-btn ${activeTab === "nozzle" ? "is-active" : ""}`}
            onClick={() => setActiveTab("nozzle")}
          >
            <span>02</span> C-D Nozzle Explorer
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "states"}
            className={`tech-tab-btn ${activeTab === "states" ? "is-active" : ""}`}
            onClick={() => setActiveTab("states")}
          >
            <span>03</span> Inlet vs. Outlet State
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "comparison"}
            className={`tech-tab-btn ${activeTab === "comparison" ? "is-active" : ""}`}
            onClick={() => setActiveTab("comparison")}
          >
            <span>04</span> Conventional AC Comparison
          </button>
        </div>

        {/* Tab 1: Feature 1 - Interactive Technology Flow */}
        {activeTab === "flow" && (
          <div className="tech-tab-panel" role="tabpanel">
            <TechnologyFlow
              selectedStageIndex={syncedStageIdx}
              onStageSelect={(idx) => setSyncedStageIdx(idx)}
            />
          </div>
        )}

        {/* Tab 2: Feature 2 & 3 - Dedicated C-D Nozzle Explorer */}
        {activeTab === "nozzle" && (
          <div className="tech-tab-panel" role="tabpanel">
            <NozzleExplorer />
          </div>
        )}

        {/* Tab 3: Feature 6 - Before / After Engineering State */}
        {activeTab === "states" && (
          <div className="tech-tab-panel" role="tabpanel">
            <FlowStateVisualizer />
          </div>
        )}

        {/* Tab 4: Feature 7 - Objective Architectural Comparison */}
        {activeTab === "comparison" && (
          <div className="tech-tab-panel" role="tabpanel">
            <TechnologyComparison />
          </div>
        )}

        {/* Guided "How It Works" Mode Modal */}
        <HowItWorksMode
          isOpen={isHowItWorksOpen}
          onClose={() => setIsHowItWorksOpen(false)}
          onStageChange={(idx) => setSyncedStageIdx(idx)}
        />
      </div>
    </section>
  );
}
