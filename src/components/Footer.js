import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/footer.css";
import BackgroundParticles from "../components/BackgroundParticles"; // <-- Add this

export default function Footer() {
  return (
    <footer className="footer-container">
      <BackgroundParticles /> {/* Background Animation */}

      <div className="footer-content">
        <h3 className="footer-name">Vijaya Kumar</h3>
        <p className="footer-tagline">Frontend Developer • MERN Stack • UI/UX Enthusiast</p>

        <div className="footer-socials">
          <a href="https://github.com/vijaykumar140220" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href={`mailto:vk9944836332@gmail.com`}>
            <FaEnvelope />
          </a>
          <a href="tel:+919944836332">
            <FaPhone />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Made with ❤️ by <span className="highlight">Vijay Kumar</span>
      </div>
    </footer>
  );
}
