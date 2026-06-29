import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
