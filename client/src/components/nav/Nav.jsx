import "./nav.css";
import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constant";

export default function Nav({ onSearch }) {


  return (
    <div className="navBar">
      <div className="buttonHome-container">
        <Link to={ROUTES.home}>
          <button className="button-home">Home</button>
        </Link>
        <Link to={ROUTES.create}>
          <button className="button-home">Create Activity</button>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
      <div className="button-createActivity-container"></div>
    </div>
  );
}
