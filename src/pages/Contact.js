import React, { useEffect, useState } from "react";
import ContactForm from "../components/blocks/ContactForm";
import LineSeparator from "../components/LineSeparator";
import BreadCrumbs from "../components/blocks/Breadcrumbs";
import { Helmet } from "react-helmet";

const Contact = (props) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    setBreadcrumbs([
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Contact",
        path: "/contact",
      },
    ]);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Tom Rolfe | Full Stack Web Developer</title>
      </Helmet>
      <div className="container py-8 mx-auto px-4 w-full">
        <BreadCrumbs crumbs={breadcrumbs} />
        <div className=" text-center">
          <h1 className="font-montbold text-4xl font-semibold">Contact</h1>
          <LineSeparator className="bg-secondary mt-10" />
        </div>
        <div className="w-full lg:w-6/4 mx-auto ">
          <p className="text-lg md:text-lg font-montbold font-light my-8 text-center">
            If you are looking for a contractor/consultant/remote developer for
            your project or just want to talk tech, get in touch today!
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
