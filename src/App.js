import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Navbar from './containers/Navbar/index.js';
import Home from './containers/Home/index.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
