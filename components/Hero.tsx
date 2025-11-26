import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="relative">
        <h1 className="font-display text-[15vw] leading-[0.85] text-white select-none drop-shadow-xl tracking-tighter">
          BASKET<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-200">BALL</span>
        </h1>
        
        {/* Decorative elements from poster */}
        <div className="absolute top-0 right-0 hidden md:block rotate-12">
          <div className="border-4 border-white rounded-full w-32 h-32 opacity-20"></div>
        </div>
      </div>

      <div className="mt-8 max-w-2xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white font-bold uppercase tracking-widest text-sm md:text-lg">
          <span className="bg-black/20 px-4 py-1 rounded-sm backdrop-blur-md border-l-4 border-poster-yellow">
            UIN Salatiga
          </span>
          <span className="hidden md:block text-poster-yellow">•</span>
          <span>Sports Hall 3rd Floor</span>
          <span className="hidden md:block text-poster-yellow">•</span>
          <span>04-22 New Season</span>
        </div>
        
        <p className="mt-6 text-white/90 font-medium max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          The fascination with music has existed for a long time. 
          Join the ultimate fusion of street basketball and rhythm at UIN Salatiga.
          Fight for the future.
        </p>
      </div>
    </section>
  );
};