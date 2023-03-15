import React from 'react';
import Footer from '../components/Footer';

import homePic from '/assets/sofa2.webp';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
  const title = "Welcome to Sofas' World";
  const subtitle = 'Everybody should be able rest on sofas.';

  const action = 'View our Sofas';
  return (
    <div className="home bg-main-bg min-h-screen flex-col flex justify-between work-sans leading-normal text-base tracking-normal ">
      <NavBar />
      <div className="container mx-auto">
        <section>
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold text-color-secondary lg:text-4xl font-anar">
                {title}
              </h1>
              <p className="my-6 text-gray-500 ">{subtitle}</p>
              <Link
                to={'/products'}
                className="px-6 py-2.5 text-sm font-medium leading-5 text-center text-white capitalize bg-color-tertiary rounded-lg hover:bg-color-secondary lg:mx-0 lg:w-auto focus:outline-none"
              >
                {action}
              </Link>
            </div>

            <Link to={'/products'} className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src={homePic}
              />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
