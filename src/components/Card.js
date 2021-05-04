import React from "react";

const Card = (props) => {
  const { sofa } = props;
  return (
    <li className="card">
      <img src={sofa.img} alt="sofa" />
      <div className="data-container">
        <ul>
          <li>
            <span>Modèle :</span> {sofa.model}
          </li>
          <li>
            <span>Prix :</span> {sofa.price}
          </li>
          <li className="description">"{sofa.description}"</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
