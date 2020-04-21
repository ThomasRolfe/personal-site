import React from "react";
import PortfolioSummary from "./PortfolioSummary";
import LineSeparator from "../LineSeparator";
import { Link } from "react-router-dom";

const Portfolios = [
  {
    title: "VuStock - Warehouse Management",
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
    image: "https://source.unsplash.com/random/500x250?sig=2",
  },
  {
    title: "MyMusicGrades - Online Guitar Tuition",
    url: "www.example.com",
    tags: ["React", "Laravel", "Tailwind"],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://source.unsplash.com/random/500x250?sig=1",
  },
  {
    title: "LearnOffice - Microsoft Office Education",
    url: "www.example.com",
    tags: ["React", "Laravel", "Tailwind"],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://source.unsplash.com/random/500x250?sig=3",
  },
  {
    title: "Personal Website - You're Here!",
    url: "www.example.com",
    tags: ["React", "Laravel", "Tailwind"],
    shortDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasdet justo duo gubergren...`,
    image: "https://source.unsplash.com/random/500x250?sig=4",
  },
];

const PortfolioBanner = (props) => (
  <div className={` ${props.className} text-left`}>
    <div className="flex flex-col sm:flex-row justify-start items-baseline">
      <h3 className="font-montbold text-medium text-5xl ">Portfolio</h3>
      <Link
        to="/portfolio"
        className="sm:ml-5 border rounded text-gray-500 px-2 hover:text-brightblue hover:shadow hover:border-brightblue"
      >
        See all
      </Link>
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
