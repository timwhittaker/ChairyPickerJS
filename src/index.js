// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {BrowserRouter} from 'react-router-dom'

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
