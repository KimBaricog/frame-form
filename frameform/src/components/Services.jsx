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
            by industry s experts with years of experience.
          </p>
        </div>
        <div className="offer-container">
          <Offer
            price="35 - 70₱"
            text="Clean, professional, and visually engaging slides."
            imge="https://res.cloudinary.com/dgwmeeszw/image/upload/v1769865307/powerpoint_qnd8t7.jpg"
            name="Presentation Design"
          ></Offer>
          <Offer
            price="25 - 35₱"
            text="Flyers, Pamphlet, Resumes, and many more."
            imge="https://res.cloudinary.com/dgwmeeszw/image/upload/v1769865312/canva_xiujma.png"
            name="Canva editing"
          ></Offer>
          <Offer
            price="4 - 5₱"
            text="High-quality printing for all your needs-fast, affordable, and crisp results every time"
            imge="https://res.cloudinary.com/dgwmeeszw/image/upload/v1769865308/printing_knfp97.jpg"
            name="Printing"
          ></Offer>
          <Offer
            price="10 - 20₱"
            text="Capture memories instantly with our vibrant and fun Polaroid prints"
            imge="https://res.cloudinary.com/dgwmeeszw/image/upload/v1769865308/polaroid_gdo3v6.png"
            name="Polaroid"
          ></Offer>
          <Offer
            price="30 - 50₱"
            text="Accurate and fast encoding for research papers, documents."
            imge="https://res.cloudinary.com/dgwmeeszw/image/upload/v1769865312/encoding_sv2iws.jpg"
            name="Encoding"
          ></Offer>
        </div>
      </div>
    </>
  );
}
export default Services;
