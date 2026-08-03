import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { C, FONT } from "../styles/tokens.js";
import SectionTag from "./ui/SectionTag.jsx";
import { PROFILE } from "../data/content.js";

const linkStyleSecondary = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  border: `1px solid ${C.border}`,
  color: C.muted,
  borderRadius: 9,
  padding: "10px 16px",
  fontWeight: 600,
  fontSize: "0.86rem",
  textDecoration: "none",
  transition: "all 0.15s ease",
};

export default function Contact() {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sentStatus, setSentStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    const mailtoSubject = encodeURIComponent(subject || `New Portfolio Message from ${senderEmail}`);
    const mailtoBody = encodeURIComponent(`From: ${senderEmail}\n\nMessage:\n${message}`);
    
    // Open native mail client addressed directly to rahulbirdi75@gmail.com
    window.location.href = `mailto:${PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 6000);
  };

  return (
    <section id="contact" className="rb-fullscreen-section">
      <SectionTag name="Contact" />
      <div
        className="rb-glass-panel-glow"
        style={{
          borderRadius: 20,
          padding: "36px 32px",
          maxWidth: 680,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 style={{ fontFamily: FONT.display, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", margin: "0 0 8px", color: C.text }}>
            Let's build something.
          </h2>
          <p style={{ color: C.muted, margin: 0, fontSize: "0.95rem" }}>
            Open to React Native and mobile development opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28, textAlign: "left" }}>
          <div>
            <label style={{ display: "block", color: C.muted, fontSize: "0.8rem", fontFamily: FONT.mono, marginBottom: 6 }}>
              YOUR EMAIL *
            </label>
            <input
              type="email"
              required
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="name@example.com"
              style={{
                width: "100%",
                background: C.surface2,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "12px 16px",
                color: C.text,
                fontSize: "0.92rem",
                fontFamily: FONT.body,
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", color: C.muted, fontSize: "0.8rem", fontFamily: FONT.mono, marginBottom: 6 }}>
              SUBJECT
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Mobile Project / Job Opportunity"
              style={{
                width: "100%",
                background: C.surface2,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "12px 16px",
                color: C.text,
                fontSize: "0.92rem",
                fontFamily: FONT.body,
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", color: C.muted, fontSize: "0.8rem", fontFamily: FONT.mono, marginBottom: 6 }}>
              MESSAGE *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Rahul, I'd like to talk about..."
              style={{
                width: "100%",
                background: C.surface2,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "12px 16px",
                color: C.text,
                fontSize: "0.92rem",
                fontFamily: FONT.body,
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            className="rb-cta-primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: C.green,
              color: "#0B0F14",
              border: "none",
              borderRadius: 10,
              padding: "13px 20px",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              marginTop: 4,
            }}
          >
            <Send size={16} /> Send to rahulbirdi75@gmail.com
          </button>

          {sentStatus && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(61, 220, 132, 0.15)",
                border: `1px solid ${C.green}`,
                borderRadius: 10,
                padding: "10px 14px",
                color: C.green,
                fontSize: "0.85rem",
              }}
            >
              <CheckCircle size={16} /> Email client opened with your message ready for {PROFILE.email}!
            </div>
          )}
        </form>

        {/* Quick Social & Direct Email Links */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, paddingTop: 16, borderTop: `1px solid ${C.borderSoft}` }}>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rb-cta-secondary"
            style={linkStyleSecondary}
          >
            <Mail size={16} color={C.green} /> {PROFILE.email}
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="rb-cta-secondary" style={linkStyleSecondary}>
            <Github size={16} /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="rb-cta-secondary" style={linkStyleSecondary}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <SectionTag name="Contact" closing />
    </section>
  );
}
