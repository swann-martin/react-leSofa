import React from 'react';

import Footer from '../components/Footer';
import aboutImg from '../../public/assets/sofa2.webp';
import NavBar from '../components/NavBar';

const About = () => {
  const [steps, setSteps] = React.useState(0);

  const data = [
    {
      img: '../../public/assets/sofa.webp',
      title: 'Why Sofa?',
      description:
        'We want to change the world from without losing the confort of our home',
      personName: 'Sofa Manuel',
      personPosition: 'CEO of Sofa Consulting',
    },
    {
      img: 'https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'How we do Sofa?',
      description:
        'Sofa is a lightweight, fast, and easy-to-use JavaScript framework for building web applications.',
      personName: 'Sofa Team',
      personPosition: 'Developer',
    },
    {
      img: '../../public/assets/sofa2.webp',
      title: 'Why Sofa?',
      description:
        'Sofa is a lightweight, fast, and easy-to-use JavaScript framework for building web applications.',
      personName: 'Sofa Team',
      personPosition: 'Developer',
    },
  ];
  return (
    <div className="about min-h-screen bg-main-bg flex flex-col justify-between ">
      <NavBar />
      <h1 className="text-font-ugly text-color-secondary text-3xl font-bold text-center font-ugly">
        À propos
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

              <h1 className="text-3xl font-semibold  text-white lg:text-4xl lg:w-96">
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
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
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
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
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
