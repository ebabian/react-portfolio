import React from 'react';
import './Contact.css'
import myResume from '../Resume/Elektra_Babian_Resume.pdf';
import Fade from 'react-reveal/Fade';


function Contact() {
    return (
        <div className="contact-container">
            <Fade bottom>
            <a href="#eb">
                <img 
                id="up-arrow" 
                alt="go up" 
                src="https://img.icons8.com/pastel-glyph/64/ffffff/circled-chevron-up.png"/>   
            </a>
            </Fade>

            <Fade bottom>
            <h1 id="contact-h1">Let's connect.</h1>
            </Fade>

            <Fade bottom>
            <a id="contact-email" href="mailto: babianelektra@gmail.com">babianelektra@gmail.com</a><br/>
            </Fade>    


            <Fade bottom>
            <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                <img
                id="contact-social" 
                alt="github" 
                src="https://img.icons8.com/material-rounded/96/ffffff/github.png"/>
            </a>
            </Fade>

            <Fade bottom>
            <a href="https://www.linkedin.com/in/elektrababian/" target="_blank" rel="noreferrer">
                <img
                id="contact-social-li" 
                alt="linkedin" 
                src="https://img.icons8.com/metro/52/ffffff/linkedin.png"/>
            </a>
            </Fade>

            <Fade bottom>
            <a
            href={myResume} 
            download="Elektra_Babian_Resume.pdf">
                <img
                id="contact-social" 
                alt="resume" 
                src="https://img.icons8.com/dotty/80/ffffff/open-resume.png"/>
            </a>
            </Fade>
            
            <div id="bottom-border"></div>
            </div>
            
    );
}

export default Contact;