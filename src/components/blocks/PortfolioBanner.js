import React, { useEffect, useState } from "react";
import PortfolioSummary from "./PortfolioSummary";
import LineSeparator from "../LineSeparator";
import { Link } from "react-router-dom";
import Axios from "axios";

const PortfolioBanner = (props) => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_ROOT}posts/?categories=16`)
      .then((response) => {
        setPortfolios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={` ${props.className} text-left`}>
      <div className="flex flex-col sm:flex-row justify-start items-baseline">
        <h3 className="font-montbold text-medium text-5xl ">Portfolio</h3>
        <Link
          to="/portfolio"
          className="sm:ml-5 border rounded text-gray-500 px-2 hover:text-brightblue hover:shadow hover:border-brightblue font-montbold"
        >
          See all
        </Link>
      </div>
      <LineSeparator className="bg-mutedpurple mt-2 lg:mt-8 hidden sm:block" />
      <div className="">
        {props.loading && <div>Loading</div>}
        {portfolios.length > 0 &&
          !props.loading &&
          portfolios.map((portfolio, index) => {
            return (
              <PortfolioSummary
                key={index}
                index={index}
                {...portfolio}
                siteTags={props.tags}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PortfolioBanner;
