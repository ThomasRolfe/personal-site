import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { Swipeable } from "react-swipeable";
import SiteLogo from "./SiteLogo";
import TrackButtonClicked from "../../analytics/TrackButtonClicked";

const sideDrawer = (props) => {
  return (
    <Swipeable
      onSwiped={(eventData) => props.closeDrawer}
      onSwipedLeft={props.closeDrawer}
    >
      <nav
        className={`h-full bg-white shadow-lg fixed top-0 left-0 w-48 z-50 side-drawer overflow-scroll ${
          props.show && "side-drawer-open"
        }`}
      >
        <div className="text-gray-800 w-9/12 px-2 pt-5">
          <SiteLogo className="w-1/2 pl-2" onClick={props.onClick} />
        </div>
        <ul className="list-none flex flex-col">
          {props.siteRoutes
            .filter((route) => {
              return route.menu;
            })
            .map((route, key) => (
              <li className="px-2" key={key}>
                <Link
                  aria-label={route.routeName}
                  to={route.path}
                  className="hover:text-secondary w-full h-full block p-5 capitalize font-montbold font-bold"
                  onClick={() => {
                    TrackButtonClicked(
                      `${route.routeName} clicked on mobile nav`
                    );
                    props.onClick();
                  }}
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
