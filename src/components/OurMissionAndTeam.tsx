const OurMissionAndTeam = () => {
  return (
    <section
      className="absolute bg-transparent text-white"
      style={{
        width: '1370px',
        height: '516px',
        top: '5748px',
        left: '78px',
        gap: '0px',
        opacity: '1', // Para asegurar que sea visible
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* Misión y Experiencia */}
        <div className="w-[55%]">
          <div className="mb-12">
            <h3
              className="text-sm font-semibold uppercase mb-2"
              style={{
                color: '#C471ED99', // Color solicitado para Our Mission
              }}
            >
              Our Mission
            </h3>
            <p className="text-2xl font-semibold text-white leading-relaxed">
              We empower businesses by providing world-class cybersecurity and AI
              solutions designed to secure and elevate their operations.
            </p>
          </div>
          <div>
            <h3
              className="text-sm font-semibold uppercase mb-2"
              style={{
                color: '#C471ED99', // Color solicitado para Our Expertise
              }}
            >
              Our Expertise
            </h3>
            <p className="text-2xl font-semibold text-white leading-relaxed">
              With a team of experts in both cybersecurity and AI development, we bring
              unparalleled innovation and protection to businesses worldwide.
            </p>
          </div>
        </div>

        {/* Título del Equipo */}
        <div className="w-[45%] flex items-center justify-end">
          <h2
            className="text-6xl font-extrabold"
            style={{
              color: '#C471ED99', // Color solicitado para Our Team
            }}
          >
            Our Team
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurMissionAndTeam;
