import React from "react";
import ContactForm from "../components/blocks/ContactForm";
import LineSeparator from "../components/LineSeparator";

const Contact = (props) => {
  return (
    <div className="container py-8 mx-auto text-center px-4 w-full md:w-4/6 xl:w-1/2">
      <h1 className="font-montbold text-4xl font-semibold ">Contact</h1>
      <LineSeparator className="bg-secondary mt-10" />
      <p className="text-lg md:text-lg font-montbold font-light my-8">
        If you are looking for a contractor/consultant/remote developer for your
        project or just want to talk tech, get in touch today!
      </p>
      <ContactForm className="w-full " />
    </div>
  );
};

export default Contact;
