import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="navbar-logo">
            <span className="navbar-logo-mark" aria-hidden="true">✦</span>
            <span>
              Taqa<span className="navbar-logo-dim">&amp;</span>Code
            </span>
          </a>
          <p>Friendly explanations and study materials by Taqa Al-Zoubi, plus private tutoring for software engineering students.</p>
        </div>

        <div className="footer-col">
          <h4>Materials</h4>
          <ul>
            <li><a href="#materials">Java</a></li>
            <li><a href="#materials">Software Architecture</a></li>
            <li><a href="#materials">All subjects</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#contact">Request tutoring</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Java &amp; Code. All rights reserved.</p>
      </div>
    </footer>
  );
}
