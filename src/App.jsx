import React, { useState } from "react";
import { C, FONT } from "./styles/tokens.js";
import { NAV_SECTIONS } from "./data/content.js";
import { useScrollSpy } from "./hooks/useScrollSpy.js";

import StatusBar from "./components/StatusBar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Summary from "./components/Summary.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BottomTabs from "./components/BottomTabs.jsx";
import FullScreenDotsNav from "./components/FullScreenDotsNav.jsx";
import FullScreenProjectModal from "./components/FullScreenProjectModal.jsx";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export default function App() {
  const active = useScrollSpy(SECTION_IDS);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: C.void, color: C.text, fontFamily: FONT.body, minHeight: "100vh", width: "100%", position: "relative" }}>
      <div className="rb-root">
        <StatusBar />
        <Header active={active} scrollTo={scrollTo} />
        <FullScreenDotsNav active={active} scrollTo={scrollTo} />

        <main style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
          <Hero scrollTo={scrollTo} />
          <Summary />
          <Skills />
          <Experience />
          <Projects onOpenModal={(p) => setSelectedProject(p)} />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
        <BottomTabs active={active} scrollTo={scrollTo} />
      </div>

      {selectedProject && (
        <FullScreenProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

