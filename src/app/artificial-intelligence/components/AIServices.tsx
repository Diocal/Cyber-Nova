"use client";
import React from 'react';

// Definir el tipo para los servicios de IA
interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

const AIServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Machine Learning",
      desc: "Build models that learn and adapt to your data.",
      icon: "🧠",
    },
    {
      title: "Natural Language Processing",
      desc: "Extract insights from text and voice data.",
      icon: "🗣️",
    },
    {
      title: "Computer Vision",
      desc: "Empower systems to interpret and analyze images.",
      icon: "📷",
    },
    {
      title: "AI Chatbots",
      desc: "Create intelligent bots to enhance customer experience.",
      icon: "🤖",
    },
    {
      title: "Predictive Analytics",
      desc: "Anticipate future trends based on historical data.",
      icon: "📊",
    },
    {
      title: "Automation",
      desc: "Streamline operations with automated workflows.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          AI Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform transform"
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-6">{service.title}</h3>
              <p className="text-gray-300 mt-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices;
