// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Speakers from "./field-array";

const App = () => (
  <div className="main">
  <div class="header">
  <h1>ChairyPicker</h1>
  <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="data.asp">Data</a></li>
</ul>
  </div>
  <div class="container">
    <Speakers />
  </div>
  </div>
);

render(<App />, document.getElementById("root"));