import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="logo" className="footer-logo" />

        <div className="social-icons">
          <a
            href="https://github.com/UnesABA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/younes-ait-ben-ali-506126361/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:unesaitbenali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>

        <p>&copy; 2025 Younes AIT BEN ALI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
