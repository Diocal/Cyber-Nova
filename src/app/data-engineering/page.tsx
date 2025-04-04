"use client";
import React from 'react';
import DEHero from "./components/DEHero";
import DEServices from "./components/DEServices";
import DEUseCases from "./components/DEUseCases";
import DEBenefits from "./components/DEBenefits";
import DEFAQ from "./components/DEFAQ";
import DECTA from "./components/DECTA";

const DataEngineeringPage: React.FC = () => {
  return (
    <main>
      {/* Sección Principal - Hero */}
      <DEHero />

      {/* Servicios de Data Engineering & Web Scraping */}
      <DEServices />

      {/* Beneficios Clave de Nuestros Servicios */}
      <DEBenefits />

      {/* Casos de Uso - Aplicaciones Reales */}
      <DEUseCases />

      {/* Preguntas Frecuentes */}
      <DEFAQ />

      {/* Llamado a la Acción - CTA Final */}
      <DECTA />
    </main>
  );
};

export default DataEngineeringPage;
