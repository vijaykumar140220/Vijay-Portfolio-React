import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import BackgroundParticles from "../components/BackgroundParticles";
import user from "../data/userData";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <BackgroundParticles />

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Me ✨
      </motion.h2>

      <motion.p
        className="contact-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out — I'm always open to collaboration and new opportunities.
      </motion.p>

      <Tilt glareEnable glareMaxOpacity={0.45} tiltMaxAngleX={12} tiltMaxAngleY={12}>
        <motion.div
          className="contact-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p><span>📞 Phone:</span> {user.phone}</p>
          <p><span>📧 Email:</span> {user.email}</p>
          <p><span>🔗 LinkedIn:</span> <a href={user.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </motion.div>
      </Tilt>

      <motion.a
        href={`mailto:${user.email}`}
        className="contact-btn"
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00f2ff" }}
        whileTap={{ scale: 0.95 }}
      >
        📩 Send Message
      </motion.a>
    </div>
  );
}
