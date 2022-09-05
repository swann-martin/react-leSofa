import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  return (
    <footer>
      <a href={'./contact'}>Contact us</a>

      <p>&copy; {year} Swann Martin learning React.JS</p>
      <div>
        <a href={'./contact'}>CGU/CGV </a>
        <a href={'./contact'}>Plan du site</a>
      </div>
    </footer>
  );
};

export default Footer;
