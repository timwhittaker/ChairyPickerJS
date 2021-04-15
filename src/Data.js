// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);


const Data = () => (
  <div className="main">
  <div class="header">
  <h1>Data</h1>
  <ul>
  <li><a href="default">Home</a></li>
  <li><a href="data">Data</a></li>
  <li><a href="Edit">Edit Member List</a></li>
</ul>
  </div>
  <div class="container">
  <Plot
        data={[
          {type: 'bar', x: ["Name One", "Name Two", "Name Three"], y: [2, 5, 3]},
        ]}
        layout={{width: 500, height: 400, title: 'Speaker Frequency'}}
      />
  </div>
  </div>
);

export default Data;
//render(<App />, document.getElementById("data"));