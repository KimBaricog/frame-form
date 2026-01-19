import "../style/header.css";
import Logo from "../assets/logo.png";

function Header() {
  const services = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };
  const main = () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  };

  const recent = () => {
    document.getElementById("recent").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <img src={Logo}></img>
      <div className="landings">
        <button id="btn" onClick={main}>
          Main
        </button>
        <button id="btn" onClick={services}>
          Services
        </button>
        <button onClick={recent} id="btn">
          Portfolio
        </button>
        <button id="btn">Services</button>
      </div>
      <button>Get started</button>
    </header>
  );
}

export default Header;
