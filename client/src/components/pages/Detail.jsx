import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clearCountry } from "../../store/actions";
import { connect } from "react-redux";
import { ROUTES } from "../../constants/routes.constant";
import "../css/detail.css";

function Detail({ country, clear }) {
  const [object, setObject] = useState({});
  console.log("country", country);
  useEffect(() => {
    setObject(() => country);
  }, [country]);

  const {
    id,
    name,
    flagImage,
    continent,
    capital,
    subregion,
    area,
    population,
  } = country;

  return (
    <div className="detail-container">
        <div className="info-detail">
          <img className="detail-flag" alt={name} src={flagImage} />
          <section className="field">
            <h1 className="title">{name}</h1>
            <h4>{`ID: ${ id}`}</h4>
            <h4>{`Continent: ${ continent}`}</h4>
            <h4>{`Capital: ${ capital}`}</h4>
            <h4>{`Subregion: ${ subregion}`}</h4>
            <h4>{`Area: ${ area}`}</h4>
            <h4>{`Population: ${ population}`}</h4>
          </section>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => dispatch(clearCountry()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
{
  /* {-  ID (Código de tres letras).
-  Nombre.
-  Imagen de la bandera.
-  Continente.
-  Capital.
-  Subregión (si tiene).
-  Área (si tiene).
-  Población.} */
}
