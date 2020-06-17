import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./Routing";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
