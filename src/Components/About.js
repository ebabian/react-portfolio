import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './About.css';
import Contact from './Contact'
import Timeline from './Timeline'

const About = () => {
    return (
        <div id="eb">
            <Link  className="home-eb fade-in" to={'/home'}>Elektra Babian</Link>
            <div className="About">
            <Nav />
                <div className="about-container">
                    <h1 id="about-h1">Hi, I'm Elektra!
                    {/* <img 
                        id="hand-icon" 
                        alt="Hand Wave" 
                        src="https://img.icons8.com/ios-filled/100/000000/so-so.png"/> */}
                    </h1>

                    <img 
                    className="curve"
                    id="about-img" 
                    src="https://i.imgur.com/WRsSm98.jpg" 
                    alt="Elektra Babian"/>

                    <h4 id="about-desc-h4">
                        I'm a Brooklyn, New York native, avid soccer player, and a big cooking fan. As a non-traditional computer science student at Gerenal Assembly I took the Software Engineering Immersive in order to make a career shift and demystify software engineering for myself. I absolutely love software engineering because I can combine my passions of visual design (I have a BA in Photography), critical thinking (I always feel like I’m solving a puzzle), and collaboration (I love getting to know all the diverse people that have taught themselves to code and the supportive online community). As a Software Engineering Fellow with a 4.0 GPA, I was hired as a Software Engineer Instructional Associate by General Assembly. 
                    </h4>
                    
                    </div>
                    <Timeline />
                    <Contact />
                </div>
            </div>
    );
};

export default About;