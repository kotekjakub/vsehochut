import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { LogoHeader } from './components/LogoHeader';

function App() {
  return (
    <main className="min-h-screen font-sans bg-cafe-cream text-cafe-black selection:bg-cafe-accent selection:text-white">
      <LogoHeader />
      <Hero />
      <ProblemSolution />
      <SocialProof />
      <Features />
      <Footer />
    </main>
  );
}

export default App;