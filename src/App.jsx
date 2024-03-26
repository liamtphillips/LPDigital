import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <AnimatePresence>
    <Router>
      <ScrollToTop />
        {/* Main content container */}
        <div className="relative z-10 h-auto bg-gradient-to-r from-black to-neutral-950 via-slate-900 ">
          <Navbar className />
          <Routes>
            <Route path="/" element={<Home />} className="container mx-auto" />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  </AnimatePresence>
  );
};

export default App