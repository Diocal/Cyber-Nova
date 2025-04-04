"use client";
import React from 'react';
import AIHero from "./components/AIHero";
import AIServices from "./components/AIServices";
import AIPortfolio from "./components/AIPortfolio";
import AICTA from "./components/AICTA";
import AIBenefits from "./components/AIBenefits";
import AIUseCases from "./components/AIUseCases";
import AIFAQ from "./components/AIFAQ";

const ArtificialIntelligencePage: React.FC = () => {
  return (
    <main>
      <AIHero />
      <AIServices />
      <AIBenefits />
      <AIUseCases />
      <AIPortfolio />
      <AIFAQ />
      <AICTA />
    </main>
  );
};

export default ArtificialIntelligencePage;
