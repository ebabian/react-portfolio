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
                className="nav-toggle fade-in">
                    <img id="burg-menu" alt="menu" src="https://img.icons8.com/material-rounded/96/000000/menu--v3.png"/>
                </label>)

            :
            (<div className="burg-list nav-fade-in">
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
                to={'/work'} className="navLink2">Work</Link>
                <Link 
                onClick={toggleNav}
                to={'/about'} className="navLink2">About</Link>
                <h4 className="navLink-contact">Get in touch</h4>
                <a 
                id="nav-mailto"
                href="mailto:babianelektr@gmail.com">babianelektra@gmail.com</a>
            </div>)
        }
        </>
    );
};

export default Nav;

