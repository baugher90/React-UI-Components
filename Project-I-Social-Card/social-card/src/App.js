import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="app">
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </div>
  );
};

export default App;
