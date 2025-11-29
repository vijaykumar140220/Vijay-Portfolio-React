import { motion } from "framer-motion";
import user from "../data/userData";
import AnimatedBackground from "../components/AnimatedBackground";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <AnimatedBackground />

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">{user.name}</h1>
        <p className="role">{user.currentRole}</p>

        <p className="description">
          Frontend & Mobile Developer building responsive web and Android apps using
          React, Redux-Saga, NestJS, MongoDB, and Android Studio.
        </p>

        <div className="button-group">
          <a href={`https://${user.github}`} target="_blank" className="glow-btn">GitHub</a>
          <a href={`https://${user.linkedin}`} target="_blank" className="glow-btn">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
}
