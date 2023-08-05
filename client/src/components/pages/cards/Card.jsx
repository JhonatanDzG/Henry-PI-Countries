import { connect } from 'react-redux';
import '../../css/cards/card.css'
import { Link } from "react-router-dom";
import { getCountry } from '../../../store/actions';
import { ROUTES } from '../../../constants/routes.constant';

function Card({country, getCountry}) {
  
  const {id, name, flagImage, continent, population} = country

  return (
    <div className="card">
      
        <img src={flagImage}/>
    <div className="info">
      <Link to={ROUTES.detail}>
      <h3 onClick={async ()=> await getCountry(id)}>{name}</h3>
      </Link>
      <h4>{continent}</h4>
      <h4>{population}</h4>

    </div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {

return{
  getCountry: async (id) => dispatch(await getCountry(id))
}

}

export default connect(null, mapDispatchToProps)(Card)