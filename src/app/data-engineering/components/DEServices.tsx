"use client";
import React from 'react';

// Definir el tipo para los servicios
interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

const DEServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Custom Data Pipelines",
      desc: "Design and implementation of efficient data pipelines for seamless data flow.",
      icon: "🔧",
    },
    {
      title: "Automated Web Scraping",
      desc: "Scrape and extract data from websites in real-time with minimal effort.",
      icon: "🌐",
    },
    {
      title: "Data Warehousing",
      desc: "Store large volumes of data securely for easy access and analysis.",
      icon: "📦",
    },
    {
      title: "ETL Processes",
      desc: "Extract, transform and load (ETL) pipelines to handle big data transformations.",
      icon: "🗄️",
    },
    {
      title: "Real-Time Data Processing",
      desc: "Implement streaming data solutions for real-time analytics.",
      icon: "⚡",
    },
    {
      title: "Data Visualization",
      desc: "Create dashboards and visualizations to present your data intuitively.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Our Data Engineering & Web Scraping Services
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

export default DEServices;
