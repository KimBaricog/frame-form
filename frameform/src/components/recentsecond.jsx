import "../style/services.css";
import "../style/recent.css";
import { useRef, useEffect } from "react";
import Example from "./example.jsx";
import Image1 from "../assets/inter.png";
import Image2 from "../assets/halohalo.jpg";
import Image3 from "../assets/harry.png";
import Image4 from "../assets/polar.png";
import Image5 from "../assets/funel.png";

function Recent() {
  const scrollRef = useRef(null);
  const itemWidth = 285; // width of one item

  useEffect(() => {
    const container = scrollRef.current;

    // Clone children for seamless looping
    const children = Array.from(container.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      container.appendChild(clone);
    });

    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex++;
      // Scroll by one item width
      container.scrollTo({
        left: scrollIndex * itemWidth,
        behavior: "smooth",
      });

      // Reset when we reach the end of original items
      if (scrollIndex >= children.length) {
        // Slight delay to allow smooth scroll to finish
        setTimeout(() => {
          container.scrollLeft = 0;
          scrollIndex = 0;
        }, 500); // adjust delay if needed
      }
    }, 1000); // scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="recent" className="text-recent">
      <section className="recent">
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
          <Example
            img={Image5}
            name="Canva editing"
            link="../assets/funel.png"
            text="Download"
          />
          <Example img={Image4} name="Polaroid" text="Unable to download" />
        </div>
      </section>
    </div>
  );
}

export default Recent;
