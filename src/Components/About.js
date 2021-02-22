import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import './About.css'
import Footer from './Footer'

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
                    I'm a full-stack software engineer and digital creator from Brooklyn, New York. My motivation lies in my belief that just because something works well doesn’t mean it can’t be better. My passion for coding stems from my excitement to find the most efficient piece for the puzzle, whether it’s a small or large problem. I am looking to work with a team that shares my goals of being passionate about our work, approaches problems with a growth mindset, and a startup fast paced culture. 
                        </h4>
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