import React from "react";
import "../css/createActivity.css";
import { useState } from "react";

export default function CreateActivity() {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryIds: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
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
            placeholder="Senderismo en montañas"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="Difficulty">Difficulty/1-15:</label>
          <input type="number" placeholder="3" name="difficulty" value={formData.difficulty} min="1" max="15" onChange={handleChange} required />

          <label htmlFor="Duration">Duration/hours:</label>
          <input type="number" placeholder="4" name="duration" min="0" value={formData.duration} onChange={handleChange} required />

          <label htmlFor="Season">Season:</label>
          <input type="text" placeholder="Primavera" name="season" value={formData.season} onChange={handleChange} required />

          <label htmlFor="countryIds">countryIds:</label>
          <input
            type=""
            placeholder="COL"
            name="countryIds"
            onChange={handleChange}
            required
          />

          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>

  );
}


