import { motion } from 'motion/react';
import { Check, Star, Crown, Gem, Award } from 'lucide-react';

export default function PackagesPricing() {
  const packages = [
    {
      name: "Silver Package",
      desc: "Perfect for intimate premium functions & small parties.",
      icon: <Star size={32} />,
      price: "₹5 Lakhs",
      features: ["Premium Venue Selection", "Standard A/V & Lighting", "Traditional Decor Setups", "Event Manager + 2 Coordinators", "Standard Photography"],
      color: "border-gray-200",
      bg: "bg-white",
      accent: "text-gray-400"
    },
    {
      name: "Gold Package",
      desc: "Ideal for Grand Weddings & Medium-scale Corporate Events.",
      icon: <Award size={32} />,
      price: "₹15 Lakhs",
      popular: true,
      features: ["Luxury Venue Partnerships", "Custom Theme Development", "Advanced A/V, LED Walls & Truss", "Celebrity Artist Sourcing (Basic)", "Cinematic Video & Drone", "Premium Catering Consultation"],
      color: "border-brand-gold",
      bg: "bg-brand-cream",
      accent: "text-brand-gold"
    },
    {
      name: "Platinum Package",
      desc: "The ultimate choice for Movie Events & Royalty-style Weddings.",
      icon: <Crown size={32} />,
      price: "₹40+ Lakhs",
      features: ["Stadium/Ground Acquisitions", "Concert-grade Line Arrays & Lasers", "Z-Level Security Arrangements", "Top-tier Celebrity & MLA coordination", "Live Broadcasting Setup", "VVIP Transport Fleet", "Media Blackout options"],
      color: "border-gray-300",
      bg: "bg-white",
      accent: "text-gray-400"
    },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-32">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden mb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-brand-green mb-6">Investment in Elegance</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl font-sans text-brand-dark/70 tracking-wide">Select a tier that matches your magnificent vision.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-12">
          {packages.map((pkg, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              className={`relative ${pkg.bg} border ${pkg.color} hover:shadow-xl transition-all duration-300 p-10 flex flex-col group ${pkg.popular ? 'transform md:-translate-y-4 shadow-lg ring-1 ring-brand-gold' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest py-1 px-6 shadow-sm">
                  Most Requested
                </div>
              )}
              
              <div className={`${pkg.accent} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                {pkg.icon}
              </div>
              
              <h3 className={`text-3xl font-display text-center mb-4 text-brand-green`}>{pkg.name}</h3>
              <p className="text-brand-dark/60 text-center text-sm mb-8 h-12 font-sans">{pkg.desc}</p>
              
              <div className="text-center mb-8 border-b border-brand-gold/20 pb-8">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-2">Starting from</p>
                <p className="text-4xl font-display text-brand-green">{pkg.price}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow font-sans text-sm text-brand-dark/80">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 ${pkg.accent} shrink-0 mt-0.5 mr-3`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 border border-brand-green bg-white text-brand-green uppercase text-xs font-bold tracking-widest hover:bg-brand-green hover:text-white transition-colors block mt-auto text-center shadow-sm`}>
                Request Proposal
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Diamond Section */}
        <div className="mt-24 border border-brand-gold bg-brand-green p-12 md:p-16 text-center rounded-sm relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl"></div>
           <Gem className="w-12 h-12 text-brand-gold mx-auto mb-6 relative z-10" />
           <h3 className="text-4xl font-display text-white mb-6 relative z-10">Diamond / VVIP Tier</h3>
           <p className="font-sans text-white/80 max-w-2xl mx-auto mb-10 text-lg relative z-10">For bespoke mandates requiring absolute secrecy, international artist sourcing, complete hotel buyouts, or political security clearances.</p>
           <a href="mailto:vvip@vaibhavevents.com" className="inline-block bg-brand-gold text-brand-dark px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors relative z-10">Connect with Directors</a>
        </div>

      </div>
    </div>
  );
}
