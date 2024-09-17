"use client";

const servicesData = [
  { title: "App Development", description: "Building modern applications." },
  { title: "Cybersecurity", description: "Protecting your business from threats." },
  { title: "Artificial Intelligence", description: "Leveraging AI to improve processes." },
];

const Services = () => {
  return (
    <section
      className="absolute bg-transparent text-white"
      style={{
        width: '1424px',
        height: '320px',
        top: '1268px',
        left: '44px',
        gap: '0px',
        borderRadius: '25px 0px 0px 0px',
        opacity: '1', // Mantener la visibilidad
      }}
    >
      <div className="w-full">
        {/* Título de Services */}
        <h2
          className="font-extrabold tracking-wide text-left mb-8"
          style={{
            fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
            fontSize: '40px',
            fontWeight: '900', // Incrementar el font-weight a 900 para más grosor
            lineHeight: '70px',
            textAlign: 'left',
            background: '#C471ED99', // Color de fondo que especificaste
            WebkitBackgroundClip: 'text', // Para asegurarse de que el fondo aplique solo al texto
            backgroundClip: 'text',
            color: 'transparent', // Transparente para mostrar el color del fondo en el texto
          }}
        >
          Services
        </h2>

        {/* Lista de Servicios */}
        <div className="space-y-4"> {/* Ajuste del espacio entre servicios */}
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex justify-between items-center pb-4 ${
                index === 0 ? 'border-t border-gray-500 pt-6' : '' // Agregar más espacio superior al primer elemento
              } border-b border-gray-500`}
              style={{
                paddingBottom: '16px', // Ajuste del padding inferior para reducir espacio
                borderBottomWidth: '1px', // Grosor de la línea inferior
                borderTopWidth: index === 0 ? '1px' : '0', // Grosor de la línea superior
              }}
            >
              <div
                className="text-lg font-semibold"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                  fontSize: '25px', // Tamaño de fuente unificado
                  fontWeight: '700', // Mayor grosor en los títulos de servicios
                  lineHeight: '30px', // Line-height unificado
                  textAlign: 'left',
                  color: 'white',
                }}
              >
                {service.title}
              </div>
              <button
                className="custom-button px-8 py-1 rounded-full transition-all"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                  fontSize: '16px',
                  color: 'white',
                  backgroundColor: 'transparent', // Fondo transparente
                  border: '2px solid rgba(196, 113, 237, 0.5)', // Borde morado claro
                  borderRadius: '50px', // Redondez completa
                  width: '150px', // Aumentar el ancho del botón
                  padding: '10px 30px', // Reducir la altura del botón
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Transiciones suaves
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos adicionales para el botón */}
      <style jsx>{`
        .custom-button {
          background-color: rgba(196, 113, 237, 0.2); /* Color de fondo suave */
          border: 2px solid rgba(177, 142, 233, 0.5); /* Color del borde */
        }
        .custom-button:hover {
          background-color: rgba(196, 113, 237, 0.5); /* Color de fondo al hacer hover */
          box-shadow: 0 4px 12px rgba(196, 113, 237, 0.5); /* Sombra suave */
          border-color: rgba(177, 142, 233, 0.8); /* Color de borde al hacer hover */
        }
      `}</style>
    </section>
  );
};

export default Services;
