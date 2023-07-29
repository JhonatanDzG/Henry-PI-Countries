import "./searchBar.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";


export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    //búscar con el valor: searchText
    console.log("Buscando:", searchText);
  };

  const { pathname } = useLocation();

  const handle_MultiTitle = (path) => {
    switch (path) {
      case "/home":
        return <h1> World Countries</h1>;
        break;
      case "/createActivity":
        return <h1> Complete the Form</h1>;
        break;
    }
  };

  const handle_SearchBarMutation = (path) => {
    switch (path) {
      case "/home":
        return (
          <div className="search-container">
            <input
              className="input-search"
              type="text"
              value={searchText}
              onChange={handleInputChange}
              placeholder="Try typing... COL  "
            />
            <button className="button-search" onClick={handleSearch}>
              🌎
            </button>
          </div>
        );

      case "/createActivity":
        return (
          <div className="search-container">

          </div>
        );
    }
  };

  return (
    <div className="searchBar-container">
      <div className="multi-title">{handle_MultiTitle(pathname)}</div>
      <div className="SearchBar">{handle_SearchBarMutation(pathname)}</div>
    </div>
  );
}
