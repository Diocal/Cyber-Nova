const teamMembers = [
  {
    name: "Jaxson Schleifer",
    role: "AI Specialist",
    image: "/Rectangle 2.png", // Asegúrate de actualizar las rutas a tus imágenes
  },
  {
    name: "Marilyn George",
    role: "UI/UX Designer",
    image: "/Rectangle 5.png",
  },
  {
    name: "Rayna Dias",
    role: "Cybersecurity Specialist",
    image: "/Rectangle 6.png",
  },
  {
    name: "Dulce Culhane",
    role: "Front End Developer",
    image: "/Rectangle 7.png",
  },
];

const AboutUs = () => {
  return (
    <section
      className="absolute bg-transparent text-white"
      style={{
        width: '913px',
        height: '1024px',
        top: '4536px',
        left: '299px',
        gap: '0px',
        borderRadius: '30px 0px 0px 0px',
        opacity: '1', // Asegurarse de que sea visible
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">About Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-64 h-64 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-md text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
