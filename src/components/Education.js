import React from 'react';
import './Education.css';
import './Certifications.css'; // Import certifications CSS if needed

const Education = () => {
    return (
        <section id="education-certifications">
            <div className="education-section">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>British Columbia Institute of Technology</h3>
                    <p>Computer Science Diploma | 2023-2025 (expected)</p>
                </div>
                <div className="education-item">
                    <h3>University of Alberta</h3>
                    <p>Bachelor of Science, Biological Sciences (minor in Chemistry) | 2014-2018</p>
                </div>
            </div>
            <div className="certifications-section">
                <h2>Certifications</h2>
                <ul>
                    <li>ICTC Cybersecurity Training and WIL Program & Women in Cybersecurity (WiCyS) Global | 2023-2024</li>
                    <li>Microsoft AZ-900 | 2024</li>
                    <li>Microsoft SC-900 | 2024</li>
                    <li>Microsoft AI-900 | 2024</li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
