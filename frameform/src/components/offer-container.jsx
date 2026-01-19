import "../style/offer.css";

function Offer(props) {
  return (
    <>
      <div className="offer-box">
        <div className="price">
          <div className="colorprice">{props.price}</div>
        </div>
        <div className="icon-box">
          <img src={props.imge}></img>
        </div>
        <h4>{props.name}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}
export default Offer;
