import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import './About.css'
import Footer from './Footer'

const About = () => {
    return (
        <div>
             <div >
            <Link className="home-eb fade-in" to={'/home'}>Elektra Babian</Link>
            <div className="About">
            <Nav />
            <h2 id="scroll">Visit website</h2>

            <Footer />
            </div>
        </div>
        </div>
    );
};

export default About;