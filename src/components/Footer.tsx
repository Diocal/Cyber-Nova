"use client";
import React from 'react';
import Image from 'next/image'; // Importar Image de next/image

interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  { href: 'https://instagram.com', src: '/instagram.png', alt: 'Instagram' },
  { href: 'https://facebook.com', src: '/facebook.png', alt: 'Facebook' },
  { href: 'https://linkedin.com', src: '/linkedin.png', alt: 'LinkedIn' },
  { href: 'https://telegram.org', src: '/telegram.png', alt: 'Telegram' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white py-8 rounded-t-3xl">
      {/* Línea fina encima del footer */}
      <div className="w-full border-t border-purple-300 opacity-30 mb-6"></div>

      {/* Contenido del footer */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Información de contacto */}
        <div className="text-center md:text-left">
          <p className="mb-2">info@email.com</p>
          <p>+62878 **** ****</p>
        </div>

        {/* Texto de descripción */}
        <div className="text-center flex-1">
          <p>Consectetur laoreet parturient eu orci lacus risus turpis in nunc.</p>
          <p>Etiam pellentesque duis ac nisi vitae id.</p>
        </div>

        {/* Mostrar los logos de redes sociales */}
        <div className="flex space-x-4 items-center justify-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={link.src}
                alt={link.alt}
                width={32}  // Ancho de la imagen
                height={32} // Altura de la imagen
                className="transition-all hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
