import React, { useEffect } from "react";
import { X, ExternalLink, Github, Smartphone, Layers, CheckCircle2 } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";

export default function FullScreenProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="rb-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="rb-glass-panel-glow"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 840,
          maxHeight: "90vh",
          borderRadius: 24,
          padding: "32px 36px",
          position: "relative",
          overflowY: "auto",
          color: C.text,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: C.surface2,
            border: `1px solid ${C.border}`,
            color: C.muted,
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              padding: "10px 14px",
              background: C.surface2,
              borderRadius: 12,
              color: C.green,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Smartphone size={24} />
          </div>
          <div>
            <div style={{ fontFamily: FONT.mono, fontSize: "0.8rem", color: C.green }}>Full Screen Project View</div>
            <h2 style={{ fontFamily: FONT.display, fontSize: "1.8rem", margin: "2px 0 0", color: C.text }}>{project.name}</h2>
          </div>
        </div>

        <p style={{ color: C.muted, fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
          {project.tagline}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: FONT.mono,
                fontSize: "0.78rem",
                padding: "6px 12px",
                borderRadius: 20,
                background: C.surface2,
                color: C.green,
                border: `1px solid ${C.border}`,
              }}
            >
              #{t}
            </span>
          ))}
        </div>

        <div style={{ background: C.surface2, borderRadius: 16, padding: 20, border: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.text, fontFamily: FONT.display, fontWeight: 600, marginBottom: 12 }}>
            <Layers size={18} color={C.green} /> Highlights & Architecture
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, color: C.textBody, fontSize: "0.95rem" }}>
            {project.bullets.map((bullet, i) => (
              <li key={i} style={{ lineHeight: 1.5 }}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rb-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: C.green,
              color: "#0B0F14",
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            <Github size={18} /> View Repository <ExternalLink size={14} />
          </a>
          <button
            onClick={onClose}
            className="rb-cta-secondary"
            style={{
              background: "transparent",
              color: C.muted,
              border: `1px solid ${C.border}`,
              padding: "12px 24px",
              borderRadius: 10,
              cursor: "pointer",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Close Full Screen
          </button>
        </div>
      </div>
    </div>
  );
}
