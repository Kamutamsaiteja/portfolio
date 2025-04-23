import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import * as LucideIcons from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import data from "./data.json";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-white", darkMode);
    document.body.classList.toggle("bg-light", !darkMode);
    document.body.classList.toggle("text-dark", !darkMode);
  }, [darkMode]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container-fluid justify-content-between">
          <ul className="navbar-nav mx-auto">
            {["Home", "About Me", "Skills", "Projects", "Contact"].map((item, index) => (
              <li className="nav-item mx-3" key={index}>
                <a className="nav-link" href={`#${item.toLowerCase().replace(/ /g, "")}`}>{item}</a>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-outline-info ms-3"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LucideIcons.Sun size={20} /> : <LucideIcons.Moon size={20} />}
          </button>
        </div>
      </nav>

      <motion.section className="text-center my-5" id="home" {...fadeIn}>
        <motion.h1 className="display-4 fw-bold text-info">{data.name}</motion.h1>
        <motion.p className="lead mt-3 text-warning">{data.title}</motion.p>
      </motion.section>

      <motion.section className="my-5 px-5" id="aboutme" {...fadeIn}>
        <h2 className="h3 mb-3 text-success">About Me</h2>
        <p>{data.about}</p>
      </motion.section>

      <motion.section className="my-5" id="skills" {...fadeIn}>
        <h2 className="h3 mb-4 text-success">Skills</h2>
        <Marquee pauseOnHover gradient={false} speed={40} className="overflow-hidden">
          {data.skills.map((skill, index) => {
            const Icon = LucideIcons[skill.icon];
            return (
              <div key={index} className="mx-4 text-center">
                <div className="d-flex flex-column align-items-center">
                  <Icon size={40} className="text-info mb-2" />
                  <p className="m-0 fw-bold">{skill.name}</p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </motion.section>

      <motion.section className="my-5" id="projects" {...fadeIn}>
        <h2 className="h3 mb-3 text-success">Projects</h2>
        <div className="row g-4">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`card h-100 shadow-sm ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
                <img src={project.image} alt={project.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-info">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="my-5" id="contact" {...fadeIn}>
        <h2 className="h3 mb-3 text-success">Contact</h2>
        <p>Email: {data.contact.email}</p>
        <p>Mobile no:{data.contact.MobileNo}</p>
        <p>
          LinkedIn: <a href={data.contact.linkedin} className="text-primary text-decoration-underline">{data.contact.linkedin}</a>
        </p>
        
      </motion.section>

      <footer className={`text-center py-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <p>© 2025 {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
