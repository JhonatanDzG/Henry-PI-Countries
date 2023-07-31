import React, { useEffect } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import { getCountries } from "../../store/actions";
import Card from "./cards/Card";
import Pagination from "../organisms/Pagination";
import NoResults from "./cards/NoResults";

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
        {countries.length
          ? countries.map((c) => {
              return <Card key={c.id} country={c} />;
            })
          : <NoResults/>}
      </div>
      <div className="pagination">
      <Pagination />
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
    getCountries: async (page) => dispatch(await getCountries(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
