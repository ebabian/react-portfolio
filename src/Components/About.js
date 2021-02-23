import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav'
import './About.css'
// import Footer from './Footer'

const About = () => {
    return (
        <div>
            <div >
                {/* <Link className="home-eb fade-in" to={'/home'}>Elektra Babian</Link> */}
                <div className="About">
                    <Nav />
                <div className="about-container">
                    <h1 id="about-h1">Hi, I'm Elektra.<img id="hand-icon" alt="Hand Wave" src="https://img.icons8.com/ios-filled/100/000000/so-so.png"/></h1>
                    <h4 id="about-desc-h4">
                        I'm a full-stack software engineer and digital creator from Brooklyn, New York. 
                    </h4>
                    <h5 id="about-title">What I do</h5>
                    <div className="about-categories">   
                        <h2>Problem solver</h2>
                        <h2>Educator</h2>
                        <h2>Story Teller</h2>
                    </div>
                    
                    <img id="about-img" src="https://i.imgur.com/WRsSm98.jpg" alt="Elektra Babian"/>
                </div>
                {/* <div className="jobs-wrapper">
                <div className="jobs-container"> 
                    <a href="https://generalassemb.ly/instructors/elektra-babian/25723"
                    target="_blank">
                    <img id="ga-icon" src="https://i.imgur.com/JnZ5ttI.png"/>
                    </a>
                    <h5>Software Engineer Insructional Associate</h5>
                </div>

                <div className="jobs-container">
                    <h5>Software Engineer Fellow</h5>
                </div>

                <div className="jobs-container">
                    <h5>Digital Creator & Production Assistant</h5>
                </div>

                <div className="jobs-container">
                    <h5>Front-end Web Developer</h5>
                </div>
            </div> */}
            
        </div>
        </div>
        </div>
    );
};

export default About;