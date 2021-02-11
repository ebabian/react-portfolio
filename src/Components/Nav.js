import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';


const Nav = () => {
    return (
        <>
        <nav className="fade-in nav">
            <Link to={'/home'} className="navLink"> Home </Link>
            <Link to={'/about'} className="navLink"> About </Link>
            <Link to={'/projects'} className="navLink">Portfolio</Link>
            <Link to={'/contact'} className="navLink">Contact</Link>
        </nav>
        <div className="burger-menu fade-in">
            <Menu outerContainerId={"App"}>
                <Link to={'/home'} className="navLink"> Home </Link>
                <Link to={'/about'} className="navLink"> About </Link>
                <Link to={'/projects'} className="navLink">Portfolio</Link>
                <Link to={'/contact'} className="navLink">Contact</Link>
            </Menu>
        </div>
        </>
    );
};

export default Nav;

