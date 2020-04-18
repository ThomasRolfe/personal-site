import React from "react";
import ProcessBannerCard from "./ProcessBannerCard";

const processes = [
  {
    title: "Specification and ideation",
    description: [
      `Translate your ideas into achievable technical specifications.
    This process is crucial to ensure the right system is built for the right business objectives.`,
      `I draw from experience in various sectors including online retail, hospitality and entertainment to help guide and iterate on ideas.`,
    ],
    illustration: "illustration",
  },
  // {
  //   title: "Mockup and design",
  //   description: [
  //     `Production of website wireframes and mockups.
  //     This affords quick iteration and feedback on design ideas before jumping into code.`,
  //   ],
  //   illustration: "illustration",
  // },
  // {
  //   title: "Programming",
  //   description: [
  //     `Contributing to or creating the codebase for the product at hand`,
  //     `I typically work with a range of frameworks and libraries across PHP, JavaScript, MySQL, HTML and CSS, and always happy to learn more to contribute to an existing codebase in another language.`,
  //   ],
  //   illustration: "illustration",
  // },
  // {
  //   title: "Deployment/support",
  //   description: [
  //     `Bespoke applications will often need a bespoke deployment setup which can be designed based on the requirements, project budget and expansion potential.`,
  //     `Ongoing support can be offered in the form of bug fixes, system updates and new features.`,
  //   ],
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
