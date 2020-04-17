import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";

const SiteLogo = (props) => (
  <Link to="/" onClick={props.onClick}>
    <Logo
      className={`h-full py-5 fill-current text-offblack ${props.className}`}
    />
  </Link>
);

export default SiteLogo;
