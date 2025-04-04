"use client";
import React from 'react';

// Definir el tipo para los beneficios
interface BenefitItem {
  title: string;
  desc: string;
  icon: string;
}

const DEBenefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Enhanced Productivity",
      desc: "Automate tedious tasks, freeing up time for higher-value work.",
      icon: "⚙️",
    },
    {
      title: "Scalable Solutions",
      desc: "Build flexible data pipelines that grow with your business.",
      icon: "📈",
    },
    {
      title: "Actionable Insights",
      desc: "Gain valuable insights through real-time data processing and visualization.",
      icon: "🔍",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12">
          Why Choose Our Data Solutions?
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

export default DEBenefits;
