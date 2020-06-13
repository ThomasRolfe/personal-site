import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = (props) => {
  return (
    <div className="flex items-center justify-center p-20">
      <span className="block font-montbold font-bold text-4xl mr-4">
        Loading{" "}
      </span>
      <FontAwesomeIcon
        icon={faCircleNotch}
        style={{ color: "#00bce1" }}
        size={"3x"}
        className="fa-spin loading-spinner"
      />
    </div>
  );
};

export default Loading;
