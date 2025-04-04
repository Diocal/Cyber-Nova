"use client";
import React from 'react';

// Definir el tipo para las preguntas frecuentes
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is cybersecurity, and why is it important?",
      answer:
        "Cybersecurity involves protecting systems and networks from cyber attacks. It's essential for preventing data breaches and safeguarding sensitive information.",
    },
    {
      question: "How can you help prevent phishing attacks?",
      answer:
        "We implement phishing prevention protocols and train your staff to recognize and avoid phishing attempts.",
    },
    {
      question: "How often should I conduct security audits?",
      answer:
        "We recommend performing security audits at least twice a year to identify and address potential vulnerabilities.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We provide cybersecurity solutions for various industries, including healthcare, finance, e-commerce, and technology.",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">FAQ</h2>
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

export default FAQSection;
