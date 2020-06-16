import React from "react";

const Error = (props) => {
  return (
    <div className="p-20 text-center">
      <span className="block font-montbold font-bold text-4xl ">
        Oops, something went wrong.
      </span>
      <span className="block font-montbold font-semibold text-xl ">
        Please try again.
      </span>
    </div>
  );
};

export default Error;
