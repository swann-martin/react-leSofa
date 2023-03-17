import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();

  const socialNetworkLinks = [
    {
      label: 'Swann',
      icon: 'favicon-32x32.png',
      path: 'https://swannmartin.xyz/'
    },
    {
      label: 'Linkedin',
      icon: '/linkedin.svg',
      path: 'https://www.linkedin.com/in/swann-martin'
    },
    {
      label: 'Github',
      icon: 'github.svg',
      path: 'https://github.com/swann-martin/'
    }
  ];

  return (
    // <footer className="flex flex-col-reverse md:flex-row justify-around md:justify-between text-white items-center md:items-end  w-full py-4">
    <footer className="p-4 grid grid-cols-2 md:grid-cols-5 gap-4 rounded-lg text-white  md:items-end  w-full ">
      <div className="flex  items-center ">
        <p className="text-white ">&copy; Swann Martin {year}</p>
      </div>
      <div className="flex justify-center items-center ">
        <a className="text-white hover:text-color-secondary" href={'./contact'}>
          CGU/CGV
        </a>
      </div>
      <div className="flex  items-center ">
        <a
          className=" text-white hover:text-color-secondary"
          href={'./contact'}
        >
          Site map
        </a>
      </div>
      <div className="flex justify-center items-center ">
        <a className="text-white hover:text-color-secondary" href={'./contact'}>
          Contact us
        </a>
      </div>
      <div className="order-first col-span-2 md:col-span-1 md:order-last flex justify-around items-center">
        {socialNetworkLinks?.map((link, index) => (
          <a
            key={index}
            href={link.path}
            rel="noopener noreferrer"
            target={'_blank'}
            className="mr-1 hover:scale-125 transform-gpu transition-all duration-200 ease-in-out p-1 rounded-full hover:bg-color-secondary"
          >
            <img
              width={24}
              height={24}
              src={`/assets/icons/${link.icon}`}
              alt={link.label}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
