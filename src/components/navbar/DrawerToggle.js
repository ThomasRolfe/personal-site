import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const drawerToggleButton = (props) => (
  <button className="focus:outline-none md:hidden" onClick={props.click}>
    <FontAwesomeIcon icon={faBars} className="text-gray-800" />
  </button>
);

export default drawerToggleButton;
