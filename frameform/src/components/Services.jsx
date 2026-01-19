import "../style/services.css";
import Offer from "./offer-container.jsx";
import Ppt from "../assets/powerpoint.jpg";
import Canva from "../assets/canva.png";
import Printing from "../assets/printing.jpg";
import Polaroid from "../assets/polaroid.png";
import Encoding from "../assets/encoding.jpg";
function Services() {
  return (
    <>
      <div id="services" className="services">
        <div className="text-services">
          <h2>What we offer</h2>
          <p>
            Comprehensive solutions tailored to your business needs, delivered
            by industry
            <br /> experts with years of experience.
          </p>
        </div>
        <div className="offer-container">
          <Offer
            price="35 - 70₱"
            text="Clean, professional, and visually engaging slides."
            imge={Ppt}
            name="Presentation Design"
          ></Offer>
          <Offer
            price="25 - 35₱"
            text="Flyers, Pamphlet, Resumes, and many more."
            imge={Canva}
            name="Canva editing"
          ></Offer>
          <Offer
            price="4 - 5₱"
            text="High-quality printing for all your needs-fast, affordable, and crisp results every time"
            imge={Printing}
            name="Printing"
          ></Offer>
          <Offer
            price="10 - 20₱"
            text="Capture memories instantly with our vibrant and fun Polaroid prints"
            imge={Polaroid}
            name="Polaroid"
          ></Offer>
          <Offer
            price="30 - 50₱"
            text="Accurate and fast encoding for research papers, documents."
            imge={Encoding}
            name="Encoding"
          ></Offer>
        </div>
      </div>
    </>
  );
}
export default Services;
