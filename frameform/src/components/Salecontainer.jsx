import React from "react"; // needed for JSX
import Sale_box from "./Salebox.jsx";
import "../style/salecontainer.css";
import Sale_offer from "./Saleoffer.jsx";
import Ppt from "../assets/powerpoint.jpg";
import Canva from "../assets/canva.png";
import Printing from "../assets/printing.jpg";
import Polaroid from "../assets/polaroid.png";
import Encoding from "../assets/encoding.jpg";
import Snowfall from "react-snowfall";

function Salecontainer() {
  return (
    <>
      <div id="salecont" className="sale-container">
        <Sale_box />
        <div className="sale-offer">
          <Sale_offer img={Ppt} text="Presentation Design" />
          <Sale_offer img={Canva} text="Canva Design" />
          <Sale_offer img={Encoding} text="Encoding" />
        </div>
      </div>
      <Snowfall
        color="white"
        snowflakeCount={100} // number of snowflakes
        radius={[1, 5]} // min & max size
        speed={[0.5, 2]} // min & max falling speed
      />
    </>
  );
}
export default Salecontainer;
