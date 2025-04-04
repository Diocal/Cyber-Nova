"use client";
import React, { useState, useEffect, useCallback } from "react";

const CyberTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Their security solutions saved our company from a massive data breach. Highly recommended!",
      author: "John D.",
      position: "CEO of DataSecure",
    },
    {
      quote:
        "A responsive and professional team that understands the critical nature of cybersecurity.",
      author: "Linda P.",
      position: "CTO of CloudSafe",
    },
    {
      quote: "Fast response to incidents and top-notch threat detection tools.",
      author: "Michael R.",
      position: "Head of IT at TechFort",
    },
  ];

  const [current, setCurrent] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-24 text-white border-t border-gray-700 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-5xl font-extrabold mb-12">
          What Our Clients Say
        </h2>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="min-w-full px-6">
                <blockquote className="text-3xl italic">&quot;{item.quote}&quot;</blockquote>
                <p className="mt-6 font-semibold">
                  – {item.author}, {item.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer w-4 h-4 rounded-full ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberTestimonials;
