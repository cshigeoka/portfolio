import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <div className="Card-rectangle">
        <div className="Card-title">{props.title}</div>
        <div className="Card-tags">{props.tags}</div>
        <div className="Card-image"
        style={{ backgroundImage: `url(${props.bgImg})`}}></div>
      </div>
    </div>
  );
}

export default Card;