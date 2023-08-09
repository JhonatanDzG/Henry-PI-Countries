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

  const emptyFormData = {
    order: "",
    continent: "",
    activity: "",
  };

  const [formData, setFormData] = useState(emptyFormData);

  useEffect(() => {
    const url = import.meta.env.VITE_APP_URL;
    async function getSelectables() {
      const { data: continents } = await axios.get(
        `${url}get-select-options?field=continents`
      );
      const { data: activities } = await axios.get(
        `${url}get-select-options?field=activities`
      );
      setSelects((data) => ({ ...data, continents, activities }));
    }
    getSelectables();
  }, []);

  function handleFilterBy(event) {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));

    filterBy(name, value);
  }

  function handlerClear() {
    filterBy("order", "");
    filterBy("continent", "");
    filterBy("activity", "");
    setFormData(emptyFormData);
  }

  return (
    <div className="filter">
      <select name="order" onChange={handleFilterBy} value={formData.order}>
        <option value={""}>Order</option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
        <option value="PO-DESC">Population ↾</option>
        <option value="PO-ASC">Population ⇂</option>
      </select>
      <select
        name="continent"
        onChange={handleFilterBy}
        value={formData.continent}
      >
        <option value={""}>Filter by continents</option>
        {selects?.continents?.length
          ? selects.continents.map((c) => (
              <option key={c.continent} value={c.continent}>
                {c.continent}
              </option>
            ))
          : ""}
      </select>
      <select
        name="activity"
        onChange={handleFilterBy}
        value={formData.activity}
      >
        <option value={""}>Filter By Activities</option>
        {selects?.activities?.length
          ? selects.activities.map((c) => (
              <option key={c.name} value={c.id}>
                {c.name}
              </option>
            ))
          : ""}
      </select>
      <button className="reset-button" onClick={handlerClear}>
        resetFilters
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    filterBy: (key, value) => dispatch(filterBy(key, value)),
  };
}

export default connect(null, mapDispatchToProps)(FiltersComponent);
