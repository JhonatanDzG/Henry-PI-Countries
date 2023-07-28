import "./nav.css";
import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <>
      <div className="navBar">
        <div className="buttonHome-container">
          <Link to={"/home"}>
            <button className="button-home">Home</button>
          </Link>
        </div>
        <SearchBar onSearch={onSearch} />
        <div className="button-createActivity-container">
          <Link to={"/createActivity"}>
            <button className="button-createActivity">
              Create Tourist Activity
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
