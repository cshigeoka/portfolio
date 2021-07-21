import './Card.css';

function Card(props) {
  if (props.position === "top") {
    return (
      <div className="Card top">
        <div className="Card-rectangle">
          <div className="Card-title">{props.title}</div>
          <div className="Card-tags">{props.tags}</div>
          <div className="Card-image"
            style={{ backgroundImage: `url(${props.bgImg})` }}></div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="Card bottom">
        <div className="Card-rectangle">
          <div className="Card-title">{props.title}</div>
          <div className="Card-tags">{props.tags}</div>
          <div className="Card-image"
            style={{ backgroundImage: `url(${props.bgImg})` }}></div>
        </div>
      </div>
    );
  }
}

export default Card;