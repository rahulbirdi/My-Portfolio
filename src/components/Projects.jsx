import React from "react";
import SectionTag from "./ui/SectionTag.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS } from "../data/content.js";

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="rb-fullscreen-section">
      <SectionTag name="Projects" />
      <div className="rb-projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} onOpenModal={onOpenModal} />
        ))}
      </div>
      <SectionTag name="Projects" closing />
    </section>
  );
}

