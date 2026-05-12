import { Layout, Star, Music, Camera, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Weddings() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-10">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Wedding Background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-brand-green mb-4">Premium Indian Weddings</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-serif italic text-brand-dark/80 max-w-2xl mx-auto">Where sacred traditions meet absolute grandeur.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <section className="text-center max-w-4xl mx-auto mb-24">
          <p className="text-lg leading-relaxed text-brand-dark/80 font-sans">
            A wedding is not just an event; it's the merging of two families, two souls, and generations of tradition. At Visuval Vibe, we respect the sanctity of Indian marriages while orchestrating them on a canvas of sheer luxury. Whether it is a traditional Telugu Muhurtham, a grand Rajasthani destination wedding, or an elegant North Indian celebration—we craft memories that last a lifetime.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-display text-brand-green mb-10">The Visuval Experience</h2>
            <ul className="space-y-8">
              {[
                { icon: <Layout/>, title: "Bespoke Mandap & Decor", desc: "Floral, Royal, Contemporary, Temple-inspired, or Destination setups." },
                { icon: <Music/>, title: "Curated Entertainment", desc: "Nadaswaram, Shehnai, Kuchipudi, Live Bands, and Celebrity DJ setups." },
                { icon: <Star/>, title: "Royal Indian Catering", desc: "Traditional feasts to Pan-Indian menus, managed by master chefs." },
                { icon: <Camera/>, title: "Memory Capture", desc: "Cinematic videography, drone coverage, and candid photography." },
              ].map((item, i) => (
                <li key={i} className="flex">
                  <div className="w-14 h-14 bg-brand-cream border border-brand-gold/30 text-brand-green rounded-full flex items-center justify-center shrink-0 mr-6 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-brand-green mb-2">{item.title}</h3>
                    <p className="text-brand-dark/70 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow-xl border border-brand-gold/20">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" alt="Indian Wedding Setup" className="w-full h-auto" />
          </div>
        </section>

        <section className="bg-brand-green text-center py-24 px-4 border border-brand-gold/30 shadow-lg mt-32">
          <Heart className="w-12 h-12 text-brand-gold mx-auto mb-6" />
          <h2 className="text-4xl font-display text-white mb-6">Ready to plan your dream wedding?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 font-sans tracking-wide text-lg">Let our expert planners guide you through a flawless 12-step planning process.</p>
          <Link to="/contact" className="inline-block bg-white text-brand-green px-10 py-5 font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors border border-transparent shadow-md">
            Start Planning Now
          </Link>
        </section>
      </div>
    </div>
  );
}
