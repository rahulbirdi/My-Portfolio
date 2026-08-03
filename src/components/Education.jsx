import React from "react";
import { GraduationCap } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";
import SectionTag from "./ui/SectionTag.jsx";
import Chip from "./ui/Chip.jsx";
import { EDUCATION } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="rb-fullscreen-section">
      <SectionTag name="Education" />
      <div
        className="rb-glass-panel"
        style={{
          borderRadius: 14,
          padding: "24px 26px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <GraduationCap size={22} color={C.green} style={{ flexShrink: 0, marginTop: 3 }} />
          <div>
            <h3 style={{ fontFamily: FONT.display, fontSize: "1.05rem", fontWeight: 700, margin: 0, color: C.text }}>{EDUCATION.degree}</h3>
            <p style={{ margin: "4px 0 0", color: C.muted, fontSize: "0.88rem" }}>{EDUCATION.org}</p>
          </div>
        </div>
        <Chip>cgpa · {EDUCATION.cgpa}</Chip>
      </div>
      <SectionTag name="Education" closing />
    </section>
  );
}
