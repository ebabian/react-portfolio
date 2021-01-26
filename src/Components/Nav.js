import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="fade-in">
                <Link to={'/home'} className="navLink">Home</Link>
                <Link to={'/projects'} className="navLink">Projects</Link>
                <Link to={'/contact'} className="navLink">Contact</Link>
                <Link to={'/about'} className="navLink">About</Link>
        </nav>
    );
};

export default Nav;