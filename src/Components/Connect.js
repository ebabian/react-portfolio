import React from 'react';
import './Connect.css'
// import Footer from './Footer';

function Connect() {
    return (
        <div className="connect-container">
            <h1 id="connect-h1">Let's connect.</h1>
            <a id="email" href="mailto: babianelektra@gmail.com">babianelektra@gmail.com</a> 

            <div className="social-icons">
                <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                    <img id="github-icon" alt="GitHub"src="https://img.icons8.com/material-rounded/48/ffffff/github.png"/>
                </a>
                <a href="https://www.linkedin.com/in/elektrababian/" target="_blank" rel="noreferrer">
                    <img id="linkedin-icon" alt="LinkedIn" src="https://img.icons8.com/metro/52/ffffff/linkedin.png"/>
                </a>
            </div>
        </div>
    );
}

export default Connect;