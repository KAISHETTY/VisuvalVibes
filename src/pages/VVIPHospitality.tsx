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
              <div className="w-14 h-14 bg-brand-green text-brand-gold flex items-center justify-center mb-6 rounded-sm">{item.icon}</div>
              <h3 className="text-xl font-display text-brand-green mb-3">{item.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* HANDLING THE ELITE */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold">Behind The Scenes</span>
              <span className="w-10 h-[1px] bg-brand-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-brand-green">Handling The Elite</h2>
            <p className="text-brand-dark/50 font-serif italic mt-3 text-lg">Every face here trusted us with their moment.</p>
          </div>

          {/* 2 tall sides + 2 stacked in middle + wide bottom */}
          <div className="grid grid-cols-12 gap-3">
            {/* tall left */}
            <div className="col-span-4" style={{gridRow:'span 2'}}>
              <img src="https://i.imgur.com/SVKdIjf.jpg" alt="Elite Guest 1" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" style={{minHeight:'360px'}} />
            </div>
            {/* top middle 2 */}
            <div className="col-span-4 overflow-hidden group">
              <img src="https://i.imgur.com/Iu5CyKt.jpg" alt="Elite Guest 2" className="w-full h-44 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-4 overflow-hidden group">
              <img src="https://i.imgur.com/FDPVQwP.jpg" alt="Elite Guest 3" className="w-full h-44 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* bottom middle 2 */}
            <div className="col-span-4 overflow-hidden group">
              <img src="https://i.imgur.com/QHqmyr0.jpg" alt="Elite Guest 4" className="w-full h-44 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-4 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" alt="VVIP Event" className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </section>

        {/* POWER & PROTOCOL */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold">Exclusive Access</span>
              <span className="w-10 h-[1px] bg-brand-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-brand-green">Power & Protocol</h2>
            <p className="text-brand-dark/50 font-serif italic mt-3 text-lg">Where exclusivity meets excellence.</p>
          </div>

          {/* Large hero image + 2 stacked right */}
          <div className="grid grid-cols-12 gap-3">
            {/* Big feature left */}
            <div className="col-span-12 md:col-span-8 relative overflow-hidden group">
              <img src="https://i.imgur.com/KT9So0f.jpg" alt="Power & Protocol 1" className="w-full h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold block mb-1">Visuval Vibe</span>
                <p className="text-white font-display text-3xl">Precision. Power. Presence.</p>
              </div>
            </div>
            {/* Right 2 stacked */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
              <div className="relative overflow-hidden group flex-1">
                <img src="https://i.imgur.com/c5P6T82.jpg" alt="Power & Protocol 2" className="w-full h-56 md:h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" style={{minHeight:'160px'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-white/80 text-[10px] uppercase tracking-widest font-bold">VVIP Protocol</span>
                </div>
              </div>
              <div className="relative overflow-hidden group flex-1">
                <img src="https://i.imgur.com/SBUKdpX.jpg" alt="Power & Protocol 3" className="w-full h-56 md:h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" style={{minHeight:'160px'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-white/80 text-[10px] uppercase tracking-widest font-bold">Elite Moments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRIVATE INQUIRY CTA */}
        <section className="bg-brand-cream border border-brand-gold/40 p-12 text-center shadow-md relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl"></div>
          <h2 className="text-3xl font-display text-brand-green mb-4 relative z-10">Private Inquiry</h2>
          <p className="font-sans text-brand-dark/70 mb-8 max-w-2xl mx-auto relative z-10 text-lg">Our VVIP services bypass standard booking channels. To arrange discrete hospitality for upcoming travel or events, please contact our priority liaison directly.</p>
          <a href="mailto:visuvalvibe@gmail.com" className="inline-block bg-brand-dark text-brand-gold px-10 py-5 font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors border border-transparent shadow-md relative z-10">
            Contact VVIP Liaison
          </a>
        </section>

      </div>
    </div>
  );
}
