"use client";

import Image from "next/image";
import { useState } from "react";

interface DeckPhoto {
  id: string;
  title: string;
  slideNumber: number;
  category: "engineering" | "technology" | "market" | "business" | "overview";
  src: string;
  caption: string;
  highlightBadge: string;
  description: string;
}

const DECK_PHOTOS: DeckPhoto[] = [
  {
    id: "slide-3-indoor-unit",
    title: "Indoor Unit System & Blower Assembly",
    slideNumber: 3,
    category: "engineering",
    src: "/ppt/cooljet_indoor_unit_system.png",
    caption: "Slide 3 · Indoor Unit Architecture",
    highlightBadge: "CORE ARCHITECTURE",
    description: "Cutaway engineering rendering of the indoor unit showcasing the motive blower fan and multi-stage convergent-divergent nozzle array.",
  },
  {
    id: "slide-3-nozzle-3d",
    title: "3D CAD Views of C-D Nozzle (Fig 5.1 & 5.2)",
    slideNumber: 3,
    category: "engineering",
    src: "/ppt/cd_nozzle_3d_design_fig5.png",
    caption: "Slide 3 · Fig 5.1 & 5.2 3D Model",
    highlightBadge: "CAD 3D MODEL",
    description: "Front-side and rear-side isometric 3D views of the de Laval C-D nozzle contoured expansion channel.",
  },
  {
    id: "slide-3-nozzle-dimensions",
    title: "C-D Nozzle Dimension Blueprint (Fig 5.3)",
    slideNumber: 3,
    category: "engineering",
    src: "/ppt/cd_nozzle_engineering_dimensions_fig5_3.png",
    caption: "Slide 3 · Fig 5.3 Engineering Blueprint",
    highlightBadge: "SPECIFICATION BLUEPRINT",
    description: "Precision manufacturing CAD blueprint documenting exact radii (R49.5, R51, R32, R7.5) and cross-sectional contraction throat dimensions.",
  },
  {
    id: "slide-5-tech-in-action",
    title: "Technology in Action Aerodynamic Sequence",
    slideNumber: 5,
    category: "technology",
    src: "/ppt/technology_in_action_diagram.png",
    caption: "Slide 5 · Technology In Action Flow",
    highlightBadge: "TRL 5 VALIDATED DYNAMICS",
    description: "Documented fluid mechanics sequence: Ambient Air In → Convergent Compression → Throat (Low Pressure / Temp Drop) → Divergent Expansion → Cooled Air Out.",
  },
  {
    id: "slide-4-market",
    title: "Market Opportunity & Industry Projections",
    slideNumber: 4,
    category: "market",
    src: "/ppt/market_opportunity_charts.png",
    caption: "Slide 4 · Market At A Glance",
    highlightBadge: "USD 257.8B MARKET",
    description: "Global AC market expanding to $257.8B by 2030 (CAGR 7.5%) with India growing to $14.5B (CAGR 6.6%), accelerated by refrigerant phase-down mandates.",
  },
  {
    id: "slide-10-financials",
    title: "3-Year Financial Outlook & Projections",
    slideNumber: 10,
    category: "business",
    src: "/ppt/financial_3year_projections.png",
    caption: "Slide 10 · 3-Year Projections",
    highlightBadge: "FINANCIAL MODEL",
    description: "3-year financial model tracking product sales and AMC revenues scaling from ₹90L (Year 1) to ₹6.30 Cr (Year 3) with 32% EBITDA margin.",
  },
  {
    id: "slide-10-funds",
    title: "Pre-Seed Allocation & Use of Funds",
    slideNumber: 10,
    category: "business",
    src: "/ppt/use_of_funds_breakdown.png",
    caption: "Slide 10 · ₹75,00,000 Pre-Seed Round",
    highlightBadge: "CAPITAL ALLOCATION",
    description: "Use of funds: R&D & Product Dev (30%), Prototyping (25%), Marketing (20%), Team (15%), Contingency (10%).",
  },
  {
    id: "slide-11-budget",
    title: "Institutional Project Budget Split & IVP Support",
    slideNumber: 11,
    category: "business",
    src: "/ppt/project_budget_split_table.png",
    caption: "Slide 11 · SRM Institute of Science & Technology",
    highlightBadge: "KNOWLEDGE PARTNER: SRM",
    description: "Official milestone budget table documenting ₹3,25,000 project breakdown with ₹3,00,000 IVP contribution under SRM Institute of Science & Technology.",
  },
  {
    id: "slide-1-brand",
    title: "CoolJet Startup Pitch Deck Title & Institution",
    slideNumber: 1,
    category: "overview",
    src: "/ppt/cooljet_srm_brand_header.png",
    caption: "Slide 1 · Presenter: Rudra Shekhar Dubey",
    highlightBadge: "OFFICIAL PRESENTATION",
    description: "Official startup deck presented at SRM Institute of Science & Technology by Rudra Shekhar Dubey.",
  },
];

