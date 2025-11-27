import React from 'react';
import WarningBanner from './components/WarningBanner';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Downloads from './components/Downloads';
import Opportunities from './components/Opportunities';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-lumira-dark text-white selection:bg-lumira-cyan selection:text-black font-sans">
      <WarningBanner />
      <main>
        <Hero />
        <Architecture />
        <Downloads />
        <Opportunities />
      </main>
      <Footer />
    </div>
  );
};

export default App;