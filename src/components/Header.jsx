import React, { useState, useEffect } from "react";
import { Github, Maximize2, Minimize2 } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";
import { NAV_SECTIONS, PROFILE } from "../data/content.js";

export default function Header({ active, scrollTo, isFullScreen, toggleFullScreen }) {
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);

  useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreenActive(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => document.removeEventListener("fullscreenchange", handleFSChange);
  }, []);

  const handleNativeFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(11,15,20,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.borderSoft}`,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => scrollTo("hero")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 9, padding: 0 }}
          aria-label="Scroll to top"
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: C.greenGlow,
              border: `1px solid ${C.greenDim}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "0.85rem",
              color: C.green,
            }}
          >
            RB
          </span>
          <span style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: "0.95rem", color: C.text }}>{PROFILE.name}</span>
        </button>

        <nav style={{ display: "none" }} className="rb-desktop-nav">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              data-active={active === s.id}
              onClick={() => scrollTo(s.id)}
              className="rb-navlink"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === s.id ? C.green : C.muted,
                fontSize: "0.86rem",
                fontWeight: active === s.id ? 600 : 400,
                padding: "4px 2px",
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={handleNativeFullscreen}
            aria-label="Toggle Full Screen View"
            title={isFullscreenActive ? "Exit Full Screen" : "Enter Full Screen View"}
            style={{
              background: isFullscreenActive ? C.greenGlow : C.surface2,
              border: `1px solid ${isFullscreenActive ? C.green : C.border}`,
              color: isFullscreenActive ? C.green : C.muted,
              borderRadius: 8,
              padding: "7px 12px",
              fontSize: "0.8rem",
              fontFamily: FONT.mono,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {isFullscreenActive ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            <span style={{ display: "none", "@media (min-width: 600px)": { display: "inline" } }}>
              {isFullscreenActive ? "Exit Fullscreen" : "Full Screen View"}
            </span>
          </button>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "none", color: C.muted }}
            className="rb-desktop-cta rb-cta-secondary"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "7px 12px",
                fontSize: "0.8rem",
                fontFamily: FONT.mono,
              }}
            >
              <Github size={14} /> GitHub
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

