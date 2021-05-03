import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="img-container">
          <img src="./assets/sofa.webp" alt="sofa" />
        </div>
        <div className="text">
          <h2>nom du modèle</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            saepe esse ipsum cupiditate praesentium voluptatum impedit sequi,
            sint ducimus quidem officia! Odio libero quibusdam quod iure
            aliquid, earum praesentium expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
