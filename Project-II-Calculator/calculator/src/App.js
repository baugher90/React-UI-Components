import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-wrapper">
        <CalculatorDisplay text="0" />
        <div className="btn-container">
          <ActionButton text="clear" />
          <NumberButton className="red-btn" text="/" />
        </div>
        <div className="btn-container">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton className="red-btn" text="x" />
        </div>
        <div className="btn-container">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton className="red-btn" text="-" />
        </div>
        <div className="btn-container">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton className="red-btn" text="+" />
        </div>
        <div className="btn-container">
          <ActionButton text="0" />
          <NumberButton className="red-btn" text="=" />
        </div>
      </div>
  );
};

export default App;
