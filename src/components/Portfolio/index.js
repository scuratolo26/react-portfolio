import React from 'react';
import images from "../../assets/portfolio";

function Portfolio() {
    const projects = [
        {
            name: "Food Lovers",
            imgSrc: images.foodLovers,
            gitHub: "https://github.com/scuratolo26/Food-Lovers",
            deployed: "https://food-lovers-project.herokuapp.com/"
        },
        {
            name: "Note Taker",
            imgSrc: images.noteTaker,
            gitHub: "https://github.com/scuratolo26/note-taker",
            deployed: "https://note-taker-scuratolo26.herokuapp.com/"
        },
        {
            name: "Tech Blog",
            imgSrc: images.techBlog,
            gitHub: "https://github.com/scuratolo26/tech-blog",
            deployed: "https://vast-ridge-87358.herokuapp.com/"
        },
        {
            name: "Pizza Hunt",
            imgSrc: images.pizzaHunt,
            gitHub: "https://github.com/scuratolo26/pizza-hunt",
            deployed: "https://sc-pizza-hunt.herokuapp.com/"
        },
        {
            name: "Text Editor PWA",
            imgSrc: images.textEditor,
            gitHub: "https://github.com/scuratolo26/TextEditor-PWA",
            deployed: "https://fast-basin-68082.herokuapp.com/"
        },
        {
            name: "Zoo Keeper",
            imgSrc: images.zooKeeper,
            gitHub: "https://github.com/scuratolo26/zookeeper",
            deployed: "https://limitless-gorge-36474.herokuapp.com/"
        },
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="flex-row">
                {projects.map(project => {
                    return (
                        <div key={project.name} className="card">
                            <img src={project.imgSrc} alt={project.name} className="project-img" />
                            <div className="container">
                                <h2 className="card-header">{project.name}</h2>
                                <button className="card-button"><a href={project.gitHub} target="_blank" rel="noreferrer">GitHub</a></button> <button className="card-button"><a href={project.deployed} target="_blank" rel="noreferrer">Deployed Application</a></button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Portfolio;