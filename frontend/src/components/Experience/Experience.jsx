import "./Experience.css";

function Experience() {
  const experiences = [
    {
      period: "2026",
      type: "Internship",
      title: "Frontend ",
      company: "Ekikai",
      location: "Remote",
      description:
        "Completed a 6-week remote Frontend Developer Internship at Ekikai under the Web Development Internship Program, where I worked on building and improving user interfaces using modern web technologies",
      achievements: [
        "Developed and improved responsive user interfaces",
        "Worked with modern frontend technologies like HTML, CSS, JavaScript, and React",
        "Created a main streame project for Abvocates (LCMS)",
        "Collaborated in a team environment and followed development best practices",
      ],
      technologies: [
        "Bootstrap",
        "Django",
        "Git",
        "GitHub",
      ],
    },

    {
      period: "2026 - Present",
      type: "Academic",
      title: "B.Tech Computer Science & Engineering",
      company: "GLBITM",
      location: "Greater Noida, India",
      description:
        "Pursuing Computer Science and Engineering with a focus on software development, data structures, web technologies and emerging AI technologies.",
      achievements: [
        "Building full-stack web applications",
        "Practicing Data Structures & Algorithms",
        "Working with modern frontend and backend technologies",
        "Developing academic and personal projects",
      ],
      technologies: [
        "Java",
        "React",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      period: "Ongoing",
      type: "Personal Development",
      title: "Full Stack Development",
      company: "Personal Projects",
      location: "Remote",
      description:
        "Continuously building projects to improve my development skills and gain practical experience with modern software engineering practices.",
      achievements: [
        "Building responsive React applications",
        "Developing REST APIs and backend systems",
        "Working with databases and authentication",
        "Exploring AI-powered applications",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },
  ];

  return (
    <section className="experience-page" id="experience">

      {/* ================= HERO ================= */}

      <div className="experience-hero">

        <div className="experience-hero-content">

          <div className="experience-label">

            <span>MY EXPERIENCE</span>

            <div className="experience-line"></div>

            <div className="experience-dot"></div>

          </div>

          <h1>
            The journey behind
            <br />
            <span>what I build.</span>
          </h1>

          <div className="experience-small-line"></div>

          <p>
            A timeline of my learning, development and
            practical experience as a Computer Science student.
          </p>

        </div>


        {/* HERO GRAPHIC */}

        <div className="experience-illustration">

          <div className="experience-circle"></div>

          <div className="experience-code">

            <div className="experience-code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="experience-code-lines">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>

          <div className="experience-symbol">
            &lt;/&gt;
          </div>

        </div>

      </div>


      {/* ================= TIMELINE ================= */}

      <div className="experience-timeline">

        <div className="timeline-line"></div>

        {experiences.map((experience, index) => (

          <div
            className={
              index % 2 === 0
                ? "experience-item left"
                : "experience-item right"
            }
            key={index}
          >

            {/* DATE */}

            <div className="experience-date">

              <span>
                {experience.period}
              </span>

            </div>


            {/* DOT */}

            <div className="timeline-dot">
              <div></div>
            </div>


            {/* CARD */}

            <div className="experience-card">

              <div className="experience-card-top">

                <div className="experience-type">
                  {experience.type}
                </div>

                <span className="experience-status">
                  ●
                </span>

              </div>


              <h2>
                {experience.title}
              </h2>


              <div className="experience-company">

                <span>
                  {experience.company}
                </span>

                <span>
                  •
                </span>

                <span>
                  {experience.location}
                </span>

              </div>


              <p className="experience-description">
                {experience.description}
              </p>


              <div className="experience-achievements">

                <h3>
                  Key Highlights
                </h3>

                <ul>

                  {experience.achievements.map(
                    (achievement, achievementIndex) => (

                      <li key={achievementIndex}>

                        <span>
                          ✓
                        </span>

                        {achievement}

                      </li>

                    )
                  )}

                </ul>

              </div>


              <div className="experience-tech">

                {experience.technologies.map(
                  (technology, technologyIndex) => (

                    <span key={technologyIndex}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* ================= BOTTOM CTA ================= */}

      <div className="experience-bottom">

        <div className="experience-bottom-icon">
          +
        </div>

        <div>

          <h2>
            Always learning. Always building.
          </h2>

          <p>
            Every project and experience is another step
            towards becoming a better developer.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Experience;