import React, { Component } from 'react';
import './Header.css';



class Header extends Component {
    render() {
        return (
            <div className="section1">
                <ul className="navbarOptions">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
