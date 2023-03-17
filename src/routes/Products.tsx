import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import { sofas } from '../data/ListOfSofas';

const Products = () => {
  return (
    <div className="products bg-main-bg">
      <NavBar />
      <div className="container mx-auto">
        <h1 className="text-center my-3 text-3xl text-color-secondary text-bold font-ugly">
          Our Sofas
        </h1>
        <section className="container mx-auto ">
          <ul className=" grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sofas.map((sofa) => (
              <Card sofa={sofa} key={sofa.model} />
            ))}
          </ul>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
