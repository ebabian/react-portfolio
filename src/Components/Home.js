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
                <h1 className="home-h1 fade-in">Software <br/> Engineer</h1>
                <p id="scroll-p" className="fade-in">Scroll</p>
                <img className="slide-down fade-in" id="down-arrow" src="https://img.icons8.com/small/32/ffffff/long-arrow-down.png"/>
            </div>

            <Footer />
            </div>
        </div>
    );
};

export default Home;