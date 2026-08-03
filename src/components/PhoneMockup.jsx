import React from "react";
import { C, FONT } from "../styles/tokens.js";

const LOG_LINES = ["Building UI screens…", "Wiring Redux store…", "Connecting Firebase…"];

export default function PhoneMockup() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="rb-phone"
        style={{
          width: 260,
          borderRadius: 34,
          border: `8px solid ${C.surface2}`,
          background: C.surface,
          boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", fontFamily: FONT.mono, fontSize: "0.6rem", color: C.mutedDim }}>
          <span>9:41</span>
          <span>●●●</span>
        </div>

        <div style={{ padding: "8px 20px 26px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: `linear-gradient(135deg, ${C.green}, ${C.blue})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT.display,
              fontWeight: 700,
              color: "#0B0F14",
              fontSize: "1.3rem",
              marginBottom: 14,
            }}
          >
            RB
          </div>
          <h2 style={{ fontFamily: FONT.display, fontSize: "1.1rem", margin: "0 0 2px", color: C.text }}>Rahul Birdi</h2>
          <p style={{ margin: "0 0 18px", color: C.green, fontSize: "0.78rem", fontFamily: FONT.mono }}>react-native-developer</p>

          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {[
              { value: "2", label: "projects" },
              { value: "8.21", label: "cgpa" },
              { value: "android", label: "focus" },
            ].map((stat) => (
              <div key={stat.label} style={{ flex: 1, background: C.surface2, borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                <div style={{ fontFamily: FONT.display, fontWeight: 700, color: C.text }}>{stat.value}</div>
                <div style={{ fontSize: "0.6rem", color: C.mutedDim }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {LOG_LINES.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.surface2,
                  borderRadius: 8,
                  padding: "8px 10px",
                  fontSize: "0.68rem",
                  color: C.muted,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: 99, background: C.green, flexShrink: 0 }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
