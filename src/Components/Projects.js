import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Connect from './Connect';
import './Projects.css';
import Art from './ArtPortfolio';
import Fade from 'react-reveal/Fade'

const Projects = ({ toggleMenu }) => {
    const [desc, showDesc] = useState(false);
    const [desc2, showDesc2] = useState(false);
    const [desc3, showDesc3] = useState(false);
    const [desc4, showDesc4] = useState(false);
    const [desc5, showDesc5] = useState(false);
    const [desc6, showDesc6] = useState(false);
    // const [isVisible, setVisible] = useState(true);

    function toggleDescription(event) {
        if(event.target.className === 'desc') {
            showDesc(!desc);
        } else if (event.target.className === 'desc2') {
            showDesc2(!desc2);
        } else if (event.target.className === 'desc3') {
            showDesc3(!desc3);
        } else if (event.target.className === 'desc4') {
            showDesc4(!desc4);
        } else if (event.target.className === 'desc5') {
            showDesc5(!desc5);
        } else if (event.target.className === 'desc6') {
            showDesc6(!desc6);
        } 
    }

    

    return (
        <div id="eb">
            
            <Link className="home-eb fade-in" to={'/home'}>Elektra Babian</Link>
            
            <div className="Portfolio">
            
            <Nav toggleMenu/>

            <Fade bottom>
            <h1  className="page-title fade-in">
                Work <span id="work-section-h4">| Software</span>
            </h1>
            </Fade>

            <Fade bottom>
            <div className="proj-wrapper fade-in">

            {/* Home App */}
            {/* <div className="img-wrapper fade-in">
                    <img id="proj-img1" src='https://i.imgur.com/kEe0YoI.jpg' alt="Come Closer"/>
                
                <h4 id="proj-title">Come Closer</h4>
                <h5 id="proj-description">Coming soon <br/>React, Audio</h5>
            </div> */}


            {/* Sunny App */}
            <Fade bottom>
            <div className='img-wrapper fade-in'>
                <a href="https://github.com/ebabian/weather-app"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img1" src='https://i.imgur.com/gpFEXd5.png' alt="Sunny"/>
                </a>
                <h4 id="proj-title">Sunny</h4>
                <h5 id="proj-description">Coming soon <br/> Openweathermap API, React, Search bar</h5>
            </div>
            </Fade>



            {/* Your Story */}
            <Fade bottom>
            <div className="img-wrapper fade-in">
                <a href="https://your-story-app.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src='https://i.imgur.com/pIVBJ7c.png' alt="Your Story App"/>
                </a>
                <h4 id="proj-title">Your Story</h4>
                <h5 id="proj-description" className="desc" 
                onClick={toggleDescription}>Angular, Express, MongoDB 
                    
                    {!desc ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc"
                        alt="arrow up"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc ? <p id="proj-details" className="fade-in">Your Story: a collective of personal histories. The user can create a new story, edit, and delete their post. As well as, search and read past user stories. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Your-Story"
                        rel="noreferrer"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
            </Fade>
         

            {/* Calculator App */}
            <Fade bottom>
            <div className="img-wrapper">
                <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                        <img id="proj-img" src='https://i.imgur.com/WQ6hqDA.png' alt="Calculator"/>
                </a>
                <h4 id="proj-title">Calculator</h4>
                <h5 id="proj-description"
                className="desc2"
                onClick={toggleDescription}>React, SASS, CSS Grid 
                    
                    {!desc2 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc2"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc2"
                        id="proj-up-arrow"
                        alt="arrow up"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc2 ? <p id="proj-details" className="fade-in">This online React calculator allows users to solve simple and advanced mathematical problems. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/React-Calculator"
                        rel="noreferrer"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
            </Fade>


            {/* News Now */}
            <Fade bottom>
            <div className="img-wrapper">
                <a href="https://ebabian.github.io/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src='https://i.imgur.com/i6How12.png' alt="Calculator"/>
                </a>
                <h4 id="proj-title">News Now</h4>
                <h5 id="proj-description"
                className="desc3"
                onClick={toggleDescription}>New York Times API, jQuery, Modal, Carousel 
                    {!desc3 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc3"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc3"
                        id="proj-up-arrow"
                        alt="arrow up"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc3 ? <p id="proj-details" className="fade-in">NEWS NOW: a dynamic app built with The New York Times’ API to update the DOM and my photography for a less explicit news source. There is a carousel to go through top story topics and a modal to display article descriptions. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/ebabian.github.io"
                        rel="noreferrer"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
            </Fade>


            {/* Tic-Tac-Toe */}
            <Fade bottom>
            <div className="img-wrapper">
                <a href="https://elektra-tic-tac-toe.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src='https://i.imgur.com/wK5XJoV.png' alt="Calculator"/>
                </a>
                <h4 id="proj-title">Tic-Tac-Toe</h4>
                <h5 id="proj-description"
                className="desc4"
                onClick={toggleDescription}>React, Create-React-App, JavaScript
                    {!desc4 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc4"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc4"
                        id="proj-up-arrow"
                        alt="arrow up"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc4 ? <p id="proj-details" className="fade-in">This online React tic-tac-toe game allows users to play one another and based on horizontal, vertical, or diagonal three way matches of either 'X' or 'O' the winner will be displayed. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Tic-Tac-Toe"
                        rel="noreferrer"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
            </Fade>



            {/* Techi App */}
            <Fade bottom>
            <div className="img-wrapper">
                <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src='https://i.imgur.com/quGE92k.png' alt="Calculator"/>
                </a>
                <h4 id="proj-title">Techi</h4>
                <h5 id="proj-description"
                className="desc5"
                onClick={toggleDescription}>React, PHP, PostgreSQL
                    {!desc5 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc5"
                            id="proj-arrow" 
                            alt="arrow down"
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc5"
                        id="proj-up-arrow"
                        alt="arrow up"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc5 ? <p id="proj-details" className="fade-in">
                        Techi is an app programmed by Elektra Babian and Eric Bondoc. Techi preps software engineers for technical interview questions. With Techi, the user can generate a random technical question, reply to it, edit their answer or delete it, and see past user replies. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Techi"
                        rel="noreferrer"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
            </Fade>



            {/* Stocked App */}
            <Fade bottom>
            <div className="img-wrapper">
                <a href="https://protected-dusk-30011.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src='https://i.imgur.com/pPKgqu9.png' alt="Calculator"/>
                </a>
                <h4 id="proj-title">Stocked</h4>
                <h5 id="proj-description"
                className="desc6"
                onClick={toggleDescription}>EJS, MongoDB, Express, Authentication     
                    {!desc6 ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc6"
                            id="proj-arrow"
                            alt="arrow down" 
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc6"
                        id="proj-up-arrow"
                        alt="arrow up"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc6 ? <p id="proj-details" className="fade-in">
                    Stocked: an inventory for tracking food. A user can sign up and login, update their inventory, add recipes, and edit and delete food items. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Stocked"
                        rel="noreferrer"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
            </Fade>


            
            </div>
            <Fade bottom>
            <h1  className="page-title2 fade-in">
                Work <span id="work-section-h4">| Production</span>
            </h1>
            </Fade>

            
            <Art />
            </Fade>
            <Connect />
            </div>
            
        </div>
    );
};

export default Projects;