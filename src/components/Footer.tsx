import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a href={'./contact'}>Contact us</a>

      <p>
        `&copy; ${Date.now().toLocaleString()} Swann Martin learning React.JS`
      </p>
      <div>
        <a href={'./contact'}>CGU/CGV </a>
        <a href={'./contact'}>Plan du site</a>
      </div>
    </footer>
  );
};

export default Footer;
