"use client";
import React from 'react';

const AIBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Increased Efficiency",
      desc: "Automate complex processes and reduce operational costs.",
      icon: "⚡",
    },
    {
      title: "Data-Driven Decisions",
      desc: "Utilize AI insights to make smarter, data-backed choices.",
      icon: "📈",
    },
    {
      title: "Enhanced User Experience",
      desc: "Implement personalized and responsive solutions.",
      icon: "🌐",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12">
          Why Invest in Artificial Intelligence?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105"
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

export default AIBenefits;
