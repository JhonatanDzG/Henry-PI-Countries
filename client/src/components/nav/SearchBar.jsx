import './searchBar.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    //búscar con el valor: searchText
    console.log('Buscando:', searchText);
  };

  const {pathname} = useLocation();


  const handleTitle = (path) => {
    switch(path){
      case "/home": return(
        <h1>On HomePage</h1>
      )
      break;

    }
  }

  return (
    <div className='searchBar-container'>
      <div className='title'>{handleTitle(pathname)}</div>
      <input
      className='input-search'
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className= 'button-search'onClick={handleSearch}>🌎</button>
    </div>
  );
}

