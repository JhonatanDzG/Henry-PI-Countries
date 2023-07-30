import React from "react";
import '../css/createActivity.css'

export default function CreateActivity() {
  return (
<div className="createActivity-container">

    <div className="CreateActivity-form-container">

    <form className= 'CreateActivity-form' action="/submit" method="post">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="edad">Edad:</label>
      <input type="number" id="edad" name="edad" required />

      <label htmlFor="telefono">Teléfono:</label>
      <input type="tel" id="telefono" name="telefono" required />

      <input type="submit" value="Enviar" />
    </form>

    </div>
</div>

  );
}






