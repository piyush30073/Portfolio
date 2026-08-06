import "./Hero.css";
import hero from "../../assets/hero.png";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="hero-tag">HEY, I'M</span>

        <h1>
          Piyush
          <br />
          <span>Singh</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Full Stack Developer",
              "Java Developer",
              "AI Developer",
              "MERN Stack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>

        <p>
          I build responsive, user-friendly web applications and love turning
          ideas into real-world solutions.
        </p>

        <div className="hero-buttons">
          <Link to="projects" smooth={true} duration={700} offset={-80}>
            <button className="primary-btn">View My Work</button>
          </Link>
          <Link to="contact" smooth={true} duration={700} offset={-80}>
            <button className="secondary-btn">Contact Me</button>
          </Link>
        </div>

        <div className="social-title">Connect with me</div>

        <div className="social-icons">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="glow"></div>

        <img src={hero} alt="Piyush" />
      </div>
    </section>
  );
}

export default Hero;
