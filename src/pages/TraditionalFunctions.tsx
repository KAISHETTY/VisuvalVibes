import { Leaf, Sun, History } from 'lucide-react';

export default function TraditionalFunctions() {
  const functions = [
    {
      title: "Half Saree / Langa Voni",
      desc: "A beautiful coming-of-age ceremony deeply rooted in Telugu culture. We bring this to life with traditional banana leaf decor, marigold abundance, silk fabric draping, and authentic Kuchipudi performances to celebrate the transition.",
      icon: <Leaf className="text-green-600 w-8 h-8"/>,
      color: "border-green-600"
    },
    {
      title: "Seemantham / Baby Shower",
      desc: "Honoring the journey of motherhood with vibrant bangle ceremonies, traditional south Indian treats, floral jhoolas (swings), and a warm, loving atmosphere curated for the family’s closest women.",
      icon: <Sun className="text-[#FF6B00] w-8 h-8"/>,
      color: "border-[#FF6B00]"
    },
    {
      title: "Shastipoorthi (60th Birthday)",
      desc: "A monumental milestone celebrating 60 years of life. We organize authentic homams, family-scale feasts, and traditional nadaswaram to honor the elders in the most majestic way possible.",
      icon: <History className="text-brand-gold w-8 h-8"/>,
      color: "border-brand-gold"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-[#FF6B00] py-32 border-b-4 border-brand-gold text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-white mb-4 drop-shadow-md">Sacred Traditions</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 shadow-sm"></div>
          <p className="text-xl md:text-2xl font-serif italic text-white/90 max-w-2xl mx-auto drop-shadow-sm">Preserving the vibrant colors and profound meanings of Indian customs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <section className="max-w-3xl mx-auto text-center mb-16">
           <p className="text-lg leading-relaxed text-brand-dark/80 font-medium">
             Our culture is celebrated through beautiful milestones. Visuval Vibe ensures these functions retain their authentic, deeply spiritual essence while providing your guests with unparalleled 5-star hospitality and comfort.
           </p>
        </section>

        <div className="space-y-16">
          {functions.map((func, i) => (
             <div key={i} className={`bg-white border text-left border-brand-gold/20 border-l-4 ${func.color} shadow-sm p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center`}>
               <div className="flex-1">
                 <div className="bg-brand-cream inline-block p-4 rounded-full mb-6 border border-brand-gold/30">
                   {func.icon}
                 </div>
                 <h2 className="text-3xl font-display text-brand-green mb-4">{func.title}</h2>
                 <p className="text-brand-dark/80 leading-relaxed font-sans">{func.desc}</p>
               </div>
               <div className="flex-1 w-full relative">
                 <div className="w-full h-64 bg-brand-cream flex items-center justify-center border border-brand-gold/20">
                   <span className="font-serif italic text-brand-gold">Curated Decor Showcase</span>
                 </div>
               </div>
             </div>
          ))}
        </div>

        <section className="mt-24 text-center">
           <h3 className="text-3xl font-display text-brand-green mb-8">Also specializing in</h3>
           <div className="flex flex-wrap justify-center gap-4">
             {['Namakaranam (Naming)', 'Annaprashana (First Rice)', 'Upanayanam (Thread)', 'Haldi & Mehndi', 'Sangeet Nights'].map((func, i) => (
               <span key={i} className="px-6 py-3 border border-brand-gold/30 bg-white text-sm font-bold uppercase tracking-widest text-brand-green shadow-sm hover:bg-brand-cream cursor-default">
                 {func}
               </span>
             ))}
           </div>
        </section>
      </div>
    </div>
  );
}
