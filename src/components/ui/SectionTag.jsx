import React from "react";
import { C, FONT } from "../../styles/tokens.js";

// Renders section headers/footers like an opening or closing JSX tag,
// e.g. <ProfessionalSummary> ... </ProfessionalSummary>
export default function SectionTag({ name, closing }) {
  return (
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: "0.8rem",
        color: C.mutedDim,
        marginBottom: closing ? 0 : 18,
        marginTop: closing ? 40 : 0,
      }}
    >
      <span style={{ color: C.green }}>{closing ? "</" : "<"}</span>
      <span style={{ color: closing ? C.mutedDim : C.text }}>{name}</span>
      <span style={{ color: C.green }}>{">"}</span>
    </div>
  );
}
