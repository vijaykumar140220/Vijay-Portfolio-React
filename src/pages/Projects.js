import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import user from "../data/userData";
import AnimatedBackground from "../components/AnimatedBackground";

import "../styles/projects.css";

export default function Projects() {
  return (
    <div className="projects-page">
      <AnimatedBackground />

      <motion.div
        className="projects-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects 🚀
        </motion.h2>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {user.projects.map((p, i) => (
            <Tilt key={i} tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable glareMaxOpacity={0.4}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <motion.a
                  href={p.link}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔗 View Project
                </motion.a>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
