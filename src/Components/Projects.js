import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'
import Connect from './Connect'
import './Projects.css'

const Projects = () => {

    const projImgs = [
        'https://i.imgur.com/UjaH7yU.png',
       'https://i.imgur.com/pIVBJ7c.png',
       'https://i.imgur.com/WQ6hqDA.png', 
       'https://i.imgur.com/i6How12.png',
       'https://i.imgur.com/UFqL03q.png',
       'https://i.imgur.com/quGE92k.png',
       'https://i.imgur.com/pPKgqu9.png'
    ]

    return (
        <div>
            <Nav />
            <h1 className="page-title fade-in">Portfolio</h1>
            <div className="proj-wrapper fade-in">

            <div className="img-wrapper">
                    <a href="https://github.com/ebabian/weather-app"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Sunny</h4>
                   <h5 id="proj-description">Coming soon <br/> Openweathermap API, React, Search bar</h5>
                </div>


                <div className="img-wrapper">
                    <a href="https://your-story-app.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[1]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Your Story</h4>
                   <h5 id="proj-description">Angular, Express, MongoDB</h5>
                </div>
         


            <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[2]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Calculator</h4>
                   <h5 id="proj-description">React, SASS, CSS Grid <br/>
                    {/* <a href="https://github.com/ebabian" target="_blank" rel="noreferrer">
                        <img id="proj-git" src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="GitHub"/>
                    </a> */}
                   </h5>
                </div>
    


                <div className="img-wrapper">
                    <a href="https://ebabian.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[3]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">News Now</h4>
                   <h5 id="proj-description">New York Times API, jQuery, Modal, <br/> Carousel</h5>
                </div>

                <div className="img-wrapper">
                    <a href="https://elektra-tic-tac-toe.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[4]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Tic-Tac-Toe</h4>
                   <h5 id="proj-description">React, Create-React-App, JavaScript</h5>
                </div>

                <div className="img-wrapper">
                    <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[5]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Techi</h4>
                   <h5 id="proj-description">React, PHP, PostgreSQL</h5>
                </div>


                <div className="img-wrapper">
                    <a href="https://protected-dusk-30011.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img id="proj-img" src={projImgs[6]} alt="Calculator"/>
                    </a>
                   <h4 id="proj-title">Stocked</h4>
                   <h5 id="proj-description">EJS, MongoDB, Express, Authentication</h5>
                </div>
                
            </div>
            <Connect />
        </div>
    );
};

export default Projects;