import React from "react";
import { C, FONT } from "../styles/tokens.js";
import SectionTag from "./ui/SectionTag.jsx";
import { EXPERIENCE } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="rb-fullscreen-section">
      <SectionTag name="WorkExperience" />
      <div className="rb-glass-panel" style={{ borderRadius: 16, padding: "28px 28px 26px" }}>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
          <h3 style={{ fontFamily: FONT.display, fontSize: "1.15rem", fontWeight: 700, margin: 0, color: C.text }}>
            {EXPERIENCE.title}
          </h3>
          <span style={{ fontFamily: FONT.mono, fontSize: "0.78rem", color: C.mutedDim }}>{EXPERIENCE.dates}</span>
        </div>
        <p style={{ margin: "0 0 16px", color: C.green, fontSize: "0.85rem", fontFamily: FONT.mono }}>{EXPERIENCE.org}</p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
          {EXPERIENCE.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 10, color: C.textBody, fontSize: "0.92rem", lineHeight: 1.55 }}>
              <span style={{ color: C.green, fontFamily: FONT.mono, flexShrink: 0 }}>›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <SectionTag name="WorkExperience" closing />
    </section>
  );
}
