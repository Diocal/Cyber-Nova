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
        border: '1px solid transparent',
        opacity: '1',
        paddingBottom: '40px', // Añadir espacio debajo del contenido
      }}
    >
      <div className="max-w-[85%] mx-auto flex justify-between">
        {/* Texto Descriptivo */}
        <div className="w-[65%] pr-12"> {/* Cambié el width de 55% a 65% */}
          <h3
            className="text-xl font-semibold mb-4"
            style={{
              background: '#C471ED99',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
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
              color: '#C471ED4D',
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
        <div className="w-[35%] flex flex-col justify-center"> {/* Ajustado para balancear el diseño */}
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
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">AI-Powered Security Enhancements</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Borde en la parte inferior */}
      <div
        className="absolute left-0 bottom-0 w-full border-b"
        style={{
          borderColor: '#CEACF399',
          borderWidth: '1px',
          opacity: '0.6',
          bottom: '-180px',
        }}
      />
    </section>
  );
};

export default ArtificialIntelligence;
