import React, { useEffect } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import { getCountries } from "../../store/actions";
import Card from "./cards/Card";

function Home({ countries, getCountries }) {
  useEffect(() => {
    async function dispatchCountries() {
      return await getCountries();
    }
    dispatchCountries();
  }, []);

  return (
    <div className="homePage-container">
      <div className="cards-container">
          {countries
            ? countries.map((c) => {
                return  <Card key={c.id} country={c}/>;
              })
            : "loading..."}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: async () => dispatch(await getCountries()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
