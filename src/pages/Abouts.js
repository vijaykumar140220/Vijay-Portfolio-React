import { motion } from "framer-motion";
import user from "../data/userData";
import BackgroundParticles from "../components/BackgroundParticles";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <BackgroundParticles />

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="title">About Me</h2>
        <p className="intro">
          I’m a passionate Frontend & Mobile Developer focused on building scalable,
          user-friendly applications with clean UI.
        </p>

        <h3 className="skills-title">Skills</h3>
        <ul className="skills-grid">
          {user.skills.map((skill, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="skill-card"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
