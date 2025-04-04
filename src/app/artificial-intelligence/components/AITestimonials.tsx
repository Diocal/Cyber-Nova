"use client";
import React from 'react';

const AITestimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "AI transformed the way we handle customer data. Our productivity increased by 40%.",
      author: "Sarah L., CTO of DataWorks",
    },
    {
      quote:
        "With predictive analytics, we were able to forecast market trends and outperform competitors.",
      author: "Mike D., CEO of TradeMaster",
    },
  ];

  return (
    <section className="py-24 text-white bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12">
          What Our Clients Say About AI Solutions
        </h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-12">
            <p className="text-xl text-gray-300 mb-4">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="text-lg text-gray-400">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AITestimonials;
