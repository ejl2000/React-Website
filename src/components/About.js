import React from 'react';
import './About.css';
import Emma from './assets/Emma.JPG';

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <h1>About Me</h1>
                <p className="intro">
                    I am a Software Engineer with a passion for tackling complex challenges and crafting innovative solutions. My expertise spans cloud services, cybersecurity, and artificial intelligence, all aimed at delivering seamless user experiences.
                </p>
                <p>
                    My journey began with a robust background in software development, supported by a Bachelor of Science in Biological Sciences with a minor in Chemistry from the University of Alberta. I am currently advancing my skills with a Computer Science Diploma at BCIT. Throughout my career, I have accumulated valuable experience in software development, digital marketing, and IT support.
                </p>
                <p>
                    I am continuously exploring emerging technologies and methodologies to stay ahead in this dynamic field. I am eager to apply my skills to drive positive change and contribute to groundbreaking projects. Collaboration and innovation are my driving forces, and I look forward to pushing the boundaries of technology together.
                </p>
            </div>
            <div className="about-visuals">
                <img src={Emma} alt="About Me" className="about-image" /> {/* Use imported variable */}
            </div>
        </section>
    );
};

export default About;
