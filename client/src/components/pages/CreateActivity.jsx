import "../css/createActivity.css";
import { useState, useEffect } from "react";
import { createActivity } from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constant";
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
      setFormData((data) => ({
        ...data,
        countryIds: countries?.[0]?.id,
        season: seasons[0],
      }));
    }

    getSelectOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.trim() !== "") {
      const onlyLetters = /^[A-Za-z\s]+$/;
      const maxLength = 20;

      if (!onlyLetters.test(value)) {
        console.log("!onlyLetters");
        return window.alert(
          "The input does not allow special characters or numbers"
        );
      } else if (value.length > maxLength) {
        console.log("Exceeded maximum length");
        return window.alert(
          `The input must not exceed ${maxLength} characters`
        );
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createActivity(formData);
    window.location.href = ROUTES.home;
  };

  const seasons = ["spring", "summer", "autumn", "winter"];

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
          <select
            name="season"
            onChange={handleChange}
            defaultValue={formData.season}
            required
          >
            {seasons.map((s) => (
              <option key={s} value={s}>
                {capitalize(s)}
              </option>
            ))}
          </select>

          <br />
          <label htmlFor="countryIds">Country:</label>
          <select
            name="countryIds"
            onChange={handleChange}
            defaultValue={formData.countryIds}
            required
          >
            {select.length
              ? select.map((country) => {
                  return (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  );
                })
              : ""}
          </select>

          <br />
          <button className="submit" type="submit">
            Send
          </button>
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
