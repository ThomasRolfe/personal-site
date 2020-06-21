import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggle";
import SiteLogo from "./SiteLogo";
import TrackButtonClicked from "../../analytics/TrackButtonClicked";

const toolbar = (props) => (
  <header className="w-full bg-white h-16 px-4">
    <nav className="flex items-center h-full justify-between container mx-auto">
      <div className="h-full ">
        <SiteLogo />
      </div>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="text-gray-800 hidden md:block">
        <ul className="m-0 p-0 list-none flex">
          {props.siteRoutes
            .filter((route) => {
              return route.menu;
            })
            .map((route, key) => (
              <li className="px-6" key={key}>
                <Link
                  aria-label={route.routeName}
                  to={route.path}
                  className="hover:text-secondary capitalize font-montbold font-bold text-sm"
                  onClick={() => {
                    TrackButtonClicked(
                      `${route.routeName} clicked on desktop nav`
                    );
                  }}
                >
                  {route.routeName}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
