import React from "react";

const ProcessBannerCard = (props) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        (props.index + 1) % 2 === 0 && "lg:flex-row-reverse"
      }`}
    >
      <div className="text-left w-full lg:w-1/2">
        <h3 className="font-montbold font-bold text-2xl">{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="text-center w-full lg:w-1/2 flex justify-center">
        {/* placeholder image */}
        <div
          className="shadow bg-white m-4"
          style={{ height: "300px", width: "300px" }}
        ></div>
        {/* {props.illustration} */}
      </div>
      {/* {props.index} */}
    </div>
  );
};

export default ProcessBannerCard;
