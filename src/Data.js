// Helper styles for demo
import "./helper.css";

import React from "react";
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
var gaussian = require('./gaussian');

const Plot = createPlotlyComponent(Plotly);

var distribution = gaussian(0, 25);

let x = [];

for (var i = 0; i < 5000; i++)
{
  var sample = Math.floor(Math.abs(distribution.ppf(Math.random())));
  x.push(sample);
}

const Data = () => (
  <div className="main">
  <div className="header">
  <h1>Data</h1>
  <ul>
  <li><a href="default">Home</a></li>
  <li><a href="data">Data</a></li>
  <li><a href="Edit">Edit Member List</a></li>
</ul>
  </div>
  <div className="container">
  <Plot
        data={[
          {type: 'histogram', x:x},
        ]}
        layout={{width: 500, height: 400, title: 'Next chair distribution'}}
      />
  </div>
  </div>
);

export default Data;
//render(<App />, document.getElementById("data"));