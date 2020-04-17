import React, { useState, useRef, useEffect } from "react";
import RefInView from "./RefInView";

const AddClassOnView = (props) => {
  const [classAdded, setClassAdded] = useState(false);
  console.log(props.refBounds);

  // useEffect(() => {
  //   if (RefInView(element, props.scrollCoord)) {
  //     setClassAdded(true);
  //   }
  // }, [props.scrollCoord]);

  return (
    <div
      className={`${props.className.join(" ")} ${
        classAdded && props.newClassName.join(" ")
      }`}
    >
      {props.children}
    </div>
  );
};

export default AddClassOnView;
