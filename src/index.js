import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import PeopleAPI from "./components/peopleAPI";

//ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <div>
    <Counters />
    {/* <App /> */}
    {/* <PeopleAPI /> */}
  </div>,
  document.getElementById("root")
);
