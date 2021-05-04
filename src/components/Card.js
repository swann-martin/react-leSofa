import React from "react";

const Card = (props) => {
  const { sofa } = props;
  return (
    <li className="card">
      <img src={sofa.img} alt="sofa" />
      <div className="data-container">
        <ul>
          <li>
            <span>Modèle&nbsp;:</span> {sofa.model}
          </li>
          <li>
            <span>Prix&nbsp;:</span> {sofa.price}&nbsp;€
          </li>
          <li className="description">"{sofa.description}"</li>
          <li>
            <a href={"/contact"} className="btn">
              Voir le sofa
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
