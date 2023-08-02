import { connect } from "react-redux";
import "./filters.css";
import { filterBy } from "../../store/actions";
import { useEffect, useState } from "react";
import axios from "axios";

function FiltersComponent({ filterBy }) {
  const [selects, setSelects] = useState({
    activities: [],
    continents: [],
  });

  useEffect(() => {
    const url = import.meta.env.VITE_APP_URL
    async function getSelectables() {
      const { data: continents } = await axios.get(
        `${url}get-select-options?field=continents`
      );
      const { data: activities } = await axios.get(
        `${url}get-select-options?field=activities`
      );
      setSelects((data) => ({ ...data, continents, activities }));
      console.log("selectActivities :>> ", continents);
    }
    getSelectables();
  }, []);

  function handleFilterBy(event) {
    const { name, value } = event.target;
    filterBy(name, value);
  }
  return (
    <div className="filter">
      <select name="order" onChange={handleFilterBy}>
        <option selected disabled>
          Order
        </option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>
      <select name="continent" onChange={handleFilterBy}>
        <option selected disabled>
          Filter by continents
        </option>
        {selects?.continents?.length
          ? selects.continents.map((c) => (
              <option key={c.continent} value={c.continent}>
                {c.continent}
              </option>
            ))
          : ""}
      </select>
      <select name="activity" onChange={handleFilterBy}>
        <option selected disabled>
          Filter By Activities
        </option>
        {selects?.activities?.length
          ? selects.activities.map((c) => (
              <option key={c.name} value={c.id}>
                {c.name}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    filterBy:  (key, value) => dispatch( filterBy(key, value)),
  };
}

export default connect(null, mapDispatchToProps)(FiltersComponent);
