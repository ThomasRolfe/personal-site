import React from "react";
import OnVisible from "react-on-visible";

const techImages = [
  { path: "https://source.unsplash.com/random/200x70?sig=1" },
  { path: "https://source.unsplash.com/random/200x70?sig=2" },
  { path: "https://source.unsplash.com/random/200x70?sig=3" },
  { path: "https://source.unsplash.com/random/200x70?sig=4" },
  { path: "https://source.unsplash.com/random/200x70?sig=5" },
  { path: "https://source.unsplash.com/random/200x70?sig=6" },
  { path: "https://source.unsplash.com/random/200x70?sig=7" },
];

const TechBanner = (props) => (
  <div className="flex flex-col">
    <OnVisible className="fadeUpPrepare" percent={140}>
      <h3 className="font-montbold text-medium text-xl lg:text-4xl text-center mt-10 mb-10">
        Using the latest technologies, libraries and tooling
      </h3>
    </OnVisible>
    <div className="h-16 overflow-hidden">
      <div className="flex justify-between ">
        {techImages.map((image, index) => {
          return <img className="px-3" src={image.path} />;
        })}
      </div>
    </div>
  </div>
);

export default TechBanner;
