import { ApplicationsSection } from "../components/ApplicationsSection";
import { ContactSection } from "../components/ContactSection";
import { PitchDeckGallery } from "../components/PitchDeckGallery";
import { ProductExplorer } from "../components/ProductExplorer";
import { TeamSection } from "../components/TeamSection";
import { TechnologySection } from "../components/TechnologySection";
import { ValidationSection } from "../components/ValidationSection";
import { VideoShowcase } from "../components/VideoShowcase";

export default function Home() {
  return (
    <main>
      {/* Site Header */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CoolJet home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            CoolJet
            <small>REFRIGERANT-LESS COOLING</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#technology">Technology</a>
          <a href="#product">Product 3D</a>
          <a href="#deck">Pitch Deck</a>
          <a href="#video">Video Demo</a>
          <a href="#validation">Validation</a>
          <a href="#applications">Applications</a>
          <a href="#team">Team</a>
        </nav>

        <a className="header-cta" href="#contact">
          Contact & Inquiries
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero section-grid" id="top">
        <div className="hero-copy">
          <div className="hero-eyebrow-group">
            <span className="eyebrow">COOLJET / AEROSPACE-INSPIRED HVAC CONCEPT</span>
            <span className="trl-pill">TRL 5 VALIDATED</span>
          </div>
          <h1>
            Air, shaped for<br />
            <em>cooling.</em>
          </h1>
          <p className="lead">
            A radical departure from century-old chemical vapor compression. CoolJet pairs a high-velocity blower with convergent-divergent nozzle geometry to guide ambient air through an aerodynamic cooling cycle.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#technology">
              Explore Technology <span>↘</span>
            </a>
            <a className="button button-secondary" href="#video">
              Watch Prototype Video
            </a>
            <a className="button button-quiet" href="#product">
              3D Architecture
            </a>
          </div>
          <p className="hero-note">
            CONCEPTUAL ENGINEERING VISUALIZATION · TRL 5 VALIDATED IN RELEVANT ENVIRONMENT · NO COMPRESSORS
          </p>
        </div>

        <div className="hero-visual" aria-label="Conceptual CoolJet airflow illustration">
          <div className="calibration calibration-top">FLOW SYSTEM / 01 · GWP = 0</div>
          <div className="product-shell">
            <div className="air-lines air-in">
              <b />
              <b />
              <b />
              <b />
            </div>
            <div className="blower">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="nozzle">
              <div className="nozzle-inner" />
            </div>
            <div className="air-lines air-out">
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
          <div className="visual-label label-blower">
            01 <span>BLOWER ACCELERATION</span>
          </div>
          <div className="visual-label label-nozzle">
            02 <span>C-D NOZZLE EXPANSION</span>
          </div>
          <div className="calibration calibration-bottom">
            AMBIENT AIR IN <span>→</span> COOLED ATMOSPHERIC DISCHARGE
          </div>
        </div>
      </section>

      {/* 01: Technology & Innovation Section */}
      <TechnologySection />

      {/* 02: Interactive 3D Product Explorer */}
      <ProductExplorer />

      {/* Qualitative C-D Nozzle Diagram Strip with Authentic PPT Blueprints */}
      <section className="nozzle-section">
        <div className="nozzle-copy">
          <p className="eyebrow">NOZZLE MECHANISM / FLUID EXPANSION</p>
          <h2>
            Convergent.<br />
            Throat.<br />
            <em>Divergent.</em>
          </h2>
          <p>
            The project deck details a localized static pressure drop and temperature decrease at the throat restriction, followed by gas-dynamic expansion through the divergent bell. This eliminates the need for phase-change refrigerants.
          </p>

          {/* Authentic CAD Blueprint Card from PPT Slide 3 */}
          <div className="nozzle-blueprint-card">
            <div className="blueprint-card-header">
              <span className="blueprint-tag">FIG 5.3: C-D NOZZLE CAD BLUEPRINT</span>
              <span className="blueprint-source-note">PPT SLIDE 3 SPECIFICATION</span>
            </div>
            <img
              src="/ppt/cd_nozzle_engineering_dimensions_fig5_3.png"
              alt="Engineering CAD Blueprint of Convergent Divergent Nozzle with dimensions from PPT Slide 3"
              className="blueprint-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="nozzle-diagram" aria-label="Conceptual convergent-divergent nozzle diagram">
          <span className="diagram-label convergent">CONVERGENT INTAKE</span>
          <span className="diagram-label throat">THROAT (MIN. AREA)</span>
          <span className="diagram-label divergent">DIVERGENT DISCHARGE</span>
          <div className="diagram-flow">
            <i />
            <i />
            <i />
          </div>
          <div className="diagram-scale">
            <span>QUALITATIVE PRESSURE PROFILE</span>
            <b>HIGH STATIC P</b>
            <i />
            <b>EXPANSION DISCHARGE</b>
          </div>

          {/* Authentic 3D CAD Isometric Views from PPT Slide 3 */}
          <div className="nozzle-3d-photo-box">
            <img
              src="/ppt/cd_nozzle_3d_design_fig5.png"
              alt="Fig 5.1 & Fig 5.2 3D Model Isometric Views of C-D Nozzle from PPT Slide 3"
              className="nozzle-3d-photo-img"
              loading="lazy"
            />
            <div className="nozzle-3d-photo-info">
              <span className="nozzle-3d-badge">3D DESIGN OF THE PROJECT · FIG 5.1 & 5.2</span>
              <strong className="nozzle-3d-title">Contoured C-D Nozzle Geometry</strong>
              <p className="nozzle-3d-desc">
                Front and rear isometric CAD models documenting the convergent throat constriction and divergent expansion bell contours from Slide 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04: Official Pitch Deck & Engineering Drawings Showcase */}
      <PitchDeckGallery />

      {/* 05: Video Showcase Component */}
      <VideoShowcase />

      {/* 05: Prototype & Validation Section with Exact TRL 5 Wording */}
      <ValidationSection />

      {/* 06: Applications & Impact */}
      <ApplicationsSection />

      {/* 07: Team Section (with Placeholders) */}
      <TeamSection />

      {/* 08: Contact & Inquiries */}
      <ContactSection />

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <a className="brand" href="#top">
              <span className="brand-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>
                CoolJet
                <small>REFRIGERANT-LESS COOLING</small>
              </span>
            </a>
            <p className="footer-desc">
              Aerospace-inspired refrigerant-less thermal regulation concept utilizing high-velocity blower induction and convergent-divergent nozzle geometry.
            </p>
            <div className="footer-badge">TRL 5 VALIDATED IN RELEVANT ENVIRONMENT</div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">TECHNOLOGY</span>
            <ul>
              <li><a href="#technology">Operating Principles</a></li>
              <li><a href="#deck">Pitch Deck & CAD</a></li>
              <li><a href="#product">3D Component Explorer</a></li>
              <li><a href="#video">Prototype Demonstration</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">PROJECT SPECS</span>
            <ul>
              <li><a href="#validation">TRL 5 Validation Status</a></li>
              <li><a href="#applications">Market Applications</a></li>
              <li><a href="#applications">Environmental Impact</a></li>
              <li><a href="#team">Engineering Team</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">DEPLOYMENT</span>
            <ul>
              <li><span className="footer-static-item">Platform: Vercel Frontend</span></li>
              <li><span className="footer-static-item">Framework: Next.js 16</span></li>
              <li><span className="footer-static-item">Phase: Phase 4 Complete</span></li>
              <li><a href="#contact">Submit Technical Inquiry</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} CoolJet Concept Project. Frontend-only demonstration site.</p>
            <p className="footer-disclaimer">
              All performance data and technical claims are grounded in the supplied CoolJet pitch deck under TRL 5 validation in a relevant environment.
            </p>
          </div>
          <a className="footer-back-to-top" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
