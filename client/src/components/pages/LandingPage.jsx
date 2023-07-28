import React from "react";
import "../css/landingPage.css"
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <div className="title">
        <h1>Discover the World in Data</h1>
      </div>
      <div className="button-container">
        <Link to={"/home"}>
        <button className="button">Countries Information</button>
        </Link>
      </div>
    </div>
  );
}
