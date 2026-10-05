import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces and client-side applications.",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "APIs, server-side applications, and business logic.",
    skills: [
      "Node.js",
      "Django",
      "Django REST Framework",
      "Laravel",
      "Flask",
    ],
  },
  {
    number: "03",
    title: "Data",
    description: "Relational, document, and cloud-based storage.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    number: "04",
    title: "Mobile & AI",
    description: "Android development and computer vision.",
    skills: [
      "Kotlin",
      "YOLO",
      "TensorFlow Lite",
      "OpenCV",
    ],
  },
  {
    number: "05",
    title: "Tools",
    description: "Development workflow and supporting technologies.",
    skills: [
      "Git",
      "GitHub",
      "REST APIs",
      "Linux",
      "Axios",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="stack"
      className="section stack-section"
    >
      <div className="container">
        <SectionHeading
          number="03"
          title="Stack"
        />

        <div className="stack-intro">
          <p>
            Technologies I&apos;ve worked with across
            frontend, backend, mobile, databases, and AI.
          </p>
        </div>

        <div className="stack-list">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="stack-item"
            >
              <span className="stack-number">
                {group.number}
              </span>

              <div className="stack-title">
                <h3>{group.title}</h3>

                <p>{group.description}</p>
              </div>

              <div className="stack-technologies">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}