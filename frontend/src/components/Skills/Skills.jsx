import "./Skills.css";

const technicalSkills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 85 },
  { name: "React.js", value: 85 },
  { name: "Node.js", value: 80 },
  { name: "Express.js", value: 75 },
  { name: "MongoDB", value: 70 },
  { name: "SQL", value: 75 },
];

function Skills() {
  return (
    <section className="skills-page" id="skills">

      {/* ================= HERO ================= */}

      <div className="skills-hero">

        <div className="skills-hero-content">

          <div className="skills-heading">
            <span>MY SKILLS</span>

            <div className="skills-heading-line"></div>
            <div className="skills-heading-dot"></div>
          </div>

          <h1>
            The skills, tools and
            <br />
            technologies <span>I work with.</span>
          </h1>

          <p>
            I enjoy building efficient, scalable and
            user-friendly applications using modern
            technologies.
          </p>

        </div>

        <div className="skills-hero-graphic">

          <div className="code-window">

            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-lines">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>

          <div className="code-symbol">
            &lt; / &gt;
          </div>

          <div className="keyboard">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>


      {/* ================= TECHNICAL SKILLS ================= */}

      <div className="technical-section">

        <div className="technical-heading">

          <div className="technical-icon">
            &lt;/&gt;
          </div>

          <div>
            <h2>My Technical Skills</h2>

            <p>
              Technologies I use to bring ideas to life.
            </p>
          </div>

        </div>


        <div className="technical-grid">

          <div className="technical-column">

            {technicalSkills.slice(0, 4).map((skill, index) => (

              <div className="skill-bar" key={index}>

                <div className="skill-info">

                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <span className="skill-value">
                    {skill.value}%
                  </span>

                </div>

                <div className="skill-progress">

                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.value}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>


          <div className="technical-column">

            {technicalSkills.slice(4).map((skill, index) => (

              <div className="skill-bar" key={index}>

                <div className="skill-info">

                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <span className="skill-value">
                    {skill.value}%
                  </span>

                </div>

                <div className="skill-progress">

                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.value}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ================= TOOLS & TECHNOLOGIES ================= */}

<div className="tools-section">

  <div className="technical-heading">

    <div className="technical-icon">
      ⚙
    </div>

    <div>
      <h2>Tools & Technologies</h2>

      <p>
        Tools I use throughout my development workflow.
      </p>
    </div>

  </div>


  <div className="tools-grid">

    <div className="tool-card">
      <div className="tool-symbol">&lt;/&gt;</div>
      <span>VS Code</span>
    </div>

    <div className="tool-card">
      <div className="tool-symbol">Git</div>
      <span>Git</span>
    </div>

    <div className="tool-card">
      <div className="tool-symbol">GH</div>
      <span>GitHub</span>
    </div>

    <div className="tool-card">
      <div className="tool-symbol">API</div>
      <span>Postman</span>
    </div>

    <div className="tool-card">
      <div className="tool-symbol">F</div>
      <span>Figma</span>
    </div>

    <div className="tool-card">
      <div className="tool-symbol">TW</div>
      <span>Tailwind CSS</span>
    </div>

  </div>

</div>

{/* ================= CONCEPTS ================= */}

<div className="concepts-section">

  <div className="technical-heading">

    <div className="technical-icon">
      #
    </div>

    <div>
      <h2>Concepts I Work With</h2>

      <p>
        Fundamentals and practices I apply while building projects.
      </p>
    </div>

  </div>


  <div className="concepts-grid">

    <div className="concept-card">
      <div className="concept-icon">
        &lt;/&gt;
      </div>

      <div>
        <h3>Responsive Design</h3>
        <p>Building interfaces that work across devices.</p>
      </div>
    </div>


    <div className="concept-card">
      <div className="concept-icon">
        API
      </div>

      <div>
        <h3>RESTful APIs</h3>
        <p>Creating and integrating backend APIs.</p>
      </div>
    </div>


    <div className="concept-card">
      <div className="concept-icon">
        DS
      </div>

      <div>
        <h3>Data Structures</h3>
        <p>Using efficient structures to solve problems.</p>
      </div>
    </div>


    <div className="concept-card">
      <div className="concept-icon">
        &lt;/&gt;
      </div>

      <div>
        <h3>Clean Code</h3>
        <p>Writing readable and maintainable code.</p>
      </div>
    </div>


    <div className="concept-card">
      <div className="concept-icon">
        Git
      </div>

      <div>
        <h3>Version Control</h3>
        <p>Managing projects using Git and GitHub.</p>
      </div>
    </div>

  </div>

</div>

{/* ================= CURRENTLY LEARNING ================= */}

<div className="learning-section">

  <div className="technical-heading">

    <div className="technical-icon">
      +
    </div>

    <div>
      <h2>Currently Learning</h2>

      <p>
        Technologies I'm exploring to expand my development skills.
      </p>
    </div>

  </div>


  <div className="learning-grid">

    <div className="learning-card">
      <div className="learning-icon">
        AI
      </div>

      <span>GEN AI</span>
    </div>


    <div className="learning-card">
      <div className="learning-icon">
        D
      </div>

      <span>Docker</span>
    </div>


    <div className="learning-card">
      <div className="learning-icon">
        SD
      </div>

      <span>System Design</span>
    </div>


    <div className="learning-card">
      <div className="learning-icon">
        AI
      </div>

      <span>AI Integration</span>
    </div>

  </div>

</div>

    </section>
    
  );
}

export default Skills;