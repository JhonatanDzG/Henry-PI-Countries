import React from "react";
import { connect } from "react-redux";
import "./filters.css";
import { filterBy, getCountries } from "../../store/actions";

function FiltersComponent({}) {
  return (
    <div className="filters">
      <button>A-Z</button>
      <select name="" id="">
        <option value=""></option>
      </select>
      <select name="" id="">
        <option value=""></option>
      </select>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    filterBy: (key, value) => dispatch(filterBy(key, value)),
    getCountries: async (filters) => dispatch(await getCountries(filters)),
  };
}

export default connect(null, mapDispatchToProps)(FiltersComponent);
