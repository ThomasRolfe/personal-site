import React from "react";
import { Link } from "react-router-dom";

const SiteLogo = (props) => (
  <Link to="/" onClick={props.onClick}>
    <img
      src="/images/logo-small.png"
      alt="Tom Rolfe Logo"
      className={`h-full py-3 fill-current text-offblack ${props.className}`}
    />
  </Link>
);

export default SiteLogo;
