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
}
