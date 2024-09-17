import Header from '../components/Header';
import AboutUs from '@/components/AboutUs';
import Cybersecurity from '@/components/Cybersecurity';
import ArtificialIntelligence from '../components/ArtificialIntelligence';
import Services from '../components/Services';  // Asegúrate de que Services esté importado
import AppDevelopment from '../components/AppDevelopment';  // Asegúrate de que AppDevelopment esté importado
import OurMissionAndTeam from '../components/OurMissionAndTeam';
import Footer from '../components/Footer';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <main>
        {/* Aquí añades el componente Hero */}
        <Header />

        {/* Mover el componente Services arriba de App Development */}
        <Services />

        {/* Después agregas App Development */}
        <AppDevelopment />
        <Cybersecurity/>
        <ArtificialIntelligence/>
        <AboutUs/>
        <OurMissionAndTeam/>
        <Footer />
        {children}
      </main>
    </>
  );
}
