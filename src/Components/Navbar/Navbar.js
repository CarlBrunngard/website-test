import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";




class Navbar extends Component {
    render() {
        return (
            <div className="section1">
                <ul className="navbarOptions">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Team">Team</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
