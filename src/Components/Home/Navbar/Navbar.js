import React, { Component } from 'react';
import './Navbar.css';
import { NavLink, Link } from "react-router-dom";




class Navbar extends Component {
    render() {
        return (
            <div className="section1">
                <ul className="navbarOptions">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
