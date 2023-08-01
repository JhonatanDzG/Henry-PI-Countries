import "../css/landingPage.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ROUTES } from "../../constants/routes.constant";

export default function LandingPage() {
  const url = import.meta.env.VITE_APP_URL;
  useEffect(() => {
    async function setApiCountries() {
      await axios.get(url);
    }
    setApiCountries();
  }, []);

  return (
    <div className="landingPage-container">
      <h1>Discover the World in Data</h1>
      <Link to={ROUTES.home}>
        <button className="button">Countries Information</button>
      </Link>
    </div>
  );
}