const FULL_SLIDES = Array.from({ length: 11 }, (_, i) => ({
  number: i + 1,
  src: `/ppt/slide_${i + 1}.png`,
  title: [
    "Cover: Startup Pitch Deck",
    "Problem Statement",
    "Solution / Product Picture",
    "Market Opportunity",
    "Technology / Innovation",
    "Business Model",
    "Go-to-Market (GTM) Strategy",
    "Environmental & Social Impact",
    "Development Roadmap",
    "Financial Overview",
    "Budget Split Up & Knowledge Partner",
  ][i],
}));

export function PitchDeckGallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "slides">("photos");
  const [selectedPhoto, setSelectedPhoto] = useState<DeckPhoto>(DECK_PHOTOS[0]);
  const [selectedSlide, setSelectedSlide] = useState<number>(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");

  const openModal = (src: string, title: string) => {
    setModalImageSrc(src);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <section className="pitch-deck-section" id="deck" aria-labelledby="deck-heading">
      <div className="section-container">
        {/* Header */}
        <div className="deck-header">
          <div className="deck-eyebrow-row">
            <p className="eyebrow">04 / OFFICIAL PITCH DECK & ENGINEERING DRAWINGS</p>
            <span className="deck-auth-badge">SRM INSTITUTE OF SCIENCE & TECHNOLOGY</span>
          </div>

          <div className="deck-title-grid">
            <div>
              <h2 id="deck-heading">
                Authentic drawings.<br />
                <em>Direct from the pitch deck.</em>
              </h2>
              <p className="lead">
                Explore the original technical diagrams, CAD blueprints, 3D nozzle geometry, and institutional validation artifacts presented in the official CoolJet pitch deck.
              </p>
            </div>

            <div className="deck-actions-header">
              <a
                href="/ppt/cooljet_pitch_deck.pdf"
                download="CoolJet_Pitch_Deck.pdf"
                className="button button-primary deck-download-btn"
                aria-label="Download official CoolJet pitch deck PDF"
              >
                <span>Download Official Deck (PDF)</span>
                <span className="deck-dl-arrow" aria-hidden="true">↓</span>
              </a>
              <span className="deck-file-meta">PDF · 11 SLIDES · 892 KB · TRL 5 SPEC</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="deck-nav-tabs" role="tablist" aria-label="Pitch deck view options">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "photos"}
            className={`deck-tab-btn ${activeTab === "photos" ? "is-active" : ""}`}
            onClick={() => setActiveTab("photos")}
          >
            <span>01</span> Technical Diagrams & Blueprint Photos ({DECK_PHOTOS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "slides"}
            className={`deck-tab-btn ${activeTab === "slides" ? "is-active" : ""}`}
            onClick={() => setActiveTab("slides")}
          >
            <span>02</span> Complete 11-Slide Pitch Deck
          </button>
        </div>

        {/* Tab 1: Technical Diagrams & Photos Viewer */}
        {activeTab === "photos" && (
          <div className="deck-feature-layout">
            {/* Left: Featured Large Photo Preview */}
            <div className="deck-large-preview">
              <div className="preview-top-bar">
                <span className="preview-tag">{selectedPhoto.highlightBadge}</span>
                <span className="preview-slide-num">SLIDE {selectedPhoto.slideNumber} OF 11</span>
              </div>

              <div
                className="preview-image-container"
                onClick={() => openModal(selectedPhoto.src, selectedPhoto.title)}
                title="Click to view full size"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(selectedPhoto.src, selectedPhoto.title);
                  }
                }}
                aria-label={`View ${selectedPhoto.title} in full screen`}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="preview-img"
                  loading="lazy"
                />
                <div className="preview-zoom-hint" aria-hidden="true">
                  <span>⤢ Click to enlarge</span>
                </div>
              </div>

              <div className="preview-info-box">
                <div className="preview-title-row">
                  <h3 className="preview-title">{selectedPhoto.title}</h3>
                  <button
                    type="button"
                    className="preview-expand-btn"
                    onClick={() => openModal(selectedPhoto.src, selectedPhoto.title)}
                  >
                    View Fullscreen ↗
                  </button>
                </div>
                <p className="preview-desc">{selectedPhoto.description}</p>
                <div className="preview-meta-row">
                  <span className="preview-source">PPT SOURCE: {selectedPhoto.caption}</span>
                  <span className="preview-author">PRESENTER: RUDRA SHEKHAR DUBEY</span>
                </div>
              </div>
            </div>

            {/* Right: Photo Thumbnails Grid */}
            <div className="deck-thumbs-column" aria-label="Deck photos list">
              <div className="thumbs-header">
                <span>SELECT AN ARTIFACT TO INSPECT:</span>
                <span className="thumbs-count">{DECK_PHOTOS.length} ARTIFACTS</span>
              </div>

              <div className="deck-thumbs-scroll">
                {DECK_PHOTOS.map((photo) => {
                  const isSelected = photo.id === selectedPhoto.id;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      className={`deck-thumb-card ${isSelected ? "is-selected" : ""}`}
                      onClick={() => setSelectedPhoto(photo)}
                      aria-current={isSelected ? "true" : undefined}
                    >
                      <div className="thumb-img-wrapper">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="thumb-img"
                          loading="lazy"
                        />
                        <span className="thumb-badge">{photo.highlightBadge}</span>
                      </div>
                      <div className="thumb-details">
                        <span className="thumb-slide">SLIDE {photo.slideNumber}</span>
                        <strong className="thumb-title">{photo.title}</strong>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Complete 11-Slide Deck Browser */}
        {activeTab === "slides" && (
          <div className="deck-slides-browser">
            <div className="slide-active-display">
              <div className="slide-active-header">
                <div className="slide-active-meta">
                  <span className="slide-active-badge">ORIGINAL PITCH SLIDE</span>
                  <span className="slide-active-number">SLIDE {selectedSlide} OF 11</span>
                </div>
                <button
                  type="button"
                  className="slide-zoom-btn"
                  onClick={() => openModal(`/ppt/slide_${selectedSlide}.png`, `Slide ${selectedSlide}: ${FULL_SLIDES[selectedSlide - 1].title}`)}
                >
                  Full Resolution ↗
                </button>
              </div>

              <div
                className="slide-active-frame"
                onClick={() => openModal(`/ppt/slide_${selectedSlide}.png`, `Slide ${selectedSlide}: ${FULL_SLIDES[selectedSlide - 1].title}`)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(`/ppt/slide_${selectedSlide}.png`, `Slide ${selectedSlide}: ${FULL_SLIDES[selectedSlide - 1].title}`);
                  }
                }}
                aria-label={`Open Slide ${selectedSlide} fullscreen`}
              >
                <img
                  src={`/ppt/slide_${selectedSlide}.png`}
                  alt={`CoolJet Pitch Deck Slide ${selectedSlide}: ${FULL_SLIDES[selectedSlide - 1].title}`}
                  className="slide-main-img"
                  loading="lazy"
                />
              </div>

              <div className="slide-nav-controls">
                <button
                  type="button"
                  className="slide-step-btn"
                  disabled={selectedSlide === 1}
                  onClick={() => setSelectedSlide((prev) => Math.max(1, prev - 1))}
                  aria-label="Previous slide"
                >
                  ← Previous Slide
                </button>
                <span className="slide-counter-tag">
                  {FULL_SLIDES[selectedSlide - 1].title}
                </span>
                <button
                  type="button"
                  className="slide-step-btn"
                  disabled={selectedSlide === 11}
                  onClick={() => setSelectedSlide((prev) => Math.min(11, prev + 1))}
                  aria-label="Next slide"
                >
                  Next Slide →
                </button>
              </div>
            </div>

            {/* 11-Slide Filmstrip Grid */}
            <div className="deck-filmstrip-grid" aria-label="Deck slide filmstrip">
              {FULL_SLIDES.map((slide) => {
                const isActive = slide.number === selectedSlide;
                return (
                  <button
                    key={slide.number}
                    type="button"
                    className={`filmstrip-card ${isActive ? "is-active" : ""}`}
                    onClick={() => setSelectedSlide(slide.number)}
                    aria-label={`Select Slide ${slide.number}: ${slide.title}`}
                  >
                    <div className="filmstrip-img-wrap">
                      <img
                        src={slide.src}
                        alt={`Slide ${slide.number}`}
                        className="filmstrip-img"
                        loading="lazy"
                      />
                      <span className="filmstrip-num">0{slide.number}</span>
                    </div>
                    <span className="filmstrip-label">{slide.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="deck-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle}
        >
          <div className="deck-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="deck-modal-bar">
              <span className="modal-title">{modalTitle}</span>
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ✕ Close
              </button>
            </div>
            <div className="deck-modal-img-wrap">
              <img src={modalImageSrc} alt={modalTitle} className="deck-modal-img" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
