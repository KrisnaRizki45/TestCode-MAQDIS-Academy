import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";

// Lazy import sections
const Header = lazy(() => import("./sections/Header"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Service = lazy(() => import("./sections/Service"));
const Portfolio = lazy(() => import("./sections/Portfolio"));
const Trusted = lazy(() => import("./sections/Trusted"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Lazy import pages
const Careers = lazy(() => import("./pages/Careers"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Loader component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <ThreeDot variant="bounce" color="#2563EB" size="medium"/>
  </div>
);

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
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Home />} />

          {/* Routing Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
