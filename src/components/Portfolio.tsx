import React from 'react';
import {NavLink} from "react-router-dom";
import GenNumber from '../assets/img/prj1.png'
import Joke from '../assets/img/prj2.png'

const projects = [
    {
        title: "Number Generator",
        description: "Generating random numbers by click",
        image: GenNumber,
        link: "/randomnumber"
    },
    {
        title: "Joke Generator",
        description: "Generating Chuck Norris jokes by click",
        image: Joke,
        link: "/jokegenerator"
    },
];

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <div className="profile">
                <img src="https://hips.hearstapps.com/hmg-prod/images/ryan-gosling-attends-the-96th-oscars-nominees-luncheon-at-news-photo-1710014412.jpg?crop=0.753xw:0.523xh;0.175xw,0.0224xh&resize=640:*" alt="Profile" className="profile-image" />
                <h1>Ognev Konstantin</h1>
                <p>Frontend Developer | React Enthusiast</p>
            </div>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" style={{background: '#242424', border: '1px solid #f20d0d'}}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p style={{color:'white'}}>{project.description}</p>
                        <NavLink className={'project'} to={project.link}>Click and Check!</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;