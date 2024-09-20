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
        opacity: '1',
      }}
    >
      <div className="w-full">
        {/* Título de Services */}
        <h2
          className="font-extrabold tracking-wide text-left mb-8"
          style={{
            fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
            fontSize: '40px',
            fontWeight: '900',
            lineHeight: '70px',
            textAlign: 'left',
            background: '#C471ED99',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Services
        </h2>

        {/* Lista de Servicios */}
        <div className="space-y-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex justify-between items-center pb-4 ${
                index === 0 ? 'border-t border-gray-500 pt-6' : ''
              } border-b border-gray-500`}
              style={{
                paddingBottom: '16px',
                borderBottomWidth: '1px',
                borderTopWidth: index === 0 ? '1px' : '0',
              }}
            >
              <div
                className="text-lg font-semibold"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                  fontSize: '25px',
                  fontWeight: '700',
                  lineHeight: '30px',
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
                  backgroundColor: 'transparent',
                  border: '2px solid rgba(196, 113, 237, 0.5)',
                  borderRadius: '50px',
                  width: '150px',
                  padding: '10px 30px',
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-button {
          background-color: rgba(196, 113, 237, 0.2);
          border: 2px solid rgba(177, 142, 233, 0.5);
        }
        .custom-button:hover {
          background-color: rgba(196, 113, 237, 0.5);
          box-shadow: 0 4px 12px rgba(196, 113, 237, 0.5);
          border-color: rgba(177, 142, 233, 0.8);
        }

        @media (max-width: 768px) {
          section {
            width: 100%;
            top: auto;
            left: auto;
            padding: 20px;
            border-radius: 0;
          }
          h2 {
            font-size: 30px;
            line-height: 50px;
          }
          .flex {
            flex-direction: column;
            align-items: flex-start;
          }
          .custom-button {
            width: 100%;
            padding: 15px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
