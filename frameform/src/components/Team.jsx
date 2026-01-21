import "../style/team.css";
import Tbox from "./teambox.jsx";
import Tanyog from "../assets/tanyog.jpg";
import Rolly from "../assets/rollyc.jpg";
import Romy from "../assets/romy.jpg";
import Kim from "../assets/kim.png";
import Sagod from "../assets/sagod.jpg";
import Pasaporte from "../assets/pasaporte.jpg";
import { FaGithub } from "react-icons/fa";

function Team() {
  return (
    <>
      <div id="team" className="team-container">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <Tbox
            link="https://www.facebook.com/jonathan.balan.tanyog.jr"
            rank="Project Manager"
            name="Jonathan Tanyog"
            image={Tanyog}
            info="Handles planning, deadlines, and client communication."
          />
          <Tbox
            link="https://www.facebook.com/romsciation"
            rank="Assistant Manager"
            name="Romy Suayon"
            image={Romy}
            info="Supports client communication."
          />
          <Tbox
            link="https://www.facebook.com/PCCDCANGCO"
            rank="Finance Officer"
            name="Rolly Cangco Jr."
            image={Rolly}
            info="Manages pricing, payments, and social media."
          />
          <Tbox
            github="https://github.com/KimBaricog"
            socialIcon={<FaGithub color="#000" size={30} />}
            link="https://www.facebook.com/kim.baricog.2025/"
            rank="Lead developer & Designer"
            name="Kim Baricog"
            image={Kim}
            info="Designs and develops presentations, graphics, and visual content for all projects."
          />
          <Tbox
            link="https://www.facebook.com/timoteo.sagod.2025"
            rank="Security Officer"
            name="Temoteo Sag-od"
            image={Sagod}
            info="Ensures safety and security while supporting client communication."
          />
          <Tbox
            link="https://www.facebook.com/daniel.pasaporte.2024"
            rank="Marketing & Advertising Manager"
            name="Daniel Pasaporte"
            image={Pasaporte}
            info="Advertising campaigns and supports client communication."
          />
        </div>
      </div>
    </>
  );
}
export default Team;
