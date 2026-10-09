"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ paddingTop: "110px", paddingBottom: "5rem" }}>
      {/* Page Header */}
      <section className="section-padding" style={{ paddingBottom: "3rem" }}>
        <div className="olympus-container text-center">
          <span className="section-realm">COMMUNE WITH THE GODS</span>
          <h1 className="hero-title">
            ORACLE <span className="text-gold">CONTACT</span>
          </h1>
          <p className="hero-subtitle">
            Kirimkan pesan Anda ke Mount Olympus atau terhubung secara langsung melalui jaringan sosial resmi Edward Daniel.
          </p>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="olympus-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", maxWidth: "1100px", margin: "0 auto" }}>
          
          {/* Direct Social Links Box */}
          <div className="greek-card gold-glow" style={{ padding: "2.5rem" }}>
            <span className="section-realm">DIRECT CONNECTIONS</span>
            <h2 className="font-heading" style={{ fontSize: "1.8rem", color: "var(--marble-white)", marginBottom: "1.5rem" }}>
              SOCIAL REALMS
            </h2>

            <p className="font-body" style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: "1.7" }}>
              Anda dapat melihat kode sumber proyek saya di GitHub atau memperluas jaringan profesional melalui LinkedIn.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <a 
                href="https://github.com/edelnino" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-olympus-gold"
                style={{ justifyContent: "center" }}
              >
                🐙 GitHub / edelnino ↗
              </a>

              <a 
                href="https://linkedin.com/in/edwarddaniel1210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-olympus-ghost"
                style={{ justifyContent: "center" }}
              >
                💼 LinkedIn / edwarddaniel1210 ↗
              </a>
            </div>

            <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-gold)" }}>
              <span className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                LOCATION & AVAILABILITY
              </span>
              <p className="font-body" style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>
                📍 Indonesia • Available for Remote & On-Site Internship / Opportunities
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="greek-card" style={{ padding: "2.5rem" }}>
            <span className="section-realm">SEND A DECREE</span>
            <h2 className="font-heading" style={{ fontSize: "1.8rem", color: "var(--marble-white)", marginBottom: "1.5rem" }}>
              ORACLE FORM
            </h2>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
                <h3 className="font-heading" style={{ color: "var(--gold-primary)", fontSize: "1.5rem", marginBottom: "0.8rem" }}>
                  DECREE RECEIVED!
                </h3>
                <p className="font-body" style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
                  Pesan Anda telah terkirim. Edward Daniel akan merespons melalui email secepatnya.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn-olympus-ghost" 
                  style={{ marginTop: "1.5rem" }}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div>
                  <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Your Name / Organization
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda..."
                    style={{ width: "100%", padding: "12px 16px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "var(--marble-white)", fontFamily: "var(--font-sans)", fontSize: "0.9rem", borderRadius: "2px" }}
                  />
                </div>

                <div>
                  <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com..."
                    style={{ width: "100%", padding: "12px 16px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "var(--marble-white)", fontFamily: "var(--font-sans)", fontSize: "0.9rem", borderRadius: "2px" }}
                  />
                </div>

                <div>
                  <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Message / Inquiry
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan atau penawaran Anda di sini..."
                    style={{ width: "100%", padding: "12px 16px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "var(--marble-white)", fontFamily: "var(--font-sans)", fontSize: "0.9rem", borderRadius: "2px" }}
                  />
                </div>

                <button type="submit" className="btn-olympus-gold" style={{ marginTop: "0.5rem" }}>
                  Send Decree ⚡
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
