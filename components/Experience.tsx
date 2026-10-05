import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "./SectionHeading";

const responsibilities = [
  {
    number: "01",
    title: "Application Development",
    description:
      "Supported the implementation and development of the DepEd NEU Region III Event Management System.",
  },
  {
    number: "02",
    title: "Debugging & Testing",
    description:
      "Debugged, tested, and validated application modules to improve functionality and reliability.",
  },
  {
    number: "03",
    title: "Team Workflow",
    description:
      "Collaborated with developers using Git within an Agile and Kanban development workflow.",
  },
  {
    number: "04",
    title: "Maintenance",
    description:
      "Contributed to bug fixes, feature updates, code reviews, testing, and ongoing system maintenance.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <div className="container">
        <SectionHeading
          number="02"
          title="Experience"
        />

        <div className="experience-main">
          <div className="experience-period">
            <span>FEB — APR</span>

            <strong>2026</strong>
          </div>

          <div className="experience-details">
            <p className="eyebrow">
              YouCode Technologies Corporation
            </p>

            <h3>
              Software Developer
              <br />
              Intern
            </h3>

            <p className="experience-intro">
              Contributed to the development of the DepEd
              NEU Region III Event Management System,
              supporting implementation, debugging,
              testing, deployment, and maintenance.
            </p>

            <Link
              href="/projects/deped-ems"
              className="text-link"
            >
              View DepEd EMS
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="experience-responsibilities">
          {responsibilities.map((item) => (
            <article
              key={item.number}
              className="experience-responsibility"
            >
              <span>{item.number}</span>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}