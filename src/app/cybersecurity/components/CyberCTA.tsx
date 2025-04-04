"use client";
import React from 'react';

const CyberCTA: React.FC = () => {
  const handleClick = () => {
    alert("Thank you for your interest! We'll get in touch soon.");
  };

  return (
    <section className="py-24 text-white text-center border-t border-gray-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">Ready to Secure Your Systems?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Protect your business from cyber threats today. Let&apos;s build a safer digital future.
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default CyberCTA;
