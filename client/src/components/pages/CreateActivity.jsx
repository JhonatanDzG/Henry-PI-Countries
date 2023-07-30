import React from "react";
import "../css/createActivity.css";

export default function CreateActivity() {
  return (
    <div className="createActivity-container">
      <div className="CreateActivity-form-container">
        <form className="CreateActivity-form" action="/submit" method="post">
          <div className="text-inputs-container"></div>

          <label htmlFor="Name">Name:</label>
          <input type="text"  placeholder = "Senderismo en montañas" name="name" required />

          <label htmlFor="Difficulty">Difficulty:</label>
          <input type="number" placeholder = "3" name="difficulty" required />

          <label htmlFor="Duration">Duration:</label>
          <input type="number" placeholder = "4" name="duration" required />

          <label htmlFor="Season">Season:</label>
          <input type="text" placeholder = "Primavera" name="season" required />

          <label htmlFor="countryIds">countryIds:</label>
          <input type="text" placeholder = "COL" name="countryIds" required />
          <br />
          <input type="submit" value="Send" />
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
