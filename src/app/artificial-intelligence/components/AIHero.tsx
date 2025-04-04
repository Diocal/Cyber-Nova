"use client";
import React from 'react';

const AIHero: React.FC = () => {
  return (
    <section className="py-24 text-white text-center bg-gradient-to-r from-blue-900 to-purple-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6">
          Unlock the Power of Artificial Intelligence
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Transform your business with AI-driven solutions tailored to meet your needs.
        </p>
        <button
          className="px-8 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
          onClick={() => alert('AI solutions coming soon!')}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AIHero;
