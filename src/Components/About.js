import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './About.css';
import Contact from './Contact';
import Timeline from './Timeline';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div id="eb">
            <Link  className="home-eb fade-in" to={'/home'}>Elektra Babian</Link>
            <div className="About">
            <Nav />
                <div className="about-container fade-in">
                    <Fade bottom>
                        <h1 id="about-h1">Hi, I'm Elektra!</h1>
                    </Fade>
                    <Fade bottom>
                        <img 
                        className="curve"
                        id="about-img" 
                        src="https://i.imgur.com/LlFPwZy.jpg" 
                        alt="Elektra Babian"/>
                    </Fade>
                    <Fade bottom>
                        <h4 id="about-desc-h4">
                        I'm a Brooklyn, New York native, avid soccer player, and a big cooking fan. I absolutely love software engineering because I can combine my passions of visual design (I have a BA in Photography), critical thinking (I always enjoy solving a puzzle), and collaboration (I love getting to know all the diverse people that have taught themselves to code and the supportive online community). My favorite languages and database frameworks are JavaScript, Ruby on Rails, and postgreSQL. As a Full-Stack Software Engineer at Teamshares I build software that uses machine learning and tracks financial data.
                        </h4>
                    </Fade>
                    </div>
                    <Timeline />
                    <Contact />
                </div>
            </div>
    );
};

export default About;
