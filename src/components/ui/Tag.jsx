import React from "react";
import { C, FONT } from "../../styles/tokens.js";

export default function Tag({ children }) {
  return (
    <span style={{ fontFamily: FONT.mono, fontSize: "0.72rem", color: C.green, letterSpacing: "0.02em" }}>
      {children}
    </span>
  );
}
