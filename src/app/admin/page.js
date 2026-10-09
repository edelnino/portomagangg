"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState("");

  const [data, setData] = useState({
    profile: {
      name: "",
      title: "",
      subtitle: "",
      bio: "",
      bioSecondary: "",
      avatar: "",
      heroBg: ""
    },
    socials: {
      github: "",
      linkedin: "",
      email: "",
      location: ""
    },
    skills: [],
    projects: []
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/portfolio");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error("Failed to load portfolio data", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "olympus2026" || password === "admin") {
      setIsAuthenticated(true);
    } else {
      alert("Passkey salah! Gunakan: olympus2026");
    }
  };

  const handleSave = async () => {
    setSaveStatus("Menyimpan ke Mount Olympus...");
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSaveStatus("✅ Data Berhasil Diperbarui!");
        setTimeout(() => setSaveStatus(""), 3000);
      } else {
        setSaveStatus("❌ Gagal menyimpan data.");
      }
    } catch (err) {
      setSaveStatus("❌ Terjadi kesalahan koneksi.");
    }
  };

  // Helper change handlers
  const handleProfileChange = (field, val) => {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: val }
    }));
  };

  const handleSocialChange = (field, val) => {
    setData((prev) => ({
      ...prev,
      socials: { ...prev.socials, [field]: val }
    }));
  };

  const handleProjectChange = (index, field, val) => {
    const updatedProjects = [...data.projects];
    updatedProjects[index][field] = val;
    setData((prev) => ({ ...prev, projects: updatedProjects }));
  };

  const handleProjectTagsChange = (index, tagsString) => {
    const tagsArray = tagsString.split(",").map((t) => t.trim());
    const updatedProjects = [...data.projects];
    updatedProjects[index].tags = tagsArray;
    setData((prev) => ({ ...prev, projects: updatedProjects }));
  };

  const handleProjectLinkChange = (pIdx, lIdx, field, val) => {
    const updatedProjects = [...data.projects];
    updatedProjects[pIdx].links[lIdx][field] = val;
    setData((prev) => ({ ...prev, projects: updatedProjects }));
  };

  const addProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      title: "Proyek Baru",
      subtitle: "Deskripsi Singkat",
      domain: "DOMAIN OF HERMES",
      description: "Penjelasan lengkap proyek...",
      impact: "Dampak dan fitur utama...",
      image: "/images/project-sinar-abadi.jpg",
      tags: ["Next.js", "React", "UI/UX"],
      links: [{ name: "GitHub Repo", url: "https://github.com/edelnino" }]
    };
    setData((prev) => ({ ...prev, projects: [...prev.projects, newProj] }));
  };

  const deleteProject = (index) => {
    if (confirm("Apakah Anda yakin ingin menghapus proyek ini?")) {
      const updatedProjects = data.projects.filter((_, i) => i !== index);
      setData((prev) => ({ ...prev, projects: updatedProjects }));
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: "140px", paddingBottom: "5rem" }}>
        <div className="olympus-container" style={{ maxWidth: "450px", margin: "0 auto" }}>
          <div className="greek-card gold-glow" style={{ padding: "2.5rem", textAlign: "center" }}>
            <span className="section-realm">SANCTUM SECURITY</span>
            <h1 className="font-heading" style={{ fontSize: "1.8rem", color: "var(--marble-white)", marginBottom: "1.2rem" }}>
              OLYMPUS ADMIN
            </h1>
            <p className="font-body" style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
              Masukkan Passkey Kuil untuk mengakses Panel Manajemen Portofolio.
            </p>

            <form onSubmit={handleLogin}>
              <input 
                type="password"
                placeholder="Masukkan Passkey (olympus2026)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(8,8,12,0.9)",
                  border: "1px solid var(--border-gold)",
                  color: "var(--marble-white)",
                  fontFamily: "var(--font-sans)",
                  marginBottom: "1.5rem",
                  borderRadius: "2px",
                  textAlign: "center"
                }}
              />
              <button type="submit" className="btn-olympus-gold" style={{ width: "100%", justifyContent: "center" }}>
                Unlock Sanctum ⚡
              </button>
            </form>
            <p className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", marginTop: "1rem" }}>
              Default Passkey: <code>olympus2026</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "110px", paddingBottom: "5rem" }}>
      <section className="section-padding" style={{ paddingBottom: "2rem" }}>
        <div className="olympus-container text-center">
          <span className="section-realm">ADMINISTRATIVE REALM</span>
          <h1 className="hero-title">
            OLYMPUS <span className="text-gold">CONTROL CENTER</span>
          </h1>
          <p className="hero-subtitle">
            Kelola isi konten portofolio, edit data proyek, ubah link GitHub/LinkedIn, dan perbarui profil secara instan.
          </p>
        </div>
      </section>

      <section className="olympus-container">
        {/* Header Actions */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          {/* Navigation Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button 
              className={activeTab === "profile" ? "btn-olympus-gold" : "btn-olympus-ghost"}
              onClick={() => setActiveTab("profile")}
              style={{ padding: "8px 16px", fontSize: "0.78rem" }}
            >
              🏛️ Profile & Hero
            </button>
            <button 
              className={activeTab === "projects" ? "btn-olympus-gold" : "btn-olympus-ghost"}
              onClick={() => setActiveTab("projects")}
              style={{ padding: "8px 16px", fontSize: "0.78rem" }}
            >
              ⚡ Sacred Projects ({data.projects.length})
            </button>
            <button 
              className={activeTab === "socials" ? "btn-olympus-gold" : "btn-olympus-ghost"}
              onClick={() => setActiveTab("socials")}
              style={{ padding: "8px 16px", fontSize: "0.78rem" }}
            >
              💼 Social Links
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {saveStatus && (
              <span className="font-sans" style={{ fontSize: "0.85rem", color: "var(--gold-primary)", fontWeight: "700" }}>
                {saveStatus}
              </span>
            )}
            <button onClick={handleSave} className="btn-olympus-gold">
              Save Changes to Olympus ⚡
            </button>
          </div>
        </div>

        {/* TAB 1: PROFILE & HERO */}
        {activeTab === "profile" && (
          <div className="greek-card" style={{ padding: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", color: "var(--gold-primary)", marginBottom: "1.5rem" }}>
              EDIT HERO & PROFILE BIO
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              <div>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  FULL NAME
                </label>
                <input 
                  type="text" 
                  value={data.profile.name}
                  onChange={(e) => handleProfileChange("name", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  HERO HEADLINE TITLE
                </label>
                <input 
                  type="text" 
                  value={data.profile.title}
                  onChange={(e) => handleProfileChange("title", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  HERO SUBTITLE / ELEVATOR PITCH
                </label>
                <textarea 
                  rows={2}
                  value={data.profile.subtitle}
                  onChange={(e) => handleProfileChange("subtitle", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  MAIN BIO (PARAGRAPH 1)
                </label>
                <textarea 
                  rows={3}
                  value={data.profile.bio}
                  onChange={(e) => handleProfileChange("bio", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  SECONDARY BIO (PARAGRAPH 2)
                </label>
                <textarea 
                  rows={3}
                  value={data.profile.bioSecondary}
                  onChange={(e) => handleProfileChange("bioSecondary", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === "projects" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ textAlign: "right" }}>
              <button onClick={addProject} className="btn-olympus-gold">
                + Add New Project ⚡
              </button>
            </div>

            {data.projects.map((proj, idx) => (
              <div key={proj.id || idx} className="greek-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-gold)", pb: "1rem" }}>
                  <h3 className="font-heading" style={{ fontSize: "1.3rem", color: "var(--gold-primary)" }}>
                    #{idx + 1}: {proj.title}
                  </h3>
                  <button 
                    onClick={() => deleteProject(idx)}
                    style={{ background: "rgba(192,57,43,0.2)", border: "1px solid #c0392b", color: "#ff6b6b", padding: "6px 14px", cursor: "pointer", fontSize: "0.75rem", fontFamily: "var(--font-sans)" }}
                  >
                    🗑️ Delete Project
                  </button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
                  <div>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      PROJECT TITLE
                    </label>
                    <input 
                      type="text" 
                      value={proj.title}
                      onChange={(e) => handleProjectChange(idx, "title", e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  <div>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      SUBTITLE / CATEGORY
                    </label>
                    <input 
                      type="text" 
                      value={proj.subtitle}
                      onChange={(e) => handleProjectChange(idx, "subtitle", e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  <div>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      GOD DOMAIN (TAGLINE)
                    </label>
                    <input 
                      type="text" 
                      value={proj.domain}
                      onChange={(e) => handleProjectChange(idx, "domain", e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      DESCRIPTION
                    </label>
                    <textarea 
                      rows={2}
                      value={proj.description}
                      onChange={(e) => handleProjectChange(idx, "description", e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      IMPACT / KEY SOLUTION
                    </label>
                    <input 
                      type="text" 
                      value={proj.impact}
                      onChange={(e) => handleProjectChange(idx, "impact", e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  <div>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      TAGS (COMMA SEPARATED)
                    </label>
                    <input 
                      type="text" 
                      value={proj.tags.join(", ")}
                      onChange={(e) => handleProjectTagsChange(idx, e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  <div>
                    <label className="font-sans" style={{ fontSize: "0.72rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.3rem" }}>
                      IMAGE PATH / URL
                    </label>
                    <input 
                      type="text" 
                      value={proj.image}
                      onChange={(e) => handleProjectChange(idx, "image", e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                    />
                  </div>

                  {/* Links */}
                  <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
                    <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.5rem" }}>
                      PROJECT LINKS & REPOSITORIES
                    </label>
                    {proj.links.map((lnk, lIdx) => (
                      <div key={lIdx} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                        <input 
                          type="text" 
                          placeholder="Link Name" 
                          value={lnk.name}
                          onChange={(e) => handleProjectLinkChange(idx, lIdx, "name", e.target.value)}
                          style={{ flex: 1, padding: "6px 10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                        />
                        <input 
                          type="text" 
                          placeholder="URL" 
                          value={lnk.url}
                          onChange={(e) => handleProjectLinkChange(idx, lIdx, "url", e.target.value)}
                          style={{ flex: 2, padding: "6px 10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: SOCIAL LINKS */}
        {activeTab === "socials" && (
          <div className="greek-card" style={{ padding: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", color: "var(--gold-primary)", marginBottom: "1.5rem" }}>
              SOCIAL MEDIA & CONTACT INFORMATION
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              <div>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  GITHUB PROFILE URL
                </label>
                <input 
                  type="text" 
                  value={data.socials.github}
                  onChange={(e) => handleSocialChange("github", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  LINKEDIN PROFILE URL
                </label>
                <input 
                  type="text" 
                  value={data.socials.linkedin}
                  onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email" 
                  value={data.socials.email}
                  onChange={(e) => handleSocialChange("email", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>

              <div>
                <label className="font-sans" style={{ fontSize: "0.75rem", color: "var(--gold-primary)", display: "block", marginBottom: "0.4rem" }}>
                  LOCATION
                </label>
                <input 
                  type="text" 
                  value={data.socials.location}
                  onChange={(e) => handleSocialChange("location", e.target.value)}
                  style={{ width: "100%", padding: "10px", background: "rgba(8,8,12,0.8)", border: "1px solid var(--border-gold)", color: "#fff" }}
                />
              </div>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
