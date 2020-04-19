import React from "react";
import ButtonCta from "../ButtonCta";

const ContactForm = (props) => (
  <div className="w-full p-5">
    <form>
      <label
        className="block text-gray-700 text-sm font-montbold mb-2"
        htmlFor="contactname"
      >
        Full name
      </label>
      <input
        className={`appearance-none border rounded w-full py-2 px-3 
        text-gray-700  leading-tight focus:bg-white border focus:border-mutedpurple border-gray-300 focus:outline-none
         mb-8`}
        id="contactname"
        name="contactname"
      />
      <label
        className="block text-gray-700 text-sm font-montbold mb-2"
        htmlFor="emailaddress"
      >
        Email
      </label>
      <input
        className={`appearance-none border rounded w-full py-2 px-3 
        text-gray-700  leading-tight focus:bg-white border focus:border-mutedpurple border-gray-300 focus:outline-none
         mb-8`}
        id="emailaddress"
        name="emailaddress"
      />
      <label
        className="block text-gray-700 text-sm font-montbold mb-2"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className={`appearance-none border rounded w-full py-2 px-3 
        text-gray-700  leading-tight focus:bg-white border focus:border-mutedpurple border-gray-300 focus:outline-none
         mb-8`}
        id="message"
        name="message"
        maxLength="1000"
        rows="10"
        resize="none"
      />
      <ButtonCta
        className="w-full md:w-1/2 no-focus py-1 px-6 lg:py-3 lg:px-16"
        path="#"
      >
        Submit
      </ButtonCta>
    </form>
  </div>
);

export default ContactForm;
