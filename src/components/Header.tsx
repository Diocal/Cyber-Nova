"use client";

import Image from 'next/image';
import vectorWeb from '../../public/vectorweb.png';

const Header = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden z-0">
      {/* Imagen del vector ajustada */}
  {/* Imagen del vector ajustada */}
  <div className="absolute" style={{
    width: '677px',
    height: '713.87px',
    top: '-223.18px',
    left: '-51px',
    gap: '0px',
    opacity: '1'  // Puedes ajustar la opacidad si es necesario
  }}>
  <Image
    src={vectorWeb}
    alt="vector web"
    className="object-contain w-full h-full"
    layout="fill"
    objectFit="contain"
  />
</div>
      {/* Logo de la empresa con gradiente */}
      <div
  className="absolute text-white"
  style={{
    width: '200px',  // Aumenta el ancho para que todo el texto quepa
    height: '52px',
    top: '24px',
    left: '58px',
    gap: '0px',
    opacity: '1',
    whiteSpace: 'nowrap'
  }}
>
  <h1 className="text-[25px] font-extrabold leading-[52px] text-left bg-gradient-to-r from-purple-400 via-purple-500 to-green-500 bg-clip-text text-transparent font-['Neue Haas Grotesk Display Pro']">
    CYBER-NOVA
  </h1>
</div>

      {/* Navegación */}
      <nav className="absolute top-8 right-8 text-white flex items-center space-x-6">
        <a href="#services" className="text-[18px] font-medium leading-[20px] text-left hover:text-gray-400 font-['Neue Haas Grotesk Display Pro']">
          Services
        </a>
        <a href="#about" className="text-[18px] font-medium leading-[20px] text-left hover:text-gray-400 font-['Neue Haas Grotesk Display Pro']">
          About Us
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center px-4 py-2 text-center text-[18px] font-bold leading-[25px] font-['Neue Haas Grotesk Display Pro']"
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

      {/* Texto central ajustado */}
      <div
  className="absolute text-white"
  style={{
    width: '1343px',
    height: '260px',
    top: '527px',
    left: '85px',
    gap: '0px',
    opacity: '1',
  }}
>
<h1
  className="text-left bg-clip-text text-transparent"
  style={{
    fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif', // Fuente
    fontSize: '80px', // Aumenta un poco el tamaño de la fuente
    fontWeight: '900', // Asegura el peso de la fuente
    lineHeight: '105px', // Ajusta la altura de línea para hacerlo más alto
    letterSpacing: '-0.5px', // Ajusta el espaciado de las letras para mayor compactación
    textAlign: 'left',
    backgroundImage: 'linear-gradient(90deg, rgba(131, 96, 195, 0.5) 0%, #C471ED 52.5%, rgba(46, 191, 145, 0.5) 100%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }}
>
  Building Intelligent Solutions, <br />
  Securing Your Digital World
</h1>


</div>


      {/* Subtítulo */}
      <div className="absolute text-white" style={{ top: '750px', left: '85px', width: '1300px' }}>
  <p className="mt-4 text-2xl md:text-3xl text-gray-300 leading-relaxed font-['Neue Haas Grotesk Display Pro']">
    Innovative Solutions in Cybersecurity, AI and APP Development to Protect and Propel <br/>Your Business
  </p>
</div>
      {/* Línea en el bottom con márgenes */}

    </header>
  );
};

export default Header;
