"use client";
import React from 'react';
// import Image from 'next/image'; // eslint-disable-line @typescript-eslint/no-unused-vars

// Definir el tipo para los miembros del equipo
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Lista de miembros del equipo
const teamMembers: TeamMember[] = [
  {
    name: "Joseph Mauricio",
    role: "Devops Specialist",
    image: "/buho.jpeg",
  },
  {
    name: "Dio Kotov",
    role: "AI Specialist",
    image: "/dio.png",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative bg-transparent text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 mb-4 relative">
 
              </div>
              <h3 className="text-xl font-semibold">{}</h3>
              <p className="text-md text-gray-400">{}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
