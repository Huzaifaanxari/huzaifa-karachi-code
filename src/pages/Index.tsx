import Navigation from "@/components/portfolio/Navigation"
import HeroSection from "@/components/portfolio/HeroSection"
import AboutSection from "@/components/portfolio/AboutSection"
import EducationSection from "@/components/portfolio/EducationSection"
import ExperienceSection from "@/components/portfolio/ExperienceSection"
import SkillsSection from "@/components/portfolio/SkillsSection"
import ProjectsSection from "@/components/portfolio/ProjectsSection"
import StrengthsSection from "@/components/portfolio/StrengthsSection"
import ContactSection from "@/components/portfolio/ContactSection"
import Footer from "@/components/portfolio/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="strengths">
          <StrengthsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
