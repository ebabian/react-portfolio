import React from 'react';
import Nav from './Nav';
import './Contact.css'

const Contact = () => {
    return (
        <div className="Contact">
            <Nav />
            <div className="imgDiv">
                <img id="contactImg" src="https://i.imgur.com/WRsSm98.jpg"/>
            </div>
        </div>
    );
};

export default Contact;