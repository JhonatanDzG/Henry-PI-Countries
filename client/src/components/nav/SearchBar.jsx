import './searchBar.css'
import React, { useState } from 'react';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    //búscar con el valor: searchText
    console.log('Buscando:', searchText);
  };

  return (
    <div className='searchBar-container'>
      <input
      className='input-search'
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className= 'button-search'onClick={handleSearch}>🔎</button>
    </div>
  );
}

