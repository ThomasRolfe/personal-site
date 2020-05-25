import React, { useState } from "react";
import ButtonCta from "../ButtonCta";
import Axios from "axios";
import querystring from "querystring";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitContact = (e) => {
    e.preventDefault();

    if (!validateContactForm(name, email, message)) {
      return;
    }

    postContact(name, email, message);
  };

  const validateContactForm = (name, email, message) => {
    if (name.trim() === "") {
      alert("Please provide a name");
      return false;
    }

    if (email.trim() === "") {
      alert("Please provide an email");
      return false;
    }

    if (message.trim() === "") {
      alert("Please provide a message");
      return false;
    }

    if (name.length > 100) {
      alert("Name must be less than 100 characters");
      return false;
    }

    if (email.length > 100) {
      alert("Email must be less than 100 characters");
      return false;
    }

    if (message.length > 1000) {
      alert("Message must be less than 1000 characters");
      return false;
    }

    return true;
  };

  const postContact = (name, email, message) => {
    Axios.post(
      "http://www.api.thomasrolfe.co.uk/wp-json/contact-form-7/v1/contact-forms/62/feedback",
      querystring.stringify({
        "your-name": name,
        "your-email": email,
        "your-message": message,
        "your-subject": "New contact from website",
      })
    )
      .then((response) => {
        successModal(
          "Thankyou for your message. I will respond as soon as possible."
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((e) => {
        errorModal(
          "Oops, something went wrong. Please check your inputs and try again."
        );
      });
  };

  const successModal = (message) => {
    alert(message);
  };

  const errorModal = (message) => {
    alert(message);
  };

  return (
    <div className={`w-full p-5   ${props.className}`}>
      <form onSubmit={submitContact}>
        <label
          className="block text-gray-700 text-sm font-montbold mb-2"
          htmlFor="contactname"
        >
          Full name
        </label>
        <input
          className={`appearance-none border rounded w-full py-2 px-3 
        text-gray-700  leading-tight focus:bg-white border focus:border-secondary border-gray-300 focus:outline-none
         mb-8`}
          id="contactname"
          name="contactname"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label
          className="block text-gray-700 text-sm font-montbold mb-2"
          htmlFor="emailaddress"
        >
          Email
        </label>
        <input
          className={`appearance-none border rounded w-full py-2 px-3 
        text-gray-700  leading-tight focus:bg-white border focus:border-secondary border-gray-300 focus:outline-none
         mb-8`}
          id="emailaddress"
          name="emailaddress"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label
          className="block text-gray-700 text-sm font-montbold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={`appearance-none border rounded w-full py-2 px-3 
        text-gray-700  leading-tight focus:bg-white border focus:border-secondary border-gray-300 focus:outline-none
         mb-8`}
          id="message"
          name="message"
          maxLength="1000"
          rows="10"
          resize="none"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <ButtonCta
          className="w-full md:w-1/2 no-focus py-1 px-6 lg:py-3 lg:px-16"
          hollow
        >
          Submit
        </ButtonCta>
      </form>
    </div>
  );
};

export default ContactForm;
