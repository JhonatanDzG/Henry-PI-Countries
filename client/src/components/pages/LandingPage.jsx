import React, { useEffect } from "react";
import "../css/landingPage.css"
import { Link } from 'react-router-dom';
import {ROUTES} from "../../constants/routes.constant"
import axios from "axios";


export default function LandingPage() {

  useEffect(() => {
    async function setApiCountries(){
      await axios.get(import.meta.env.VITE_APP_URL)
    }
    setApiCountries()
  },[])

  return (
    <div className="landingPage-container">
        <h1>Discover the World in Data</h1>
        <Link to={ROUTES.home}>
        <button className="button">Countries Information</button>
        </Link>
    </div>
  );
}
