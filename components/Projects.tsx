"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const AUTOPLAY_DELAY = 5000;

export default function Projects() {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    isPlaying,
    setIsPlaying,
  ] = useState(true);

  const [
    isInteracting,
    setIsInteracting,
  ] = useState(false);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0
        ? projects.length - 1
        : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === projects.length - 1
        ? 0
        : current + 1
    );
  };

  const goToProject = (
    index: number
  ) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    if (
      reducedMotion.matches ||
      !isPlaying ||
      isInteracting
    ) {
      return;
    }

    const timer =
      window.setInterval(() => {
        setActiveIndex(
          (current) =>
            current ===
            projects.length - 1
              ? 0
              : current + 1
        );
      }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    activeIndex,
    isPlaying,
    isInteracting,
  ]);

  return (
    <section
      id="work"
      className="section projects-section"
    >
      <div className="container">
        <div className="projects-header">
          <SectionHeading
            number="01"
            title="Projects"
          />

          <div className="carousel-controls">
            <span className="carousel-counter">
              {String(
                activeIndex + 1
              ).padStart(2, "0")}

              <span>/</span>

              {String(
                projects.length
              ).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
            >
              <ArrowRight size={19} />
            </button>

            <button
              type="button"
              onClick={() =>
                setIsPlaying(
                  (current) =>
                    !current
                )
              }
              aria-label={
                isPlaying
                  ? "Pause project carousel"
                  : "Play project carousel"
              }
              aria-pressed={
                !isPlaying
              }
            >
              {isPlaying ? (
                <Pause size={17} />
              ) : (
                <Play size={17} />
              )}
            </button>
          </div>
        </div>

        <div
          className="projects-carousel"
          aria-roledescription="carousel"
          aria-label="Projects"
          onMouseEnter={() =>
            setIsInteracting(true)
          }
          onMouseLeave={() =>
            setIsInteracting(false)
          }
          onFocusCapture={() =>
            setIsInteracting(true)
          }
          onBlurCapture={(
            event
          ) => {
            const nextFocus =
              event.relatedTarget;

            if (
              !nextFocus ||
              !event.currentTarget.contains(
                nextFocus as Node
              )
            ) {
              setIsInteracting(false);
            }
          }}
        >
          <div
            className="projects-carousel-track"
            style={{
              transform: `translateX(-${
                activeIndex * 100
              }%)`,
            }}
          >
            {projects.map(
              (project, index) => (
                <div
                  className="project-carousel-item"
                  key={project.slug}
                  aria-hidden={
                    activeIndex !== index
                  }
                  inert={
                    activeIndex !== index
                  }
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="carousel-footer">
          <div className="carousel-dots">
            {projects.map(
              (project, index) => (
                <button
                  type="button"
                  key={project.slug}
                  className={
                    activeIndex ===
                    index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    goToProject(index)
                  }
                  aria-label={`Show ${project.title}`}
                  aria-current={
                    activeIndex ===
                    index
                      ? "true"
                      : undefined
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}