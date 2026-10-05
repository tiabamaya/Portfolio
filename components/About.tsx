import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
    >
      <div className="container">
        <SectionHeading
          number="04"
          title="About"
        />

        <div className="about-grid">
          <div className="about-heading">
            <p>
              Building software across web,
              mobile, and AI.
            </p>
          </div>

          <div className="about-content">
            <p>
              I&apos;m Isaiah Concepcion, a BS
              Information Technology graduate
              specializing in Cybersecurity.
            </p>

            <p>
              During my studies and internship, I
              became increasingly focused on
              software development—building
              full-stack applications, REST APIs,
              Android applications, and
              AI-powered systems.
            </p>

            <p>
              I&apos;m currently looking for an
              entry-level software development
              opportunity where I can continue
              improving as a developer while
              contributing to useful products.
            </p>

            <div className="about-details">
              <div className="about-detail">
                <span>Education</span>

                <strong>
                  Technological Institute of the
                  Philippines — Manila
                </strong>

                <p>
                  BS Information Technology
                  <br />
                  Specialization in Cybersecurity
                  <br />
                  2022 — 2026
                </p>
              </div>

              <div className="about-detail">
                <span>Recognition</span>

                <strong>
                  Dean&apos;s Lister
                </strong>

                <p>
                  1st Semester
                  <br />
                  2022 — 2023
                </p>
              </div>

              <div className="about-detail">
                <span>Location</span>

                <strong>
                  Quezon City
                </strong>

                <p>
                  Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}