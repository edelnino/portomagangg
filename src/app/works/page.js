import Image from "next/image";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export const metadata = {
  title: "Sacred Works — Edward Daniel | Olympus Portfolio",
  description: "Daftar lengkap proyek yang pernah dikerjakan oleh Edward Daniel: Sinar Abadi, debouquets, CanopyMembrane, dan Takarasa.",
};

export default function Works() {
  const { projects } = portfolioData;

  return (
    <div style={{ paddingTop: "110px", paddingBottom: "5rem" }}>
      {/* Page Header */}
      <section className="section-padding" style={{ paddingBottom: "3rem" }}>
        <div className="olympus-container text-center">
          <span className="section-realm">THE SACRED ARCHIVES</span>
          <h1 className="hero-title">
            DIVINE <span className="text-gold">PROJECTS</span>
          </h1>
          <p className="hero-subtitle">
            Kumpulan karya dan proyek perangkat lunak yang telah saya bangun, mencakup Web Applications, E-Commerce, Dashboard Analytics, dan UI/UX Mobile Design.
          </p>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="olympus-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {projects.map((item) => (
            <div 
              key={item.id} 
              className="greek-card gold-glow" 
              style={{ padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "0", overflow: "hidden" }}
            >
              <div style={{ position: "relative", minHeight: "340px" }}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span className="project-god-domain">{item.domain}</span>
                  <h2 className="font-heading" style={{ fontSize: "2rem", color: "var(--marble-white)", marginBottom: "0.4rem" }}>
                    {item.title}
                  </h2>
                  <h4 className="font-sans" style={{ fontSize: "0.95rem", color: "var(--gold-light)", marginBottom: "1.2rem", fontWeight: "600" }}>
                    {item.subtitle}
                  </h4>
                  
                  <p className="font-body" style={{ fontSize: "1.1rem", color: "var(--text-primary)", lineHeight: "1.7", marginBottom: "1.2rem" }}>
                    {item.description}
                  </p>

                  {item.impact && (
                    <div style={{ background: "rgba(212,175,55,0.06)", borderLeft: "3px solid var(--gold-primary)", padding: "10px 15px", marginBottom: "1.5rem" }}>
                      <span className="font-sans" style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--gold-primary)", display: "block", textTransform: "uppercase", letterSpacing: "1px" }}>
                        Key Impact / Solution:
                      </span>
                      <span className="font-body" style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
                        {item.impact}
                      </span>
                    </div>
                  )}

                  <div className="project-tags">
                    {item.tags.map((t, i) => (
                      <span key={i} className="project-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-gold)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {item.links.map((repo, rIdx) => (
                    <a 
                      key={rIdx} 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-olympus-gold"
                      style={{ fontSize: "0.75rem", padding: "10px 18px" }}
                    >
                      {repo.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/" className="btn-olympus-ghost">
            ← Return to Mount Olympus (Home)
          </Link>
        </div>
      </section>
    </div>
  );
}
