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
    // Aquí puedes acceder a los valores ingresados por el usuario en formData
    console.log(formData);
    // Aquí puedes enviar los datos al servidor o hacer cualquier otra acción
  };

  return (
    <div className="createActivity-container">
      <div className="CreateActivity-form-container">
        <form
          className="CreateActivity-form"
          onSubmit={handleSubmit}
          method="post"
        >
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

          <label htmlFor="Difficulty">Difficulty:</label>
          <input type="number" placeholder="3" name="difficulty" value={formData.difficulty} onChange={handleChange} required />

          <label htmlFor="Duration">Duration:</label>
          <input type="number" placeholder="4" name="duration" value={formData.duration} onChange={handleChange} required />

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
          <input type="submit" value="Send" onSubmit={console.log(formData)}/>
        </form>
      </div>
    </div>

  );
}

/*
{
  "name": "Senderismo en montañas",
  "difficulty": 4,
  "duration": 3,
  "season": "Primavera",
  "countryIds": "KEN"
}
*/
