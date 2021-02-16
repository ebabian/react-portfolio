import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import './Contact.css'

const Contact = () => {
    return (
        <div className="Contact">
            <Nav />
            <div className="imgDiv">
                <img id="contactImg" src="https://i.imgur.com/WRsSm98.jpg" alt="Elektra Babian"/>
            </div>
            <div className="contact-bubble">
                <p id="contact-p">To contact Elektra you can reach her with the email listed below. Thank you!</p>
                <p id="email-p">babianelektra@gmail.com</p>
            </div>
            <div className="bubble"><p id="contact-social">Email</p></div>
            <div className="bubble2"><p id="contact-social">LinkedIn</p></div>
            <div className="bubble3"><p id="contact-social">GitHub</p></div>
            <div className="send-div">
                <a id="send-btn" href="mailto: babianelektra@gmail.com">SEND</a>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;