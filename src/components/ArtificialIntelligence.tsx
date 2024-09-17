const ArtificialIntelligence = () => {
  return (
    <section
      className="absolute bg-transparent text-white"
      style={{
        width: '1397px',
        height: '440px',
        top: '3773px',
        left: '71px',
        gap: '0px',
        border: '1px solid transparent', // Borde superior de 1px transparente
        opacity: '1', // Hacerlo visible
        paddingBottom: '40px', // Añadir espacio debajo del contenido
      }}
    >
      <div className="max-w-[85%] mx-auto flex justify-between">
        {/* Texto Descriptivo */}
        <div className="w-[55%] pr-12">
          <h3
            className="text-xl font-semibold mb-4"
            style={{
              backgroundImage: 'linear-gradient(90deg, #C471ED, #45A29E)', // Degradado
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', // Hace que solo el texto tenga el degradado
              fontSize: '23px',
            }}
          >
            AI Solutions For Smarter Business And Enhanced Security
          </h3>
          <p
            style={{
              fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '35px',
              textAlign: 'left',
            }}
            className="mb-8 text-gray-300"
          >
            Our AI-powered solutions not only help optimize business operations but also strengthen your
            cybersecurity efforts. With AI’s ability to detect anomalies and prevent threats, you can secure
            your digital environment while staying ahead of the competition.
          </p>
          <h2
            className="text-5xl font-extrabold"
            style={{
              color: '#C471ED4D', // Color actualizado para "Artificial Intelligence"
              fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
              fontSize: '70px',
              fontWeight: '600',
              lineHeight: '108px',
              textAlign: 'left',
            }}
          >
            Artificial Intelligence
          </h2>
        </div>

        {/* Lista de Servicios */}
        <div className="w-[40%] flex flex-col justify-center">
          <ul className="space-y-6 text-right">
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">Custom AI Solution</span>
            </li>
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">Machine Learning & Data Analytics</span>
            </li>
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">Automation & Optimization</span>
            </li>
            <li className="border-b border-gray-500 py-2"> {/* Aquí añadimos la línea inferior */}
              <span className="text-lg text-gray-100">AI-Powered Security Enhancements</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Borde en la parte inferior */}
      <div
        className="absolute left-0 bottom-0 w-full border-b"
        style={{
          borderColor: '#CEACF399', // Color del borde
          borderWidth: '1px', // Grosor del borde
          opacity: '0.6', // Hacer el borde más sutil
          bottom: '-180px', // Mueve la línea más abajo si lo necesitas
        }}
      />
    </section>
  );
};

export default ArtificialIntelligence;
