import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyItMatters } from './components/WhyItMatters';
import { EventDetails } from './components/EventDetails';
import { Success2025 } from './components/Success2025';
import { Partners } from './components/Partners';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | '2025' | 'partners'>(
    'home'
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'home' ? (
        <>
          <Hero />
          <About />
          <WhyItMatters />
          <EventDetails />
          <CallToAction />
        </>
      ) : activeTab === '2025' ? (
        <Success2025 onBack={() => setActiveTab('home')} />
      ) : (
        <Partners onBack={() => setActiveTab('home')} />
      )}
      <Footer />
    </div>
  );
}
