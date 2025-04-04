"use client";
import React from 'react';

const AIFAQ: React.FC = () => {
  const faqs = [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI can enhance operational efficiency, reduce costs, and provide insights for better decision-making.",
    },
    {
      question: "What industries benefit the most from AI?",
      answer:
        "Industries like healthcare, finance, retail, and manufacturing see significant benefits from AI solutions.",
    },
    {
      question: "Is AI expensive to implement?",
      answer:
        "AI solutions vary in cost, but the return on investment often outweighs initial expenses through increased efficiency.",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold">{faq.question}</h3>
              <p className="text-gray-300 mt-4">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFAQ;
