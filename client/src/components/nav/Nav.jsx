import './nav.css';
import React from "react";
import SearchBar from "./SearchBar.jsx";

export default function Nav({ onSearch }) {
  return (
    <div className="navBar">
      <SearchBar onSearch={onSearch} />
      <div className="button-createActivity-container">
        <button className='button-createActivity'>Create Tourist Activity</button>
      </div>
    </div>
  );
}
