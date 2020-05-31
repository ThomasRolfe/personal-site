import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProcessBannerCard = (props) => {
  return (
    <div className="rounded-lg border h-full p-8 bg-white transition ease-in-out duration-300 text-center">
      <FontAwesomeIcon
        icon={props.icon}
        style={{ color: props.colour }}
        size={props.size}
        className=""
      />
      <h4 className="font-montbold font-bold my-4 text-xl">{props.title}</h4>
      <p className="font-montbold font-light my-4 text-md leading-relaxed">
        {props.description}
      </p>
    </div>
  );
};

export default ProcessBannerCard;
