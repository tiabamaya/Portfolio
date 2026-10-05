import type {
  Metadata,
} from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectFlow from "@/components/ProjectFlow";
import CaseStudySection from "@/components/CaseStudySection";

import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
  
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    return {};
  }
  

  return {
    title: project.title,

    description:
      project.description,

    alternates: {
      canonical:
      `/projects/${project.slug}`,
    },

    openGraph: {
      title:
        `${project.title} | Isaiah Concepcion`,

      description:
        project.description,

      type: "article",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        `${project.title} | Isaiah Concepcion`,

      description:
        project.description,
      
      
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main
        id="main-content"
        className="project-page"
      >
        <div className="container">
          <Link
            href="/#work"
            className="back-link"
          >
            <ArrowLeft size={17} />
            Back to projects
          </Link>

          <header className="project-page-header">
            <div className="project-page-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            <h1>{project.title}</h1>

            <div className="project-page-header-bottom">
              <p>
                {project.longDescription}
              </p>

              <div className="technology-list">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>
          </header>

          {/* Problem + Solution */}
          <div className="case-study">
            {project.problem && (
              <CaseStudySection
                number="01"
                eyebrow="Context"
                title="The Problem"
              >
                <p>{project.problem}</p>
              </CaseStudySection>
            )}

            {project.solution && (
              <CaseStudySection
                number="02"
                eyebrow="Approach"
                title="The Solution"
              >
                <p>{project.solution}</p>
              </CaseStudySection>
            )}
          </div>

          {/* Technical flow sits OUTSIDE case-study */}
          <ProjectFlow project={project} />

          {/* Role + Features + Recognition */}
          <div className="case-study case-study-continuation">
            {project.role && (
              <CaseStudySection
                number="03"
                eyebrow="Contribution"
                title="My Role"
              >
                <p>{project.role}</p>
              </CaseStudySection>
            )}

            <CaseStudySection
              number="04"
              eyebrow="Development"
              title="Key Features"
            >
              <ul className="case-study-list">
                {project.highlights.map(
                  (highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </CaseStudySection>

            {project.recognition &&
              project.recognition.length > 0 && (
                <CaseStudySection
                  number="05"
                  eyebrow="Recognition"
                  title="Awards & Recognition"
                >
                  <ul className="recognition-list">
                    {project.recognition.map(
                      (recognition) => (
                        <li key={recognition}>
                          {recognition}
                        </li>
                      )
                    )}
                  </ul>
                </CaseStudySection>
              )}
          </div>

          {(project.github ||
            project.liveDemo) && (
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Source code
                  <ArrowUpRight size={17} />
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  Live project
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          )}

          <div className="next-project">
            <p>More featured projects</p>

            <Link
              href="/#work"
              className="text-link"
            >
              View all projects
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}