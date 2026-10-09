import Image from "next/image";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const { profile, socials, skills, projects } = portfolioData;

  const marqueeItems = [
    { label: "ATHENA'S WISDOM", icon: "🏛️" },
    { label: "ZEUS' PRECISION", icon: "⚡" },
    { label: "HEPHAESTUS' CRAFT", icon: "🔨" },
    { label: "NEXT.JS & REACT", icon: "🌐" },
    { label: "PREMIUM UI/UX DESIGN", icon: "🎨" },
    { label: "ATHENA'S WISDOM", icon: "🏛️" },
    { label: "ZEUS' PRECISION", icon: "⚡" },
    { label: "HEPHAESTUS' CRAFT", icon: "🔨" },
    { label: "NEXT.JS & REACT", icon: "🌐" },
    { label: "PREMIUM UI/UX DESIGN", icon: "🎨" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <Image 
          src={profile.heroBg || "/images/hero-olympus.jpg"} 
          alt="Mount Olympus Temple" 
          fill
          priority
          className="hero-bg-img"
        />
        <div className="hero-overlay" />

        <div className="hero-content olympus-container">
          
          {/* Real Face Intro Frame */}
          <div className="hero-avatar-frame">
            <div className="hero-avatar-border" />
            <Image 
              src="/images/edward-portrait-final.jpg" 
              alt="Edward Daniel" 
              width={200}
              height={200}
              priority
              className="hero-avatar-img"
            />
          </div>

          <div className="hero-intro-pill font-sans">
            <span>👋</span> HALLO, SAYA EDWARD
          </div>

          <h1 className="hero-title">
            LOGIC MEETS <br />
            <span className="text-gold">DIVINE AESTHETICS</span>
          </h1>

          <p className="hero-subtitle">
            {profile.subtitle}
          </p>

          <div className="hero-cta-group">
            <Link href="/works" className="btn-olympus-gold">
              Explore Sacred Works ⚡
            </Link>
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-olympus-ghost"
            >
              GitHub Realm ↗
            </a>
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-olympus-ghost"
            >
              LinkedIn Citadel ↗
            </a>
            <Link href="/admin" className="btn-olympus-ghost" style={{ borderColor: "rgba(212,175,55,0.5)" }}>
              ⚙️ Admin Panel
            </Link>
          </div>
        </div>
      </section>

      {/* Infinite Carousel Sliding to the RIGHT (Ke Kanan) */}
      <div className="marquee-carousel-container">
        <div className="marquee-carousel-track">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="marquee-carousel-item">
              <span>{item.icon} {item.label}</span>
              <span className="separator">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* About & Elevator Pitch Section */}
      <section className="section-padding" style={{ background: "var(--bg-card)" }}>
        <div className="olympus-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            
            {/* Real Photo Card Frame */}
            <div style={{ position: "relative" }}>
              <div className="greek-card gold-glow" style={{ borderRadius: "4px" }}>
                <Image 
                  src="/images/edward-portrait-final.jpg" 
                  alt="Edward" 
                  width={500} 
                  height={600} 
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-realm">THE CREATOR'S DECREE</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                EDWARD
              </h2>
              <p className="font-body" style={{ fontSize: "1.25rem", color: "var(--marble-white)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                {profile.bio}
              </p>
              <p className="font-body" style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                {profile.bioSecondary}
              </p>

              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                <Link href="/profile" className="btn-olympus-gold">
                  Pantheon Profile →
                </Link>
                <Link href="/contact" className="btn-olympus-ghost">
                  Get In Touch
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divine Tech Stack / Domains */}
      <section className="section-padding">
        <div className="olympus-container">
          <div className="section-head">
            <span className="section-realm">BLESSINGS OF OLYMPUS</span>
            <h2 className="section-title">DIVINE TECH STACK</h2>
            <div className="section-divider">
              <div className="section-divider-line" />
              <div className="section-divider-diamond" />
              <div className="section-divider-line" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {skills.map((domain, index) => (
              <div key={index} className="greek-card" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{domain.icon}</div>
                <span className="section-realm">{domain.god}</span>
                <h3 className="font-heading" style={{ fontSize: "1.3rem", color: "var(--marble-white)", marginBottom: "1.2rem" }}>
                  {domain.realm}
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {domain.items.map((skill, sIdx) => (
                    <li key={sIdx} style={{ padding: "8px 0", borderBottom: "1px solid rgba(212,175,55,0.1)", fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span className="text-gold">✦</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Projects Section */}
      <section className="section-padding" style={{ background: "var(--bg-card)" }}>
        <div className="olympus-container">
          <div className="section-head">
            <span className="section-realm">PORTFOLIO OF THE GODS</span>
            <h2 className="section-title">SACRED PROJECTS</h2>
            <div className="section-divider">
              <div className="section-divider-line" />
              <div className="section-divider-diamond" />
              <div className="section-divider-line" />
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="greek-card">
                <div className="project-card-image-wrap">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    width={600} 
                    height={350}
                  />
                </div>
                <div className="project-card-body">
                  <span className="project-god-domain">{proj.domain}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                  
                  <div className="project-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links-row">
                    {proj.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link-btn"
                      >
                        {link.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/works" className="btn-olympus-gold">
              View Complete Archives (All Projects) 🏛️
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links Callout */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--border-gold)" }}>
        <div className="olympus-container" style={{ textAlign: "center" }}>
          <span className="section-realm">COMMUNE WITH THE CREATOR</span>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            READY TO BUILD SOMETHING LEGENDARY?
          </h2>
          <p className="hero-subtitle">
            Mari terhubung melalui GitHub dan LinkedIn untuk kolaborasi proyek, perancangan UI/UX, atau kesempatan magang & karir.
          </p>

          <div className="hero-cta-group">
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-olympus-gold"
            >
              <span>🐙</span> GitHub Profile
            </a>
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-olympus-gold"
            >
              <span>💼</span> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
