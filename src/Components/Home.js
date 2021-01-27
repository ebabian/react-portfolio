import React from 'react';
import Nav from './Nav'
import './Home.css'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            
            <h1 className="fade-in">Elektra Babian</h1>
            <h2 className="fade-in">Software Engineer</h2>
 
            <Footer />
        </div>
    );
};

export default Home;