import React from "react";
import "../css/landingPage.css"
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <div className="title">
        <h1>Discover the World in Data</h1>
      </div>
      <div className="button-container">
        <Link to={"/home"}>
        <button className="button">Countries Information</button>
        </Link>
      </div>
    </div>
  );
}

/*
import React from 'react';
import SearchBar from './SearchBar';
import "./Css/Nav.css";
import { Link } from 'react-router-dom';


export default function Nav({onSearch, logOut}){
    


    return (

        <div className='NavBar'>
        <SearchBar onSearch = {onSearch}></SearchBar>
        <div className='bAboutHome'>
        <Link to={"/about"}>
            <button>About</button>
        </Link>
        <Link to={"/home"}>
            <button>Home</button>
        </Link>
      
        
        <button onClick={logOut}>LogOut</button>
        
       
        </div>
    </div>
        )
    
    }
*/
