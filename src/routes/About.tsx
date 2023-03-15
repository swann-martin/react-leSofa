import React from 'react';

import Footer from '../components/Footer';
import aboutImg from '../../public/assets/sofa2.webp';
import NavBar from '../components/NavBar';

const About = () => {
  const [steps, setSteps] = React.useState(0);
  const pageTitle = 'About Us';

  const data = [
    {
      img: 'https://images.unsplash.com/photo-1573497620166-aef748c8c792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "Why Sofa's World?",
      description:
        'We want to make the world a better place, we aim that everybody should be able rest on sofas.',
      personName: 'Emmanuelle Canap',
      personPosition: "CEO of Sofa's World Coop"
    },
    {
      img: 'https://images.unsplash.com/photo-1573495612522-d994e72e5f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEwfHxkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "How we do Sofa's World?",
      description:
        "Sofa's is a showroom place in the center of Brussels, where people can come have a coffee (the first is free), work, buy art and/or a sofa.",
      personName: 'Sofia Couch',
      personPosition: 'Designer'
    },
    {
      img: 'https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "What we do at Sofas' World?",
      description:
        "I love the vibe a Sofa's World, people are so nice, you can just get a coffee, chat and chill.",
      personName: 'Joan Banquette',
      personPosition: 'Barista'
    }
  ];
  return (
    <div className="about min-h-screen bg-main-bg flex flex-col justify-between ">
      <NavBar />
      <h1 className="text-font-ugly text-color-secondary text-3xl font-bold text-center font-ugly">
        {pageTitle}
      </h1>

      <section className="bg-main-bg">
        <div className="container px-6 py-10 mx-auto  bg-color-tertiary rounded-lg">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={data[steps].img}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-color-secondary ">“</p>

              <h1 className="text-3xl font-semibold  text-white lg:text-4xl lg:w-96 h-20">
                {data[steps].title}
              </h1>

              <p className="max-w-lg mt-6 text-main-bg ">
                {data[steps].description}
              </p>

              <h3 className="mt-6 text-lg font-medium text-color-secondary">
                {data[steps].personName}
              </h3>
              <p className="text-main-bg">{data[steps].personPosition}</p>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-color-secondary dark:text-gray-200 dark:hover:bg-color-secondary hover:bg-color-secondary"
                  onClick={() =>
                    steps === 0
                      ? setSteps(data.length - 1)
                      : setSteps(steps - 1)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  onClick={() =>
                    steps <= 1 ? setSteps(steps + 1) : setSteps(0)
                  }
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-color-secondary dark:text-gray-200 dark:hover:bg-color-secondary lg:mx-6 hover:bg-color-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
