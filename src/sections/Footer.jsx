import React, { useState, useEffect, useRef } from "react";
import { FaCopyright, FaWhatsapp, FaArrowUp, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const footerRef = useRef(null);

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

  return (
    <>
      {/* Footer */}
      <div ref={footerRef} className="bg-gray-100 text-black">
        <div className="container mx-auto px-6">
          {/* Grid Utama */}
          <div className="grid md:grid-cols-4 gap-8 py-8 border-t border-gray-300/50">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold uppercase text-xl">
                <MdComputer className="text-blue-600 text-3xl" />
                <p>PT. Arsa Dalu Kreasi</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                labore dolore illo neque explicabo tenetur.
              </p>
              <div className="flex gap-4 mt-4 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <HiLocationMarker className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <FaTiktok className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div>
              <h1 className="text-lg font-bold mb-4">Important Links</h1>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Login</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h1 className="text-lg font-bold mb-4">Company Links</h1>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Profile</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Extra Links */}
            <div>
              <h1 className="text-lg font-bold mb-4">Extra Links</h1>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center py-4 border-t border-gray-300/50">
            <span className="text-sm text-gray-600 flex items-center justify-center gap-1">
              <FaCopyright /> 2025 PT. Arsa Dalu Kreasi, All rights reserved.
            </span>
          </div>
        </div>
      </div>

      {/* Tombol WhatsApp */}
      <a
        href="https://wa.link/fj69z9"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="size-8" />
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <div
          className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300"
        >
          <Link to="hero" spy={true} offset={-100} smooth={true}>
            <FaArrowUp className="size-5" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Footer;
