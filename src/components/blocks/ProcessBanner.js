import React from "react";
import ProcessBannerCard from "./ProcessBannerCard";

const processes = [
  {
    title: "Specification and ideation",
    description: "description",
    illustration: "illustration",
  },
  // {
  //   title: "Mockup and design",
  //   description: "description",
  //   illustration: "illustration",
  // },
  // {
  //   title: "Programming",
  //   description: "description",
  //   illustration: "illustration",
  // },
  // {
  //   title: "Deployment/support",
  //   description: "description",
  //   illustration: "illustration",
  // },
];

const ProcessBanner = (props) => {
  return (
    <div className={`${props.className} py-16`}>
      {processes.map((process, index) => (
        <ProcessBannerCard
          title={process.title}
          description={process.description}
          illustration={process.illustration}
          key={index}
          index={index}
        />
      ))}
      <div className="text-center mt-10">pagination</div>
    </div>
  );
};

export default ProcessBanner;
