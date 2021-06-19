import React from "react";
import ReactDOM, { version } from "react-dom";
import AppContainer from "./containers/AppContainer";

console.log("version", version);

ReactDOM.render(<AppContainer />, document.getElementById("root"));
