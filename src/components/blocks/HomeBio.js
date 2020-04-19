import React from "react";
import OnVisible from "react-on-visible";
import LineSeparator from "../LineSeparator";

const HomeBio = (props) => {
  return (
    <OnVisible className="fadeUpPrepare">
      <div className="container mx-auto text-center px-4 pt-10">
        <span className="font-montbold text-4xl font-semibold ">
          Hi, I'm <span className="text-brightblue">Tom</span>
        </span>
        <div className="w-full md:w-4/6 xl:w-1/2 mx-auto mt-10">
          <p className="text-lg md:text-lg font-montbold font-light">
            I build custom full stack web applications and APIs and can provide
            consultation for every stage of the development lifecycle:
          </p>
        </div>
        <LineSeparator className="bg-mutedpurple mt-10" />
      </div>
    </OnVisible>
  );
};

export default HomeBio;
