import React from 'react';
import './Button.css';

const ActionButton = props => <button className={`big-btn ${props.className}`}>{props.text}</button>;

export default ActionButton;