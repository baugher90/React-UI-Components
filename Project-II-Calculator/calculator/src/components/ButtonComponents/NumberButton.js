import React from 'react';
import './Button.css';

const NumberButton = ({className, text}) => {
    return(
        (<button className={`number-btn ${className}`}>{text}</button>)
    )
}

export default NumberButton;