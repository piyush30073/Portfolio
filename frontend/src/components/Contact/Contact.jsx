import { useState } from "react";
import "./Contact.css";
import API from "../../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      // SEND DATA TO BACKEND
      const response = await API.post("/contact", formData);

      console.log("Backend Response:", response.data);

      setStatus("Message sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Error:", error);

      setStatus(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page" id="contact">

      {/* ================= HERO ================= */}

      <div className="contact-hero">

        <div className="contact-hero-content">

          <div className="contact-label">
            <span>GET IN TOUCH</span>

            <div className="contact-line"></div>

            <div className="contact-dot"></div>
          </div>

          <h1>
            Let's build something
            <br />
            <span>great together.</span>
          </h1>

          <div className="contact-small-line"></div>

          <p>
            Have a project in mind, want to collaborate,
            or simply want to say hello? I'd love to hear
            from you.
          </p>

        </div>


        {/* ================= HERO GRAPHIC ================= */}

        <div className="contact-illustration">

          <div className="contact-circle"></div>

          <div className="contact-envelope">

            <div className="envelope-top"></div>

            <div className="envelope-left"></div>

            <div className="envelope-right"></div>

          </div>

          <div className="contact-spark spark-one">
            +
          </div>

          <div className="contact-spark spark-two">
            +
          </div>

          <div className="contact-spark spark-three">
            •
          </div>

        </div>

      </div>


      {/* ================= CONTACT CONTENT ================= */}

      <div className="contact-container">

        {/* ================= LEFT ================= */}

        <div className="contact-information">

          <div className="contact-info-heading">

            <div className="contact-icon">
              @
            </div>

            <div>

              <h2>
                Let's talk
              </h2>

              <p>
                I'm always open to discussing new
                opportunities and interesting ideas.
              </p>

            </div>

          </div>


          {/* EMAIL */}

          <div className="contact-info-card">

            <div className="info-icon">
              @
            </div>

            <div>

              <span>
                Email
              </span>

              <a href="mailto:piyush30073@gmail.com">
                piyush30073@gmail.com
              </a>

            </div>

          </div>


          {/* LOCATION */}

          <div className="contact-info-card">

            <div className="info-icon">
              +
            </div>

            <div>

              <span>
                Location
              </span>

              <p>
                Greater Noida, India
              </p>

            </div>

          </div>


          {/* AVAILABILITY */}

          <div className="contact-info-card">

            <div className="info-icon">
              ●
            </div>

            <div>

              <span>
                Availability
              </span>

              <p className="available">
                Open to opportunities
              </p>

            </div>

          </div>


          {/* SOCIAL LINKS */}

          <div className="social-section">

            <h3>
              Find me online
            </h3>

            <div className="social-links">

              <a
                href="https://github.com/piyush30073"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:piyush30073@gmail.com">
                Email
              </a>

            </div>

          </div>

        </div>


        {/* ================= RIGHT FORM ================= */}

        <div className="contact-form-card">

          <div className="form-heading">

            <h2>
              Send me a message
            </h2>

            <p>
              Fill out the form and I'll get back to you
              as soon as possible.
            </p>

          </div>


          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* SUBJECT */}

            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="send-message-button"
              disabled={loading}
            >

              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <span>↗</span>
                </>
              )}

            </button>


            {/* STATUS */}

            {status && (
              <p
                className={
                  status.includes("successfully")
                    ? "form-status success"
                    : "form-status error"
                }
              >
                {status}
              </p>
            )}

          </form>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="contact-bottom">

        <div className="contact-bottom-symbol">
          &lt;/&gt;
        </div>

        <div>

          <h2>
            Have an idea? Let's make it happen.
          </h2>

          <p>
            I'm always excited to work on meaningful
            projects and learn something new.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;