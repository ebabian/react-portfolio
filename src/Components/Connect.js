import React from 'react';
import './Connect.css'
// import Footer from './Footer';

function Connect() {
    return (
        <div className="connect-container">
            <a href="#top-proj">
                <img id="up-arrow" alt="go up"src="https://img.icons8.com/pastel-glyph/64/000000/circled-up.png"/>
            </a>

            <h1 id="connect-h1">Let's connect.</h1>
            <a id="email" href="mailto: babianelektra@gmail.com">babianelektra@gmail.com</a> 

            <div className="social-icons">
            <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                <img id="github-icon" src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/elektrababian/" target="_blank" rel="noreferrer">
                <img id="linkedin-icon" src="https://img.icons8.com/ios-filled/100/000000/linkedin.png" alt="LinkedIn"/>
            </a>

            
                
            </div>
        </div>
    );
}

export default Connect;