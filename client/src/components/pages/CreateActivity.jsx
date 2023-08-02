import "../css/createActivity.css";
import { useState, useEffect } from "react";
import { createActivity } from "../../store/actions";
import { connect } from "react-redux";
import axios from "axios";

function CreateActivityComponent({ createActivity }) {
  const [select, setSelect] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryIds: "",
  });

  useEffect(() => {
    async function getSelectOptions() {

      const { data: countries } = await axios.get(
        `${import.meta.env.VITE_APP_URL}get-select-options`
      );
      setSelect(countries);
    }

    getSelectOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    await createActivity(formData);
  };

  const seasons = ['spring', 'summer', 'autumn', 'winter'];

  const capitalize = (word) => {
    const first = word[0].toUpperCase();
    const res = word.slice(1).toLowerCase();
    return first + res;
  };

  return (
    <div className="createActivity-container">
      <div className="CreateActivity-form-container">
        <form
          className="CreateActivity-form"
          onSubmit={handleSubmit}
          method="post"
        >
          <h1 className="title-form">Activity Creation</h1>
          <div className="text-inputs-container"></div>

          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Basketball"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="Difficulty">Difficulty(1-15):</label>
          <input
            type="number"
            placeholder="3"
            name="difficulty"
            value={formData.difficulty}
            min="1"
            max="15"
            onChange={handleChange}
            required
          />

          <label htmlFor="Duration">Duration(hours):</label>
          <input
            type="number"
            placeholder="4"
            name="duration"
            min="0"
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <label htmlFor="Season">Season:</label>
          <select name="season" onChange={handleChange} defaultValue={formData.season} required>
            {seasons.map((s)=><option key={s} value={s}>{capitalize(s)}</option>)}
          </select>

          <br />
          <label htmlFor="countryIds">Country:</label>
          <select name="countryIds" onChange={handleChange} defaultValue={formData.countryIds} required>
            {select.length
              ? select.map((country) => {
                  return <option key={country.id} value={country.id}>
                    {country.name}
                  </option>;
                })
              : ""}
          </select>

          <br />

          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    createActivity: async (activity) =>
      dispatch(await createActivity(activity)),
  };
};

export default connect(null, mapDispatchToProps)(CreateActivityComponent);
