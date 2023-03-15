import React from 'react';
import FormComponent from '../components/FormComponent';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';

const Contact = () => {
  const pageTitle = 'Contact Us';
  return (
    <div className="contact bg-main-bg  min-h-screen flex flex-col justify-between ">
      <NavBar />
      <h1 className="text-color-secondary font-ugly text-3xl text-center font-bold">
        {pageTitle}
      </h1>
      <section>{<FormComponent />}</section>
      <Footer />
    </div>
  );
};

export default Contact;
