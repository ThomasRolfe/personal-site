import React from "react";

const Backdrop = (props) => (
  <div
    className="h-full w-full fixed bg-gray-900 z-40 top-0 left-0 opacity-25"
    onClick={props.click}
  ></div>
);

export default Backdrop;
