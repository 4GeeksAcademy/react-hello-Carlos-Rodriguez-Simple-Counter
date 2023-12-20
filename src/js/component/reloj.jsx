import React from "react";
import PropTypes from 'prop-types';

function Counter (props) {
    return (<div className="Counter1"> 
     <div className="Reloj"><i className="fa-regular fa-clock"></i></div>
     <div className="four">{props.fila4}</div>
     <div className="three">{props.fila3}</div>
     <div className="two">{props.fila2}</div>
     <div className="one">{props.fila1}</div>

    </div>);
}

Counter.propTypes = {

    fila1:PropTypes.number,
    fila2: PropTypes.number,
    fila3: PropTypes.number,
    fila4: PropTypes.number

};


export default Counter;
