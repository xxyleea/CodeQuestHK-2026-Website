import { Routes, Route, useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyItMatters } from './components/WhyItMatters';
import { EventDetails } from './components/EventDetails';
import { Success2025 } from './components/Success2025';
import { Partners } from './components/Partners';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyItMatters />
      <EventDetails />
      <CallToAction />
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/2025" element={<Success2025 />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}
