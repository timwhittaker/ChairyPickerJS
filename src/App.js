// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {Route, Link} from 'react-router-dom';

import ChairyPicker from "./ChairyPicker";
import Data from "./Data";
import Edit from "./Edit";

function App(){
    return(
        <div className="App">
            <Route exact path="/" component={ChairyPicker}/>
            <Route exact path="/Default" component={ChairyPicker}/>
            <Route exact path="/Data" component={Data}/>
            <Route exact path="/Edit" component={Edit}/>
        </div>
    );
}

export default App;