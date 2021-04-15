// Helper styles for demo
import "./helper.css";

import React from "react";

import {Speakers} from "./field-array";


const ChairyPicker = () => (
  <div className="main">
  <div className="header">
  <h1>ChairyPicker</h1>
  <ul>
  <li><a href="default">Home</a></li>
  <li><a href="data">Data</a></li>
  <li><a href="Edit">Edit Member List</a></li>
</ul>
  </div>
  <div className="container">
    <Speakers />
  </div>
  </div>
);


export default ChairyPicker;

//render(<App />, document.getElementById("root"));