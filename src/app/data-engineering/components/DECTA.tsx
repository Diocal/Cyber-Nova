"use client";
import React from 'react';

const DECTA: React.FC = () => {
  const handleClick = () => {
    alert("Thank you for your interest! We will contact you soon.");
  };

  return (
    <section className="py-24 text-center bg-gradient-to-r from-green-500 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Unlock the power of data today. Contact us to discuss your project and take the next step.
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default DECTA;
