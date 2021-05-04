import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <h1>A propos</h1>
      <section>
        <div className="about-img-container">
          <img src="./assets/sofa2.webp" alt="sofa2" />
        </div>

        <div className="about-text-container">
          <h3>Qui sommes-nous&nbsp;:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            qui optio enim, id cumque quam laboriosam provident praesentium
            assumenda nemo laudantium impedit ad fugit adipisci facere porro
            dolorum, corporis accusantium? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dignissimos magni soluta error
          </p>
          <h3>Pourquoi nous existons&nbsp;:</h3>
          <p>
            Reiciendis fugit eos optio aliquid architecto voluptatum earum dolor
            necessitatibus repellat nam alias provident omnis quaerat quisquam
            minus! Dolor, pariatur quisquam.
          </p>
          <h3>Comment nous le faisons&nbsp;:</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nulla
            fugit sunt officia aliquam molestiae, excepturi maiores sit
            veritatis sapiente a consequatur natus mollitia quasi minus iste
            inventore quae. Harum.
          </p>
          <p className="sign">Signature</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
