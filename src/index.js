// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Speakers from "./field-array";

const App = () => (
  <div className="app">
    <Speakers />
  </div>
);

render(<App />, document.getElementById("root"));

