import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header2/Header2";
import Header4 from './Components/Header4/Header4';

class App extends Component {
  render() {
    return (
      <div className="gridContainer">
        <Header />
        <Header2 />
        <Header4 />
      </div>
    );
  }
}

export default App;
