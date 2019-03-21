import React from 'react';
import './Button.css';

const ActionButton = ({className, text}) => {
    return(
        <button className={`red-btn ${className}`}>{text}</button>
    )
}

export default ActionButton;