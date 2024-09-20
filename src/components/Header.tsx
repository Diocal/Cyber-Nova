"use client";

import { useState } from 'react';
import Image from 'next/image';
import vectorWeb from '../../public/vectorweb.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative w-full h-screen overflow-hidden z-0">
      {/* Imagen del vector ajustada */}
      <div className="absolute md:top-[-223.18px] md:left-[-51px] top-[-60px] left-[-60px] w-[400px] h-[400px] md:w-[677px] md:h-[713.87px]">
        <Image
          src={vectorWeb}
          alt="vector web"
          className="object-contain"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Contenedor Flex para alinear logo y menú */}
      <div className="relative z-10 flex justify-between items-center w-full p-4 md:p-8 navbar">
        {/* Logo de la empresa con gradiente */}
        <div className="flex-shrink-0">
          <h1 className="text-[18px] md:text-[25px] font-extrabold leading-[52px] text-left bg-gradient-to-r from-purple-400 via-purple-500 to-green-500 bg-clip-text text-transparent">
            CYBER-NOVA
          </h1>
        </div>

        {/* Menú hamburguesa para móvil */}
        <div className="md:hidden">
          <button className="text-[#C471ED99]" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menú desplegable para móvil */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-black bg-opacity-90 z-30 flex flex-col items-center justify-center space-y-8 text-white transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#services" className="text-2xl font-medium hover:text-gray-400" onClick={toggleMenu}>
            Services
          </a>
          <a href="#about" className="text-2xl font-medium hover:text-gray-400" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#contact" className="text-2xl font-bold bg-purple-500 px-6 py-3 rounded-full" onClick={toggleMenu}>
            Contact Us
          </a>
        </div>

        {/* Navegación para escritorio */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-[18px] font-medium leading-[20px] hover:text-gray-400">
            Services
          </a>
          <a href="#about" className="text-[18px] font-medium leading-[20px] hover:text-gray-400">
            About Us
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center px-4 py-2 text-center text-[18px] font-bold"
            style={{
              background: 'linear-gradient(93.12deg, rgba(131, 96, 195, 0.6) -5.61%, rgba(196, 113, 237, 0.8) 55.33%, rgba(46, 191, 145, 0.6) 109.64%)',
              width: '182px',
              height: '42px',
              borderRadius: '50px',
              opacity: '1',
            }}
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Texto central ajustado con margen superior reducido */}
      <div className="relative z-10 text-left max-w-[85%] ml-[10px] mt-[250px] md:max-w-none md:ml-[85px] md:mt-[400px]">
        <h1 className="text-[35px] md:text-[80px] font-extrabold leading-tight md:leading-[105px] bg-gradient-to-r from-purple-400 via-purple-500 to-green-500 bg-clip-text text-transparent">
          Building Intelligent Solutions, <span className="block md:inline">Securing Your</span> Digital World
        </h1>
      </div>

      {/* Subtítulo ajustado */}
      <div className="relative z-10 text-left max-w-[85%] ml-[10px] mt-[30px] md:ml-[85px] md:mt-4 text-base md:text-3xl text-gray-300 leading-relaxed">
        Innovative Solutions in Cybersecurity, AI <br />
        and APP Development to Protect and Propel Your Business
      </div>

      {/* Botón de contacto (visible solo en móviles) */}
      <div className="relative z-10 mt-4 mb-8 text-left ml-[10px] md:ml-[85px] block md:hidden">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-bold text-white"
          style={{
            background: 'linear-gradient(93.12deg, rgba(131, 96, 195, 0.6) -5.61%, rgba(196, 113, 237, 0.8) 55.33%, rgba(46, 191, 145, 0.6) 109.64%)',
            borderRadius: '50px',
          }}
        >
          Contact Us
        </a>
      </div>

      {/* Media queries para la vista móvil */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Posiciona el logo y el menú más arriba */
          .navbar {
            position: relative;
            top: -50px; /* Ajusta este valor según lo que necesites */
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
