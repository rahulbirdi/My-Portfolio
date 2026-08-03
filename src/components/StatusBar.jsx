import React from "react";
import { Wifi, BatteryFull, SignalHigh } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";

export default function StatusBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "7px 18px",
        background: C.void,
        borderBottom: `1px solid ${C.borderSoft}`,
        fontFamily: FONT.mono,
        fontSize: "0.68rem",
        color: C.mutedDim,
      }}
    >
      <span>9:41</span>
      <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <SignalHigh size={12} />
        <Wifi size={12} />
        <BatteryFull size={13} />
      </span>
    </div>
  );
}
