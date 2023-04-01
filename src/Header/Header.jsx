import React from 'react';
import './Header.css'
import logo from '../assets/20220223_195035-01.jpeg'
const Header = () => {
    return (
        <div className='nav'>
            <div>
                <h2>Programmer's Blog</h2>
            </div>
            <div className='attribute'>
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="Logout">Login</a>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;