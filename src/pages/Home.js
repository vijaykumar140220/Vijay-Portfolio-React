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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main Title */}
        <motion.h1
          className="title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          {user.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          className="role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {user.currentRole}
        </motion.p>

        {/* Description */}
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Frontend & Mobile Developer crafting modern UI, animations, and scalable
          applications using React, Redux-Saga, NestJS, Android Studio & MongoDB.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href={`https://${user.github}`} target="_blank" rel="noreferrer" className="glow-btn">
            🚀 GitHub
          </a>
          <a href={`https://${user.linkedin}`} target="_blank" rel="noreferrer" className="glow-btn secondary">
            💼 LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
