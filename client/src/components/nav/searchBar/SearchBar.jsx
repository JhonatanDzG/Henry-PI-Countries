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
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

