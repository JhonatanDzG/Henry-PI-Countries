import React from "react";
import "../css/home.css";

export default function Home() {

  const onClose = (id) => {
    setCountries((countries) =>{
      return countries.filter((country) => country.id !==  id)
   })
  }

  return (
    <>
    <div className="homePage-container">
      <div className="cards-container">
        
      </div>
    </div>
    </>
  );
}
