import React from "react";
import PortfolioSummary from "./PortfolioSummary";
import LineSeparator from "../LineSeparator";
import ButtonCta from "../ButtonCta";
import { Link } from "react-router-dom";

const Portfolios = [
  {
    title: "Dribble Home Page",
    url: "www.example.com",
    tags: [
      "React",
      "Laravel",
      "Tailwind",
      "React",
      "Laravel",
      "Tailwind",
      "Laravel",
      "Tailwind",
      "React",
    ],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://via.placeholder.com/500x250.png",
  },
  {
    title: "Dribble Home Page",
    url: "www.example.com",
    tags: ["React", "Laravel", "Tailwind"],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://via.placeholder.com/500x250.png",
  },
  {
    title: "Dribble Home Page",
    url: "www.example.com",
    tags: ["React", "Laravel", "Tailwind"],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://via.placeholder.com/500x250.png",
  },
  {
    title: "Dribble Home Page",
    url: "www.example.com",
    tags: ["React", "Laravel", "Tailwind"],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://via.placeholder.com/500x250.png",
  },
];

const PortfolioBanner = (props) => (
  <div className={` ${props.className} text-left`}>
    <div className="flex flex-col sm:flex-row justify-between items-baseline">
      <h3 className="font-montbold text-medium text-5xl ">Portfolio</h3>
      <Link
        to="/portfolio"
        className="border rounded text-gray-500 px-2 hover:text-brightblue hover:shadow hover:border-brightblue"
      >
        See all
      </Link>
      {/* <ButtonCta
        hollow
        className=" lg:mt-0 lg:ml-2 py-1 px-2 text-xs"
        path="/portfolio"
      >
        
      </ButtonCta> */}
    </div>
    <LineSeparator className="bg-mutedpurple mt-2 lg:mt-8 hidden sm:block" />
    <div className="">
      {Portfolios.map((portfolio, index) => (
        <PortfolioSummary key={index} index={index} {...portfolio} />
      ))}
    </div>
  </div>
);

export default PortfolioBanner;
