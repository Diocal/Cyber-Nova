const Footer = () => {
  return (
    <footer
      className="absolute bg-black text-white py-8 rounded-t-3xl"
      style={{
        width: '1434px',
        height: '101px',
        top: '6451px',
        left: '39px',
        gap: '0px',
        border: '1px solid transparent',
        opacity: '1',
      }}
    >
      {/* Línea fina encima del footer */}
      <div className="w-full border-t border-purple-300 opacity-30 mb-6"></div>

      {/* Contenido del footer */}
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Información de contacto */}
        <div>
          <p className="mb-2">info@email.com</p>
          <p>+62878 **** ****</p>
        </div>

        {/* Texto de descripción */}
        <div className="text-center">
          <p>Consectetur laoreet parturient eu orci lacus risus turpis in nunc.</p>
          <p>Etiam pellentesque duis ac nisi vitae id.</p>
        </div>

        {/* Mostrar los logos de redes sociales */}
        <div className="flex space-x-4 items-center"> {/* Asegúrate de usar items-center */}
          <img
            src="/instagram.png"
            alt="Instagram"
            style={{
              width: '34px',  // Ancho especificado
              height: '34px', // Altura especificada
            }}
          />
          <img
            src="/facebook.png"
            alt="Facebook"
            style={{
              width: '34px',  // Ancho especificado
              height: '34px', // Altura especificada
            }}
          />
          {/* Icono de LinkedIn con las propiedades ajustadas */}
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            style={{
              width: '34px',  // Ajusta LinkedIn al mismo tamaño para alineación
              height: '34px',
            }}
          />
          <img
            src="/telegram.png"
            alt="Telegram"
            style={{
              width: '34px',  // Ancho especificado
              height: '34px', // Altura especificada
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
