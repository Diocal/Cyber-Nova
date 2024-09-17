import Header from '../components/Header';
import AboutUs from '@/components/AboutUs';
import Cybersecurity from '@/components/Cybersecurity';
import ArtificialIntelligence from '../components/ArtificialIntelligence';
import Services from '../components/Services';
import AppDevelopment from '../components/AppDevelopment';
import OurMissionAndTeam from '../components/OurMissionAndTeam';
import Footer from '../components/Footer';

export default function Page() {  // Cambié 'Layout' por 'Page'
  return (
    <>
      <main>
        <Header />
        <Services />
        <AppDevelopment />
        <Cybersecurity/>
        <ArtificialIntelligence/>
        <AboutUs/>
        <OurMissionAndTeam/>
        <Footer />
      </main>
    </>
  );
}
