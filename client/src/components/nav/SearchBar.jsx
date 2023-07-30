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
      case "/createActivity":
        return (<h1> Complete the Form</h1>)
      case "/home":
        return (<h1> World Countriessss</h1>);
        break;

        default: 
        return <h1>Default</h1> 
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
            <div className="title container"></div>

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
