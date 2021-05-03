import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">nom</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>

        <div>
          <label htmlFor="email">Votre email</label>
          <input type="email" id="email" name="email" />
        </div>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Ecrivez ici ce que vous souhaitez nous dire..."
        ></textarea>
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
