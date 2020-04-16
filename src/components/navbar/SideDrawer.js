import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { Swipeable } from "react-swipeable";
import SiteLogo from "./SiteLogo";

const sideDrawer = (props) => {
  return (
    <Swipeable
      onSwiped={(eventData) => props.closeDrawer}
      onSwipedLeft={props.closeDrawer}
    >
      <nav
        className={`h-full bg-white shadow-lg fixed top-0 left-0 w-48 z-50 side-drawer ${
          props.show && "side-drawer-open"
        }`}
      >
        <div className="text-gray-800 text-xl px-2 pt-5">
          <SiteLogo />
        </div>
        <ul className="list-none flex flex-col">
          {props.siteRoutes.map((route, key) => (
            <li className="px-2" key={key}>
              <Link
                to={route.path}
                className="hover:text-red-600 w-full h-full block p-5 capitalize font-montbold font-bold"
              >
                {route.routeName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Swipeable>
  );
};

export default sideDrawer;
