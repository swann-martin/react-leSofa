import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h1>Bienvenue sur le site du canapé</h1>
      <section>
        <div className="img-container">
          <img src="./assets/sofa.webp" alt="sofa1" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
