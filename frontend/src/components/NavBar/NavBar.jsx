import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import "./NavBar.css";
import API from "../../services/api";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      console.error("Resume Download Failed", error);
    }
  };

  return (
    <header className="navbar">

      <div className="logo">
        PIYUSH<span>.</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link
            to="home"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="experience"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

      </ul>

      <button
        className="cv-btn"
        onClick={downloadResume}
      >
        <FiDownload />
        Download Resume
      </button>

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

    </header>
  );
}

export default NavBar;