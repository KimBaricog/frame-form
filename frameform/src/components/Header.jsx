import { useState } from "react";
import "../style/header.css";
import Logo from "../assets/logo.png";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const services = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };
  const main = () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  };
  const recent = () => {
    document.getElementById("recent").scrollIntoView({ behavior: "smooth" });
  };

  const start = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };
  const team = () => {
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />

      <div className={`landings ${active ? "show" : ""}`}>
        <button id="btn" onClick={main}>
          Main
        </button>
        <button id="btn" onClick={services}>
          Services
        </button>
        <button id="btn" onClick={recent}>
          Portfolio
        </button>
        <button id="btn" onClick={team}>
          Team
        </button>
        <button onClick={start}>Get started</button>
      </div>

      <div
        className={`hamburger ${active ? "active" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
