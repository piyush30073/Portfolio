import { useState } from "react";
import "./Project.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = [
    "All Projects",
    "Web Applications",
    "AI / ML",
    "Tools",
    "Others",
  ];

  const projects = [
    {
      title: "Real-time Chat Application",
      type: "Web Application",
      category: "Web Applications",
      preview: "chat",
      description:
        "A real-time chat application with private messaging, online presence and typing indicators using Socket.IO and Node.js.",
      features: [
        "Real-time messaging",
        "User authentication",
        "Online status & typing indicators",
        "Responsive modern UI",
      ],
      tech: ["React", "Node.js", "JavaScript", "Socket.IO"],
    },

    {
      title: "AI Memory Management System",
      type: "AI / Backend",
      category: "AI / ML",
      preview: "memory",
      description:
        "An intelligent memory management system designed to store, retrieve and organize contextual information for AI applications.",
      features: [
        "Memory storage & retrieval",
        "Semantic search",
        "Context management",
        "RESTful API",
      ],
      tech: ["Python", "FastAPI", "MongoDB", "AI"],
    },

    {
      title: "AI Injury Prevention System",
      type: "AI / Machine Learning",
      category: "AI / ML",
      preview: "injury",
      description:
        "An AI-powered system that analyzes movement patterns and identifies potential injury risks.",
      features: [
        "Pose estimation",
        "Movement analysis",
        "Injury risk prediction",
        "Real-time feedback",
      ],
      tech: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    },

    {
      title: "AI Rehab & Recovery Assistant",
      type: "AI / Web Application",
      category: "AI / ML",
      preview: "rehab",
      description:
        "A smart rehabilitation platform that creates personalized recovery plans and tracks progress using AI.",
      features: [
        "Personalized recovery plans",
        "Exercise tracking",
        "Progress analytics",
        "AI recommendations",
      ],
      tech: ["React", "Node.js", "MongoDB", "Python"],
    },
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="projects-page" id="projects">

      {/* ================= HERO ================= */}

      <div className="projects-hero">

        <div className="projects-hero-content">

          <div className="projects-label">
            <span>MY PROJECTS</span>
            <div className="projects-line"></div>
            <div className="projects-dot"></div>
          </div>

          <h1>
            Things I've built
            <br />
            that solve <span>real problems.</span>
          </h1>

          <div className="projects-small-line"></div>

          <p>
            Here are some of the projects I've worked on.
            <br />
            Each project helped me learn, explore and grow.
          </p>

        </div>

        <div className="projects-illustration">

          <div className="illustration-circle"></div>

          <div className="browser-window">

            <div className="browser-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-code">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>

          <div className="code-box">
            &lt;/&gt;
          </div>

        </div>

      </div>


      {/* ================= FILTERS ================= */}

      <div className="project-filters">

        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "project-filter active"
                : "project-filter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>


      {/* ================= PROJECT CARDS ================= */}

      <div className="projects-container">

        {filteredProjects.map((project, index) => (

          <article
            className="project-card"
            key={index}
          >

            {/* PREVIEW */}

            <div className="project-preview">

              <ProjectPreview
                type={project.preview}
              />

            </div>


            {/* INFORMATION */}

            <div className="project-information">

              <div className="project-title">

                <div className="project-symbol">
                  &lt;/&gt;
                </div>

                <div>

                  <h2>
                    {project.title}
                  </h2>

                  <span>
                    {project.type}
                  </span>

                </div>

              </div>


              <p className="project-description">
                {project.description}
              </p>


              <ul className="project-features">

                {project.features.map(
                  (feature, featureIndex) => (
                    <li key={featureIndex}>
                      <b>✓</b>
                      {feature}
                    </li>
                  )
                )}

              </ul>

            </div>


            {/* STACK */}

            <div className="project-stack">

              <h3>
                Tech Stack
              </h3>

              <div className="tech-list">

                {project.tech.map(
                  (technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  )
                )}

              </div>

              <div className="stack-line"></div>

              <h3>
                GitHub
              </h3>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <span>↗</span>
              </a>

            </div>

          </article>

        ))}

      </div>


      {/* ================= GITHUB BANNER ================= */}

      <div className="github-banner">

        <div className="github-mark">
          GH
        </div>

        <div className="github-message">

          <h2>
            Want to see more?
          </h2>

          <p>
            Check out my GitHub profile for more projects
            and contributions.
          </p>

        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          Visit GitHub
          <span>↗</span>
        </a>

      </div>

    </section>
  );
}


/* =========================================================
   PROJECT PREVIEW
========================================================= */

function ProjectPreview({ type }) {

  if (type === "chat") {
    return (
      <div className="preview-window chat-preview">

        <div className="preview-header">
          <span>Chat Room</span>
          <small>● Online</small>
        </div>

        <div className="chat-content">

          <div className="chat-sidebar">

            <span>● Alice</span>
            <span>● John</span>
            <span>● Emma</span>

          </div>

          <div className="chat-messages">

            <p className="message-left">
              Hey! How are you?
            </p>

            <p className="message-right">
              I'm good!
            </p>

            <p className="message-left">
              Let's build something.
            </p>

          </div>

        </div>

      </div>
    );
  }


  if (type === "memory") {
    return (
      <div className="preview-window memory-preview">

        <div className="memory-core">
          AI
        </div>

        <div className="memory-list">

          <span>User Fact</span>
          <span>Preference</span>
          <span>Conversation</span>
          <span>Document</span>

        </div>

      </div>
    );
  }


  if (type === "injury") {
    return (
      <div className="preview-window injury-preview">

        <div className="body-model">
          ◎
        </div>

        <div className="injury-information">

          <small>
            Injury Risk
          </small>

          <strong>
            Low Risk
          </strong>

          <div className="risk-bar">
            <span></span>
          </div>

          <small>
            Movement Analysis
          </small>

          <div className="chart">
            ╱╲╱╲╱╲╱
          </div>

        </div>

      </div>
    );
  }


  return (
    <div className="preview-window rehab-preview">

      <div className="exercise-list">

        <span>
          Exercise 01
        </span>

        <span>
          Exercise 02
        </span>

        <span>
          Exercise 03
        </span>

      </div>

      <div className="rehab-data">

        <div className="progress-circle">
          73%
        </div>

        <small>
          Recovery Progress
        </small>

      </div>

    </div>
  );
}

export default Projects;