import React, { useEffect, useState } from 'react';
import { BackgroundShapes } from './components/BackgroundShapes';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { AICoach } from './components/AICoach';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden font-sans selection:bg-poster-pink selection:text-white">
      <BackgroundShapes />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow flex flex-col">
          <Hero />
          
          <div className="mt-12 md:mt-0">
             <Schedule />
          </div>
        </div>

        {/* Footer info */}
        <footer className="relative z-10 py-8 text-center text-white/60 text-xs uppercase tracking-widest">
          <p>© 2024 UIN Salatiga Basketball • Designed with Passion</p>
        </footer>
      </div>

      <AICoach />
    </main>
  );
};

export default App;