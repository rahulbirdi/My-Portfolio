import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";
import { PROFILE } from "../data/content.js";
import PhoneMockup from "./PhoneMockup.jsx";

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="rb-fullscreen-section" style={{ minHeight: "calc(100vh - 70px)" }}>
      <div className="rb-grid-2">

        <div>
          <div style={{ fontFamily: FONT.mono, fontSize: "0.82rem", color: C.green, marginBottom: 18 }}>
            $ npx react-native run-android
            <span className="rb-cursor">▌</span>
          </div>

          <h1
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(2.1rem, 5vw, 3.3rem)",
              lineHeight: 1.12,
              margin: "0 0 20px",
              color: C.text,
            }}
          >
            Hi, I'm <span style={{ color: C.green }}>RAHUL BIRDI</span>
            <br />
            <span style={{ fontSize: "0.88em", color: C.text, fontWeight: 600 }}>App Developer</span>
            <br />
            <span style={{ fontSize: "0.62em", color: C.muted, fontWeight: 400, display: "block", marginTop: 8 }}>
              Building native experiences, screen by screen.
            </span>
          </h1>


          <p style={{ color: C.muted, fontSize: "1.02rem", lineHeight: 1.65, maxWidth: 480, margin: "0 0 28px" }}>{PROFILE.summary}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
            <button
              onClick={() => scrollTo("projects")}
              className="rb-cta-primary"
              style={{
                background: C.green,
                color: "#0B0F14",
                border: "none",
                borderRadius: 9,
                padding: "12px 20px",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              View projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rb-cta-secondary"
              style={{
                background: "transparent",
                color: C.muted,
                border: `1px solid ${C.border}`,
                borderRadius: 9,
                padding: "12px 20px",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Get in touch
            </button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: C.mutedDim, fontSize: "0.82rem" }}>
              <MapPin size={14} /> {PROFILE.location}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: C.mutedDim, fontSize: "0.82rem" }}>
              <Phone size={14} /> {PROFILE.phone}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: C.mutedDim, fontSize: "0.82rem" }}>
              <Mail size={14} /> {PROFILE.email}
            </span>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}
