import React, { useContext, useState, useEffect } from "react";
import LineSeparator from "../components/LineSeparator";
import PortfolioSummary from "../components/blocks/PortfolioSummary";
import DataContext from "../context/DataContext";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BreadCrumbs from "../components/blocks/Breadcrumbs";

const Portfolio = (props) => {
  const data = useContext(DataContext);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (!data.portfolios) {
      return;
    }
    setBreadcrumbs([
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Portfolio",
        path: "/portfolio",
      },
    ]);
  }, [data.portfolios]);

  if (data.error) {
    return <Error />;
  }

  return (
    <div className="container py-8 mx-auto px-4 w-full">
      <BreadCrumbs crumbs={breadcrumbs} />
      <div className="text-center">
        <h1 className="font-montbold text-4xl font-semibold ">Portfolio</h1>
        <LineSeparator className="bg-secondary mt-10" />
      </div>
      <div className="">
        {data.loading && <Loading />}
        {!data.loading &&
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
      </div>
    </div>
  );
};

export default Portfolio;
