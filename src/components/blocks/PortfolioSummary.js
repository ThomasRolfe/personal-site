import React from "react";
import TagPill from "../TagPill";
import OnVisible from "react-on-visible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PortfolioSummary = (props) => {
  const evenRow = (props.index + 1) % 2 === 0;

  return (
    <OnVisible className="fadeUpPrepare" percent={40}>
      <div
        className={`flex flex-col lg:flex-row mb-16 my-10 lg:my-20 py-6 ${
          evenRow && "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2">
          <h3 className="font-montbold font-semibold text-3xl">
            {props.title}
          </h3>
          <a
            target="_blank"
            href={props.url}
            rel="noopener noreferrer"
            className="hover:text-brightblue text-mutedpurple my-2 inline-block"
            title="Visit site"
          >
            {props.url}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size={"1x"}
              className="mx-3"
            />
          </a>
          <div className="flex flex-row justify-start flex-wrap">
            {props.tags.map((tag, index) => {
              return <TagPill key={index} name={tag} className="mr-2" />;
            })}
          </div>
          <p className="font-montbold mt-8 mb-6 font-light">
            {props.shortDescription}{" "}
            <Link to="/" className="text-mutedpurple hover:text-brightblue">
              Read more
            </Link>
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center ">
          <div
            className={`grid justify-center ${
              evenRow ? "lg:pr-6" : "lg:pl-6"
            } `}
          >
            <a href={props.url}>
              <img src={props.image} className="shadow-xl rounded-md" alt="" />
            </a>
          </div>
        </div>
      </div>
    </OnVisible>
  );
};

export default PortfolioSummary;
