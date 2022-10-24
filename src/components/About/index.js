import React from 'react';
import headshot from "../../assets/about-pics/headshot.jpg"

function About() {
    return (
        <section>
            <h1 id="about">ABOUT SECTION HERE</h1>
            <img src={headshot} style={{ width: "50%" }} alt="Samantha Curatolo" />
            <p>ABOUT ME TEXT HERE</p>
        </section>
    );
}

export default About;