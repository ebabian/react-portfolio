import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import './Home.css'

const About = () => {
    return (
        <div >
          <h4 className="home-eb">Elektra Babian</h4>
            <div className="About">
            <Nav />
            <div className="about-wrapper">
                <h1 className="about-h1">Software <br/> Engineer</h1>
                <p id="scroll-p">Scroll</p>
                <img id="down-arrow" src="https://img.icons8.com/small/32/ffffff/long-arrow-down.png"/>
            </div>

            <Footer />
            </div>
        </div>
    );
};

export default About;