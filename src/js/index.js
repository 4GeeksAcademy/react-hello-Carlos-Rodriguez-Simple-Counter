//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

import Counter from "./component/reloj";

let counter = 0;


setInterval(function(){
const uno = counter %60
const dos = Math.floor(counter/60)
const tres = Math.floor(counter/3600)
const cuatro = Math.floor(counter/(24*3600))
counter++;

ReactDOM.render(<Counter fila1={uno} fila2={dos} fila3={tres} fila4={cuatro}/>, document.querySelector("#app"));

}, 1000);