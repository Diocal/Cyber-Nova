"use client";
import React from 'react';

// Definir el tipo para los servicios
interface ServiceItem {
  title: string;
}

// Lista de servicios
const services: ServiceItem[] = [
  { title: "Advance Threat Protection" },
  { title: "CI/CD Automation" },
  { title: "Infrastructure as Code" },
  { title: "Compliance & Risk Management" },
];

// Definir el tipo para las tecnologías
interface TechItem {
  title: string;
  items: string;
}

// Lista de tecnologías
const technologies: TechItem[] = [
  { title: "Cloud Platforms", items: "AWS, GCP, Azure, DigitalOcean" },
  { title: "DevOps Tools", items: "Docker, Kubernetes, Jenkins, Terraform" },
  { title: "Programming Languages", items: "Python, Golang, Java, PHP, Node.js" },
  { title: "Databases", items: "SQL, NoSQL" },
  { title: "Scripting", items: "Bash, PowerShell" },
  { title: "Server Management", items: "Apache, Tomcat, Nginx, Linux" },
];

const Cybersecurity: React.FC = () => {
  return (
    <section className="relative bg-transparent text-white py-16 px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Texto Descriptivo */}
        <div className="md:w-2/3 pr-8">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Stay Ahead with Scalable and Secure DevOps Solutions
          </h3>
          <p className="mb-8 text-gray-300 text-lg leading-relaxed">
            In today’s digital landscape, DevOps and security aren’t optional—they’re
            essential. We offer proactive, AI-powered solutions that anticipate and
            neutralize threats while optimizing your infrastructure to keep your business
            running smoothly and securely.
          </p>
          <h2 className="text-6xl font-extrabold text-purple-400/60">
            Cloud Security and DevOps
          </h2>
        </div>

        {/* Lista de Servicios */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col justify-center">
          <ul className="space-y-6 text-right">
            {services.map((service, index) => (
              <li key={index} className="border-b border-gray-500 pb-2">
                <span className="text-lg text-gray-100">{service.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sección adicional: Tecnologías y Habilidades */}
      <div className="mt-16">
        <h3 className="text-3xl font-extrabold mb-8 text-center text-purple-400">
          Technologies and Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold mb-4">{tech.title}</h4>
              <p>{tech.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div className="w-full border-b border-purple-400/60 mt-16" />
    </section>
  );
};

export default Cybersecurity;
