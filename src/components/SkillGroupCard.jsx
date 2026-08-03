import React from "react";
import { C, FONT } from "../styles/tokens.js";
import Chip from "./ui/Chip.jsx";

export default function SkillGroupCard({ title, pkgs }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 20px 22px" }}>
      <h3 style={{ fontFamily: FONT.display, fontSize: "1rem", fontWeight: 600, color: C.text, margin: "0 0 14px" }}>{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {pkgs.map((p) => (
          <Chip key={p}>{p}</Chip>
        ))}
      </div>
    </div>
  );
}
