import React from 'react';
import './Projects.css';

// Import images for each project
import BrainWorldImage from './assets/brainworld.jpg';
import ReVivalImage from './assets/revival.jpg';
import ServiceNowImage from './assets/servicenow.jpg';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-item">
                <img src={BrainWorldImage} alt="BrainWorld" className="project-image" />
                <div className="project-details">
                    <h3>BrainWorld</h3>
                    <p>A mobile application designed to detect cognitive health decline.</p>
                    <a href="https://github.com/ejl2000/2800_202310_DTC20" className="project-link">GitHub</a>
                </div>
            </div>
            <div className="project-item">
                <img src={ReVivalImage} alt="ReVival" className="project-image" />
                <div className="project-details">
                    <h3>ReVival</h3>
                    <p>Mobile-first web application that delivers real-time weather alerts.</p>
                    <a href="https://github.com/VS-LIU/1800_202310_DTC-01" className="project-link">GitHub</a>
                </div>
            </div>
            <div className="project-item">
                <img src={ServiceNowImage} alt="ServiceNow Extended ECM Demo 3" className="project-image service-now-image" />
                <div className="project-details">
                    <h3>ServiceNow Extended ECM Demo 3</h3>
                    <p>Demo version of ServiceNow Extended ECM for operational efficiency.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
