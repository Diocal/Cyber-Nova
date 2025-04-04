"use client";
import React from 'react';

const AppDevelopment: React.FC = () => {
  return (
    <section className="relative bg-transparent text-white py-16 px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Texto Descriptivo */}
        <div className="md:w-2/3 pr-8">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent">
            Transform Ideas Into Engaging Apps With Stunning UI/UX
          </h3>
          <p className="mb-8 text-gray-300 text-lg leading-relaxed">
            From ideation to execution, we bring your app ideas to life with smooth,
            responsive design and cutting-edge technology. Our team ensures that each app
            is optimized for both performance and user experience, delivering an
            application that works beautifully across all devices.
          </p>
          <h2 className="text-6xl font-extrabold text-purple-400/60">
            App Development
          </h2>
        </div>

        {/* Lista de Servicios */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col justify-center">
          <ul className="space-y-6 text-right">
            {[
              "Custom App Development",
              "UI/UX Design",
              "Prototyping & Testing",
              "App Maintenance & Support",
            ].map((service, index) => (
              <li key={index} className="border-b border-gray-500 pb-2">
                <span className="text-lg text-gray-100">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div className="w-full border-b border-purple-400/60 mt-8" />
    </section>
  );
};

export default AppDevelopment;
