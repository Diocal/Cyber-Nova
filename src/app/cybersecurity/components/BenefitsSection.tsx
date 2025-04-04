"use client";
import React from 'react';

// Definir el tipo para los beneficios
interface BenefitItem {
  title: string;
  desc: string;
  icon: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Proactive Defense",
      desc: "We anticipate threats before they happen, ensuring constant protection.",
      icon: "🛡️",
    },
    {
      title: "Expert Team",
      desc: "Our team consists of top security experts with years of experience.",
      icon: "👨‍💻",
    },
    {
      title: "Tailored Solutions",
      desc: "Customized strategies designed to meet your unique business needs.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12">
          Why Choose Our Cybersecurity Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-700 hover:shadow-xl hover:scale-105 transition-transform transform"
            >
              <div className="text-6xl">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mt-6">{benefit.title}</h3>
              <p className="text-gray-300 mt-4">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
