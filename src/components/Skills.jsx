import React from "react";
import SectionTag from "./ui/SectionTag.jsx";
import SkillGroupCard from "./SkillGroupCard.jsx";
import { SKILL_GROUPS } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="rb-fullscreen-section">
      <SectionTag name="TechnicalSkills" />
      <div className="rb-skills-grid">
        {SKILL_GROUPS.map((g) => (
          <SkillGroupCard key={g.title} title={g.title} pkgs={g.pkgs} />
        ))}
      </div>
      <SectionTag name="TechnicalSkills" closing />
    </section>
  );
}

