import "../style/services.css";
import Offer from "./offer-container.jsx";

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
          <Offer name="Presentation Design"></Offer>
          <Offer name="Canva editing"></Offer>
          <Offer name="Printing"></Offer>
        </div>
      </div>
    </>
  );
}
export default Services;
