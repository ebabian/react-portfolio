import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import './Home.css';

const Home = () => {
    return (
        <div >
        <Link className="home-eb fade-in" to={'/home'}>Elektra Babian</Link>
            <div className="Home">
            <Nav />
            <div className="home-wrapper">
                <pre className="home-pre fade-in"> Digital Creator  |  Software Engineer  |  Problem Solver</pre>
                <h4 className="slogan fade-in">Let's make something beautiful together.</h4>
            </div>

            <Footer />
            </div>
        </div>
    );
};

export default Home;