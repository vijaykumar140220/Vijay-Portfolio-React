import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import user from "../data/userData";
import BackgroundParticles from "../components/BackgroundParticles";
import "../styles/experience.css";

export default function Experience() {
  const roleIcons = {
    "Frontend Developer": "💻",
    "Mobile Developer": "📱",
    "Full Stack Developer": "⚙️",
    "Intern": "🧪",
    default: "🚀",
  };

  return (
    <div className="experience-page">
      <BackgroundParticles />

      <motion.h2
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Work Experience
      </motion.h2>

      <div className="experience-wrapper ">
        <div className="timeline scroll-progress">
          {user.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="timeline-item"
            >
              <div className="line-dot"></div>

              <Tilt
                glareEnable
                glareMaxOpacity={0.45}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
              >
                <div className="experience-card">
                  <h3 className="role">
                    {roleIcons[exp.role] || roleIcons.default} {exp.role}
                  </h3>
                  <p className="company">{exp.company}</p>
                  <span className="date">{exp.range}</span>

                  <ul className="bullet-list">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
