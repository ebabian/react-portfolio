import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
// import Footer from './Footer'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Link className="home-eb fade-in" to={'/home'}>
                <img
                id="eb-img" 
                alt="Elektra Babian"
                src="https://i.imgur.com/GUWStwx.png"></img>
            </Link>
            <Nav />
            <div className="Contact">
           
                </div>
            </div>
        
    );
};

export default Contact;