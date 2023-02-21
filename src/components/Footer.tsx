import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  return (
    <footer className="flex justify-around items-end text-white w-full py-4">
      <a href={'./contact'}>Contact us</a>

      <p>&copy; {year} Swann Martin</p>
      <div>
        <a href={'./contact'}>CGU/CGV </a>
        <a href={'./contact'}>Plan du site</a>
      </div>
    </footer>
  );
};

export default Footer;
