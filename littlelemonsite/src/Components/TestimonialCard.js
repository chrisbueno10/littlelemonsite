import React from "react";

import "../App.css";

import UserIcon from "../user.png";
const TestimonialCard = () => {
  return (
    <article className="tml-card">
      <h3>Rating</h3>
      <div className="user-container">
        <img src={UserIcon} />
        <h3>Name</h3>
      </div>
      <p>
        Amazing New York Italian food, and the best atmosphere in town. Highly
        Reccommend it.
      </p>
    </article>
  );
};

export default TestimonialCard;