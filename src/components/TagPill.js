import React from "react";

const TagPill = (props) => {
  let activeClasses = "text-secondary hover:text-secondary";
  let standardClasses = "text-gray-500";
  return (
    <div
      className={`rounded border text-xs px-2 my-1 font-montbold uppercase hover:text-black hover:shadow ${
        props.active ? activeClasses : standardClasses
      }  ${props.className}`}
      onClick={() => {
        props.onClick(props.tagIndex, props.name);
      }}
    >
      {props.name}
    </div>
  );
};

export default TagPill;
