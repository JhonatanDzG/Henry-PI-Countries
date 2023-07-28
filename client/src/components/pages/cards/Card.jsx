import '../../css/cards/card.css'
import { Link } from "react-router-dom";

export default function Card({id, name, flagImage, continent, capital, subregion, area, population }) {
  return (
    <div className="Card">
      <button className = "CloseCard" onClick={() => onClose(id)}>X</button>
      
      <Link to={`/detail/${id}`}>
      <h2>{name}</h2>
      </Link>
      <h2>{flagImage}</h2>
      <h2>{continent}</h2>
      <h2>{capital}</h2> 
      <h2>{subregion}</h2>
      <h2>{area}</h2>
      <h2>{population}</h2>
    </div>
  );
}
