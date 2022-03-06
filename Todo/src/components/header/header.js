import React from 'react';
import logo from '../../logo.png';
import './header.css'
const Header = () => {
    return (
        <header className="header-container">
            <img src={logo} alt="" className="logo"/>
            <h2 className="header">Trello header</h2>
        </header>
    );
};

export default Header;