import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
