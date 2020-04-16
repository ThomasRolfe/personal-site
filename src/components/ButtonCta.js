import React from "react";
import { Link } from "react-router-dom";

const ButtonCta = (props) => {
  const styles = [
    "rounded-lg",
    "shadow font-montbold",
    "py-3 px-16",
    "border-solid",
    "border-2",
    "border-brightblue",
  ];
  props.hollow
    ? styles.push("bg-white", "text-brightblue")
    : styles.push("bg-brightblue", "text-white");

  return (
    <Link to={props.path}>
      <button className={`${styles.join(" ")} ${props.className}`}>
        {props.children}
      </button>
    </Link>
  );
};

export default ButtonCta;
