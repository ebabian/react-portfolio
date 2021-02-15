import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Connect from './Connect';
import './Projects.css';

const Projects = () => {
    const [desc, showDesc] = useState(false);
    const [desc2, showDesc2] = useState(false);
    const [desc3, showDesc3] = useState(false);
    const [desc4, showDesc4] = useState(false);
    const [desc5, showDesc5] = useState(false);
    const [desc6, showDesc6] = useState(false);





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

    const projImgs = [
        'https://i.imgur.com/FuhCsiK.png',
        'https://i.imgur.com/pIVBJ7c.png',
        'https://i.imgur.com/WQ6hqDA.png', 
        'https://i.imgur.com/i6How12.png',
        'https://i.imgur.com/3NUAJgH.png',
        'https://i.imgur.com/quGE92k.png',
        'https://i.imgur.com/pPKgqu9.png'
    ]



    return (
        <div>
            
        <Link className="home-eb fade-in proj-eb" to={'/home'}>Elektra Babian</Link>
        <div className="Portfolio">
            <Nav />
            <h1 className="page-title fade-in">Portfolio</h1>
            <div className="proj-wrapper fade-in">


            {/* Sunny App */}
            <div className="img-wrapper">
                <a href="https://github.com/ebabian/weather-app"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src={projImgs[0]} alt="Sunny"/>
                </a>
                <h4 id="proj-title">Sunny</h4>
                <h5 id="proj-description">Coming soon <br/> Openweathermap API, React, Search bar</h5>
            </div>


            {/* Your Story */}
            <div className="img-wrapper">
                <a href="https://your-story-app.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src={projImgs[1]} alt="Your Story App"/>
                </a>
                <h4 id="proj-title">Your Story</h4>
                <h5 id="proj-description" className="desc" 
                onClick={toggleDescription}>Angular, Express, MongoDB 
                    
                    {!desc ? 
                       ( <img 
                            onClick={toggleDescription}
                            className="desc"
                            id="proj-arrow" 
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc ? <p id="proj-details" className="fade-in">Your Story: a collective of personal histories. The user can create a new story, edit, and delete their post. As well as, search and read past user stories. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Your-Story"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
         
         

            {/* Calculator App */}
            <div className="img-wrapper">
                <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                        <img id="proj-img" src={projImgs[2]} alt="Calculator"/>
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
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc2"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc2 ? <p id="proj-details" className="fade-in">This online React calculator always users to solve simple and advanced mathematical problems. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/React-Calculator"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
    

            {/* News Now */}
            <div className="img-wrapper">
                <a href="https://ebabian.github.io/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src={projImgs[3]} alt="Calculator"/>
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
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc3"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc3 ? <p id="proj-details" className="fade-in">NEWS NOW: a dynamic app built with The New York Times’ API to update the DOM and my photography for a less explicit news source. There is a carousel to go through top story topics and a modal to display article descriptions. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/ebabian.github.io"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>


            {/* Tic-Tac-Toe */}
            <div className="img-wrapper">
                <a href="https://elektra-tic-tac-toe.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src={projImgs[4]} alt="Calculator"/>
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
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc4"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc4 ? <p id="proj-details" className="fade-in">This online React tic-tac-toe game allows users to play one another and based on horizontal, vertical, or diagonal three way matches of either 'X' or 'O' the winner will be displayed. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Tic-Tac-Toe"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>


            {/* Techi App */}
            <div className="img-wrapper">
                <a href="https://elektra-react-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src={projImgs[5]} alt="Calculator"/>
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
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc5"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc5 ? <p id="proj-details" className="fade-in">
                        Techi is an app programmed by Elektra Babian and Eric Bondoc. Techi preps software engineers for technical interview questions. With Techi, the user can generate a random technical question, reply to it, edit their answer or delete it, and see past user replies. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Techi"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>


            {/* Stocked App */}
            <div className="img-wrapper">
                <a href="https://protected-dusk-30011.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer">
                    <img id="proj-img" src={projImgs[6]} alt="Calculator"/>
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
                            src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                            :
                        (<img 
                        onClick={toggleDescription}
                        className="desc6"
                        id="proj-up-arrow"
                        src="https://img.icons8.com/pastel-glyph/64/000000/expand-arrow.png"/>)
                    }

                    { desc6 ? <p id="proj-details" className="fade-in">
                    Stocked: an inventory for tracking food. A user can sign up and login, update their inventory, add recipes, and edit and delete food items. <br/>
                    <br/>
                    <a 
                        id="proj-github-repo" 
                        href="https://github.com/ebabian/Stocked"
                        target="_blank">GitHub Repo</a>
                    </p>
                    : ("")}
                </h5>
            </div>
                
            </div>
            </div>
            <Connect />
        </div>
    );
};

export default Projects;