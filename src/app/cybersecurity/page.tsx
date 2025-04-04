"use client";
import React from 'react';
import CyberServices from "./components/CyberServices";
import CyberCTA from "./components/CyberCTA";
import CyberPortfolio from "./components/CyberPortfolio";
import CyberTestimonials from "./components/CyberTestimonials";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";

const CybersecurityPage: React.FC = () => {
  return (
    <main className="">
      {/* Sección de Servicios */}
      <CyberServices />

      {/* Beneficios de los Servicios de Ciberseguridad */}
      <BenefitsSection />

      {/* Portafolio de Proyectos */}
      <CyberPortfolio />

      {/* Testimonios de Clientes */}
      <CyberTestimonials />

      {/* Preguntas Frecuentes */}
      <FAQSection />

      {/* Llamado a la Acción */}
      <CyberCTA />
    </main>
  );
};

export default CybersecurityPage;
