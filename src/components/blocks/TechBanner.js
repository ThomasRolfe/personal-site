import React from "react";
import OnVisible from "react-on-visible";

const TechBanner = (props) => (
  <div className="flex flex-col">
    <OnVisible className="fadeUpPrepare">
      <h3 className="font-montbold text-medium text-xl lg:text-4xl text-center mt-10 mb-10">
        Using the latest technologies, libraries and tooling
      </h3>
    </OnVisible>
    <div className="flex justify-between h-16">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
      <span>Item 6</span>
    </div>
  </div>
);

export default TechBanner;
