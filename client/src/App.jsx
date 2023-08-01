import Nav from "./components/nav/Nav.jsx";

import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
        <Outlet />
    </div>
  );
}

export default App;

/*
Outlet es fundamental para el enrutamiento en aplicaciones de React utilizando React Router, ya que es el encargado de mostrar el contenido asociado a cada ruta definida en tu aplicación.
*/
