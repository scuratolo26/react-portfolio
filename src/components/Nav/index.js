import React, { useEffect } from 'react';

function Nav(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection,
        sectionActive,
        setSectionActive
    } = props;

    useEffect(() => {
        document.title = currentSection.name;
    }, [currentSection]);

    return (
        <nav>
            <ul className="flex-row">
                {sections.map((section) => (
                    <li
                        className={`mx-1 ${currentSection.name === section.name && sectionActive && 'navActive'}`}
                        key={section.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentSection(section);
                                setSectionActive(true);
                            }}
                        >
                            {section.name}
                        </span>

                    </li>
                ))}
            </ul>
        </nav >
    );
}

export default Nav;