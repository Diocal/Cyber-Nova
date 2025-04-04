"use client";
import React from 'react';

const DEHero: React.FC = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si no encuentra la sección, redirige a una página de contacto
      window.location.href = "/contact";
    }
  };

  return (
    <section className="py-24 text-white text-center bg-gradient-to-r from-green-800 to-blue-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6">
          Data Engineering & Web Scraping Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Transform data into actionable insights and streamline your workflows with our expert data engineering and web scraping services.
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default DEHero;
