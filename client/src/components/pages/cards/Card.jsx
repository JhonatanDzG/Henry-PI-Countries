import '../../css/cards/card.css'
import { Link } from "react-router-dom";

export default function Card({country}) {
  
  const {id, name, flagImage, continent, capital, subregion, area, population} = country

  return (
    <div className="card">
      {/* <button className = "CloseCard" onClick={() => onClose(id)}>X</button> */}
      
      <img src={flagImage}/>
      <Link to={`/detail/${id}`}>
      <h2>{name}</h2>
      </Link>
      <h2>{continent}</h2>
      <h2>{capital}</h2> 
      <h2>{subregion}</h2>
      <h2>{area}</h2>
      <h2>{population}</h2>
    </div>
  );
}
