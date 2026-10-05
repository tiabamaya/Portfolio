"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/types/project";

type ProjectFlowProps = {
  project: Project;
};

export default function ProjectFlow({
  project,
}: ProjectFlowProps) {
  const reduceMotion = useReducedMotion();

  const flow = project.flow;

  if (!flow?.length) {
    return null;
  }

  return (
    <section className="project-flow">
      <motion.div
        className="project-flow-header"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 30,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p className="eyebrow">
          Technical Flow
        </p>

        <h2>
          {project.flowTitle ??
            "How It Works"}
        </h2>

        {project.flowDescription && (
          <p>
            {project.flowDescription}
          </p>
        )}
      </motion.div>

      <div
        className={`project-flow-track project-flow-${project.theme}`}
      >
        {flow.map((step, index) => (
          <motion.div
            className="project-flow-step"
            key={`${step.title}-${index}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,

              delay: reduceMotion
                ? 0
                : index * 0.08,

              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            <div className="project-flow-number">
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </div>

            <div className="project-flow-node">
              <h3>
                {step.title}
              </h3>

              {step.description && (
                <p>
                  {step.description}
                </p>
              )}
            </div>

            {index <
              flow.length - 1 && (
              <div
                className="project-flow-arrow"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}