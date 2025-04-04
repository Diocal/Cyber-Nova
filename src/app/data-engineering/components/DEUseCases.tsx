"use client";
import React from 'react';

// Definir el tipo para los casos de uso
interface UseCaseItem {
  title: string;
  desc: string;
  icon: string;
}

const DEUseCases: React.FC = () => {
  const useCases: UseCaseItem[] = [
    {
      title: "E-commerce Monitoring",
      desc: "Scrape competitor prices and product information to stay ahead in the market.",
      icon: "🛒",
    },
    {
      title: "Market Research",
      desc: "Extract data from multiple sources to analyze market trends.",
      icon: "📈",
    },
    {
      title: "Financial Data Aggregation",
      desc: "Collect and analyze financial data for better investment decisions.",
      icon: "💰",
    },
    {
      title: "Healthcare Data Processing",
      desc: "Handle large datasets to improve medical research and patient care.",
      icon: "🏥",
    },
    {
      title: "Job Market Analysis",
      desc: "Scrape job listings to gather hiring trends and salary insights.",
      icon: "👨‍💼",
    },
    {
      title: "Social Media Analytics",
      desc: "Collect data from social platforms for audience sentiment analysis.",
      icon: "📲",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {useCases.map((usecase, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-700 hover:shadow-xl hover:scale-105 transition-transform transform"
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

export default DEUseCases;
