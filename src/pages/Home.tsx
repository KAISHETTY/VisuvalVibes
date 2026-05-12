import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Camera, Plane, Building2, TicketCheck, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-cream border-b border-brand-gold/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" 
            alt="Royal Wedding Mandap" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-12 h-[1px] bg-brand-green"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-green">Premier Event Management</span>
              <span className="w-12 h-[1px] bg-brand-green"></span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-brand-green leading-tight mb-8">
              India's Most Trusted VVIP<br /> 
              <span className="text-brand-gold italic">Event & Hospitality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-dark/80 mb-12 max-w-2xl mx-auto tracking-wide font-sans">
              Celebrities. Politicians. Royalty. We serve the finest with unmatched Indian luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/services" 
                className="bg-brand-green text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 w-full sm:w-auto"
              >
                Explore Services
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent text-brand-green px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold border border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Watch Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / TICKER */}
      <div className="bg-brand-green py-4 text-white overflow-hidden flex text-xs uppercase tracking-[0.2em] font-bold">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap min-w-max"
        >
          {Array(2).fill("✦ Pre-Release Events ✦ Celebrity Hospitality ✦ Royal Weddings ✦ Political Events ✦ Premium Catering ✦ Luxury Travel ✦ Saree Functions ✦ Movie Success Parties ").map((text, i) => (
             <span key={i} className="mx-4 text-brand-gold">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-brand-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-brand-green mb-6">The Visuval Experience</h2>
            <p className="font-serif text-xl text-brand-dark/70 tracking-wide">Authentic Indian celebration aesthetics combined with modern luxury execution. We treat every guest like a VVIP.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-8 h-8"/>, title: "VVIP Protocol Expertise", desc: "We understand celebrity and political security needs, offering unparalleled discretion." },
              { icon: <Star className="w-8 h-8"/>, title: "Authentic Traditions", desc: "Every ritual, every custom, executed to absolute perfection with deep cultural respect." },
              { icon: <TicketCheck className="w-8 h-8"/>, title: "Royal Cuisine", desc: "From traditional Telugu food to Pan-Indian royal menus crafted by master chefs." },
              { icon: <Plane className="w-8 h-8"/>, title: "End-to-End Travel", desc: "Private jets, helipads, luxury convoys, and seamless logistic coordination." },
              { icon: <Building2 className="w-8 h-8"/>, title: "5-Star Hospitality", desc: "Presidential suites, luxury camps, and exclusive venue bookings tailored for prestige." },
              { icon: <Camera className="w-8 h-8"/>, title: "Memory Crafting", desc: "Professional photography, cinematography, and live streaming of your finest moments." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 border border-brand-gold/20 shadow-sm hover:shadow-lg hover:border-brand-gold transition-all group">
                <div className="w-16 h-16 bg-brand-cream flex items-center justify-center text-brand-green rounded-full mb-8 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-medium text-brand-green mb-4">{feature.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed font-sans">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS SECTION */}
      <section className="py-24 bg-brand-cream border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-brand-green mb-4 md:mb-0">Our Signature Events</h2>
            <Link to="/events" className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green border-b border-brand-green pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
              View All Events
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Movie Pre-Release", subtitle: "Grand Scale Execution", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", path: "/movie-events" },
              { title: "Royal Weddings", subtitle: "Traditional Luxury", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", path: "/weddings" },
              { title: "Celebrity Hospitality", subtitle: "Absolute Discretion", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", path: "/vvip-hospitality" },
            ].map((event, i) => (
              <Link key={i} to={event.path} className="group relative block overflow-hidden bg-white shadow-md border border-brand-gold/20">
                <div className="relative h-72 overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 bg-white border-t border-brand-gold/30">
                  <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2 font-sans">{event.subtitle}</p>
                  <h3 className="text-brand-green font-display text-2xl mb-4">{event.title}</h3>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-gold">
                    Explore deeper <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS STRIP */}
      <section className="py-20 bg-brand-ivory text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-brand-green text-xl md:text-2xl font-serif max-w-4xl mx-auto tracking-wide">
            "Trusted by founders Venkat Bomma, Sunita, Naga Vamshi &amp; Pavan &mdash; A legacy of absolute excellence."
          </p>
        </div>
      </section>

    </div>
  );
}
