import React from 'react';
import { Coffee, Wifi, Users, Clock } from 'lucide-react';
import { Button } from './Button';
import { CAFE_DATA } from '../types';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-cafe-cream overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: <Coffee />, label: "Kvalitní káva" },
            { icon: <Wifi />, label: "Rychlá WiFi" },
            { icon: <Users />, label: "Skvělá parta" },
            { icon: <Clock />, label: "Otevřeno denně" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-cafe-accent mb-3 w-8 h-8 [&>svg]:w-full [&>svg]:h-full">{item.icon}</div>
              <span className="font-display font-bold text-lg text-cafe-black">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Offer + Scarcity */}
        <div className="relative">
          <div className="bg-cafe-stone text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm mb-6 animate-pulse">
                  VYSOKÝ ZÁJEM
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                  DORAŽTE K NÁM.
                </h2>
                <p className="text-xl text-stone-300 mb-8 font-light">
                  Skvělá káva, perfektní atmosféra a ti nejlepší lidé ve městě. 
                  Zjistěte, proč nás přes 900 lidí tak chválí.
                </p>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <p className="font-bold text-red-300 mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Tip:
                  </p>
                  <p className="text-sm md:text-base">
                    Místa se plní rychle, hlavně o víkendech a odpoledne. Nečekejte a stavte se.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 justify-center items-center md:items-end">
                 <div className="bg-white text-cafe-black p-6 rounded-2xl shadow-xl rotate-3 max-w-xs text-center">
                    <p className="font-display font-bold text-2xl mb-2">Cenová hladina</p>
                    <p className="text-cafe-accent text-xl">200–300 Kč</p>
                    <p className="text-sm text-stone-500">na osobu</p>
                 </div>
                 <Button href={CAFE_DATA.googleMapsLink} external variant="primary" className="w-full md:w-auto text-xl py-6">
                    Spustit navigaci
                 </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};