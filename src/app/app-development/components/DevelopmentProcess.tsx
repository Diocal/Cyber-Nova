"use client";
import React from 'react';

// Definir el tipo para los pasos del desarrollo
interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

const DevelopmentProcess: React.FC = () => {
  // Lista de pasos en el proceso de desarrollo
  const processSteps: ProcessStep[] = [
    {
      step: "🔍",
      title: "Discovery & Research",
      desc: "Understanding your market and analyzing solutions.",
    },
    {
      step: "🛠️",
      title: "Design & Prototyping",
      desc: "Interactive prototypes for visualization.",
    },
    {
      step: "👨‍💻",
      title: "Development & Testing",
      desc: "Constant testing for a bug-free app.",
    },
    {
      step: "🚀",
      title: "Launch & Support",
      desc: "Deploying with ongoing maintenance.",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <h2 className="text-5xl font-extrabold text-center mb-12">
        Our Development Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {processSteps.map((item, index) => (
          <div key={index}>
            <div className="text-6xl">{item.step}</div>
            <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
            <p className="mt-4 text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
