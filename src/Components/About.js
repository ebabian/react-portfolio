import React from 'react';
import Nav from './Nav';
import './About.css'

const About = () => {
    return (
        <div className="About">
            <Nav />
            
            <div className="about-wrapper">
                <h1 className="about-h1">Software <br/> Engineer</h1>
            </div>
        </div>
    );
};

export default About;