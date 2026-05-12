import { Shield, Car, Utensils, Hotel, CameraOff, PlaneTakeoff } from 'lucide-react';

export default function VVIPHospitality() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-dark py-32 text-center relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="VVIP Background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-brand-gold mb-4 mt-8">VVIP Hospitality</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-serif italic text-white/80 max-w-2xl mx-auto">Absolute Discretion. Impeccable Precision. Ultimate Luxury.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <section className="max-w-3xl mx-auto text-center mb-24">
           <p className="text-xl leading-relaxed text-brand-dark/80 font-sans tracking-wide">
             Serving the upper echelon requires more than just premium services—it demands anticipation. For film celebrities, political leaders, and high-net-worth business tycoons, Visuval Vibe offers a confidential, fortress-like hospitality experience wrapped in uncompromising Indian luxury.
           </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Shield/>, title: "Z-Protocol & Discretion", desc: "Our staff is strictly NDA-bound. We coordinate directly with private details and local authorities." },
            { icon: <PlaneTakeoff/>, title: "Aviation & Logistics", desc: "Private chartered jets, helicopter sightseeing, and tarmac-to-suite seamless transfers." },
            { icon: <Car/>, title: "Luxury Convoys", desc: "Fleets of Rolls Royce, Maybach, Range Rover, and G-Wagons with trained defensive drivers." },
            { icon: <Hotel/>, title: "Presidential Suites", desc: "Complete buyouts, floor lockdowns, and elite curation of luxury temporary residences." },
            { icon: <Utensils/>, title: "Personal Gastronomy", desc: "Private chefs familiar with hyper-specific dietary, macro, and cultural requirements." },
            { icon: <CameraOff/>, title: "Media Blackouts", desc: "Guaranteed privacy perimeters protecting you from unauthorized paparazzi and fan intrusion." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 border border-brand-gold/20 shadow-sm hover:shadow-md hover:border-brand-gold transition-all">
              <div className="w-14 h-14 bg-brand-green text-brand-gold flex items-center justify-center mb-6 rounded-sm">
                 {item.icon}
              </div>
              <h3 className="text-xl font-display text-brand-green mb-3">{item.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-brand-cream border border-brand-gold/40 p-12 text-center shadow-md relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl"></div>
          
          <h2 className="text-3xl font-display text-brand-green mb-4 relative z-10">Private Inquiry</h2>
          <p className="font-sans text-brand-dark/70 mb-8 max-w-2xl mx-auto relative z-10 text-lg">Our VVIP services bypass standard booking channels. To arrange discrete hospitality for upcoming travel or events, please contact our priority liaison directly.</p>
          <a href="mailto:vvip@vaibhavevents.com" className="inline-block bg-brand-dark text-brand-gold px-10 py-5 font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors border border-transparent shadow-md relative z-10">
            Contact VVIP Liaison
          </a>
        </section>
      </div>
    </div>
  );
}
