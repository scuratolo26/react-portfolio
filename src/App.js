import React from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Resume></Resume>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
