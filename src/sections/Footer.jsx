import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaArrowUp, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";  
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // ganti logo sesuai Maqdis

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const footerRef = useRef(null);
  const location = useLocation();

  // Observer untuk tombol scroll top
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setShowScroll(entries[0].isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  // Auto scroll ke hash setelah pindah halaman
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);

  // Helper → pakai ScrollLink kalau di home, RouterLink kalau di halaman lain
  const ScrollOrRoute = ({ to, children }) => {
    if (location.pathname === "/") {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-orange-600 transition-colors cursor-pointer"
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        to={`/#${to}`}
        className="hover:text-orange-600 transition-colors cursor-pointer"
      >
        {children}
      </RouterLink>
    );
  };

  return (
    <>
      {/* Footer */}
      <footer ref={footerRef} className="bg-white/5 text-gray-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 py-10 border-t border-gray-700/50 text-left">
            
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold uppercase text-xl text-white">
                <img src={logo} alt="Maqdis Logo" className="w-8 h-8 object-contain" />
                <p>Maqdis Academy</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Metro Indah Mall, Jl. Soekarno Hatta, Kota Bandung, Jawa Barat
              </p>
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="https://goo.gl/maps/MIM_LINK" className="hover:text-orange-600 transition-colors">
                  <HiLocationMarker className="text-2xl" />
                </a>
                <a href="https://www.instagram.com/maqdis.academy/" className="hover:text-orange-600 transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.tiktok.com/@maqdis.academy" className="hover:text-orange-600 transition-colors">
                  <FaTiktok className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/school/maqdis-academy/" className="hover:text-orange-600 transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="md:pl-16">
              <h1 className="text-lg font-bold mb-4 text-white">Company</h1>
              <ul className="space-y-2">
                <li><ScrollOrRoute to="about">Company Profile</ScrollOrRoute></li>
                <li>
                  <RouterLink to="/careers" className="hover:text-orange-600 transition-colors">
                    Careers
                  </RouterLink>
                </li>
                <li><ScrollOrRoute to="contact">Contact Us</ScrollOrRoute></li>
                <li><a href="https://wa.link/fj69z9" className="hover:text-orange-600 transition-colors">Customer Support</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="md:pl-16">
              <h1 className="text-lg font-bold mb-4 text-white">Resources</h1>
              <ul className="space-y-2">
                <li>
                  <RouterLink to="/faq" className="hover:text-orange-600 transition-colors">FAQ</RouterLink>
                </li>
                <li>
                  <RouterLink to="/privacy-policy" className="hover:text-orange-600 transition-colors">Privacy Policy</RouterLink>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:pl-16">
              <h1 className="text-lg font-bold mb-4 text-white">Services</h1>
              <ul className="space-y-2">
                <li><ScrollOrRoute to="services">qur an</ScrollOrRoute></li>
                <li><ScrollOrRoute to="services">konsultasi</ScrollOrRoute></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center py-4 border-t border-gray-700/50">
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} Maqdis Academy. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.link/fj69z9"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-800 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="size-8" />
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <div
          className="fixed bottom-28 right-8 z-50 bg-orange-600 hover:bg-orange-800 text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300"
        >
          <ScrollLink to="hero" spy={true} offset={-100} smooth={true}>
            <FaArrowUp className="size-5" />
          </ScrollLink>
        </div>
      )}
    </>
  );
};

export default Footer;
