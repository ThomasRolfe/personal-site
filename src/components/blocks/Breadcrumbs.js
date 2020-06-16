import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = (props) => {
  return (
    <div className="flex mb-4">
      <ul className="flex text-gray-500 text-sm">
        {props.crumbs.map((crumb, index) => {
          return (
            <li className="flex items-center" key={index}>
              {index < props.crumbs.length - 1 ? (
                <Link to={crumb.path}>
                  <span className="hover:text-secondary hover:underline font-montbold">
                    {crumb.text}
                  </span>
                </Link>
              ) : (
                <span className="font-montbold">{crumb.text}</span>
              )}

              {index < props.crumbs.length - 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={"xs"}
                  style={{ color: "#dcdcdc" }}
                  className=" mx-4 "
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
