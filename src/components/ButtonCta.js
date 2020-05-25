import React from "react";
import { Link } from "react-router-dom";

const ButtonCta = (props) => {
  const color = props.secondary ? "secondary" : "primary";

  const styles = [
    "rounded-lg",
    "shadow-md",
    "hover:shadow-lg",
    "duration-200",
    "ease-in-out",
    "font-montbold",
    "border-solid",
    "border-2",
    `border-${color}`,
  ];

  props.hollow
    ? styles.push("bg-white", `text-${color}`)
    : styles.push(`bg-${color}`, "text-white");

  if (props.path) {
    return (
      <Link to={props.path} aria-label={props.label}>
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
