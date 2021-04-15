// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Speakers from "./field-array";

const ChairyPicker = () => (
  <div className="main">
  <div class="header">
  <h1>ChairyPicker</h1>
  <ul>
  <li><a href="default">Home</a></li>
  <li><a href="data">Data</a></li>
  <li><a href="Edit">Edit Member List</a></li>
</ul>
  </div>
  <div class="container">
    <Speakers />
  </div>
  </div>
);


export default ChairyPicker;

//render(<App />, document.getElementById("root"));