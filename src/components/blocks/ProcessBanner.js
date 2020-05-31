import React from "react";
import ProcessBannerCard from "./ProcessBannerCard";
import OnVisible from "react-on-visible";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const processes = [
  {
    title: "Specification & Ideation",
    description: [
      `Translate your ideas into achievable technical specifications.
    This process is crucial to ensure the right system is built for the right business objectives. `,
    ],
    icon: faClipboardList,
    colour: "#7510f7",
    size: "3x",
  },
  {
    title: "Mockup & Design",
    description: [
      `Production of website wireframes and mockups.
      This affords quick iteration and feedback on design ideas before jumping into code.`,
    ],
    icon: faPencilRuler,
    colour: "#7510f7",
    size: "3x",
  },
  {
    title: "Programming",
    description: [
      `Contributing to or creating the codebase for the product at hand. 
      Working with a range of frameworks and libraries across PHP, JavaScript, MySQL, HTML and CSS, 
      and always happy to learn a new language.`,
    ],
    icon: faLaptopCode,
    colour: "#7510f7",
    size: "3x",
  },
  {
    title: "Deployment",
    description: [
      `Bespoke applications will often need a bespoke deployment setup 
      which can be designed based on the requirements, project budget and expansion potential.`,
    ],
    icon: faCloudUploadAlt,
    colour: "#7510f7",
    size: "3x",
  },
  {
    title: "New Features & Expansion",
    description: [
      `Once your system is up and running, new features will be likely be required to expand your business. 
      The same process can be undertaken for swift upgrades to grow your business.`,
    ],
    icon: faLightbulb,
    colour: "#7510f7",
    size: "3x",
  },
  {
    title: "Ongoing Support",
    description: [
      `Systems with any amount of complexity will need support and servicing, 
      The level and frequency of support can be tailored to your business needs.`,
    ],
    icon: faWrench,
    colour: "#7510f7",
    size: "3x",
  },
];

const ProcessBanner = (props) => {
  return (
    <div
      className={`${props.className} py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10`}
      style={{ gridAutoRows: "1fr" }}
    >
      {processes.map((process, index) => (
        <OnVisible className="fadeUpPrepare" key={index}>
          <ProcessBannerCard {...process} index={index} />
        </OnVisible>
      ))}
    </div>
  );
};

export default ProcessBanner;
