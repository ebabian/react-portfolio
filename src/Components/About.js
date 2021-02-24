import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import './About.css'
// import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Link className="home-eb fade-in" to={'/home'}>
                <img
                id="eb-img" 
                alt="Elektra Babian"
                src="https://i.imgur.com/GUWStwx.png"></img>
            </Link>
            <Nav />
            <div className="About">
                <div className="about-container">
                    <h1 id="about-h1">Hi, I'm Elektra.<img id="hand-icon" alt="Hand Wave" src="https://img.icons8.com/ios-filled/100/000000/so-so.png"/></h1>
                    <h4 id="about-desc-h4">
                        I'm a full-stack software engineer and digital creator from Brooklyn, New York. 
                    </h4>
                    
                    <img id="about-img" src="https://i.imgur.com/WRsSm98.jpg" alt="Elektra Babian"/>
                    </div>
                </div>
            </div>
    );
};

export default About;