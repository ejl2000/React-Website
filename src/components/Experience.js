import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                <div className="experience-item">
                    <h3>Client Coordinator</h3>
                    <p>James Stafford, Inc. Chartered Accountants | Vancouver, BC | Sep 2024 - Present</p>
                    <ul>
                        <li>Completed compilation engagements for owner-managed enterprises, including the preparation of financial statements and tax returns.</li>
                        <li>Played an active role in the Firm’s information and computer data management systems and security processes.</li>
                        <li>Contributed to the ongoing delivery of high-quality client services and maintenance of client relations through client contact and monitoring project completion timelines.</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h3>Systems Analyst</h3>
                    <p>British Columbia Institute of Technology | Vancouver, BC | Jun 2024 - Aug 2024</p>
                    <ul>
                        <li>Provided support and troubleshooting of end-user devices and software to the public, BCIT employees, and students.</li>
                        <li>Provided support for desktop applications such as Office 365, Outlook, OneDrive, Adobe, and Jabber.</li>
                        <li>Managed incident tracking, escalation, & documentation with Cherwell and ServiceNow ITSM platform.</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h3>Software Developer Intern</h3>
                    <p>Reva Solutions | Vancouver, BC | Jan 2024 - Mar 2024</p>
                    <ul>
                        <li>Spearheaded digital marketing initiatives that increased customer outreach by 40%.</li>
                        <li>Developed SQL queries on Microsoft Remote Desktop and OpenText ECM for information retrieval, ensuring optimal database functionality and accessibility.</li>
                        <li>Configured business workspaces using JavaScript, optimizing access privileges to foster a secure and efficient digital environment for industry.</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h3>Software Developer & Digital Marketer</h3>
                    <p>High-Five of Trade Holdings Ltd. | Vancouver, BC | Jul 2023 - Dec 2023</p>
                    <ul>
                        <li>Planned, developed, and tested code for new software applications.</li>
                        <li>Analyzed information to recommend and plan the installation of new systems or modifications of existing websites.</li>
                        <li>Executed effective digital marketing campaigns across multiple platforms, including social media, SEO, and content marketing.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
