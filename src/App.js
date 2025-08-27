import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Curiosity from './components/curiosity/Curiosity';

function App() {

  /*=================== Toggle Menu ===================*/
  function onTap() {
    const menu = document.querySelector(".nav__menu");
    menu.classList.remove("show-menu");
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< >
          <Header />
          <main onClick={onTap} className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>} />
        <Route path="/lacuriositatiportaqui/:pr" element={<Curiosity />} />
      </Routes>
    </Router>

  );
}

export default App;
{/* < >
      <Header />
      <main onClick={onTap} className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </> */}