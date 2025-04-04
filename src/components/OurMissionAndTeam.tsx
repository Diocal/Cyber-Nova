const OurMissionAndTeam = () => {
  return (
    <section className="relative bg-transparent text-white py-16 px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Misión y Experiencia */}
        <div className="md:w-2/3">
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
        <div className="mt-8 md:mt-0 md:w-1/3 flex items-center justify-end">
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
