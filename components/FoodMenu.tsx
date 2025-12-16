import React, { useState } from 'react';
import { Coffee, Utensils, Wheat, IceCream } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Káva & Kofein",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { name: "Espresso / Doppio", price: "55 / 70 Kč" },
      { name: "Flat White", description: "Dvojité espresso, mikropěna", price: "85 Kč" },
      { name: "Cappuccino", price: "75 Kč" },
      { name: "Batch Brew", description: "Filtrovaná káva dne", price: "70 Kč" },
      { name: "Espresso Tonic", description: "S rozmarýnem a grepem", price: "95 Kč" }
    ]
  },
  {
    title: "Brunch & Bistro",
    icon: <Utensils className="w-5 h-5" />,
    items: [
      { name: "Avokádový chléb", description: "Kváskový chléb, pošírované vejce, chilli", price: "185 Kč" },
      { name: "Vajíčka do skla", description: "3 vejce, pažitka, parmazán, chléb", price: "145 Kč" },
      { name: "Grilled Cheese", description: "Cheddar, gouda, karamelizovaná cibule", price: "165 Kč" },
      { name: "Hummus Bowl", description: "Pečená zelenina, pita chléb, bylinky", price: "175 Kč" }
    ]
  },
  {
    title: "Něco sladkého",
    icon: <IceCream className="w-5 h-5" />,
    items: [
      { name: "Domácí Cheesecake", description: "Dle denní nabídky (Oreo, Mango, Lesní směs)", price: "95 Kč" },
      { name: "Lívance", description: "S tvarohem a ovocným přelivem", price: "155 Kč" },
      { name: "Banana Bread", description: "Opečený s máslem", price: "65 Kč" },
      { name: "Croissant", description: "Máslový / Čokoládový", price: "55 Kč" }
    ]
  },
  {
    title: "Limonády & Drinky",
    icon: <Wheat className="w-5 h-5" />,
    items: [
      { name: "Domácí limonáda", description: "Malina, Zázvor, Maracuja", price: "75 Kč" },
      { name: "Mimosa", description: "Prosecco, pomerančový fresh", price: "115 Kč" },
      { name: "Matcha Latte", price: "85 Kč" },
      { name: "Chai Latte", price: "85 Kč" }
    ]
  }
];

export const FoodMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cafe-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Na co máte chuť?
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-cafe-black mb-6">
            MENU <span className="text-stone-300 italic">VŠEHOCHUTI</span>
          </h2>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto">
            Vše připravujeme čerstvé. Pečeme si vlastní dezerty, vybíráme výběrovou kávu a milujeme snídaně po celý den.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {menuData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-cafe-black text-white shadow-xl scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-cafe-cream/30 p-8 md:p-12 rounded-[2.5rem] border border-stone-100 relative overflow-hidden transition-all">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10" key={activeCategory}>
              {menuData[activeCategory].items.map((item, itemIdx) => (
                <div key={itemIdx} className="group w-full">
                  <div className="flex items-baseline justify-between w-full">
                    <h4 className="font-bold text-lg text-cafe-black relative z-10 pr-2">{item.name}</h4>
                    <div className="flex-grow border-b-2 border-dotted border-stone-300/50 relative -top-1.5 mx-1"></div>
                    <div className="font-display font-bold text-cafe-accent whitespace-nowrap pl-1">{item.price}</div>
                  </div>
                  {item.description && (
                    <p className="text-sm text-stone-500 mt-0.5 pr-12 leading-tight">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-stone-200/50 text-center">
              <p className="text-stone-400 text-sm italic">
                * Nabídka v sekci <span className="font-bold text-stone-500">{menuData[activeCategory].title}</span> se může lišit dle dostupnosti.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};