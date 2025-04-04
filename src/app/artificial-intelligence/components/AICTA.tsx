"use client";
import React from 'react';

const AICTA: React.FC = () => {
  return (
    <section className="py-24 text-white text-center border-t border-gray-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">Ready to Innovate with AI?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Contact us today and let&apos;s shape the future together.
        </p>
        <button
          className="px-8 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
          onClick={() => alert('Contact form coming soon!')}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default AICTA;
