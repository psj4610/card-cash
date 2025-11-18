import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Process from './components/Process';
import Benefits from './components/Benefits';
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
      <Stats />
      <Features />
      <Process />
      <Benefits />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
