import React, { useContext } from "react";
import LineSeparator from "../components/LineSeparator";
import PortfolioSummary from "../components/blocks/PortfolioSummary";
import DataContext from "../context/DataContext";
import Loading from "../components/helpers/Loading";

const Portfolio = (props) => {
  const data = useContext(DataContext);

  return (
    <div className="container py-8 mx-auto px-4 w-full">
      <div className="text-center">
        <h1 className="font-montbold text-4xl font-semibold ">Portfolio</h1>
        <LineSeparator className="bg-secondary mt-10" />
      </div>
      <div className="">
        {data.loading && <Loading />}
        {!data.loading &&
          !data.error &&
          data.portfolios.map((portfolio, index) => {
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

export default Portfolio;
