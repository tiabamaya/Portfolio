import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-cover"
      >
        <div className="project-cover-top">
          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{project.year}</span>
        </div>

        <div className="project-cover-main">
          <p>{project.category}</p>

          <h3>{project.shortTitle}</h3>
        </div>

        <div className="project-cover-bottom">
          <span>
            {project.technologies
              .slice(0, 4)
              .join(" · ")}
          </span>

          <span className="project-cover-link">
            View project
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>

      <div className="project-content">
        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="project-info">
          <div className="project-meta-row">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h3>
            <Link href={`/projects/${project.slug}`}>
              {project.shortTitle}
            </Link>
          </h3>

          <p>{project.description}</p>

          <div className="technology-list">
            {project.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-link"
          >
            View case study
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}