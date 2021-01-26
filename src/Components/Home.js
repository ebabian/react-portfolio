import React from 'react';
import Nav from './Nav'
import './Home.css'


const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <h1 className="fade-in">Elektra Babian</h1>
            <h2 className="fade-in">Software Engineer</h2>
        </div>
    );
};

export default Home;