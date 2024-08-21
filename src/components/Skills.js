import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava } from 'react-icons/fa';

const SkillCircle = ({ skill, Icon, color }) => {
    return (
        <div className="skill-circle">
            <div className="icon-container" style={{ backgroundColor: color }}>
                <Icon className="skill-icon" />
            </div>
            <h3>{skill}</h3>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <SkillCircle skill="HTML" Icon={FaHtml5} color="#E34F26" />
                <SkillCircle skill="CSS" Icon={FaCss3Alt} color="#1572B6" />
                <SkillCircle skill="JavaScript" Icon={FaJsSquare} color="#F7DF1E" />
                <SkillCircle skill="React.js" Icon={FaReact} color="#61DAFB" />
                <SkillCircle skill="Node.js" Icon={FaNodeJs} color="#3C873A" />
                <SkillCircle skill="Python" Icon={FaPython} color="#306998" />
                <SkillCircle skill="SQL" Icon={FaDatabase} color="#F29111" />
                <SkillCircle skill="Java" Icon={FaJava} color="#5382a1" />
            </div>
        </section>
    );
};

export default Skills;
