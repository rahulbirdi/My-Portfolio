import React from "react";
import { C } from "../styles/tokens.js";
import SectionTag from "./ui/SectionTag.jsx";
import Tag from "./ui/Tag.jsx";

export default function Summary() {
  return (
    <section id="summary" className="rb-fullscreen-section">
      <SectionTag name="ProfessionalSummary" />

      <p style={{ color: C.textBody, fontSize: "1rem", lineHeight: 1.75, maxWidth: 720 }}>
        React Native developer with hands-on experience building responsive Android applications.
        Skilled in working with <Tag>REST APIs</Tag> and third-party libraries, and writing clean,
        maintainable code. Comfortable working across the mobile development lifecycle and
        collaborating with a team to build user-friendly apps.
      </p>
      <SectionTag name="ProfessionalSummary" closing />
    </section>
  );
}
