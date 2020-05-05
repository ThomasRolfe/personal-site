import React from "react";
import { Link } from "react-router-dom";

const ButtonCta = (props) => {
  const styles = [
    "rounded-lg",
    "shadow-md",
    "hover:shadow-lg",
    "duration-200",
    "ease-in-out",
    "font-montbold",
    "border-solid",
    "border-2",
    "border-brightblue",
  ];
  props.hollow
    ? styles.push("bg-white", "text-brightblue")
    : styles.push("bg-brightblue", "text-white");

  if (props.path) {
    return (
      <Link to={props.path} ariaLabel={props.label}>
        {" "}
        <button className={`${styles.join(" ")} ${props.className}`}>
          {props.children}
        </button>
      </Link>
    );
  }

  return (
    <button className={`${styles.join(" ")} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default ButtonCta;
