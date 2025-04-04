"use client";
import React from 'react';
import Image from 'next/image'; // Importar Image de next/image

// Definir el tipo para los proyectos
interface ProjectItem {
  img: string;
  name: string;
  desc: string;
}

const AIPortfolio: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      img: "/ai-chatbot.png",
      name: "AI Chatbot",
      desc: "AI chatbot that improves customer service by 60%.",
    },
    {
      img: "/vision.png",
      name: "Vision Recognition",
      desc: "Computer vision project for automatic object detection.",
    },
    {
      img: "/forecasting.png",
      name: "Forecasting Model",
      desc: "Predictive analytics to forecast future sales.",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12">
          Our AI Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <Image
                src={project.img}
                alt={project.name}
                width={128} // Especifica el ancho de la imagen
                height={128} // Especifica la altura de la imagen
                className="rounded-lg mb-4 object-cover"
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

export default AIPortfolio;
