import React from "react";
import { C, FONT } from "../../styles/tokens.js";

export default function Chip({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: FONT.mono,
        fontSize: "0.72rem",
        color: C.green,
        background: C.greenGlow,
        border: `1px solid ${C.greenDim}`,
        borderRadius: 5,
        padding: "4px 9px",
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}
