import React from 'react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-cafe-cream relative overflow-hidden">
      {/* Signature Watermark */}
      <img 
        src="/logo.png" 
        alt="" 
        className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.04] -rotate-12 pointer-events-none select-none blur-sm" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Problem */}
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-cafe-accent rounded-full opacity-20 blur-xl"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cafe-black mb-6 leading-tight">
              UŽ VÁS NEBAVÍ <br />
              <span className="text-stone-400 italic">PRŮMĚRNÁ</span> <br />
              MÍSTA?
            </h2>
            <p className="text-lg text-cafe-stone mb-6">
              Chápeme to. Chcete místo, kde vypnete. Žádný korporát. Žádné hrobové ticho jako v knihovně. Žádná káva, která chutná jako spálená voda.
            </p>
          </div>

          {/* Solution */}
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-stone-100">
              <h3 className="text-2xl font-display font-bold text-cafe-accent mb-4 uppercase tracking-wide">
                Řešení
              </h3>
              <p className="text-3xl md:text-4xl font-display font-bold text-cafe-black leading-snug">
                My jsme odpověď. Jen skvělý vibe a káva, která má grády.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};