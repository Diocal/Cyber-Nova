"use client";
import { useState, useEffect, useCallback } from "react";

const Testimonials = () => {
  // Lista de testimonios
  const testimonials = [
    {
      quote:
        "Thanks to their team, we launched our app two months early, and our clients loved it!",
      author: "Carlos M.",
      position: "CEO of TechNova",
    },
    {
      quote:
        "Their innovative approach transformed our business. Highly recommend them!",
      author: "Anna K.",
      position: "CTO of HealthPlus",
    },
    {
      quote:
        "Exceptional results and a transparent process. We couldn’t be happier.",
      author: "James L.",
      position: "Founder of EduFlex",
    },
    {
      quote: "A team that truly cares about their clients&apos; success!",
      author: "Laura B.",
      position: "Product Manager at BuildWell",
    },
  ];

  // Estado para manejar el testimonio actual
  const [current, setCurrent] = useState(0);

  // Usamos useCallback para evitar que nextSlide cambie en cada renderizado
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  // Retrocede al testimonio anterior
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Efecto para avanzar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [nextSlide]); // Asegúrate de que nextSlide esté en las dependencias

  return (
    <section className="py-24 text-white border-t border-gray-700 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Título de la sección */}
        <h2 className="text-5xl font-extrabold mb-12">What Our Clients Say</h2>

        {/* Contenedor del carrusel */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {/* Renderiza cada testimonio */}
            {testimonials.map((item, index) => (
              <div key={index} className="min-w-full px-6">
                <blockquote className="text-3xl italic">
                  {item.quote}
                </blockquote>
                <p className="mt-6 font-semibold">
                  – {item.author}, {item.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Botón para ir al testimonio anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          aria-label="Previous Testimonial"
        >
          ❮
        </button>

        {/* Botón para ir al siguiente testimonio */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          aria-label="Next Testimonial"
        >
          ❯
        </button>

        {/* Indicadores del carrusel */}
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
