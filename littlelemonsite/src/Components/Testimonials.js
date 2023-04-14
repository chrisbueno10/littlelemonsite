import React from 'react';

import "../App.css";

import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  return (

        <div className="tml-container">
        <h1>Testimonials</h1>
        <div className="card-container">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
        </div>
    
  );
};
export default Testimonials;