import "./nav.css";
import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch }) {
  const { pathname } = useLocation();

  const handle_searchBar_mutation = (path) => {
    switch (path) {
      case "/countries/create-activity":
        return (
          <div className="navBar">
            <div className="buttonHome-container">
              <Link to={"/home"}>
                <button className="button-home">Home</button>
              </Link>
            </div>
            <SearchBar onSearch={onSearch} />
            <div className="button-createActivity-container">

            </div>
          </div>
        );

      default:
        return (
          
            <div className="navBar">
              <div className="buttonHome-container">
                <Link to={"/"}>
                  <button className="button-home">Home</button>
                </Link>
              </div>
              
            </div>
        );
    }
  };

  return (
    <>
      <div>{handle_searchBar_mutation(pathname)}</div>
    </>
  );
}
