import React from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import { sofas } from "../data/ListOfSofas";

const Products = () => {
  return (
    <div className="products">
      <Navigation />
      <h1>Our Sofas</h1>
      <section>
        <ul>
          {sofas.map((sofa) => (
            <Card sofa={sofa} key={sofa.model} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Products;
