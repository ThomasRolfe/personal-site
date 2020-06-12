import React from "react";
import OnVisible from "react-on-visible";
// import { ReactComponent as LaravelLogo } from "../../assets/svg/laravel-logo.svg";
// import { ReactComponent as ReactLogo } from "../../assets/svg/react-logo-1.svg";
// import { ReactComponent as NextLogo } from "../../assets/svg/nextjs-logo.svg";
// import { ReactComponent as NodeLogo } from "../../assets/svg/nodejs-logo-1.svg";

const TechBanner = (props) => (
  <div className="flex flex-col">
    <OnVisible className="fadeUpPrepare" percent={140}>
      <h3 className="font-montbold text-medium text-xl lg:text-4xl text-center mt-10 mb-10">
        Using the latest technologies, libraries and tooling
      </h3>
    </OnVisible>
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-20 items-center">
      <div className="p-4">
        <img src="/images/laravel.jpg" alt="Laravel logo" />
        {/* <LaravelLogo /> */}
      </div>
      <div className="p-4">
        <img src="/images/react.jpg" alt="React logo" />
        {/* <ReactLogo /> */}
      </div>
      <div className="p-4">
        <img src="/images/nextjs.jpg" alt="Nextjs logo" />
        {/* <NextLogo /> */}
      </div>
      <div className="p-4">
        <img src="/images/node.jpg" alt="Nodejs logo" />
        {/* <NodeLogo /> */}
      </div>
    </div>
  </div>
);

export default TechBanner;
