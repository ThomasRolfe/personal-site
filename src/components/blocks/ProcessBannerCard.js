import React from "react";

const ProcessBannerCard = (props) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        (props.index + 1) % 2 === 0 && "lg:flex-row-reverse"
      }`}
    >
      <div className="text-left w-full md:w-1/2  my-auto table">
        <h3 className="font-montbold text-medium text-3xl mb-8">
          {props.title}
        </h3>
        {props.description.map((paragraph, index) => {
          return (
            <p key={index} className="font-montbold mb-4 lg:text-lg font-light">
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className="text-center w-full md:w-1/2 flex justify-center">
        {/* placeholder image */}
        <div
          className="shadow bg-white m-4 hidden md:block"
          style={{ height: "300px", width: "300px" }}
        ></div>
        {/* {props.illustration} */}
      </div>
    </div>
  );
};

export default ProcessBannerCard;
