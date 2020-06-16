import React from "react";
import { Helmet } from "react-helmet";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Page404 = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Page Not Found | Tom Rolfe | Full Stack Web Developer</title>
      </Helmet>
      <div className="container py-8 mx-auto px-4 w-full">
        <div className=" text-center">
          <h1 className="font-montbold text-4xl font-semibold my-10">
            404 Page Not Found
          </h1>
          <div className="my-20">
            <FontAwesomeIcon
              icon={faBug}
              style={{ color: "#7510f7" }}
              size={"10x"}
              className=""
            />
          </div>
          <div className="my-4">
            <p className="font-montbold text-2xl font-semibold">
              Check out the{" "}
              <Link to="/" className="text-secondary hover:text-primary">
                home page{" "}
              </Link>{" "}
              to find what you were looking for.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
