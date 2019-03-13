import React, { Component } from 'react';
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="gridContainer">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Team" component={Team} />
          <Route path="/Contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
