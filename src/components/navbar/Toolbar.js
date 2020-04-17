import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggle";
import SiteLogo from "./SiteLogo";

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
          {props.siteRoutes.map((route, key) => (
            <li className="px-6" key={key}>
              <Link
                to={route.path}
                className="hover:text-mutedpurple capitalize font-montbold font-bold text-sm"
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
