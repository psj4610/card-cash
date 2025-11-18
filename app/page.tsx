import Header from './components/Header';
import Hero from './components/Hero';
import FraudWarning from './components/FraudWarning';
import Stats from './components/Stats';
import Features from './components/Features';
import Process from './components/Process';
import InstallmentInfo from './components/InstallmentInfo';
import Benefits from './components/Benefits';
import FeatureGrid from './components/FeatureGrid';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      <Header />
      <Hero />
      <FraudWarning />
      <Stats />
      <Features />
      <Process />
      <InstallmentInfo />
      <Benefits />
      <FeatureGrid />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
