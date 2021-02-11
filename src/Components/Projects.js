import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'
import Connect from './Connect'
import './Projects.css'

const Projects = () => {

    const projImgs = [
       'https://i.imgur.com/Yi89qjC.png'
    ]

    return (
        <div>
            <Nav />
            <h1 className="page-title fade-in">Portfolio</h1>
            <div className="proj-wrapper fade-in">
                <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Calculator</h4>
                   <h5 id="proj-description">React, SASS, CSS Grid</h5>
                </div>
    
                <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Your Story</h4>
                   <h5 id="proj-description">React, SASS, CSS Grid</h5>
                </div>
         
                <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Tic-Tac-Toe</h4>
                   <h5 id="proj-description">React, SASS, CSS Grid</h5>
                </div>

                <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Calculator</h4>
                   <h5 id="proj-description">React, SASS, CSS Grid</h5>
                </div>

                <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Calculator</h4>
                   <h5 id="proj-description">React, SASS, CSS Grid</h5>
                </div>
                <Connect />
                <Footer />
            </div>
            
        </div>
    );
};

export default Projects;