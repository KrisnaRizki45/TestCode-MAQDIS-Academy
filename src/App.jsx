import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import Portfolio from "./sections/Portfolio";
import Trusted from "./sections/Trusted";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import About from "./sections/About";

// Pages
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Trusted />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />  

        {/* Routing Pages */}
        <Route path="/careers" element={<Careers />} />  
        <Route path="/faq" element={<FAQ />} />  
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
      </Routes>
    </Router>
  );
}

export default App;
