import "../style/section.css";
import Image from "../assets/laptopbg.png";

function Sectionone() {
  return (
    <>
      <div id="main" className="section-container">
        <div className="text">
          <h2>
            Transforming Ideas Into <span>Success</span>
            <p>
              We help students create clean, modern, and powerful presentations
              that impress teachers and audiences.
            </p>
          </h2>
          <div className="buttons">
            <button>
              Get started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right ml-2"
                data-fg-eh6d16="1.79:1.3432:/src/app/components/Hero.tsx:31:17:1364:41:e:ArrowRight::::::B1Xc"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button id="learnmore">Learn more</button>
          </div>

          <div className="record">
            <h4>
              20+<br></br>
              <span>
                <p id="record-text">Projects Completed</p>
              </span>
            </h4>
            <h4>
              98%<br></br>
              <span>
                <p id="record-text">Client Satisfaction</p>
              </span>
            </h4>
            <h4>
              6<br></br>
              <span>
                <p id="record-text">Team Members</p>
              </span>
            </h4>
          </div>
        </div>
        <div className="img-container">
          <img src={Image}></img>
        </div>
      </div>
    </>
  );
}
export default Sectionone;
