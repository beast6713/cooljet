"use client";

import { useState } from "react";
import { TECHNOLOGY_STAGES, TechnologyStage } from "../data/technologyData";

interface TechnologyFlowProps {
  onStageSelect?: (stageIndex: number) => void;
  selectedStageIndex?: number;
}

export function TechnologyFlow({ onStageSelect, selectedStageIndex }: TechnologyFlowProps) {
  const [internalIndex, setInternalIndex] = useState(0);

  const activeIndex = selectedStageIndex !== undefined ? selectedStageIndex : internalIndex;
  const currentStage: TechnologyStage = TECHNOLOGY_STAGES[activeIndex];

  const handleSelect = (idx: number) => {
    setInternalIndex(idx);
    if (onStageSelect) {
      onStageSelect(idx);
    }
  };

  return (
    <div className="technology-flow-wrapper" aria-label="Interactive 6-Stage Engineering Flow">
      <div className="flow-component-header">
        <div>
          <span className="flow-meta-tag">INTERACTIVE FLOW SYSTEM</span>
          <h3 className="flow-component-title">The CoolJet Aerodynamic Sequence</h3>
        </div>
        <div className="flow-instruction-badge">
          <span>CLICK ANY STAGE TO INSPECT FLOW DYNAMICS</span>
        </div>
      </div>

      {/* 6-Stage Interactive Stepper Track */}
      <div className="flow-track" role="tablist" aria-label="CoolJet 6-Stage Airflow Sequence">
        {TECHNOLOGY_STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <button
              key={stage.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`flow-panel-${stage.id}`}
              id={`flow-tab-${stage.id}`}
              className={`flow-node ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`}
              onClick={() => handleSelect(idx)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  handleSelect((idx + 1) % TECHNOLOGY_STAGES.length);
                } else if (e.key === "ArrowLeft") {
                  handleSelect((idx - 1 + TECHNOLOGY_STAGES.length) % TECHNOLOGY_STAGES.length);
                }
              }}
            >
              <div className="flow-node-marker">
                <span className="node-number">{stage.stepNumber}</span>
                <span className="node-indicator-dot" />
              </div>
              <strong className="node-label">{stage.shortLabel}</strong>
              <span className="node-flow-arrow" aria-hidden="true">→</span>
            </button>
          );
        })}
      </div>

      {/* Active Flow Pathway Visual Indicator */}
      <div className="flow-path-rail" aria-hidden="true">
        <div
          className="flow-path-fill"
          style={{ width: `${((activeIndex + 1) / TECHNOLOGY_STAGES.length) * 100}%` }}
        />
        <div
          className="flow-path-particle"
          style={{ left: `${((activeIndex + 1) / TECHNOLOGY_STAGES.length) * 100}%` }}
        />
      </div>

      {/* Active Stage Technical Explanation Card */}
      <article
        className="flow-stage-card"
        id={`flow-panel-${currentStage.id}`}
        role="tabpanel"
        aria-labelledby={`flow-tab-${currentStage.id}`}
      >
        <div className="stage-card-top">
          <div className="stage-card-meta">
            <span className="stage-badge">STAGE {currentStage.stepNumber} OF 06</span>
            <span className="stage-action-tag">{currentStage.aerodynamicAction}</span>
          </div>
          <span className="stage-deck-source">SOURCE: PPT SLIDE 3 & 5</span>
        </div>

        <div className="stage-card-body">
          <div className="stage-card-left">
            <h4 className="stage-title">{currentStage.name}</h4>
            <p className="stage-summary">{currentStage.summary}</p>
            <p className="stage-detail">{currentStage.detail}</p>
          </div>

          <div className="stage-card-right">
            <div className="qualitative-meter-box">
              <span className="meter-label">QUALITATIVE PRESSURE STATE</span>
              <strong className="meter-value pressure-value">{currentStage.qualitativePressure}</strong>
            </div>

            <div className="qualitative-meter-box">
              <span className="meter-label">QUALITATIVE THERMAL STATE</span>
              <strong className="meter-value temperature-value">{currentStage.qualitativeTemperature}</strong>
            </div>

            <div className="stage-deck-claim">
              <span className="claim-icon" aria-hidden="true">✦</span>
              <span>{currentStage.deckClaim}</span>
            </div>
          </div>
        </div>

        {/* Navigation Step Arrows */}
        <div className="stage-card-footer">
          <button
            type="button"
            className="stage-step-btn"
            disabled={activeIndex === 0}
            onClick={() => handleSelect(Math.max(0, activeIndex - 1))}
            aria-label="Previous airflow stage"
          >
            ← Previous Stage
          </button>
          <span className="step-counter">STEP {activeIndex + 1} / {TECHNOLOGY_STAGES.length}</span>
          <button
            type="button"
            className="stage-step-btn"
            disabled={activeIndex === TECHNOLOGY_STAGES.length - 1}
            onClick={() => handleSelect(Math.min(TECHNOLOGY_STAGES.length - 1, activeIndex + 1))}
            aria-label="Next airflow stage"
          >
            Next Stage →
          </button>
        </div>
      </article>
    </div>
  );
}
