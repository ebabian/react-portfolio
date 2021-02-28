import React from 'react';
import './Timeline.css'

const Timeline = () => {
    return (
        <div className="Timeline">
            <ul className="timeline-ul fade-in">
                <li> 2020-'21
                    <h4 id="timeline-li-h4">Software Engineer Instructional Associate, General Assembly</h4>
                </li>
                <li> 2020
                    <h4 id="timeline-li-h4">Software Engineer Fellow, General Assembly</h4>
                </li>
                <li>2019-'20 
                    <h4 id="timeline-li-h4">Production Assistant, Martin Schoeller</h4>
                </li>
                <li>2018-'20
                    <h4 id="timeline-li-h4">Front-end Web Development Contractor, Pymetrics</h4>
                </li>
                <li>2018 
                    <h4 id="timeline-li-h4">Marketing Lead, Pymetrics</h4>
                </li>

            </ul>
            
        </div>
    );
};

export default Timeline;