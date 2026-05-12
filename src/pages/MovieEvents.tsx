import { Film, Users, Video, Volume2, ShieldAlert, Radio } from 'lucide-react';

export default function MovieEvents() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-cream border-b border-brand-gold/30 text-center relative overflow-hidden py-32">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1540039155732-6a71bbafcbde?q=80&w=2000')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display text-brand-green mb-4">Movie Events & Protocol</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-serif italic text-brand-dark/80">From Tollywood to Bollywood, we orchestrate the grandest launches.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <section className="mb-24">
          <h2 className="text-3xl font-display text-brand-green mb-8 text-center">Our Blockbuster Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-brand-gold/20 shadow-sm hover:shadow-md transition-shadow">
              <Film className="w-10 h-10 text-brand-gold mb-4" />
              <h3 className="text-2xl font-display text-brand-green mb-3">Pre-Release Events</h3>
              <p className="text-brand-dark/70 text-base leading-relaxed mb-4">The ultimate hype machine. We handle crowd capacities of 50,000+, massive stage designs, LED walls, pyrotechnics, drone coverage, and high-security celebrity seating zones.</p>
            </div>
            <div className="bg-white p-8 border border-brand-gold/20 shadow-sm hover:shadow-md transition-shadow">
              <Volume2 className="w-10 h-10 text-brand-gold mb-4" />
              <h3 className="text-2xl font-display text-brand-green mb-3">Audio & Trailer Launches</h3>
              <p className="text-brand-dark/70 text-base leading-relaxed mb-4">Music-themed decor, live orchestra setups, playback singer coordination, and red-carpet press and media wall interactions for massive digital reach.</p>
            </div>
          </div>
        </section>

        <section className="bg-brand-green text-white p-12 relative overflow-hidden border border-brand-gold/30 shadow-lg">
          <div className="relative z-10">
            <h2 className="text-3xl font-display text-brand-gold mb-8 text-center">The Execution Blueprint</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
               {[
                 { icon: <ShieldAlert/>, title: "Z-Level Security Protocol", desc: "Coordinated private security and police liaison for extreme fan-crowd management." },
                 { icon: <Radio/>, title: "Live Broadcast Management", desc: "OB van coordination, multi-camera live switching, and satellite telecast handling." },
                 { icon: <Users/>, title: "VVIP Dignitary Seating", desc: "Front-row luxury management for industry heads, directors, and political chief guests." },
                 { icon: <Video/>, title: "Media Relations", desc: "Press conferences, media kit distribution, and paparazzi control." }
               ].map((item, i) => (
                 <div key={i} className="flex p-4 bg-white/5 border border-white/10">
                   <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 mr-6 shadow-sm text-brand-green rounded-full">
                     {item.icon}
                   </div>
                   <div>
                     <h4 className="text-xl font-bold font-display tracking-wide mb-1 text-brand-gold">{item.title}</h4>
                     <p className="text-white/80 text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
