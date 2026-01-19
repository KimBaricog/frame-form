import "../style/services.css";
import "../style/recent.css";
import { useRef } from "react";
import Example from "./example.jsx";
import Image1 from "../assets/inter.png";
import Image2 from "../assets/halohalo.jpg";
import Image3 from "../assets/harry.png";
import Image4 from "../assets/polar.png";

function Recent() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div id="recent" className="text-recent">
      <div className="text-services">
        <h2>Our Recent Works</h2>
        <p>
          Comprehensive solutions tailored to your business needs, delivered by
          industry
          <br /> experts with years of experience.
        </p>
      </div>

      <section className="recent">
        <button className="scroll-btn left" onClick={scrollLeft}>
          ◀
        </button>

        <div className="recent-container" ref={scrollRef}>
          <Example
            img={Image1}
            name="Presentation Design"
            link="../assets/ppt/intemolecular.pptx"
            text="Download"
          />
          <Example
            img={Image2}
            name="Canva editing"
            link="../assets/halohalo.jpg"
            text="Download"
          />
          <Example
            img={Image3}
            name="Canva editing"
            link="../assets/harry.png"
            text="Download"
          />
          <Example img={Image4} name="Polaroid" text="Unable to download" />
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          ▶
        </button>
      </section>
    </div>
  );
}

export default Recent;
