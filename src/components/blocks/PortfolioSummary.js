import React from "react";
import TagPill from "../TagPill";
import OnVisible from "react-on-visible";

const PortfolioSummary = (props) => {
  return (
    <OnVisible className="fadeUpPrepare" percent={40}>
      <div
        className={`flex flex-col lg:flex-row my-14 lg:my-20 py-6 ${
          (props.index + 1) % 2 === 0 && "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2">
          <h3 className="font-montbold font-semibold text-2xl">
            {props.title}
          </h3>
          <a
            target="_blank"
            href={props.url}
            rel="noopener noreferrer"
            className="hover:text-mutedpurple text-brightblue my-2 block"
          >
            {props.url}
          </a>
          <div className="flex flex-row justify-start flex-wrap">
            {props.tags.map((tag, index) => {
              return <TagPill key={index} name={tag} className="mr-2" />;
            })}
          </div>
          <p className="font-montbold mt-10 mb-8 font-light">
            {props.shortDescription}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center ">
          <div className="grid justify-center">
            <img src={props.image} />
          </div>
        </div>
      </div>
    </OnVisible>
  );
};

export default PortfolioSummary;
