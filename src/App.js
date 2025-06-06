import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <FloatingContactButtons />
    </>
  );
}

export default App;
