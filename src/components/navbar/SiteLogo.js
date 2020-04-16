import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";

const SiteLogo = (props) => (
  <Link to="/">
    <Logo className="h-full py-5 fill-current text-offblack" />
  </Link>
);

export default SiteLogo;
