import "./globals.css";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export const metadata = {
  title: "Edward — Olympus Portfolio | Dev & UI/UX",
  description: "Portofolio Edward berkonsep Dewa-Dewi Yunani. Computer Science Student, Frontend Developer & UI/UX Designer.",
};

export default function RootLayout({ children }) {
  const { socials } = portfolioData;

  return (
    <html lang="id">
      <body>
        <div className="noise-overlay" />
        
        {/* Navigation Bar */}
        <header className="header-nav">
          <div className="olympus-container header-inner">
            <Link href="/" className="logo-brand">
              <div className="logo-symbol">
                <span>Ω</span>
              </div>
              <span className="logo-text">EDWARD</span>
            </Link>

            <nav>
              <ul className="nav-links">
                <li className="nav-item">
                  <Link href="/">Mount Olympus</Link>
                </li>
                <li className="nav-item">
                  <Link href="/works">Sacred Works</Link>
                </li>
                <li className="nav-item">
                  <Link href="/profile">Pantheon Profile</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">Oracle Contact</Link>
                </li>
                <li className="nav-item">
                  <Link href="/admin" style={{ color: "var(--gold-primary)" }}>⚙️ Admin</Link>
                </li>
              </ul>
            </nav>

            <div className="social-header-links">
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub
              </a>
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer-olympus">
          <div className="olympus-container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h3 className="font-heading">EDWARD <span className="text-gold">Ω</span></h3>
                <p className="font-body">
                  Forging digital artifacts with the wisdom of Athena and the precision of Hephaestus. Bridging complex logic with divine aesthetic experiences.
                </p>
              </div>

              <div>
                <h4 className="footer-title">Divine Navigation</h4>
                <ul className="footer-links">
                  <li><Link href="/">Mount Olympus (Home)</Link></li>
                  <li><Link href="/works">Sacred Works (Projects)</Link></li>
                  <li><Link href="/profile">Pantheon Profile (About)</Link></li>
                  <li><Link href="/contact">Oracle Contact</Link></li>
                  <li><Link href="/admin">⚙️ Admin Control Panel</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-title">Connect & Socials</h4>
                <ul className="footer-links">
                  <li>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer">
                      GitHub / edelnino ↗
                    </a>
                  </li>
                  <li>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn / edwarddaniel1210 ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Edward — Olympus Portfolio. Inspired by Greek Mythology & Modern Engineering.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
