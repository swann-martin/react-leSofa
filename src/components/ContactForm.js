import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="contact-form">
        <div>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Nom</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>

        <div>
          <label htmlFor="email">Votre email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <textarea name="text" id=""></textarea>
        </div>
        <div>
          <a href="#!" className="btn">
            Envoyer
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
