import React from "react";
import { Award } from "lucide-react";
import { C } from "../styles/tokens.js";
import SectionTag from "./ui/SectionTag.jsx";
import { CERTS } from "../data/content.js";

export default function Certifications() {
  return (
    <section id="certifications" className="rb-fullscreen-section">
      <SectionTag name="CertificationsAndLeadership" />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {CERTS.map((c) => (
          <div
            key={c.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <Award size={18} color={C.green} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.94rem", color: C.text }}>{c.title}</div>
              <div style={{ fontSize: "0.8rem", color: C.mutedDim }}>{c.org}</div>
            </div>
          </div>
        ))}
      </div>
      <SectionTag name="CertificationsAndLeadership" closing />
    </section>
  );
}
