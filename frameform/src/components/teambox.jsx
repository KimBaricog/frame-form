import "../style/teambox.css";

import { FaFacebook, FaGithub } from "react-icons/fa";

function Teambox(props) {
  return (
    <>
      <div className="team-box">
        <div className="img-con">
          <img src={props.image}></img>
          <div className="info-container">
            <div className="socials">
              <div className="site">
                <a href={props.link}>
                  <FaFacebook color="#1877f2" size={30}></FaFacebook>
                </a>
                <a href={props.github}>{props.socialIcon}</a>
              </div>

              <h6>{props.name}</h6>
              <h6 id="rank">{props.rank}</h6>
              <p>{props.info}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Teambox;
