import React from "react";

const ButtonCta = (props) => (
  <button
    className={`rounded-lg shadow text-white font-montbold py-3 px-16 bg-brightblue ${props.className}`}
  >
    {props.children}
  </button>
);

export default ButtonCta;
