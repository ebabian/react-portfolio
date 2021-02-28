import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer fade-in">
            <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                <img id="social" src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/elektrababian/" target="_blank" rel="noreferrer">
                <img id="social2" src="https://img.icons8.com/ios-filled/100/000000/linkedin.png" alt="LinkedIn"/>
            </a>
        </div>
    );
};

export default Footer;