import React from "react";
import ContactForm from "../components/ContactForm";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <h1>ContactForm</h1>
      <section>
        <Form />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
