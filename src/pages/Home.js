import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import homePic from '../assets/sofa.webp';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h1>Bienvenue sur le site du canapé</h1>
      <section>
        <div className="img-container">
          <a href={"/products"}>
            <img src={homePic} alt="sofa1" />
            <h2>Voir nos produits</h2>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
