import React from 'react';

export const LogoHeader: React.FC = () => {
  return (
    <header className="w-full bg-cafe-cream pt-10 pb-2 flex flex-col justify-center items-center relative z-20">
      <div className="relative group cursor-default text-center">
        {/* Decorative subtle glow behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-orange-200/30 rounded-full blur-3xl group-hover:bg-orange-300/40 transition-colors duration-700 pointer-events-none"></div>
        
        {/* Main Sign Text */}
        <h1 className="relative font-display font-bold text-6xl md:text-8xl text-cafe-black tracking-tighter uppercase leading-none transform transition-transform duration-500 hover:scale-[1.01]">
          Všehochuť<span className="text-cafe-accent">.</span>
        </h1>
        
        {/* Subtitle / Tagline */}
        <p className="relative font-sans text-xs md:text-sm font-bold tracking-[0.4em] text-stone-500 mt-3 uppercase pl-1 opacity-80">
          Café & Bistro Jičín
        </p>
      </div>
    </header>
  );
};