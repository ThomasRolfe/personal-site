import React, { useContext } from "react";
import PortfolioSummary from "./PortfolioSummary";
import LineSeparator from "../LineSeparator";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const PortfolioBanner = (props) => {
  const data = useContext(DataContext);

  return (
    <div className={` ${props.className} text-left`}>
      <div className="flex flex-col sm:flex-row justify-start items-baseline">
        <h3 className="font-montbold text-medium text-5xl ">Portfolio</h3>
        <Link
          to="/portfolio"
          className="sm:ml-5 border rounded text-gray-500 px-2 hover:text-primary hover:shadow hover:border-primary font-montbold"
        >
          See all
        </Link>
      </div>
      <LineSeparator className="bg-secondary mt-2 lg:mt-8 hidden sm:block" />
      <div className="">
        {data.loading && <div>Loading</div>}

        {!data.error &&
          data.portfolios
            .filter((portfolio, index) => {
              return index < 4;
            })
            .map((portfolio, index) => {
              return (
                <PortfolioSummary
                  key={index}
                  index={index}
                  {...portfolio}
                  siteTags={data.tags}
                />
              );
            })}
        {data.error && <div>Error occured</div>}
      </div>
    </div>
  );
};

export default PortfolioBanner;
