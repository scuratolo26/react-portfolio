import React from 'react';
import headshot from "../../assets/about-pics/headshot.jpg"

function About() {
    return (
        <section>
            <div className="flex-row" >
                <img src={headshot} style={{ width: "25%" }} alt="Samantha Curatolo" className="headshot" />
                <div className="bio">
                    <h1 id="about">About Me</h1>
                    <p className="about-me">Welcome to my portfolio! My name is Samantha Curatolo. I graduated from The University of South Carolina with a Bachelor's degree in Integrated Information Technology in May of 2021. I am currently working as a Junior Full Stack Developer and Project Manager with GAC Technical Consulting.  </p>
                </div>
            </div>
        </section>
    );
}

export default About;