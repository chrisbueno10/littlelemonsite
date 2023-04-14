import React from 'react';

import '../App.css';

import CardImg from "../lasagna.png";

const HighlightCard = () => {
    return (
      <article className="ht-card">
        <img src={CardImg} />
        <div className="card-title-container">
          <h3>Classic Lasagna</h3>
          <p>$17.99</p>
        </div>
        <p className="card-p">
          The famous Classic Lasagna from Italy, with meat sauce, ricotta, and flat sheets of pasta.
        </p>
        <div className="card-bottom-container">
          <h3 className="categories">Order A Delivery</h3>
        </div>
      </article>
    );
  };
  
  export default HighlightCard;