import React from 'react';
import { Link } from 'react-router-dom';
import { SofaType } from '../data/ListOfSofas';

const Card = (props: { sofa: SofaType }) => {
  const { sofa } = props;
  return (
    <Link
      to={`/details/${sofa.id}`}
      className="max-w-sm rounded bg-white overflow-hidden shadow-lg hover:bg-color-secondary hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <img className="w-full" src={sofa.img} alt="Image of a sofa" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 uppercase">{sofa.model}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {sofa.hashtags?.length &&
          sofa.hashtags?.map((hashtag, index) => (
            <span
              key={`${hashtag}-${index}`}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{hashtag}
            </span>
          ))}
      </div>
    </Link>

    // <Link
    //   className="card bg-slate-100 rounded-xl p-8 dark:bg-slate-800"
    //   to={`/details/${sofa.id}`}
    // >
    //   <img src={sofa.img} alt="sofa" />
    //   <div className="data-container">
    //     <ul>
    //       <li>
    //         <span>Modèle&nbsp;:</span> {sofa.model}
    //       </li>
    //       <li>
    //         <span>Prix&nbsp;:</span> {sofa.price}&nbsp;€
    //       </li>
    //       <li className="description">"{sofa.description}"</li>
    //       <li>
    //         <Link to={`/details/${sofa.id}`} className="btn">
    //           Voir le sofa
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </Link>
  );
};

export default Card;
