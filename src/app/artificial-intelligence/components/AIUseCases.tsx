"use client";
import React from 'react';

// Definir el tipo para los casos de uso de IA
interface UseCaseItem {
  title: string;
  desc: string;
  icon: string;
}

const AIUseCases: React.FC = () => {
  const useCases: UseCaseItem[] = [
    {
      title: "Healthcare",
      desc: "AI-driven diagnostics and patient data analysis.",
      icon: "🏥",
    },
    {
      title: "Finance",
      desc: "Fraud detection and automated trading algorithms.",
      icon: "💵",
    },
    {
      title: "Retail",
      desc: "Personalized shopping experiences and inventory management.",
      icon: "🛒",
    },
    {
      title: "Manufacturing",
      desc: "Predictive maintenance and quality control.",
      icon: "🏭",
    },
    {
      title: "Education",
      desc: "Adaptive learning platforms for students.",
      icon: "📚",
    },
    {
      title: "Marketing",
      desc: "AI-powered customer insights and targeting.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Real-World AI Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {useCases.map((usecase, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform transform"
            >
              <div className="text-6xl">{usecase.icon}</div>
              <h3 className="text-2xl font-semibold mt-6">{usecase.title}</h3>
              <p className="text-gray-300 mt-4">{usecase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIUseCases;
