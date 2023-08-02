import "./filters.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterBy } from "../../store/actions";
import axios from "axios";

function FiltersComponent({ filterBy }) {
  const url = import.meta.env.VITE_APP_URL;

  const [selects, setSelects] = useState(
    {
      activities: [],
      continents: [],
    },
    []
  );

  useEffect(() => {
    async function getSelectables() {
      const { data: continents } = await axios.get(
        `${url}get-select-options?field=continents`
      );
      const { data: activities } = await axios.get(
        `${url}get-select-options?field=activities`
      );

      console.log("selectActivities >>", continents, activities);

      setSelects((data) => ({
        ...data,
        continents,
        activities,
      }));
    }

    getSelectables();
  }, []);

  function handlerFilterBy(event) {
    const { name, value } = event.target;
    filterBy(name, value);
  }

  return (
    <div className="filters">

      <select name="order" onChange={handlerFilterBy}>
        <option select disabled >Order</option> 
        <option value="ASC">
          A-Z
        </option>
        <option value="DESC">Z-A</option>
      </select>
      <select name="continent" onChange={handlerFilterBy}>
      <option select disabled >Order</option> 
        {selects?.continents?.length
          ? selects.continents.map((c) => {
              return (
                <option key={c.continent} value={c.continent}>
                  {c.continent}
                </option>
              );
            })
          : ""}
      </select>
      <select name="activity" onChange={handlerFilterBy}>
      <option select disabled >Filter by Activity</option> 
        {selects?.activity?.length
          ? selects.activity.map((c) => {
              return (
                <option key={c.name} value={c.id}>
                  {c.name}
                </option>
              );
            })
          : ""}
      </select>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    filterBy: (key, value) => dispatch(filterBy(key, value)),
  };
}

export default connect(null, mapDispatchToProps)(FiltersComponent);
