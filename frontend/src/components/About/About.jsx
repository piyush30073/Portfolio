import "./About.css";
import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaRocket,
  FaCode,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import API from "../../services/api";
import hero from "../../assets/hero.png";

function About() {
  const details = [
    {
      icon: <FaUser />,
      label: "Name",
      value: "Piyush Singh",
    },
    {
      icon: <FaGraduationCap />,
      label: "Age",
      value: "21",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Greater Noida, India",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "piyush30073@gmail.com",
    },
    {
      icon: <FaBriefcase />,
      label: "Availability",
      value: "Open to Work",
      green: true,
    },
  ];

  const journey = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      description:
        "Building modern web applications and exploring new technologies. Focused on creating scalable and efficient solutions.",
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      description:
        "Started my journey with frontend development. Learned HTML, CSS, JavaScript and built interactive projects.",
    },
    {
      year: "2021 - 2022",
      title: "Learning & Exploring",
      description:
        "Explored programming fundamentals and developed interest in web development and problem solving.",
    },
  ];

  const education = [
    {
      year: "2021 - 2025",
      title: "B.Tech in Computer Science & Engineering",
      institute: "NIET Greater Noida",
      description:
        "Currently pursuing my degree with a strong foundation in programming and software development.",
    },
    {
      year: "2019 - 2021",
      title: "Senior Secondary (12th)",
      institute: "CBSE Board",
      description:
        "Completed with focus on PCM and Computer Science.",
    },
    {
      year: "2017 - 2019",
      title: "Secondary (10th)",
      institute: "CBSE Board",
      description:
        "Completed with good academic record.",
    },
  ];

  const stats = [
    {
      icon: <FaCode />,
      number: "10+",
      title: "Projects Completed",
      description: "Across different technologies",
    },
    {
      icon: <FaBriefcase />,
      number: "1+",
      title: "Years of Experience",
      description: "Building web solutions",
    },
    {
      icon: <FaUsers />,
      number: "5+",
      title: "Happy Clients",
      description: "Satisfied with my work",
    },
    {
      icon: <FaTrophy />,
      number: "2+",
      title: "Certifications",
      description: "Continuous learner",
    },
  ];

  const downloadResume = async () => {
    try {
      const response = await API.get("/download-cv", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;
      link.download = "Piyush_Chauhan_Resume.pdf";

      document.body.appendChild(link);
      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Resume download failed:", error);
    }
  };

  return (
    <section className="about-page" id="about">

      {/* ================= ABOUT INTRO ================= */}

      <div className="about-intro">

        <div className="about-content">

          <div className="about-heading">
            <span className="about-label">
              ABOUT ME
            </span>

            <span className="heading-line"></span>
            <span className="heading-dot"></span>
          </div>

          <h1>
            Get to know
            <br />
            <span>me</span> better.
          </h1>

          <p className="about-text">
            I'm a passionate Full Stack Developer who loves
            building clean, responsive and user-friendly
            web applications. I enjoy turning complex
            problems into simple, beautiful and intuitive
            solutions.
          </p>

          <div className="personal-details">

            {details.map((item, index) => (
              <div className="personal-row" key={index}>

                <div className="personal-label">
                  <span className="personal-icon">
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </div>

                <span className="personal-colon">
                  :
                </span>

                <span
                  className={
                    item.green
                      ? "personal-value green"
                      : "personal-value"
                  }
                >
                  {item.value}
                </span>

              </div>
            ))}

          </div>

          <button
            className="about-download"
            onClick={downloadResume}
          >
            Download CV
            <FiDownload />
          </button>

        </div>

        {/* PROFILE IMAGE */}

        <div className="about-image-wrapper">

          <div className="about-image-box">

            <div className="about-circle"></div>

            <div className="about-dots"></div>

            <img
              src={hero}
              alt="Piyush Chauhan"
            />

          </div>

        </div>

      </div>


      {/* ================= JOURNEY + EDUCATION ================= */}

      <div className="timeline-section">

        {/* JOURNEY */}

        <div className="timeline-column">

          <div className="timeline-heading">

            <div className="timeline-icon">
              <FaRocket />
            </div>

            <h2>
              My Journey
            </h2>

          </div>

          <div className="timeline">

            {journey.map((item, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <span className="timeline-dot"></span>

                <div className="timeline-content">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* EDUCATION */}

        <div className="timeline-column">

          <div className="timeline-heading">

            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <h2>
              Education
            </h2>

          </div>

          <div className="timeline">

            {education.map((item, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <span className="timeline-dot"></span>

                <div className="timeline-content">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <span className="timeline-institute">
                    {item.institute}
                  </span>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= STATS ================= */}

      <div className="about-stats">

        {stats.map((item, index) => (

          <div
            className="about-stat"
            key={index}
          >

            <div className="stat-icon">
              {item.icon}
            </div>

            <div className="stat-content">

              <div className="stat-number">
                {item.number}
              </div>

              <div className="stat-title">
                {item.title}
              </div>

              <div className="stat-description">
                {item.description}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default About;