import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Sofa, sofas } from '../data/ListOfSofas';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Details = () => {
  const params: { id: string } = useParams();

  const [sofa, setSofa] = useState<Sofa | undefined>();
  const [id, setId] = useState<string>('');

  useEffect(() => {
    if (!!params?.id) {
      setId(params.id);
      const foundSofa = sofas.find((sofa) => params.id === sofa.id);
      console.log('foundSofa : ', foundSofa);
      if (foundSofa !== undefined) {
        setSofa(foundSofa);
      }
    }
  }, []);

  return (
    <div className="details">
      {!!sofa ? (
        <div>
          <header>
            <h2 className="details-title">{sofa.model}</h2>
            <Link to="/products" className="details-back">
              <ArrowBackIcon />
            </Link>
          </header>
          <div className="details-img">
            <img src={sofa.img} alt="sofa" />
          </div>

          <div className="details-infos">
            <p className="details-description">{sofa.description}</p>
            <p className="details-price">{sofa.price} €</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
