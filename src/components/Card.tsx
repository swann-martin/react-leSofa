import React from 'react';
import { Link } from 'react-router-dom';
import { Sofa } from '../data/ListOfSofas';

const Card = (props: { sofa: Sofa }) => {
  const { sofa } = props;
  return (
    <Link className="card" to={`/details/${sofa.id}`}>
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
            <Link to={`/details/${sofa.id}`} className="btn">
              Voir le sofa
            </Link>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;
