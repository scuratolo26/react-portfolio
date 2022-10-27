import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection,
        sectionActive,
        setSectionActive
    } = props;

    return (
        <header>
            <h1>Samantha Curatolo</h1>
            <Nav
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                sectionActive={sectionActive}
                setSectionActive={setSectionActive}
            ></Nav>
        </header>
    );
}

export default Header;