import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import FooterSection from './sections/FooterSection';
import SmoothScroll from './components/SmoothScroll';
import IntroLoader from './components/IntroLoader';

function App() {
  return (
    <>
      <IntroLoader />

      <SmoothScroll />

      <div
        className="bg-[#0C0C0C] font-kanit"
        style={{ overflowX: 'clip' }}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;