import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";

const SiteLogo = (props) => (
  <Link to="/" onClick={props.onClick}>
    <img
      src="/images/logo-medium.png"
      alt="Tom Rolfe Logo"
      className={`h-full py-3 fill-current text-offblack ${props.className}`}
    />
    {/* <Logo
      className={`h-full py-5 fill-current text-offblack ${props.className}`}
    /> */}
  </Link>
);

export default SiteLogo;
