import Sectionone from "./sectionone.jsx";
import Services from "./Services.jsx";
import Recent from "./recent.jsx";
import Sale from "./Salecontainer.jsx";
import Ai from "./Aichat.jsx";

import Team from "./Team.jsx";
import Footer from "./Footer.jsx";
import "../style/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <Sectionone />
        <Ai />
        <Services />
        <Sale />

        <Recent />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
