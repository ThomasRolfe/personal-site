import React, { useEffect, useState } from "react";
import LineSeparator from "../components/LineSeparator";
import { Link } from "react-router-dom";
import Axios from "axios";
import PortfolioSummary from "../components/blocks/PortfolioSummary";

const Portfolio = (props) => {
  const [portfolios, setPortfolios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_ROOT}posts/?categories=16`)
      .then((response) => {
        setPortfolios(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="container py-8 mx-auto px-4 w-full">
      <div className="text-center">
        <h1 className="font-montbold text-4xl font-semibold ">Portfolio</h1>
        <LineSeparator className="bg-secondary mt-10" />
      </div>
      <div className="">
        {(props.loading || isLoading) && <div>Loading</div>}
        {!props.loading &&
          !isLoading &&
          !error &&
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
        {error && <div>Error occured</div>}
      </div>
    </div>
  );
};

export default Portfolio;
