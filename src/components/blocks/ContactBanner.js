import React from "react";
import ContactForm from "./ContactForm";
import SocialGroup from "./SocialGroup";
import OnVisible from "react-on-visible";

const ContactBanner = (props) => {
  return (
    <div className="flex flex-col md:flex-row my-6 lg:my-16">
      <OnVisible className="fadeUpPrepare w-full md:w-1/2 text-center md:text-left">
        <h3 className="font-montbold text-5xl font-bold mb-5">
          Lets work together!
        </h3>
        <p className="font-montbold leading-8">
          Whether you need a consultant, part time/contract work or simply want
          to chat, get in touch with me here or via the social links below.
        </p>
        <div className="w-2/3 mx-auto my-12">
          <SocialGroup size="2x" iconPadding="p-4" />
        </div>
      </OnVisible>
      <ContactForm />
    </div>
  );
};

export default ContactBanner;
