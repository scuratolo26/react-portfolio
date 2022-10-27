import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';

function Main(props) {
    const { currentSection } = props;

    switch (currentSection.name) {
        case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio />;
        case "Contact":
            return <ContactForm />;
        case "Resume":
            return <Resume />;
        default:
            return <About />
    }
}

export default Main;