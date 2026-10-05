import {
  ArrowUpRight,
  Mail,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="container">
        <div className="contact-top">
          <p className="eyebrow">
            05 / CONTACT
          </p>

          <p className="contact-status">
            Open to opportunities
          </p>
        </div>

        <h2>
          LET&apos;S BUILD
          <br />
          SOMETHING.
        </h2>

        <div className="contact-grid">
          <div>
            <p className="contact-description">
              I&apos;m currently open to entry-level
              software development opportunities
              and collaborations.
            </p>

            <a
              href="mailto:isaiah.concepcion123@gmail.com"
              className="contact-email"
            >
              isaiah.concepcion123@gmail.com
              <ArrowUpRight size={22} />
            </a>
          </div>

          <div className="contact-actions">
            <a
              href="https://github.com/tiabamaya"
              target="_blank"
              rel="noreferrer"
              aria-label="Isaiah Concepcion on GitHub, opens in a new tab"
            >
              <FaGithub size={18} />

              <span>GitHub</span>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://linkedin.com/in/isaiah-concepcion-795a1732b"
              target="_blank"
              rel="noreferrer"
              aria-label="Isaiah Concepcion on LinkedIn, opens in a new tab"
            >
              <FaLinkedin size={18} />

              <span>LinkedIn</span>

              <ArrowUpRight size={16} />
            </a>

            <a href="mailto:isaiah.concepcion123@gmail.com">
              <Mail size={18} />

              <span>Email</span>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Isaiah Concepcion résumé in a new tab"
            >
              <Download size={18} />

              <span>Résumé</span>

              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}