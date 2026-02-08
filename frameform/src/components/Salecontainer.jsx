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
import Design from "../assets/des1.png";
import Design1 from "../assets/design1.png";
import Design2 from "../assets/design2.png";
import { useRef, useState } from "react";

function Salecontainer() {
  const defref = useRef(null);
  const btn = useRef(null);
  const [text, changetext] = useState("view more");

  const view = () => {
    if (defref.current.style.display === "flex") {
      defref.current.style.display = "none";
      changetext("view more");
    } else if (defref.current.style.display === "none") {
      defref.current.style.display = "flex";
      changetext("view less");
    }
  };

  return (
    <>
      <div id="salecont" className="sale-container">
        <Sale_box />
        <div className="sale-offer">
          <img src="https://res.cloudinary.com/dgwmeeszw/image/upload/v1770535184/Rilakkuma-removebg-preview_qczli6.png"></img>
          <img src="https://res.cloudinary.com/dgwmeeszw/image/upload/v1770535184/Polaroid-removebg-preview_o0un75.png"></img>
          <img src="https://res.cloudinary.com/dgwmeeszw/image/upload/v1770535184/Cute_Polaroid_PNG_Picture__Cute_Polaroid_Star_And_Moon_Design_Tamplate__Star_Clipart__Moon_Clipart__Polaroid_Clipart_PNG_Image_For_Free_Download-removebg-preview_tyqpk3.png"></img>
        </div>
        <div ref={defref} style={{ display: "none" }} className="sale-offer">
          <img src="https://res.cloudinary.com/dgwmeeszw/image/upload/v1770535267/ChatGPT_Image_Feb_7_2026_08_27_32_PM_iznqb3.png"></img>
          <img src="https://res.cloudinary.com/dgwmeeszw/image/upload/v1770535325/download__6_-removebg-preview_b5vads.png"></img>
          <img src="https://res.cloudinary.com/dgwmeeszw/image/upload/v1770535266/Screenshot_2026-02-07_195202-Picsart-AiImageEnhancer-removebg-preview_nhdlrn.png"></img>
        </div>
        <button ref={btn} onClick={view}>
          {text}
        </button>
      </div>
      {/*   <Snowfall
        color="white"
        snowflakeCount={100} // number of snowflakes
        radius={[1, 5]} // min & max size
        speed={[0.5, 2]} // min & max falling speed
      />*/}
    </>
  );
}
export default Salecontainer;
