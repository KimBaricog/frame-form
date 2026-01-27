import "../style/example.css";

function Example(props) {
  return (
    <>
      <div className="example-box">
        <div className="icon-example">
          <img src={props.img}></img>
        </div>
        <h4>{props.name}</h4>
        <p>Download to view</p>
        <a download={props.link}>
          <button>{props.text}</button>
        </a>
      </div>
    </>
  );
}
export default Example;
