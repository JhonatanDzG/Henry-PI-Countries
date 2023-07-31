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
