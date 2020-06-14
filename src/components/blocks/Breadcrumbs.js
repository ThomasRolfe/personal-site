import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = (props) => {
  return (
    <div className="flex my-4">
      <ul className="flex text-gray-500">
        {props.crumbs.map((crumb, index) => {
          return (
            <li className="flex items-center" key={index}>
              {index < props.crumbs.length - 1 ? (
                <Link to={crumb.path}>
                  <span className="hover:text-secondary hover:underline">
                    {crumb.text}
                  </span>
                </Link>
              ) : (
                <span className="">{crumb.text}</span>
              )}

              {index < props.crumbs.length - 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={"xs"}
                  style={{ color: "#dcdcdc" }}
                  className=" mx-4 mt-1"
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
