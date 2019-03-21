import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
return(
<div className="calc-total">{props.text}</div>
)
}

export default CalculatorDisplay;