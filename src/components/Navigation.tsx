import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/apple-touch-icon.png';
import { Transition } from '@headlessui/react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let activeStyle = {
    textDecoration: 'underline',
  };

  const links = [
    {
      title: 'home',
      href: '/',
    },
    {
      title: 'about',
      href: '/about',
    },
    {
      title: 'products',
      href: '/products',
    },
    {
      title: 'contact',
      href: '/contact',
    },
  ];

  //   return (
  //     <nav className="text-white">
  //       <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
  //         <div className="flex-shrink-0">
  //           <NavLink
  //             to="/home"
  //             className="nav-hover"
  //             style={({ isActive }) => (isActive ? activeStyle : undefined)}
  //           >
  //             <img src={logo} alt="logo" className="h-8 w-8" />
  //           </NavLink>
  //         </div>

  //         <div className="hidden md:block">
  //           <div className="ml-10 flex items-baseline space-x-4">
  //             {links.map(({ title, href }, index) => (
  //               <NavLink
  //                 key={`${title}${index}`}
  //                 to={href}
  //                 className="uppercase hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
  //               >
  //                 {title}
  //               </NavLink>
  //             ))}
  //           </div>
  //         </div>

  //         <div className="-mr-2 flex md:hidden">
  //           <button
  //             onClick={() => setIsOpen(!isOpen)}
  //             type="button"
  //             className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  //             aria-controls="mobile-menu"
  //             aria-expanded="false"
  //           >
  //             <span className="sr-only">Open main menu</span>
  //             {!isOpen ? (
  //               <svg
  //                 className="block h-6 w-6"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   stroke-linecap="round"
  //                   stroke-linejoin="round"
  //                   stroke-width="2"
  //                   d="M4 6h16M4 12h16M4 18h16"
  //                 />
  //               </svg>
  //             ) : (
  //               <svg
  //                 className="hidden h-6 w-6"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   stroke-linecap="round"
  //                   stroke-linejoin="round"
  //                   stroke-width="2"
  //                   d="M6 18L18 6M6 6l12 12"
  //                 />
  //               </svg>
  //             )}
  //           </button>
  //         </div>
  //         <Transition
  //           show={isOpen}
  //           enter="transition ease-out duration-100 transform"
  //           enterFrom="opacity-0 scale-95"
  //           enterTo="opacity-100 scale-100"
  //           leave="transition ease-in duration-75 transform"
  //           leaveFrom="opacity-100 scale-100"
  //           leaveTo="opacity-0 scale-95"
  //         >
  //           {(ref) => (
  //             <div className="md:hidden" id="mobile-menu">
  //               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
  //                 <NavLink
  //                   to={`/`}
  //                   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
  //                 >
  //                   Home
  //                 </NavLink>

  //                 <NavLink
  //                   to={`/about`}
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //                 >
  //                   About
  //                 </NavLink>

  //                 <NavLink
  //                   to={`/contact`}
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //                 >
  //                   Contact
  //                 </NavLink>

  //                 <NavLink
  //                   to={'/products'}
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //                 >
  //                   Products
  //                 </NavLink>
  //               </div>
  //             </div>
  //           )}
  //         </Transition>
  //       </div>
  //     </nav>
  //   );
  // };

  return (
    <nav className="flex sticky top-0 left-0 flex-wrap justify-between items-center w-full z-2 sm:px-6 lg:px-8 text-white bg-main-bg">
      <NavLink to={'/'} className="flex items-center">
        <img
          className="p-2 mx-auto mr-3 w-auto h-10 rounded-full bg-neutral-900 sm:h-9"
          src={logo}
          alt="Your Company"
        />
        <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
          Sofas' World
        </span>
      </NavLink>
      <div>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {links.map((route, i: number) => (
              <div>
                <NavLink
                  key={route.title + i}
                  to={route.href}
                  className="block py-2 pr-4 pl-3 uppercase text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-blue-300"
                  aria-current="page"
                >
                  {route.title}
                </NavLink>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
