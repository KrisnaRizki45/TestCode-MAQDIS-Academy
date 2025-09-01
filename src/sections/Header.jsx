import React, { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-arsa.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Dashboard", path: "hero", type: "scroll" },
    { link: "Tentang", path: "about", type: "scroll" },
    { link: "Layanan", path: "services", type: "scroll" },
    { link: "Proyek", path: "portfolio", type: "scroll" },
    { link: "Kontak", path: "contact", type: "scroll" },
    { link: "Karir", path: "/careers", type: "route" },
  ];

  // Auto scroll saat pindah route dengan hash
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

  // Helper untuk desktop/mobile menu
  const NavLink = ({ link, path, type, className }) => {
    if (type === "scroll") {
      if (location.pathname === "/") {
        return (
          <ScrollLink
            to={path}
            smooth={true}
            offset={-80}
            duration={800}
            className={className}
            onClick={closeMenu}
          >
            {link}
          </ScrollLink>
        );
      }
      // jika berada di page lain, redirect ke homepage + scroll
      return (
        <RouterLink
          to={`/#${path}`}
          className={className}
          onClick={closeMenu}
        >
          {link}
        </RouterLink>
      );
    }

    // type route → langsung route
    return (
      <RouterLink to={path} className={className} onClick={closeMenu}>
        {link}
      </RouterLink>
    );
  };

  return (
    <nav className="w-full bg-white shadow-md flex justify-between items-center lg:px-16 px-6 py-4 sticky top-0 z-50">
      {/* Logo + Branding */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Ardexa Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-black md:text-3xl text-2xl font-bold font-rubik tracking-wide">
          Ar<span className="text-blue-600 italic">dexa</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path, type }) => (
          <NavLink
            key={path}
            link={link}
            path={path}
            type={type}
            className="text-black uppercase font-medium cursor-pointer px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white text-sm transition-all"
          />
        ))}
        {/* Desktop Download Button */}
        <a
          href="../assets/ComPro-ADK.pdf"
          download="ComPro-ADK.pdf"
          className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
        >
          Unduh Profile
        </a>
      </ul>

      {/* Mobile menu toggle */}
      <div
        className="flex lg:hidden text-blue-600 text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full bg-blue-600 absolute top-[72px] left-0 flex-col items-center gap-4 py-6 shadow-lg lg:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-3 w-full">
          {navItems.map(({ link, path, type }) => (
            <NavLink
              key={path}
              link={link}
              path={path}
              type={type}
              className="text-white uppercase font-medium cursor-pointer py-2 w-full text-center hover:bg-blue-800 transition"
            />
          ))}
        </ul>
        {/* Mobile Download Button */}
        <a
          href="../assets/ComPro-ADK.pdf"
          download="ComPro-ADK.pdf"
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full w-[80%] text-center hover:bg-blue-800 hover:text-white transition"
        >
          Unduh Profile
        </a>
      </div>
    </nav>
  );
};

export default Header;
