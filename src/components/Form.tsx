import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        //your service id
        'service_zla5ps9',
        // your template ID
        'template_9tiguy4',
        e.target, //YOUR_USER_ID
        'user_FpHgzAyIt6bz5CGrbvg4c',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div>
        <label>Numéro de téléphone</label>
        <input
          type="text"
          name="contact_number"
          placeholder="votre numéro de téléphone"
        />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="votre nom" />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="votre-email@exemple.com"
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Ecrivez ici ce que vous souhaitez nous dire..."
          cols={30}
          rows={10}
        />
      </div>
      <div>
        <input type="submit" value="Send" className="btn" />
      </div>
    </form>
  );
}
