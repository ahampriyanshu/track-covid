import React from 'react';
import './About.css';

const About = ({ value, index }) => {
    if (value !== index) return null;

    return (
        <div className="card-container">

        </div>
    );
}

export default About;