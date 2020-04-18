import React from "react";

const TagPill = (props) => {
  return (
    <div
      className={`rounded border text-xs px-2 text-gray-500 my-1 font-montbold uppercase hover:text-black hover:shadow ${props.className}`}
    >
      {props.name}
    </div>
  );
};

export default TagPill;
