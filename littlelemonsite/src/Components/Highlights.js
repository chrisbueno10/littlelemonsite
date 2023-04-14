import React from "react";
import '../App.css';
import HighlightCard from "./HighlightCard";


const Highlights = () => {
    return (
      <div className="hts-container">
        <div className="top">
          <h1>This weeks specials!</h1>
          <button className="yellow-btn">Online Menu</button>
        </div>
        <div className="cards-carrousel">
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </div>
      </div>
    );
  };
  
  export default Highlights;