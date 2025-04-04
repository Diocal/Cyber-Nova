"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[100%] max-w-[1400px] flex items-center justify-between px-6 py-4 z-50 bg-transparent">
      <Link href="/">

      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-green-500">
        Softlution
      </h1>
      </Link>
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="#services" className="text-white hover:text-gray-300 text-lg">
          Services
        </Link>
        <Link href="#about" className="text-white hover:text-gray-300 text-lg">
          About Us
        </Link>
        <Link
          href="#contact"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-400 to-green-500 text-white font-bold text-base"
        >
          Contact Us
        </Link>
      </div>

      {/* Menú hamburguesa en móviles */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú desplegable centrado */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 transform transition-all duration-300 ${
          menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <button
          className="absolute top-8 right-8 text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Enlaces del menú desplegable */}
        <Link href="#services" className="text-4xl text-white mb-8">
          Services
        </Link>
        <Link href="#about" className="text-4xl text-white mb-8">
          About Us
        </Link>
        <Link
          href="#contact"
          className="text-2xl px-12 py-4 rounded-full bg-purple-500"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
