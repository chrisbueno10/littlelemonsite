import React from 'react';

import '../App.css';
import HeroImg from "../openinghours.jpg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="txt-container">
        <h1>Little Lemon</h1>
        <h2>New York</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <a href="/booking">
        <button className="yellow-btn">Reserve a Table</button></a>
      </div>
      <div className="img-container">
        <img src={HeroImg} />
      </div>
    </div>
  );
};

export default Hero;