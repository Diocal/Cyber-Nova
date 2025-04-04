"use client";

import React from 'react';
import Image from 'next/image';

// Definir el tipo de los elementos del portafolio
interface ProjectItem {
  img: string;
  name: string;
  desc: string;
}

const Portfolio: React.FC = () => {
  // Lista de proyectos con tipado explícito
  const projects: ProjectItem[] = [
    {
      img: "/avatar1.png",
      name: "TopStars",
      desc: "A sleek online shopping platform.",
    },
    {
      img: "/bridge.png",
      name: "Bridge24 App",
      desc: "Helping patients track their health.",
    },
    {
      img: "/rectangle3.png",
      name: "Learning Management System",
      desc: "Empowering education with tech.",
    },
    {
      img: "/fintrack.png",
      name: "FinTrack App",
      desc: "Track your finances effortlessly.",
    },
    {
      img: "/travelapp.png",
      name: "TravelMate",
      desc: "Your companion for seamless travel planning.",
    },
    {
      img: "/socialapp.png",
      name: "Connectify",
      desc: "A social platform to stay connected with friends.",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg flex flex-col items-center text-center"
            >
              <Image
                src={project.img}
                alt={project.name}
                className="rounded-lg mb-4"
                width={128}  // Puedes ajustar el tamaño según tus necesidades
                height={128} // Debes especificar el tamaño para que Next.js pueda optimizar la imagen
              />
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-300 mt-2">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
