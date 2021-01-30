import React from 'react';
import Nav from './Nav'
import './Home.css'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            
            <h1 className="fade-in home-h1">Elektra Babian</h1>
            <h2 className="fade-in home-h2">Software Engineer</h2>
            <div className="slide-left">
                <h4>Let's make something beautiful together.</h4>
            </div>

            <Footer />
        </div>
    );
};

export default Home;