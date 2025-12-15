import React from 'react';
import { Phone, MapPin, AlertTriangle, Instagram, Clock } from 'lucide-react';
import { CAFE_DATA } from '../types';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-black text-white pt-24 pb-12 rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Warning Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 border-b border-stone-800 pb-20">
          <div className="inline-flex items-center gap-2 text-yellow-500 mb-6 bg-yellow-500/10 px-4 py-2 rounded-full">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold uppercase text-sm tracking-wider">Nespokojte se s málem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ŽIVOT JE MOC KRÁTKÝ NA <br />
            <span className="text-stone-500 line-through">ŠPATNOU KÁVU.</span>
          </h2>
          <p className="text-xl text-stone-400">
            Přidejte se k nám v {CAFE_DATA.name}. Poznáte rozdíl.
          </p>
        </div>

        {/* Main Footer Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <div className="space-y-8 text-lg">
              <a href={CAFE_DATA.googleMapsLink} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-cafe-accent transition-colors group">
                <div className="bg-stone-800 p-3 rounded-full group-hover:bg-cafe-accent group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Kde nás najdete</p>
                  <p className="text-stone-400">{CAFE_DATA.address}</p>
                  <p className="text-stone-400">{CAFE_DATA.zip} {CAFE_DATA.city}</p>
                  <p className="text-stone-400">Česká republika</p>
                </div>
              </a>

              <div className="flex items-start gap-4 hover:text-cafe-accent transition-colors group cursor-default">
                <div className="bg-stone-800 p-3 rounded-full group-hover:bg-cafe-accent group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Otevírací doba</p>
                  <div className="text-stone-400 group-hover:text-stone-400/90 text-base">
                    <div className="flex gap-4">
                      <span className="w-14">Po-Pá</span>
                      <span>{CAFE_DATA.openingHours.weekdays}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="w-14">So-Ne</span>
                      <span>{CAFE_DATA.openingHours.weekend}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href={`tel:${CAFE_DATA.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 hover:text-cafe-accent transition-colors group">
                <div className="bg-stone-800 p-3 rounded-full group-hover:bg-cafe-accent group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Zavolejte nám</p>
                  <p className="text-stone-400">{CAFE_DATA.phone}</p>
                </div>
              </a>

              <a href={CAFE_DATA.instagramLink} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-pink-500 transition-colors group">
                <div className="bg-stone-800 p-3 rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Sledujte nás</p>
                  <p className="text-stone-400">@cafevsehochut</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-stone-900 rounded-3xl p-8 border border-stone-800">
            <p className="font-display font-bold text-2xl mb-6">Jdeme na to?</p>
            <div className="space-y-4">
              <Button href={CAFE_DATA.googleMapsLink} external variant="secondary" className="w-full justify-center">
                Spustit navigaci
              </Button>
              <Button href={`tel:${CAFE_DATA.phone.replace(/\s/g, '')}`} variant="outline" className="w-full justify-center !text-white !border-stone-700 hover:!bg-stone-800">
                Zavolat {CAFE_DATA.phone}
              </Button>
            </div>
            <p className="mt-6 text-center text-sm text-stone-500">
              *Hodnoceno {CAFE_DATA.rating}/5 více než 900 místními
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-stone-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {CAFE_DATA.name}. Všechna práva vyhrazena.</p>
          <p className="mt-2">Navrženo pro milovníky kávy v Jičíně.</p>
        </div>

      </div>
    </footer>
  );
};