import * as React from 'react';
import WhyTrustUs from "./components/WhyTrustUs";
import OurServices from "./components/OurServices";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import CTASection from "./components/CTASection";



const AppDevelopmentPage = () => {
  return (
    <main>
      <WhyTrustUs />
      <OurServices />
      <DevelopmentProcess />
      <Portfolio />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default AppDevelopmentPage;
