import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { SofaType, sofas } from "../data/ListOfSofas";
import Navigation from "../components/Navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import back from "../assets/back-arrow.svg";

const Details = () => {
  const params = useParams();

  const [sofa, setSofa] = useState<SofaType | undefined>();
  const [id, setId] = useState<string>("");

  useEffect(() => {
    if (!!params?.id) {
      setId(params.id);
      const foundSofa = sofas.find((sofa) => params.id === sofa.id);
      console.log("foundSofa : ", foundSofa);
      if (foundSofa !== undefined) {
        setSofa(foundSofa);
      }
    }
  }, []);

  return (
    <div className="details bg-main-bg min-h-screen flex flex-col justify-between items-center py-2 w-full">
      <NavBar />
      {!!sofa ? (
        // <div className="details-main text-white">
        //   <header className="rounded flex justify-between w-1/2">
        //     <Link to="/products" className="details-back">
        //       back
        //     </Link>
        //     <h2 className="details-title font-bold font-sans text-3xl text-color-secondary">
        //       {sofa.model}
        //     </h2>
        //   </header>
        //   <div className="object-cover h-80 flex-col justify-center items-center ">
        //     <div className="relative  w-96 flex flex-col items-center justify-center">
        //       <img
        //         src={sofa.img}
        //         alt="sofa"
        //         className="object-cover h-80 border-2 rounded-lg"
        //       />
        //       <div className="details-infos flex flex-col items-center justify-start absolute bottom-0 right-0">
        //         <p className="details-description">{sofa.description}</p>
        //         <p className="details-price bg-color-secondary py-2  px-3 rounded-3xl absolute">
        //           {sofa.price} €
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <section className="bg-color-secondary rounded-lg">
          <Link to="/products" className="details-back">
            <img
              src="../assets/back-arrow.svg"
              alt="arrow back"
              className="w-10 absolute
              top-20 left-20 cursor-pointer"
            />
          </Link>
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white font-anar">
              {sofa.model}
            </h1>

            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <img
                className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                src={sofa.img}
                alt={`image of a sofa model ${sofa.model}`}
              />

              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-main-bg uppercase">category</p>

                <a
                  href="#"
                  className="block mt-4 text-2xl font-semibold  hover:underline text-white"
                >
                  All the features you want to know
                </a>

                <p className="mt-3 text-sm text-gray-100 md:text-sm">
                  {sofa.description}
                </p>

                {!!sofa?.hashtags?.length &&
                  sofa.hashtags?.map((h, i) => (
                    <a
                      key={`${h}-${i}`}
                      href="#"
                      className="inline-block mt-2 text-blue-500 underline hover:text-blue-400 mx-2"
                    >
                      {`#${h}`}
                    </a>
                  ))}
                <div className="py-1 flex ml-auto mr-2 mt-6 bg-color-tertiary border border-color-tertiary  hover:border-main-bg w-1/2 justify-center items-center btn cursor-pointer rounded-xl text-center text-white ">
                  <img
                    src="/assets/icons/shopping-cart.svg"
                    alt="shopping-cart"
                  />
                  <span className="pl-2">Buy</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default Details;
