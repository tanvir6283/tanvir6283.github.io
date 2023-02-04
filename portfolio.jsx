import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="navbar-brand">My Portfolio</h2>
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#hero-section" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services-section" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header id="hero-section" className="hero">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">I'm a Software Quality Assuarance Engineer</p>
      </header>

      <section id="about-section" className="about">
        <h2 className="section-title">About Me</h2>
        <p>
         Currently working as a Software Quality Assurance Engineer at TigerIT Bangladesh Ltd.
Previously worked as a Maintenance Engineer in Beximco Group. Successfully completed a world-class medical, testing, and health screening facility project of Beximco Group (A joint venture project of Beximco Group and Fullerton Health Singapore). Developed an automatic room assigning software, a store inventory management software using MS Excel- Macro, VBA etc.
Completed Bachelor of Science (BSc) in EECE from Military Institute of Science and Technology (MIST) & was involved in several extra-curricular & volunteer activities for personal & professional growth.
Intended to be a result-oriented professional driven by the desire to excel business by utilizing new concepts, along with expertise in Technical Design, Operation, Project Management, Automation, Process Development, Risk Management as well as Technical planning & implementation.
        </p>
      </section>

      <section id="services-section" className="services">
        <h2 className="section-title">My Services</h2>
        <ul className="services-list">
          <li className="service">Web App Testing</li>
          <li className="service">Mobile App Testing</li>
          <li className="service">  </li>
        </ul>
      </section>

      <section id="contact-section" className="contact">
        <h2 className="section-title">Contact Me</h2>
        <form action="#" className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email"

          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; My Portfolio 2023</p>
      </footer>
    </div>
  );
};

export default App;

