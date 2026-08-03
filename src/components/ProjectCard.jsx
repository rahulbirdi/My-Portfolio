import React from "react";
import { Github, ExternalLink, Maximize2 } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";
import Chip from "./ui/Chip.jsx";

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="rb-glass-panel" style={{ borderRadius: 16, padding: "26px 26px 24px", display: "flex", flexDirection: "column", gap: 16, transition: "transform 0.2s ease, border-color 0.2s ease" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h3 style={{ fontFamily: FONT.display, fontSize: "1.3rem", fontWeight: 700, color: C.text, margin: 0 }}>{project.name}</h3>
          <p style={{ margin: "4px 0 0", color: C.muted, fontSize: "0.88rem" }}>{project.tagline}</p>
        </div>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          {onOpenModal && (
            <button
              onClick={() => onOpenModal(project)}
              title="Open full screen project view"
              aria-label={`Open ${project.name} in full screen`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: FONT.mono,
                fontSize: "0.75rem",
                color: C.text,
                background: C.surface2,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "7px 10px",
                cursor: "pointer",
              }}
            >
              <Maximize2 size={13} />
            </button>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} repository on GitHub`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: FONT.mono,
              fontSize: "0.75rem",
              color: C.green,
              border: `1px solid ${C.greenDim}`,
              borderRadius: 8,
              padding: "7px 10px",
              textDecoration: "none",
            }}
          >
            <Github size={14} />
            repo
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
        {project.bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", gap: 10, color: C.textBody, fontSize: "0.92rem", lineHeight: 1.55 }}>
            <span style={{ color: C.green, fontFamily: FONT.mono, flexShrink: 0 }}>›</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 4 }}>
        {project.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );
}

