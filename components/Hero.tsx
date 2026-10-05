import {
  ArrowDownRight,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <Reveal>
          <p className="hero-terminal">
            <span>&gt;</span> hello, i&apos;m
          </p>
        </Reveal>

        <Reveal delay={0.08} y={40}>
          <h1 className="hero-name">
            ISAIAH
            <br />
            <span>CONCEPCION.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="hero-role-row">
            <p className="hero-role">
              Software Developer
            </p>

            <p className="hero-availability">
              Based in Quezon City,
              Philippines
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.23}>
          <div className="hero-bottom">
            <div>
              <p className="hero-description">
                I build web, mobile, and
                AI-powered applications with a
                focus on useful, reliable
                software.
              </p>

              <p className="hero-meta">
                BS Information Technology ·
                Cybersecurity
                <br />
                Technological Institute of the
                Philippines — Manila
              </p>
            </div>

            <div className="hero-actions">
              <a
                href="#work"
                className="button button-primary"
              >
                View projects
                <ArrowDownRight size={17} />
              </a>

              <a
                href="/resume.pdf"
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
                <Download size={17} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-socials">
            <a
              href="https://github.com/tiabamaya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={17} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/isaiah-concepcion-795a1732b" 
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={17} />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}