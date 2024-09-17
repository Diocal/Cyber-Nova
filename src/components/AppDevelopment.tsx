const AppDevelopment = () => {
  return (
    <section
      className="absolute bg-transparent text-white"
      style={{
        width: '1397px',
        height: '410px',
        top: '2078px',
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
              background: '#C471ED99',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontSize: '23px',
            }}
          >
            Transform Ideas Into Engaging Apps With Stunning UI/UX
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
            From ideation to execution, we bring your app ideas to life with smooth,
            responsive design and cutting-edge technology. Our team ensures that each app
            is optimized for both performance and user experience, delivering an
            application that works beautifully across all devices.
          </p>
          <h2
            className="text-5xl font-extrabold"
            style={{
              color: '#C471ED4D', // Color actualizado para "App Development"
              fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
              fontSize: '70px',
              fontWeight: '600',
              lineHeight: '108px',
              textAlign: 'left',
            }}
          >
            App Development
          </h2>
        </div>

        {/* Lista de Servicios */}
        <div className="w-[40%] flex flex-col justify-center">
          <ul className="space-y-6 text-right">
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">Custom App Development</span>
            </li>
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">UI/UX Design</span>
            </li>
            <li className="border-b border-gray-500 py-2">
              <span className="text-lg text-gray-100">Prototyping & Testing</span>
            </li>
            <li className="border-b border-gray-500 py-2"> {/* Aquí añadimos la línea inferior */}
              <span className="text-lg text-gray-100">App Maintenance & Support</span>
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

export default AppDevelopment;
