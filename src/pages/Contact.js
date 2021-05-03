import React from "react";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <h1>ContactForm</h1>
      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
