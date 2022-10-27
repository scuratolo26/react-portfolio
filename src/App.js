import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [sections] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [sectionActive, setSectionActive] = useState(false);

  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sectionActive={sectionActive}
        setSectionActive={setSectionActive}
      ></Header>
      <main>
        <Main currentSection={currentSection} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
