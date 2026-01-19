import Sectionone from "./sectionone.jsx";
import Services from "./Services.jsx";
import Recent from "./recent.jsx";
import "../style/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <Sectionone />
        <Services />
        <Recent />
      </div>
    </div>
  );
}

export default Hero;
