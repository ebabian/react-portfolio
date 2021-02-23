import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import './Home.css';
import About from './About'

const Home = () => {
    return (
        <div >
        <Link className="home-eb fade-in" to={'/home'}>Elektra</Link>
        <Link className="home-b fade-in" to={'/home'}>Babian</Link>
        <Nav />
            <div className="Home">
            <div className="home-wrapper">
                <pre className="home-pre fade-in">
                    Digital Creator   |   Software Engineer   |   Problem Solver</pre>
                <h4 className="slogan fade-in">Let's make something beautiful together.</h4>
            </div>

            
            </div>
            <Footer />
        </div>
    );
};

export default Home;