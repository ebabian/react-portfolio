import React from 'react';
import './Contact.css'
import myResume from '../Resume/Elektra_Babian_Resume.pdf';
import { Link } from 'react-router-dom';
// import Footer from './Footer';

function Contact() {
    return (
        <div className="contact-container">
            <a href="#eb">
                <img id="up-arrow" alt="go up"src="https://img.icons8.com/pastel-glyph/64/000000/circled-up.png"/>
            </a>

            <h1 id="contact-h1">Let's connect.</h1>
            <a id="contact-email" href="mailto: babianelektra@gmail.com"><img alt="email" src="https://img.icons8.com/ios-glyphs/90/ffffff/filled-sent.png"/></a> 

            <div className="social-icons">
            <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                <img alt="github" src="https://img.icons8.com/material-rounded/96/ffffff/github.png"/>
            </a>
            <a href="https://www.linkedin.com/in/elektrababian/" target="_blank" rel="noreferrer">
                <img alt="linkedin" src="https://img.icons8.com/metro/52/ffffff/linkedin.png"/>
            </a>
            <a
            href={myResume} 
            download="Elektra_Babian_Resume.pdf">
                <img src="https://img.icons8.com/dotty/80/ffffff/open-resume.png"/>
            </a>
            
            </div>
            
        </div>
    );
}

export default Contact;