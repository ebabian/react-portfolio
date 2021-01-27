import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer fade-in">
            <a href="https://github.com/ebabian" target="_blank">
                <img id="social" src="https://img.icons8.com/material-sharp/96/000000/github.png"/>
            </a>
            <a href="https://www.linkedin.com/in/elektrababian/" target="_blank">
                <img id="social" src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"/>
            </a>
        </div>
    );
};

export default Footer;