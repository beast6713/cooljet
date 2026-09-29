"use client";

import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "technical",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: "",
      email: "",
      organization: "",
      inquiryType: "technical",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="contact-grid">
          {/* Left Column: Direct Info & Context */}
          <div className="contact-info">
            <p className="eyebrow">08 / CONTACT & ENGAGEMENT</p>
            <h2 id="contact-heading">
              Connect with the<br />
              <em>CoolJet initiative.</em>
            </h2>
            <p className="lead">
              We welcome dialogue with thermal engineers, institutional investors, aerospace researchers, and commercial HVAC partners exploring non-chemical cooling architectures.
            </p>

            <div className="contact-meta-cards">
              <div className="contact-meta-card">
                <span className="meta-label">TECHNICAL INQUIRIES</span>
                <strong>engineering@cooljet.concept</strong>
                <p>Direct contact for fluid dynamic review and prototype testing data.</p>
              </div>

              <div className="contact-meta-card">
                <span className="meta-label">VALIDATION STATUS</span>
                <strong>TRL 5 Physical Prototype</strong>
                <p>Prototype validated in a relevant environment (Source: pitch deck).</p>
              </div>

              <div className="contact-meta-card">
                <span className="meta-label">DEPLOYMENT ENVIRONMENT</span>
                <strong>Frontend Vercel Concept Site</strong>
                <p>Designed for responsive web delivery and static edge hosting.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Frontend-Only Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="form-success-card" role="status" aria-live="polite">
                <div className="success-icon" aria-hidden="true">✓</div>
                <h3>Inquiry Logged</h3>
                <p>
                  Thank you, <strong>{formState.name}</strong>. Your message regarding <em>{formState.inquiryType}</em> has been registered in this frontend demonstration environment.
                </p>
                <div className="success-meta">
                  <span>Organization: {formState.organization || "Independent"}</span>
                  <span>Contact: {formState.email}</span>
                </div>
                <button type="button" className="button button-primary" onClick={handleReset}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Submit an Engineering Inquiry</h3>
                  <span className="frontend-notice">FRONTEND-ONLY DEMO FORM</span>
                </div>

                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="user-name">Full Name *</label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Mercer"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="user-org">Organization / Affiliation</label>
                    <input
                      id="user-org"
                      type="text"
                      placeholder="e.g. Aerothermal Labs / University"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="user-email">Work Email *</label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="inquiry-type">Inquiry Classification</label>
                    <select
                      id="inquiry-type"
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    >
                      <option value="technical">Technical & Aerodynamic Review</option>
                      <option value="pilot">Pilot Project & Commercial Deployment</option>
                      <option value="investment">Strategic Investment & Growth</option>
                      <option value="academic">Academic & Research Collaboration</option>
                      <option value="general">General Information</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="user-message">Message or Technical Question</label>
                  <textarea
                    id="user-message"
                    rows={4}
                    placeholder="Provide details regarding your operational requirements, pilot interest, or questions on the C-D nozzle mechanism..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="button button-primary form-submit-btn">
                  <span>Send Technical Inquiry</span>
                  <span aria-hidden="true">→</span>
                </button>

                <p className="form-fineprint">
                  Frontend demonstration form for Vercel deployment. No personal data is transmitted to third-party databases.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
