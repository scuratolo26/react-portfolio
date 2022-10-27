import React from 'react';
import images from "../../assets/portfolio";

function Portfolio() {
    const projects = [
        {
            name: "Project 1",
            description: "project 1 @ git",
            imgSrc: images.proPic,
            gitHub: "github.com",
            deployed: "deployed.com"
        },
        {
            name: "Project 2",
            description: "project 2 @ git",
            imgSrc: images.gitHub,
            gitHub: "github.com",
            deployed: "deployed.com"
        }
    ];

    return (
        <ul>
            {projects.map(project => {
                return (
                    <li key={project.name}>
                        {project.name} - {project.description},  {project.gitHub}, {project.deployed},
                        <img src={project.imgSrc} alt={project.name} />
                    </li>
                );
            })}
        </ul>
    )
}

export default Portfolio;