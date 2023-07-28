import React from "react";
import "../css/home.css";
import Cards from "./cards/Cards";

export default function Home() {
  return (
    <>
    <div className="homePage-container">
      <div className="cards-container">
        <Cards />
      </div>
    </div>
    </>
  );
}
