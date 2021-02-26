import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {

    const [toggleMenu, setTogMenu] = useState(true)

    const toggleNav = () => {
        setTogMenu(!toggleMenu)
    }

    return (
        <> 

        {
            toggleMenu ? 
            (<label 
                onClick={toggleNav}
                className="nav-toggle">
                    <img id="burg-menu" alt="menu" src="https://img.icons8.com/material-rounded/96/000000/menu--v3.png"/>
                </label>)

            :
            (<div className="burg-list fade-in">
            <img
            onClick={toggleNav} 
            id="burg-x" 
            alt="close" 
            src="https://img.icons8.com/material/48/ffffff/multiply--v1.png"/>
                <Link 
                onClick={toggleNav}
                to={'/home'} className="navLink2">Home</Link>
                <Link 
                onClick={toggleNav}
                to={'/projects'} className="navLink2">Work</Link>
                <Link 
                onClick={toggleNav}
                to={'/about'} className="navLink2">About</Link>
                {/* <Link to={'/contact'} className="navLink2">Contact</Link> */}
                <h4 className="navLink-contact">Get in touch</h4>
                <a 
                id="nav-mailto"
                href="mailto:babianelektr@gmail.com">babianelektra@gmail.com</a>
            </div>)
        }


        {/* <nav className="fade-in nav">
            <Link to={'/home'} className="navLink">Home</Link>
            <Link to={'/about'} className="navLink">About</Link>
            <Link to={'/projects'} className="navLink">Portfolio</Link>
            <Link to={'/contact'} className="navLink">Contact</Link>
        </nav> */}
        {/* <div className="burger-menu fade-in">
            <Menu outerContainerId={"App"}>
                <Link to={'/home'} className="navLink"> Home </Link>
                <Link to={'/about'} className="navLink"> About </Link>
                <Link to={'/projects'} className="navLink">Portfolio</Link>
                <Link to={'/contact'} className="navLink">Contact</Link>
            </Menu>
        </div> */}
        </>
    );
};

export default Nav;

