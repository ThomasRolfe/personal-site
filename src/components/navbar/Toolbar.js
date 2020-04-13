import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggle";

const toolbar = (props) => (
  <header className="w-full fixed bg-white h-12 top-0 left-0 px-4">
    <nav className="flex items-center h-full justify-between">
      <div className="text-gray-800 text-xl">
        <Link to="/">THE LOGO</Link>
      </div>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="text-gray-800 hidden md:block">
        <ul className="m-0 p-0 list-none flex">
          <li className="px-2">
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="hover:text-red-600">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact" className="hover:text-red-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
