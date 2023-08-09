import "../css/createActivity.css";
import { useState, useEffect } from "react";
import { createActivity, notify } from "../../store/actions";
import { connect } from "react-redux";
import { ROUTES } from "../../constants/routes.constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateActivityComponent({ createActivity, notify }) {
  const [select, setSelect] = useState([]);
  const [custom, setCustom] = useState(true);
  const [activities, setActivities] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryIds: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
  });

  useEffect(() => {
    async function getSelectOptions() {
      const { data: countries } = await axios.get(
        `${import.meta.env.VITE_APP_URL}get-select-options`
      );
      const { data: activities } = await axios.get(
        `${import.meta.env.VITE_APP_URL}activities?selectOnly=true`
      );
      if (activities.length) {
        setCustom(false);
      }

      setActivities([...activities, { id: "custom", name: "Custom" }]);
      setSelect(countries);
      setFormData((data) => ({
        ...data,
        countryIds: countries?.[0]?.id,
        season: seasons[0],
        name: activities?.[0]?.id,
      }));
    }

    getSelectOptions();
  }, []);

  const preHandleChange = (e) => {
    const { value } = e.target;
    if (value === "custom") {
      setFormData((data) => ({
        ...data,
        name: "",
      }));
      return setCustom(true);
    } else {
      return setCustom(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    handlerErrors(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createActivity(formData);

      navigate(ROUTES.home);
      notify({
        title: "Activity Created",
        content: "Succes",
        type: "success",
      });
    } catch (error) {
      notify({
        title: "error:>> " + error,
        content: "Error",
        type: "error",
      });
    }
  };

  const seasons = ["spring", "summer", "autumn", "winter"];

  const capitalize = (word) => {
    const first = word[0].toUpperCase();
    const res = word.slice(1).toLowerCase();
    return first + res;
  };

  useEffect(() => {
    setHasErrors(Object.values(formErrors).some((error) => !!error.length));
  }, [formData]);

  function handlerErrors(name, value) {
    const onlyLetters = /^[A-Za-z\s]+$/;
    const rangeDifficulty = [1, 15];
    const rangeDuration = [1, 12];

    switch (name) {
      case "name":
        if (!value) {
          return setFormErrors((errors) => ({
            ...errors,
            name: "Name is required",
          }));
        }

        if (!onlyLetters.test(value)) {
          return setFormErrors((errors) => ({
            ...errors,
            name: "Name must be ONLY letters",
          }));
        }
        return setFormErrors((errors) => ({ ...errors, name: "" }));

      case "difficulty":
        if (value < rangeDifficulty[0] || value > rangeDifficulty[1]) {
          return setFormErrors((errors) => ({
            ...errors,
            difficulty: "Range: 1-15",
          }));
        }
        return setFormErrors((errors) => ({ ...errors, difficulty: "" }));

      case "duration":
        if (value < rangeDuration[0] || value > rangeDuration[1]) {
          return setFormErrors((errors) => ({
            ...errors,
            duration: "Range: 1-12 horas",
          }));
        }
        return setFormErrors((errors) => ({ ...errors, duration: "" }));
    }
  }

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
          <select name="name" onChange={preHandleChange} required>
            {activities.length &&
              activities.map((activity) => {
                return (
                  <option key={activity.id} value={activity.id}>
                    {activity.name}
                  </option>
                );
              })}
          </select>

          {custom ? (
            <>
              <input
                type="text"
                placeholder="Basketball"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="error">{formErrors.name}</span>
            </>
          ) : (
            ""
          )}

          {custom ? (
            <>
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
              <span className="error">{formErrors.difficulty}</span>
            </>
          ) : (
            ""
          )}

          {custom ? (
            <>
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
              <span className="error">{formErrors.duration}</span>
            </>
          ) : (
            ""
          )}

          {custom ? (
            <>
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
            </>
          ) : (
            ""
          )}

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
          <button
            className="submit"
            type="submit"
            disabled={hasErrors || !formData.name}
          >
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

    notify: (message) => dispatch(notify(message)),
  };
};

export default connect(null, mapDispatchToProps)(CreateActivityComponent);
