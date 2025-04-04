"use client";
import React from 'react';

// Definir el tipo para los servicios
interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

const CyberServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Threat Detection",
      desc: "Real-time detection and mitigation of cyber threats.",
      icon: "🛡️",
    },
    {
      title: "Data Encryption",
      desc: "Protect sensitive data through advanced encryption protocols.",
      icon: "🔐",
    },
    {
      title: "Incident Response",
      desc: "Quick and efficient response to security breaches.",
      icon: "🚨",
    },
    {
      title: "Vulnerability Assessment",
      desc: "Identify and resolve potential vulnerabilities in your systems.",
      icon: "🔍",
    },
    {
      title: "Cloud Security",
      desc: "Secure cloud infrastructure and services from cyber attacks.",
      icon: "☁️",
    },
    {
      title: "Security Audits",
      desc: "Regular audits to ensure system integrity and compliance.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Our Cybersecurity Services
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

export default CyberServices;
