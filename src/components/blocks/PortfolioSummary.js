import React from "react";
import TagPill from "../TagPill";
import OnVisible from "react-on-visible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ButtonCta from "../ButtonCta";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            {props.title.rendered}
          </h3>
          <a
            target="_blank"
            href={props.site_link}
            rel="noopener noreferrer"
            className="hover:text-primary text-secondary my-2 inline-block font-montbold"
            title="Visit site"
          >
            {props.site_link}
          </a>
          {props.github_link && (
            <>
              <span className="font-bold px-2"> | </span>
              <a
                href={props.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size={"lg"}
                  style={{ color: "black" }}
                  className=" transform hover:scale-125 duration-100 ease-in-out"
                />
              </a>
            </>
          )}
          <div className="flex flex-row justify-start flex-wrap">
            {props.tags.map((tag, index) => {
              return (
                <TagPill
                  key={index}
                  name={props.siteTags[tag]}
                  className="mr-2"
                />
              );
            })}
          </div>
          <p className="font-montbold mt-8 mb-6 font-light">
            <span
              dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}
            ></span>
            <Link
              to={`/portfolio/${props.slug}`}
              className="text-secondary hover:text-primary block mt-4"
            >
              <ButtonCta
                secondary
                label="Read More"
                className=" no-focus py-2 px-6"
                hollow
              >
                Read more
              </ButtonCta>
            </Link>
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center ">
          <div
            className={`grid justify-center ${
              evenRow ? "lg:pr-6" : "lg:pl-6"
            } `}
          >
            <a href={props.site_link}>
              <img
                src={props.jetpack_featured_media_url}
                className="shadow-xl rounded-lg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </OnVisible>
  );
};

export default PortfolioSummary;
