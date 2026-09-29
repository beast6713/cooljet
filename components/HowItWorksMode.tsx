"use client";

import { useEffect, useState } from "react";
import { TECHNOLOGY_STAGES, TechnologyStage } from "../data/technologyData";

interface HowItWorksModeProps {
  isOpen: boolean;
  onClose: () => void;
  onStageChange?: (stageIdx: number) => void;
}

export function HowItWorksMode({ isOpen, onClose, onStageChange }: HowItWorksModeProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const stage: TechnologyStage = TECHNOLOGY_STAGES[currentStep];

  useEffect(() => {
    if (onStageChange && isOpen) {
      onStageChange(currentStep);
    }
  }, [currentStep, isOpen, onStageChange]);

  // Keyboard navigation support: Esc to exit, Arrows to step
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentStep((prev) => Math.min(TECHNOLOGY_STAGES.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentStep((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="how-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="how-modal-title">
      <div className="how-modal-card">
        {/* Modal Top Bar */}
        <div className="how-modal-top">
          <div className="modal-branding">
            <span className="modal-tag">GUIDED ENGINEERING TOUR</span>
            <span className="modal-subtag">HOW COOLJET WORKS</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Exit guided tour"
          >
            ✕ Close
          </button>
        </div>

        {/* Stepper Progress Indicator */}
        <div className="modal-stepper-track" aria-label="Tour progress">
          {TECHNOLOGY_STAGES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`stepper-dot-btn ${idx === currentStep ? "is-active" : idx < currentStep ? "is-complete" : ""}`}
              onClick={() => setCurrentStep(idx)}
              aria-label={`Jump to Step ${idx + 1}: ${s.shortLabel}`}
            >
              <span className="stepper-dot" />
              <span className="stepper-dot-label">{s.stepNumber}</span>
            </button>
          ))}
        </div>

        {/* Modal Stage Content */}
        <div className="how-modal-content">
          <div className="modal-stage-eyebrow">
            <span>STEP {stage.stepNumber} OF {TECHNOLOGY_STAGES.length}</span>
            <span className="stage-action-pill">{stage.aerodynamicAction}</span>
          </div>

          <h3 id="how-modal-title" className="modal-stage-title">
            {stage.name}
          </h3>

          <p className="modal-stage-summary">{stage.summary}</p>
          <p className="modal-stage-detail">{stage.detail}</p>

          <div className="modal-meters-row">
            <div className="modal-meter-card">
              <span className="meter-caption">PRESSURE BEHAVIOR</span>
              <strong className="meter-readout">{stage.qualitativePressure}</strong>
            </div>

            <div className="modal-meter-card">
              <span className="meter-caption">TEMPERATURE BEHAVIOR</span>
              <strong className="meter-readout temp-accent">{stage.qualitativeTemperature}</strong>
            </div>
          </div>

          <div className="modal-deck-annotation">
            <strong>PPT Source of Truth:</strong> {stage.deckClaim}
          </div>
        </div>

        {/* Modal Navigation Buttons */}
        <div className="how-modal-actions">
          <button
            type="button"
            className="button button-secondary"
            disabled={currentStep === 0}
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          >
            ← Previous
          </button>

          <span className="modal-step-indicator">
            {currentStep + 1} / {TECHNOLOGY_STAGES.length}
          </span>

          {currentStep < TECHNOLOGY_STAGES.length - 1 ? (
            <button
              type="button"
              className="button button-primary"
              onClick={() => setCurrentStep((prev) => Math.min(TECHNOLOGY_STAGES.length - 1, prev + 1))}
            >
              <span>Next Stage →</span>
            </button>
          ) : (
            <button
              type="button"
              className="button button-primary"
              onClick={onClose}
            >
              <span>Finish Tour ✓</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
