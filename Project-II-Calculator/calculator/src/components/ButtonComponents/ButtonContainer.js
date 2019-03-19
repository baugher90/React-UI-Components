import React from 'react';
import '../../App.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonContainer = () => {
  return (
    <div>
        <div className="btn-container">
          <ActionButton className="big-btn" text="clear" />
          <ActionButton  text="/" />
        </div>
        <div className="btn-container">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <ActionButton text="x" />
        </div>
        <div className="btn-container">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <ActionButton text="-" />
        </div>
        <div className="btn-container">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <ActionButton text="+" />
        </div>
        <div className="btn-container">
          <NumberButton className="big-btn" text="0" />
          <ActionButton text="=" />
        </div>
    </div>
  );
};

export default ButtonContainer;