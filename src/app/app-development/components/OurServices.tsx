"use client";
import React from 'react';

// Definir el tipo para los servicios
interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

const OurServices: React.FC = () => {
  // Lista de servicios con tipado explícito
  const services: ServiceItem[] = [
    {
      title: "Custom App Development",
      desc: "Tailored solutions for businesses of all sizes.",
      icon: "🚀",
    },
    {
      title: "UI/UX Design & Optimization",
      desc: "Stunning interfaces and enhanced user experiences.",
      icon: "🎨",
    },
    {
      title: "MVP Development",
      desc: "Launch quickly with a minimum viable product (MVP).",
      icon: "⚙️",
    },
    {
      title: "Performance Audits",
      desc: "Ensure smooth, secure app performance.",
      icon: "🔍",
    },
    {
      title: "Continuous Updates",
      desc: "Ongoing improvements to evolve your app.",
      icon: "🔄",
    },
    {
      title: "Cloud Integration",
      desc: "Seamless integration with cloud platforms.",
      icon: "☁️",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-4xl font-extrabold text-center mb-16">
          Our Services
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

export default OurServices;
