import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Award, Camera, Plane, Building2, TicketCheck, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6 mt-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-black/60 border-2 border-brand-gold text-brand-gold font-display text-3xl md:text-5xl w-16 md:w-24 h-16 md:h-24 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-brand-gold/20">
            {String(value).padStart(2, '0')}
          </div>
          <span className="text-white/60 text-[9px] uppercase tracking-[0.3em] mt-2 font-bold">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-cream border-b border-brand-gold/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" alt="Royal Wedding Mandap" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
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
              <Link to="/services" className="bg-brand-green text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 w-full sm:w-auto">Explore Services</Link>
              <Link to="/about" className="bg-transparent text-brand-green px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold border border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 w-full sm:w-auto">Watch Our Story</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand-green py-4 text-white overflow-hidden flex text-xs uppercase tracking-[0.2em] font-bold">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} className="flex whitespace-nowrap min-w-max">
          {Array(2).fill("✦ Pre-Release Events ✦ Celebrity Hospitality ✦ Royal Weddings ✦ Political Events ✦ Premium Catering ✦ Luxury Travel ✦ Saree Functions ✦ Movie Success Parties ✦ MM Keeravani Live Dallas ").map((text, i) => (
            <span key={i} className="mx-4 text-brand-gold">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* MM KEERAVANI CONCERT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/wXR5TGi.jpg" alt="MM Keeravani Concert Dallas" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-black/65"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent z-10"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold">Visuval Vibe Presents</span>
              <span className="w-10 h-[1px] bg-brand-gold"></span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-white leading-none mb-3 drop-shadow-2xl">
              MM <span className="text-brand-gold italic">Keeravani</span>
            </h2>
            <p className="text-white/80 font-display text-2xl md:text-3xl mb-6 tracking-widest uppercase">
              Live In Concert — Dallas, Texas
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-16 h-[1px] bg-brand-gold/50"></span>
              <span className="text-brand-gold text-xl">✦</span>
              <span className="w-16 h-[1px] bg-brand-gold/50"></span>
            </div>
            <p className="text-brand-gold font-serif italic text-xl md:text-2xl mb-3">The Oscar Maestro. The Soul of Indian Cinema.</p>
            <p className="text-white/65 font-sans text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              From the soul of Tollywood to the Oscars stage — MM Keeravani's music has made the world cry, cheer, and dance.
              Now Dallas gets its night. One evening of melodies that defined a generation. Full on Dhamaka.
            </p>
            <div className="inline-flex items-center gap-3 border border-brand-gold/70 bg-black/50 backdrop-blur-md px-8 py-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">July 25, 2026 · Dallas, Texas</span>
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            </div>
            <CountdownTimer targetDate="2026-07-25T20:00:00" />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:visuvalvibe@gmail.com" className="bg-brand-gold text-brand-dark px-12 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-brand-gold/30">
                Reserve VVIP Seats
              </a>
              <span className="text-white/45 font-serif italic text-sm">Limited seats · VVIP experience only</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
                <div className="w-16 h-16 bg-brand-cream flex items-center justify-center text-brand-green rounded-full mb-8 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">{feature.icon}</div>
                <h3 className="text-xl font-display font-medium text-brand-green mb-4">{feature.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed font-sans">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-24 bg-brand-cream border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-brand-green mb-4 md:mb-0">Our Signature Events</h2>
            <Link to="/events" className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green border-b border-brand-green pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">View All Events</Link>
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

      {/* PICTURE ABHI BAAKI HAI */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-3 mb-5">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold">Our Moments</span>
              <span className="w-10 h-[1px] bg-brand-gold"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white">
              Picture Abhi <span className="text-brand-gold italic">Baaki Hai</span>
            </h2>
            <p className="text-white/40 font-serif italic mt-4 text-lg">Real faces. Real moments. Real legacy.</p>
          </div>

          <div className="grid grid-cols-12 gap-3">
            {/* tall left */}
            <div className="col-span-3 row-span-2 relative overflow-hidden group" style={{gridRow: 'span 2'}}>
              <img src="https://i.imgur.com/SVKdIjf.jpg" alt="Elite" className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" style={{height: '100%', minHeight: '340px'}} />
            </div>
            <div className="col-span-3 relative overflow-hidden group">
              <img src="https://i.imgur.com/Iu5CyKt.jpg" alt="VVIP" className="w-full h-40 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-3 relative overflow-hidden group">
              <img src="https://i.imgur.com/KT9So0f.jpg" alt="Power" className="w-full h-40 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* tall right */}
            <div className="col-span-3" style={{gridRow: 'span 2'}}>
              <img src="https://i.imgur.com/FDPVQwP.jpg" alt="Luxury" className="w-full object-cover object-top transition-transform duration-700 hover:scale-105" style={{height: '100%', minHeight: '340px'}} />
            </div>
            <div className="col-span-3 relative overflow-hidden group">
              <img src="https://i.imgur.com/QHqmyr0.jpg" alt="Hospitality" className="w-full h-40 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-3 relative overflow-hidden group">
              <img src="https://i.imgur.com/c5P6T82.jpg" alt="Protocol" className="w-full h-40 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* bottom row */}
            <div className="col-span-6 relative overflow-hidden group">
              <img src="https://i.imgur.com/SBUKdpX.jpg" alt="Grand Event" className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Visuval Vibe</span>
              </div>
            </div>
            <div className="col-span-3 relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800" alt="Event" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-3 relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" alt="Hospitality" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-block border border-brand-gold text-brand-gold px-12 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
              View Full Gallery
            </Link>
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
