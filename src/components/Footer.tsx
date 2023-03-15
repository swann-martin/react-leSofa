import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();

  const socialNetworkLinks = [
    {
      label: "Swann",
      icon: "favicon-32x32.png",
      path: "https://swannmartin.xyz/",
    },
    {
      label: "Linkedin",
      icon: "/linkedin.svg",
      path: "https://www.linkedin.com/in/swann-martin",
    },
    {
      label: "Github",
      icon: "github.svg",
      path: "https://github.com/swann-martin/",
    },
  ];

  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between text-white items-center md:items-end  w-full py-4">
      <div className="flex justify-between w-full md:w-1/2 ">
        <p className="text-white ">&copy; Swann Martin {year}</p>

        <div className="flex w-1/2 justify-around items-center">
          <a
            className="text-white hover:text-color-secondary"
            href={"./contact"}
          >
            CGU/CGV{" "}
          </a>
          <a
            className=" text-white hover:text-color-secondary"
            href={"./contact"}
          >
            Site map
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  w-full md:w-1/2 justify-around items-center">
        <a className="text-white hover:text-color-secondary" href={"./contact"}>
          Contact us
        </a>
        <div className="flex justify-around md:w-1/6">
          {socialNetworkLinks?.map((link, index) => (
            <a
              key={index}
              href={link.path}
              rel="noopener noreferrer"
              target={"_blank"}
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
      </div>
    </footer>
  );
};

export default Footer;
