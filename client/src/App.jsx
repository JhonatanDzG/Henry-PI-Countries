import LandingPage from "./components/pages/LandingPage.jsx";
import Home from "./components/pages/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import CreateActivity from "./components/pages/CreateActivity.jsx";

import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const onSearchById = (countryId) => {
    window.alert(countryId);
  };


  return (
    <div className="App">
      {window.location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path= "createActivity" element={ < CreateActivity />}/>
      </Routes>
    </div>
  );
}

export default App;
