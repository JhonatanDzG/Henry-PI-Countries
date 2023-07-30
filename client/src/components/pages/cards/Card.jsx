import '../../css/cards/card.css'
import { Link } from "react-router-dom";

export default function Card({country}) {
  
  const {id, name, flagImage, continent} = country

  return (
    <div className="card">
      
      <img src={flagImage}/>
    <div className="info">
      <Link to={`/detail/${id}`}>
      <h3>{name}</h3>
      </Link>
      <h4>{continent}</h4>
    </div>

    </div>
  );
}
