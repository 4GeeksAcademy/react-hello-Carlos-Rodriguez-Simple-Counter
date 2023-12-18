//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";


function Counter (props) {
    return (<div className="Counter1"> 
     <div className="Reloj"><i className="fa-regular fa-clock"></i></div>
     <div className="four">{props.fila4 %10}</div>
     <div className="three">{props.fila3 %10}</div>
     <div className="two">{props.fila2 %10}</div>
     <div className="one">{props.fila1 %10}</div>

    </div>);
}

Counter.propTypes = {

    fila1:PropTypes.number,
    fila2: PropTypes.number,
    fila3: PropTypes.number,
    fila4: PropTypes.number

};

let counter = 0;


setInterval(function(){
const uno = Math.floor(counter/1)
const dos = Math.floor(counter/10)
const tres = Math.floor(counter/100)
const cuatro = Math.floor(counter/1000)
counter++;
ReactDOM.render(<Counter fila1={uno} fila2={dos} fila3={tres} fila4={cuatro}/>, document.querySelector("#app"));

}, 1000);

