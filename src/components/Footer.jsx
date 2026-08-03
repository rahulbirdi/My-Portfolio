import React from "react";
import { C, FONT } from "../styles/tokens.js";
import { PROFILE } from "../data/content.js";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.borderSoft}`,
        padding: "18px 24px 100px",
        textAlign: "center",
        fontFamily: FONT.mono,
        fontSize: "0.72rem",
        color: C.mutedDim,
      }}
    >
      ◆ compiled successfully · v1.0.0 · {PROFILE.location}
    </footer>
  );
}
