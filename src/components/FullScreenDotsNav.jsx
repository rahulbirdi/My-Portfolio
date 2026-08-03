import React from "react";
import { NAV_SECTIONS } from "../data/content.js";

export default function FullScreenDotsNav({ active, scrollTo }) {
  return (
    <nav aria-label="Full screen section navigation" className="rb-dots-nav">
      {NAV_SECTIONS.map((sec) => {
        const isActive = active === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className="rb-dot-item"
            data-active={isActive}
            aria-label={`Scroll to ${sec.label}`}
          >
            <span className="rb-dot-tooltip">{sec.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
