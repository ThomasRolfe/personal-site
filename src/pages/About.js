import React from "react";
import LineSeparator from "../components/LineSeparator";
import ButtonCta from "../components/ButtonCta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const About = (props) => {
  return (
    <React.Fragment>
      <div className="container py-8 mx-auto text-center px-4 w-full md:w-4/6">
        <h1 className="font-montbold text-4xl font-semibold ">About me</h1>
        <LineSeparator className="bg-secondary mt-10" />
        <p className="text-lg md:text-lg font-montbold font-light my-8">
          My name is Tom, for the past 5 years I have been working as a full
          stack developer building custom business intelligence systems,
          internal tools, backend APIs and customer facing front ends.
        </p>
        <p className="text-lg md:text-lg font-montbold font-light my-8">
          I have had the good fortune to work in industries ranging from online
          e-commerce, hospitality, education and more. Drawing from this
          experience, I now enjoy taking new projects from ideation to
          production and consulting at different stages of the development
          lifecycle.
        </p>
      </div>
      <div className="w-full bg-gray-100">
        <div className="container py-20 mx-auto px-4 text-center">
          <h2 className="mb-16 inline-block font-montbold text-2xl font-semibold">
            Day to day <span className="text-primary">software</span> and{" "}
            <span className="text-primary">languages</span>
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-4/6 mx-auto">
            <div className="p-6 border rounded-lg bg-white">
              <FontAwesomeIcon
                icon={faTerminal}
                style={{ color: "#7510f7" }}
                size="3x"
                className=""
              />
              <h2 className="font-montbold font-bold my-4 text-xl ">
                Software
              </h2>
              <ul className="font-montbold font-light my-4 text-md leading-relaxed ">
                <li>Visual studio code</li>
                <li>PHP storm</li>
                <li>Sublime Text 3</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg  bg-white">
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ color: "#7510f7" }}
                size="3x"
                className=""
              />
              <h2 className="font-montbold font-bold my-4 text-xl">
                Languages
              </h2>
              <ul className="font-montbold font-light my-4 text-md leading-relaxed">
                <li>PHP/Laravel</li>
                <li>Javascript/React/NextJS</li>
                <li>Node JS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-20 mx-auto text-center px-4 ">
        <p className="text-lg md:text-lg font-bold font-montbold mb-20">
          If you are looking for a contractor/consultant/remote developer for
          your project or just want to talk tech, get in touch today!
        </p>
        <ButtonCta
          label="Contact"
          className="mt-4 lg:mt-0 lg:ml-2 py-3 px-16"
          path="/contact"
          hollow
          secondary
        >
          Contact
        </ButtonCta>
      </div>
    </React.Fragment>
  );
};

export default About;
