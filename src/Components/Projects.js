import React from 'react';
import Nav from './Nav';
import './Projects.css'

const Projects = () => {

    const projImgs = [
       'https://i.imgur.com/Yi89qjC.png'
    ]

    return (
        <div>
            <Nav />

            <h2 className="proj-header">Software Engineering Projects</h2>

            <div className="proj-wrapper">
                <div className="img-wrapper">
                   <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                </div>
    
                <div className="img-wrapper">
                   <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                </div>
         
                <div className="img-wrapper">
                   <img id="proj-img" src={projImgs[0]} alt="Calculator"/>
                </div>
            </div>
        </div>
    );
};

export default Projects;