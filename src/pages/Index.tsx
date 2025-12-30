import { useDocumentHead } from '@/hooks/use-document-head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useDocumentHead({
    title: 'Musab bin Aslam | Software Engineer',
    description: 'Portfolio of Musab bin Aslam, a Software Engineer specializing in React Native, React.js, blockchain integration, and building responsive, user-focused applications.',
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
