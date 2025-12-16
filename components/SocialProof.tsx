import React from 'react';
import { Star, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { CAFE_DATA } from '../types';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-cafe-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
            ČÍSLA <span className="text-cafe-accent">NELŽOU.</span>
          </h2>
          <p className="text-xl text-stone-400">Žádné marketingové řeči. Jen fakta.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-stone-900/50 border border-stone-800 p-8 rounded-3xl text-center hover:bg-stone-800 transition-colors">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4 fill-yellow-400" />
            <div className="text-6xl font-display font-bold mb-2">{CAFE_DATA.rating}</div>
            <div className="text-stone-400 uppercase tracking-widest font-bold text-sm">Průměrné hodnocení</div>
          </div>

          {/* Card 2 */}
          <div className="bg-stone-900/50 border border-stone-800 p-8 rounded-3xl text-center hover:bg-stone-800 transition-colors">
            <MessageCircle className="w-12 h-12 text-cafe-accent mx-auto mb-4" />
            <div className="text-6xl font-display font-bold mb-2">{CAFE_DATA.reviewCount}</div>
            <div className="text-stone-400 uppercase tracking-widest font-bold text-sm">Recenzí na Googlu</div>
          </div>

          {/* Card 3 - Instagram */}
          <a 
            href={CAFE_DATA.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-stone-800 p-8 rounded-3xl text-center hover:border-pink-500/50 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                 <img 
                  src="https://unavatar.io/instagram/cafevsehochut" 
                  alt="Instagram Profile" 
                  className="w-full h-full rounded-full border-2 border-black"
                />
              </div>
              <div className="text-2xl font-display font-bold mb-2 flex items-center justify-center gap-2">
                 <Instagram className="w-6 h-6" />
                 Instagram
              </div>
              <div className="text-stone-300 text-sm group-hover:text-white transition-colors">
                Sledujte nás pro novinky
              </div>
            </div>
          </a>

          {/* Card 4 - Facebook */}
          <a 
            href={CAFE_DATA.facebookLink}
            target="_blank"
            rel="noreferrer"
            className="group bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-stone-800 p-8 rounded-3xl text-center hover:border-blue-500/50 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full p-1 bg-gradient-to-tr from-blue-400 to-blue-600">
                 <div className="w-full h-full rounded-full border-2 border-black bg-blue-600 flex items-center justify-center">
                    <Facebook className="w-10 h-10 text-white fill-white" />
                 </div>
              </div>
              <div className="text-2xl font-display font-bold mb-2 flex items-center justify-center gap-2">
                 <Facebook className="w-6 h-6" />
                 Facebook
              </div>
              <div className="text-stone-300 text-sm group-hover:text-white transition-colors">
                Připojte se k nám
              </div>
            </div>
          </a>
        </div>

        {/* The Guarantee / "Visual" Reviews */}
        <div className="bg-white text-cafe-black rounded-[2rem] p-8 md:p-12 max-w-4xl mx-auto transform rotate-1">
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Co říká {CAFE_DATA.reviewCount} lidí:
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
              <div className="bg-green-100 p-2 rounded-full text-green-700 font-bold text-xs">GOOGLE</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-medium text-lg">"Skvělá atmosféra a obsluha pokaždé."</p>
                <p className="text-sm text-stone-400 mt-1">- Ověřený návštěvník</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
               <div className="bg-green-100 p-2 rounded-full text-green-700 font-bold text-xs">GOOGLE</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-medium text-lg">"Nejlepší místo na relax v Jičíně."</p>
                <p className="text-sm text-stone-400 mt-1">- Ověřený návštěvník</p>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <a href={CAFE_DATA.googleMapsLink} target="_blank" rel="noreferrer" className="text-cafe-accent font-bold hover:underline text-lg">
                Přečíst všech {CAFE_DATA.reviewCount} recenzí na Googlu &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};