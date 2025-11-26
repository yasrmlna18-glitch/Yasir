import React from 'react';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"></div>

      {/* Organic Flowing Shapes */}
      <svg className="absolute top-0 right-0 w-full h-full opacity-30 mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 30 20, 70 20, 100 0 L 100 100 C 70 80, 30 80, 0 100 Z" fill="#FFD700" />
      </svg>
      
      {/* The large red circle/shape from the poster */}
      <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-red-600 mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
      
      {/* The yellow accents */}
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-yellow-400 mix-blend-screen filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    </div>
  );
};