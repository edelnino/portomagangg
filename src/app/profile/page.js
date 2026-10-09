import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pantheon Profile — Edward Daniel | Developer & UI/UX",
  description: "Profil lengkap Edward Daniel, Computer Science Student di Binus University spesialisasi Frontend Development dan UI/UX Design.",
};

export default function Profile() {
  const experiences = [
    {
      role: "Frontend Developer & UI/UX Designer",
      title: "Projects & Freelance",
      period: "2023 — Present",
      description: "Merancang dan mengimplementasikan aplikasi web & mobile interaktif menggunakan Next.js, React, JavaScript, dan Figma. Fokus pada estetika visual, kecepatan aksesi, dan desain berpusat pada pengguna."
    },
    {
      role: "Computer Science Student",
      title: "Binus University",
      period: "2022 — Present",
      description: "Mempelajari Struktur Data, Algoritma, Rekayasa Perangkat Lunak, Metodologi Penelitian, dan Perancangan Antarmuka Pengguna (UI/UX)."
    }
  ];

  const skillCategories = [
    {
      title: "Frontend & Web Engineering",
      skills: ["JavaScript (ES6+)", "React.js", "Next.js (App Router)", "HTML5 & Vanilla CSS", "CSS Modules & Design System", "State Management", "REST API Integration"]
    },
    {
      title: "UI/UX & Product Design",
      skills: ["Figma Prototyping", "User Research & Persona", "Design Tokens & Wireframing", "Information Architecture", "Micro-animations", "Heuristic Evaluation"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git & GitHub", "Vercel Deployment", "Agile / Scrum Basics", "Responsive Web Design", "Cross-Browser Testing"]
    }
  ];

  return (
    <div style={{ paddingTop: "110px", paddingBottom: "5rem" }}>
      {/* Page Header */}
      <section className="section-padding" style={{ paddingBottom: "3rem" }}>
        <div className="olympus-container text-center">
          <span className="section-realm">BIOGRAPHY & CREDENTIALS</span>
          <h1 className="hero-title">
            PANTHEON <span className="text-gold">PROFILE</span>
          </h1>
          <p className="hero-subtitle">
            Mengenal lebih dekat Edward Daniel — perjalanan akademis, filosofi rekayasa perangkat lunak, serta penguasaan teknologi.
          </p>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
        </div>
      </section>

      {/* Main Bio Grid */}
      <section className="olympus-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", marginBottom: "5rem" }}>
          
          <div className="greek-card gold-glow" style={{ padding: "2.5rem" }}>
            <span className="section-realm">ELEVATOR PITCH</span>
            <h2 className="font-heading" style={{ fontSize: "1.8rem", color: "var(--marble-white)", marginBottom: "1.2rem" }}>
              BRIDGE BETWEEN CODE & BEAUTY
            </h2>
            <p className="font-body" style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-primary)", marginBottom: "1.2rem" }}>
              Saya adalah seorang pengembang perangkat lunak yang berfokus pada <strong className="text-gold">Frontend Engineering</strong> dan <strong className="text-gold">UI/UX Design</strong>. Bagi saya, kode bukan sekadar deretan instruksi logika, melainkan media karya seni digital.
            </p>
            <p className="font-body" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-muted)" }}>
              Dengan latar belakang pendidikan di Bina Nusantara (Binus) University, saya menggabungkan teori struktur data yang solid dengan sensibilitas estetika desain modern. 
            </p>
          </div>

          <div className="greek-card" style={{ padding: "2.5rem" }}>
            <span className="section-realm">COMMUNICATION CITADEL</span>
            <h2 className="font-heading" style={{ fontSize: "1.8rem", color: "var(--marble-white)", marginBottom: "1.2rem" }}>
              CONNECT WITH EDWARD
            </h2>
            <p className="font-body" style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Terbuka untuk kesempatan magang, proyek freelance, serta kolaborasi pengembangan produk digital.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a 
                href="https://github.com/edelnino" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-olympus-gold"
              >
                🐙 Visit GitHub Profile (@edelnino) ↗
              </a>
              <a 
                href="https://linkedin.com/in/edwarddaniel1210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-olympus-ghost"
              >
                💼 Visit LinkedIn (edwarddaniel1210) ↗
              </a>
            </div>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="section-head">
          <span className="section-realm">DIVINE CAPABILITIES</span>
          <h2 className="section-title">TECHNICAL SKILLS</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="greek-card" style={{ padding: "2rem" }}>
              <h3 className="font-heading" style={{ fontSize: "1.3rem", color: "var(--gold-primary)", marginBottom: "1.2rem" }}>
                {cat.title}
              </h3>
              <ul style={{ listStyle: "none" }}>
                {cat.skills.map((s, sIdx) => (
                  <li key={sIdx} style={{ padding: "8px 0", borderBottom: "1px solid rgba(212,175,55,0.1)", fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="text-gold">✦</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="section-head">
          <span className="section-realm">CHRONICLES OF OLYMPUS</span>
          <h2 className="section-title">EDUCATION & EXPERIENCE</h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto 4rem" }}>
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="greek-card" 
              style={{ padding: "2rem", marginBottom: "1.5rem", borderLeft: "4px solid var(--gold-primary)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "0.5rem" }}>
                <h3 className="font-heading" style={{ fontSize: "1.3rem", color: "var(--marble-white)" }}>
                  {exp.role}
                </h3>
                <span className="font-sans" style={{ fontSize: "0.8rem", color: "var(--gold-primary)", fontWeight: "700" }}>
                  {exp.period}
                </span>
              </div>
              <h4 className="font-sans" style={{ fontSize: "0.95rem", color: "var(--gold-light)", marginBottom: "1rem" }}>
                {exp.title}
              </h4>
              <p className="font-body" style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
