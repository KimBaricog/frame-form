import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Frame & Form</h2>
          <p className="footer-text">
            Building clean, modern, and student‑friendly web experiences using
            today’s best technologies.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#recent">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p className="footer-text">
            Reach out for questions or collaborations.
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=61586541810285">
              <Facebook size={20} />
            </a>

            <a href="#">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Frame & Form. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
