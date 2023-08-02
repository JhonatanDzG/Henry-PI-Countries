import React, { useEffect, useState } from "react";
import { clearCountry } from "../../store/actions";
import { connect } from "react-redux";
import "../css/detail.css";

function Detail({ country }) {


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
          <h4>{`ID: ${id}`}</h4>
          <h4>{`Continent: ${continent}`}</h4>
          <h4>{`Capital: ${capital}`}</h4>
          <h4>{`Subregion: ${subregion}`}</h4>
          <h4>{`Area: ${area}`}</h4>
          <h4>{`Population: ${population}`}</h4>
          <div className="activities-container">
            {country.Activities?.length ? (
              <h1 className="title-activity">Activities: </h1>
            ) : (
              ""
            )}
            {country.Activities
              ? country.Activities?.map((a) => {
                  return (
                    <div key={a.id}>
                      <h2>{a.name}</h2>
                      <h4>{`Difficulty: ${a.difficulty}`}</h4>
                      <h4>{`Duration: ${a.duration}`}</h4>
                      <h4>{`Season: ${a.season}`}</h4>
                      <br/>
                    </div>
                  );
                })
              : "nada"}
          </div>
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
