import React from "react";
import SocialGroup from "./blocks/SocialGroup";
import { Link } from "react-router-dom";
// import SocialGroup from "./components/SocialGroup";

const Footer = (props) => (
  <div className="w-full bg-gray-100">
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-b">
        <div className="w-full mb-4">
          <span className="font-montbold font-bold mb-2">Site map</span>
          <ul>
            {props.routes
              .filter((route) => {
                return route.menu;
              })
              .map((route, index) => {
                return (
                  <li className="mb-3 lg:float-left lg:mr-4" key={index}>
                    <Link
                      to={route.path}
                      label={route.routeName}
                      className="capitalize font-montbold text-light text-sm text-gray-600"
                    >
                      {route.routeName}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full md:w-2/3 text-center">
            <SocialGroup size="2x" iconPadding="p-4" />
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-6">
        <p className="font-montbold">
          Copyright © {new Date().getFullYear()} Tom Rolfe
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
