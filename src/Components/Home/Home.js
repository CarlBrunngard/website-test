import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar";
import Content from './Content/Content';
import Footer from './Footer/Footer';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="gridContainer">
                    <Navbar />
                    <Content />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default Home;