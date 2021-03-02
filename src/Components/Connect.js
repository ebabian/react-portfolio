import React from 'react';
import './Connect.css';
import Fade from 'react-reveal/Fade';
import { HashLink as Link } from 'react-router-hash-link';

function Connect() {


    return (
        <div className="connect-container">
            <Fade bottom>
            <Link to="work#eb">
            {/* <ScrollToTop smooth /> */}
                <img 
                id="up-arrow" 
                alt="go up"
                src="https://img.icons8.com/pastel-glyph/64/000000/circled-chevron-up.png"/>
               
            </Link>
            </Fade>

            <Fade bottom>
            <h1 id="connect-h1">Let's connect.</h1>
            </Fade>

            <Fade bottom>
            <a id="email" href="mailto: babianelektra@gmail.com">babianelektra@gmail.com</a> 
            </Fade>

            <Fade bottom>
            <div className="social-icons">
            <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                <img id="github-icon" src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/elektrababian/" target="_blank" rel="noreferrer">
                <img id="linkedin-icon" src="https://img.icons8.com/ios-filled/100/000000/linkedin.png" alt="LinkedIn"/>
            </a>
            </div>
            </Fade>
        </div>
    );
}

export default Connect;