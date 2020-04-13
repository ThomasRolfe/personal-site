import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { Swipeable } from "react-swipeable";

const sideDrawer = (props) => {
  return (
    <Swipeable
      onSwiped={(eventData) => props.closeDrawer}
      onSwipedLeft={props.closeDrawer}
    >
      <nav
        className={`h-full bg-white shadow-lg fixed top-0 left-0 w-48 z-50 side-drawer ${
          props.show ? "side-drawer-open" : ""
        }`}
      >
        <ul className="list-none flex flex-col">
          {props.siteRoutes.map((route, key) => (
            <li className="px-2" key={key}>
              <Link
                to={route.path}
                className="hover:text-red-600 w-full h-full block p-5 capitalize"
              >
                {route.routeName}
              </Link>
            </li>
          ))}
          {/* <li>
            <Link
              to="/"
              className="hover:text-red-600 w-full h-full block p-5 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-red-600 w-full h-full block p-5 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-red-600 w-full h-full block p-5 "
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </Swipeable>
  );
};

export default sideDrawer;
