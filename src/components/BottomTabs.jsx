import React from "react";
import { C } from "../styles/tokens.js";
import { NAV_SECTIONS } from "../data/content.js";

export default function BottomTabs({ active, scrollTo }) {
  return (
    <nav
      className="rb-bottom-tabs"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-around",
        background: "rgba(18,24,32,0.95)",
        backdropFilter: "blur(10px)",
        borderTop: `1px solid ${C.border}`,
        padding: "8px 4px 10px",
      }}
    >
      {NAV_SECTIONS.map((s) => {
        const Icon = s.icon;
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="rb-tab"
            aria-label={s.label}
            aria-current={isActive ? "page" : undefined}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              color: isActive ? C.green : C.mutedDim,
              padding: "4px 10px",
            }}
          >
            <Icon size={18} />
            <span style={{ fontSize: "0.62rem", fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
