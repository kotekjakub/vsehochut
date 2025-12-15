import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { CAFE_DATA } from '../types';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden rounded-[3rem] mt-4 mx-4 md:mx-6 shadow-2xl group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
        {/* Updated to a more authentic 'Instagram' style cafe shot - cozy, warm, hipster aesthetic */}
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920&auto=format&fit=crop" 
          alt="Cafe Všehochut Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="bg-cafe-accent text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full">
              Jičín
            </span>
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/20">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-sm">{CAFE_DATA.rating}/5</span>
            </div>
            
            {/* Instagram Text Link */}
            <a 
              href={CAFE_DATA.instagramLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              <span className="font-bold text-xs uppercase tracking-wide">@cafevsehochut</span>
            </a>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight mb-8">
            NEJEN <br />
            DALŠÍ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              KAVÁRNA.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-xl font-light">
            Místo, o kterém se v Jičíně mluví. 
            <br className="hidden md:block" />
            Skvělý vibe, skutečné rozhovory a pověst 4,8 hvězdičky.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={CAFE_DATA.googleMapsLink} external variant="secondary">
              <MapPin className="w-5 h-5 mr-2" />
              Navigovat
            </Button>
            <Button href={`tel:${CAFE_DATA.phone.replace(/\s/g, '')}`} variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-cafe-black">
              Zavolat
            </Button>
          </div>
        </div>
      </div>

      {/* Ticker Tape */}
      <div className="absolute bottom-0 left-0 right-0 bg-cafe-accent overflow-hidden py-3">
        <div className="whitespace-nowrap animate-marquee flex gap-8 text-white font-display font-bold text-xl uppercase tracking-widest">
          <span>• 923 Recenzí</span>
          <span>• Hodnocení 4,8</span>
          <span>• To nejlepší v Jičíně</span>
          <span>• Otevřeno denně</span>
          <span>• 923 Recenzí</span>
          <span>• Hodnocení 4,8</span>
          <span>• To nejlepší v Jičíně</span>
          <span>• Otevřeno denně</span>
          <span>• 923 Recenzí</span>
          <span>• Hodnocení 4,8</span>
          <span>• To nejlepší v Jičíně</span>
          <span>• Otevřeno denně</span>
        </div>
      </div>
    </section>
  );
};