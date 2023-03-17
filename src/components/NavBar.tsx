import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/apple-touch-icon.png';
import logo from '../assets/logoSofa.png';

export const NavLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Sofas',
    href: '/products'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

const NavBar = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' }
  };
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <nav className="flex sticky top-0 left-0 flex-wrap  items-center py-4 w-full z-2 md:px-6 px-2 lg:px-8 bg-main-bg">
      <div className="flex w-full  justify-between items-center">
        <NavLink to={'/'} className="flex items-center h-10 ">
          <img
            className="mx-auto mr-3 sm:h-8 object-contain h-10 w-full"
            src={logo}
            alt="Company Logo"
          />
          <span className="self-center text-2xl font-bold text-white font-anar whitespace-nowrap">
            Sofas' World
          </span>
        </NavLink>
        <div>
          <button
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
            className="block p-2 bg-color-tertiary rounded-full md:hidden"
          >
            {isOpenMenu ? (
              <span className="block w-6 h-6 font-bold text-white cursor-pointer md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  enable-background="new 0 0 40 40"
                >
                  <line
                    x1="15"
                    y1="15"
                    x2="25"
                    y2="25"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  ></line>
                  <line
                    x1="25"
                    y1="15"
                    x2="15"
                    y2="25"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  ></line>
                  <circle
                    className="circle"
                    cx="20"
                    cy="20"
                    r="19"
                    opacity="0"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    fill="none"
                  ></circle>
                  <path
                    d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
                    className="progress"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    fill="none"
                  ></path>
                </svg>
              </span>
            ) : (
              <svg
                xmlns="<http://www.w3.org/2000/svg>"
                id="menu-button"
                className="block w-6 h-6 cursor-pointer md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
            <div className="absolute right-0 top-14 w-full md:hidden z-30">
              <motion.div
                className="flex flex-col flex-div backdrop-blur-sm items-justify"
                animate={isOpenMenu ? 'open' : 'closed'}
                variants={variants}
              >
                {NavLinks.map(({ title, href }, index) => (
                  <div
                    key={`${title}${index}`}
                    className="flex justify-center my-2"
                  >
                    <p
                      onClick={() => {
                        window.location.replace(`${href}`);
                        setIsOpenMenu(false);
                      }}
                      className={`mr-4 text-3xl font-bold text-white cursor-pointer hover:border-spacing-y-28 border-y-2 ${'hover:text-color-secondary hover:border-y-2'}`}
                    >
                      {title}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </button>
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center">
            {NavLinks.map(({ title, href }, index) =>
              index === NavLinks.length - 1 ? (
                <div key={`${title}${index}`}>
                  <NavLink
                    to={href}
                    className={`px-3 py-2 bg-white rounded-3xl font-bold transition-all ease-in-out delay-150 ${
                      window.location.pathname === href
                        ? 'bg-color-secondary  text-white'
                        : 'hover:bg-color-secondary hover:text-white'
                    }`}
                  >
                    {title}
                  </NavLink>
                </div>
              ) : (
                <div key={`${title}${index}`}>
                  <NavLink
                    to={href}
                    className={`mr-4 font-bold text-white hover:border-spacing-y-28 border-color-tertiary transition-all ease-in-out delay-150 ${
                      window.location.pathname === href
                        ? ' border-b-2 border-spacing-24'
                        : 'hover:border-color-secondary hover:border-b-2'
                    }`}
                  >
                    {title}
                  </NavLink>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
