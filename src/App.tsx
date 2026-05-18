import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Star, Shield, Car, PlaneTakeoff, Film, Volume2, ShieldAlert, Radio, Layout as LayoutIcon, Utensils, Music, Camera, MapPin, Phone, Mail, Send, Sparkles, Smile, MessageCircle, Users, TrendingUp, Presentation, Crown } from 'lucide-react';

/* --- CONSTANTS --- */
const LOGO_URL = "https://i.imgur.com/gt9MRWS.png";
const PHONE_NUMBER = "+1 (972) 768-2194";
const WHATSAPP_LINK = "https://wa.me/19727682194";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

/* --- NAVBAR --- */
const Navbar = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: any) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#upcoming' },
    { name: 'Sponsor', href: '#sponsor' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4 md:top-6'}`}>
        <div className={`bg-brand-green text-white rounded-full px-3 md:px-6 py-2 md:py-3 transition-all duration-300 funky-border flex justify-between items-center ${isScrolled ? 'shadow-[4px_4px_0_0_#C9A84C]' : 'shadow-[6px_6px_0_0_#C9A84C]'}`}>
          <a href="#home" className="flex items-center gap-2 md:gap-3 group hover:opacity-90 transition-opacity">
            <img src={LOGO_URL} alt="Visuval Vibe Logo" className="h-8 md:h-10 w-auto object-contain shrink-0 rounded-md border-2 border-brand-gold/60" />
            <span className="font-display font-bold text-white text-lg md:text-2xl uppercase tracking-widest leading-none whitespace-nowrap">Visuval Vibe</span>
          </a>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs xl:text-sm font-bold tracking-widest uppercase hover:text-brand-gold transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="#contact" className="bg-brand-gold text-brand-dark px-5 py-2.5 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors duration-300 shadow-md border-2 border-brand-green">
              Let's Talk
            </a>
          </div>
          <button className="lg:hidden text-white hover:text-brand-gold transition-colors focus:outline-none ml-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} strokeWidth={3} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-[60] bg-brand-cream flex flex-col p-4 sm:p-6 overflow-y-auto">
            <div className="flex justify-end mb-4 mt-2">
              <button className="text-brand-green bg-white p-2 rounded-full funky-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={28} strokeWidth={3} />
              </button>
            </div>
            <div className="flex justify-center mb-6">
                <div className="bg-brand-ivory px-4 py-3 rounded-2xl border-4 border-brand-green shadow-[4px_4px_0_0_#C9A84C] flex items-center gap-3">
                  <img src={LOGO_URL} alt="Visuval Vibe Logo" className="h-14 w-auto object-contain" />
                  <span className="font-display font-bold text-brand-green text-xl uppercase tracking-widest leading-tight">Visuval<br/>Vibe</span>
                </div>
            </div>
            <div className="flex flex-col space-y-4 items-center text-center w-full flex-grow">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold uppercase hover:text-brand-green-light transition-colors text-brand-green">
                  {link.name}
                </a>
              ))}
              <div className="mt-8 mb-4 w-full">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-brand-green text-white rounded-full px-6 py-4 font-bold uppercase tracking-widest text-base funky-btn">
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* --- HERO --- */
const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-cream pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8 sm:pt-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-center lg:text-left">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        >
          <div className="inline-flex items-center space-x-2 mb-6 sm:mb-8 bg-white border-2 border-brand-green px-4 py-2 rounded-full shadow-[4px_4px_0_0_#145942] animate-float-funky">
            <Sparkles className="text-brand-gold w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-green">Desi Swag, Texas Size</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-brand-green leading-[0.9] mb-6 uppercase tracking-tight">
            Full On <br className="hidden sm:block"/><span className="text-brand-gold italic lowercase tracking-normal">Dhamaka.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-dark/80 mb-8 sm:mb-12 font-body font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Welcome to <span className="font-bold text-brand-green">Visuval Vibe</span>. Dallas' ultimate hub for blockbuster celebrations, VVIP hospitality, and Big Fat Indian Weddings. We bring the heat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-brand-green text-white px-8 py-4 uppercase tracking-widest text-xs sm:text-sm font-bold w-full sm:w-auto text-center rounded-full funky-btn flex items-center justify-center">
              Create Magic <Star className="ml-2 w-4 h-4 fill-current" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 w-full mt-6 lg:mt-0 relative"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="funky-card p-2 sm:p-3 transform rotate-2 hover:rotate-0 transition-transform bg-white border-[4px] sm:border-[6px] max-w-lg mx-auto">
            <img src="https://i.imgur.com/XHOrKVS.jpg" alt="Visuval Vibe Event" className="w-full h-auto rounded-xl object-cover aspect-[4/3]" />
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-brand-gold text-brand-dark border-[3px] border-brand-green p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[4px_4px_0_0_#145942] sm:shadow-[6px_6px_0_0_#145942] transform -rotate-6">
              <p className="font-display font-bold text-lg sm:text-2xl uppercase leading-tight">Blockbuster</p>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white">Moments Only</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* --- TICKER --- */
const Ticker = () => {
  return (
    <div className="bg-brand-green py-3 sm:py-5 text-white overflow-hidden flex text-base sm:text-lg md:text-xl uppercase font-display border-y-4 border-brand-gold">
      <div className="animate-marquee flex whitespace-nowrap min-w-max items-center font-bold">
        {Array(4).fill("✦ Visuval Vibe ✦ Dallas HQ ✦ Tollywood to Hollywood ✦ Elite Political Gatherings ✦ Private Jets ✦ High-End Security ✦ Big Fat Indian Weddings ✦ ").map((text, i) => (
           <span key={i} className="mx-4 sm:mx-6 text-brand-ivory flex items-center tracking-wide">
             {text} 
           </span>
        ))}
      </div>
    </div>
  );
};

/* --- UPCOMING EVENT --- */
const UpcomingEvent = () => {
    return (
        <section id="upcoming" className="relative overflow-hidden bg-black border-y-4 border-brand-gold">
            {/* First Event Image */}
            <div className="w-full">
                <img
                    src="https://i.imgur.com/LpE93El.jpg"
                    alt="Upcoming Event 1"
                    className="w-full h-auto object-contain block"
                    style={{ maxHeight: '90vh' }}
                />
            </div>
            {/* Second Event Image */}
            <div className="w-full border-t-2 border-brand-gold/40">
                <img
                    src="https://i.imgur.com/wkBqWeT.jpg"
                    alt="Upcoming Event 2"
                    className="w-full h-auto object-contain block"
                    style={{ maxHeight: '90vh' }}
                />
            </div>
            <div className="bg-black border-t-2 border-brand-gold/40 py-8 px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-brand-gold"></span>
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold">Visuval Vibe Presents · Dallas, Texas</span>
                        <span className="w-8 h-[1px] bg-brand-gold"></span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="#contact" className="bg-brand-gold text-brand-dark px-10 sm:px-14 py-4 uppercase tracking-[0.25em] text-xs sm:text-sm font-bold hover:bg-white transition-all duration-300 rounded-full border-2 border-brand-dark shadow-[4px_4px_0_0_#145942]">
                            Reserve VVIP Seats
                        </a>
                        <span className="text-white/40 font-body italic text-sm">Limited seats · VVIP experience only</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- ABOUT --- */
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-cream overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 relative w-full max-w-lg mx-auto">
             <div className="relative z-10 funky-card bg-brand-ivory p-2 sm:p-4 transform -rotate-1 hover:rotate-0 transition-transform">
               <img src="https://i.imgur.com/pBz3lRu.jpg" alt="About Visuval Vibe" className="rounded-lg sm:rounded-xl w-full h-auto object-cover border-2 border-brand-green aspect-video" />
               <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-brand-green text-white funky-border p-2 sm:p-4 rounded-full shadow-[4px_4px_0_0_#C9A84C] animate-float-funky w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-center">
                 <p className="font-display font-bold text-[10px] sm:text-sm uppercase leading-tight">Elite<br/>Standard</p>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
             <div className="inline-block bg-brand-gold text-brand-dark font-bold px-4 py-1 uppercase tracking-widest text-[10px] sm:text-xs rounded-full mb-6 transform rotate-2 shadow-[2px_2px_0_0_#145942] border-2 border-brand-green">
               Masters of the Game
             </div>
             <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-brand-green mb-6 sm:mb-8 leading-tight">
               Built on <br/>
               <span className="text-brand-gold italic">Pure Swag</span>
             </h2>
             <p className="font-body text-lg sm:text-xl text-brand-dark/80 leading-relaxed mb-6 font-medium">
               Headquartered in Dallas, Texas. We merge the massive scale of loud, proud Indian celebrations with ultra-secure, premium level luxury execution. 
             </p>
             <p className="font-body text-lg sm:text-xl text-brand-dark/80 leading-relaxed mb-8 font-medium">
               Founded by Venkat Bomma, Sunita, Naga Vamshi & Pavan. We don't just host events; we curate iconic legacies that get the whole town talking.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- CELEBRITY HOSPITALITY --- */
const CelebrityHospitality = () => {
    const celebImages = [
        "https://i.imgur.com/SVKdIjf.jpg",
        "https://i.imgur.com/Iu5CyKt.jpg",
        "https://i.imgur.com/FDPVQwP.jpg",
        "https://i.imgur.com/QHqmyr0.jpg",
        "https://i.imgur.com/zDXVSZz.jpg",
        "https://i.imgur.com/xQvr2g7.jpg",
        "https://i.imgur.com/SXyDmPV.jpg",
        "https://i.imgur.com/g5I7rZ9.jpg",
        "https://i.imgur.com/Hdgrgpz.jpg",
        "https://i.imgur.com/IxWHwgp.jpg"
    ];

    return (
        <section id="celebrity" className="py-16 sm:py-24 bg-brand-green border-y-4 border-brand-gold text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-10 sm:mb-16">
                <div className="inline-block bg-white text-brand-green font-bold px-4 py-1 uppercase tracking-widest text-[10px] sm:text-xs rounded-full mb-6 transform -rotate-2">
                    VIP Mode: ON
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase mb-4 sm:mb-6 text-brand-gold">Handling the <span className="text-white">Elite.</span></h2>
                <p className="font-body text-lg sm:text-xl font-medium text-brand-ivory/80 tracking-wide max-w-3xl mx-auto">
                    From A-list movie stars to global icons. We manage extreme crowds, Z-Level secure transport, and absolute media blackouts. The top 1% trust us implicitly.
                </p>
            </div>
            <div className="relative w-full py-4 overflow-hidden flex flex-col gap-4 sm:gap-6 pl-4 sm:pl-0">
                <div className="flex animate-marquee gap-4 sm:gap-6 w-max">
                    {celebImages.map((src, i) => (
                        <div key={i} className="w-[200px] h-[200px] sm:w-[300px] sm:h-[260px] md:w-[380px] md:h-[280px] flex-shrink-0 border-4 border-brand-gold shadow-[4px_4px_0_0_#FFFDF5] sm:shadow-[6px_6px_0_0_#FFFDF5] overflow-hidden p-1 sm:p-2 bg-brand-green-light rounded-xl sm:rounded-2xl">
                            <img src={src} className="w-full h-full object-cover object-top rounded-lg sm:rounded-xl" alt="Celebrity Event" />
                        </div>
                    ))}
                    {celebImages.map((src, i) => (
                        <div key={`${i}-dup`} className="w-[200px] h-[200px] sm:w-[300px] sm:h-[260px] md:w-[380px] md:h-[280px] flex-shrink-0 border-4 border-brand-gold shadow-sm overflow-hidden p-1 sm:p-2 bg-brand-green-light rounded-xl sm:rounded-2xl">
                            <img src={src} className="w-full h-full object-cover object-top rounded-lg sm:rounded-xl" alt="Celebrity Event" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --- POLITICAL HOSPITALITY --- */
const PoliticalHospitality = () => {
    const politicalImages = [
        "https://i.imgur.com/c5P6T82.jpg",
        "https://i.imgur.com/SBUKdpX.jpg",
        "https://i.imgur.com/Jx3tf0b.jpg",
        "https://i.imgur.com/Nz1agNz.jpg",
        "https://i.imgur.com/df3RXSs.jpg",
        "https://i.imgur.com/xKhGyQ2.jpg"
    ];

    return (
        <section id="political" className="py-16 sm:py-24 bg-brand-ivory relative border-b-4 border-brand-green">
           <div className="max-w-7xl mx-auto px-4 lg:px-8">
               <div className="flex flex-col md:flex-row items-center justify-between mb-10 sm:mb-16 gap-6 sm:gap-8 text-center md:text-left">
                   <div className="md:w-1/2">
                       <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase text-brand-green leading-tight">
                           Power & <br className="hidden md:block"/><span className="text-brand-gold">Protocol</span>
                       </h2>
                   </div>
                   <div className="md:w-1/2">
                       <p className="font-body text-lg sm:text-xl font-medium text-brand-dark/80 md:border-l-4 border-brand-green md:pl-6 py-2">
                           When the stakes are highest, our executive protocols shine. We facilitate massive rallies and flawless dignitary hospitality with uncompromising security.
                       </p>
                   </div>
               </div>
               <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="col-span-12 md:col-span-8 relative overflow-hidden group funky-card p-2 bg-white h-72 sm:h-96">
                        <img src={politicalImages[0]} className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" style={{objectPosition:'center 35%'}} alt="Power Protocol Main"/>
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Visuval Vibe</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col gap-3 sm:gap-4">
                        <div className="relative overflow-hidden group funky-card p-2 bg-white h-44 sm:h-[185px]">
                            <img src={politicalImages[1]} className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-105" alt="Political 1"/>
                        </div>
                        <div className="relative overflow-hidden group funky-card p-2 bg-white h-44 sm:h-[185px]">
                            <img src={politicalImages[2]} className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" style={{objectPosition:"center 65%"}} alt="Political 2"/>
                        </div>
                    </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="relative overflow-hidden group funky-card p-2 bg-white h-56">
                        <img src={politicalImages[3]} className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-105" alt="Power 1"/>
                    </div>
                    <div className="relative overflow-hidden group funky-card p-2 bg-white h-56">
                        <img src={politicalImages[4]} className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" style={{objectPosition:'center 20%'}} alt="Power 2"/>
                    </div>
                    <div className="relative overflow-hidden group funky-card p-2 bg-white h-56">
                        <img src={politicalImages[5]} className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-105" alt="Power 3"/>
                    </div>
               </div>
           </div>
        </section>
    );
}

/* --- SERVICES --- */
const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-brand-cream border-y-4 border-brand-green relative z-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-12 sm:mb-20 relative z-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-brand-green mb-4 sm:mb-6 uppercase">Signature <span className="text-brand-gold">Vibes</span></h2>
        <p className="font-body text-lg sm:text-xl font-bold text-brand-dark/70">Orchestrating absolute perfection.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12 sm:space-y-16 relative z-20">
        <div className="funky-card p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-brand-green mb-4 uppercase">Big Fat Indian Weddings</h3>
            <p className="text-brand-dark/80 font-body text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-8">Your special day deserves the blockbuster treatment. We bring absolute grandeur, mouth-watering catering, and perfect decor.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              {[
                { icon: <LayoutIcon size={18}/>, text: "Bespoke Decor" },
                { icon: <Utensils size={18}/>, text: "Royal Catering" },
                { icon: <Music size={18}/>, text: "Sangeet Dhamaka" },
                { icon: <Camera size={18}/>, text: "Cinematic Coverage" },
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-brand-ivory p-2 sm:p-3 rounded-xl border border-brand-gold/30 shadow-[2px_2px_0_0_#C9A84C]">
                  <div className="text-brand-green mr-3 bg-brand-cream p-1.5 sm:p-2 rounded-lg border border-brand-green/20">{item.icon}</div>
                  <span className="font-body font-bold text-xs sm:text-sm uppercase tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <div className="rounded-2xl overflow-hidden border-4 border-brand-gold shadow-[6px_6px_0_0_#145942] bg-white p-2 w-full max-w-sm sm:max-w-md mx-auto">
              <img src="https://i.imgur.com/WLEOONZ.jpg" alt="Royal Wedding" className="w-full h-48 sm:h-64 object-cover rounded-xl" />
            </div>
          </div>
        </div>
        <div className="funky-card p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center bg-brand-green text-white border-brand-gold">
          <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[6px_6px_0_0_#C9A84C] bg-brand-cream p-2 w-full max-w-sm sm:max-w-md mx-auto">
              <img src="https://i.imgur.com/WCHTvpY.jpg" alt="Cinematic Launch" className="w-full h-48 sm:h-64 object-cover rounded-xl" />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-brand-gold mb-4 uppercase">Cinematic Launches</h3>
            <p className="text-white/90 font-body text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-8">Creating massive media hype with grand-scale execution. From 50,000 capacity open grounds to elite ballroom audio launches.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              {[
                { icon: <Film size={18}/>, text: "Pre-Release Events" },
                { icon: <Volume2 size={18}/>, text: "Audio Launches" },
                { icon: <ShieldAlert size={18}/>, text: "Mass Crowd Control" },
                { icon: <Radio size={18}/>, text: "Live Broadcasting" },
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-brand-green-light p-2 sm:p-3 rounded-xl border border-white/20 shadow-[2px_2px_0_0_#FFFDF5]">
                  <div className="text-brand-gold mr-3">{item.icon}</div>
                  <span className="font-body font-bold text-xs sm:text-sm uppercase tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- SPONSOR --- */
const Sponsor = () => {
    return (
        <section id="sponsor" className="py-16 sm:py-24 bg-brand-ivory relative border-b-4 border-brand-green">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 items-center">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block bg-brand-pop text-white font-bold px-4 py-1 uppercase tracking-widest text-[10px] sm:text-xs rounded-full mb-6 transform -rotate-1 shadow-[2px_2px_0_0_#145942] border-2 border-brand-green">
                           Grow Your Brand
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-brand-green mb-6 leading-tight uppercase">
                           Become a <span className="text-brand-gold">Sponsor</span>
                        </h2>
                        <p className="font-body text-lg sm:text-xl text-brand-dark/80 font-bold mb-6">
                            Are you a restaurant, business, or brand looking to get absolute maximum exposure?
                        </p>
                        <p className="font-body text-base sm:text-lg text-brand-dark/70 font-medium mb-8">
                            Sponsor one of our exclusive events featuring celebrities, politicians, and public figures — and put your brand in front of a massive, highly-engaged audience. 
                            It's not just an event, it's an opportunity to dominate.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
                             {[
                                 {icon: <Users size={20}/>, text: "Reach a massive targeted audience"},
                                 {icon: <Crown size={20}/>, text: "Assoc. with high-profile stars"},
                                 {icon: <Globe size={20}/>, text: "Featured on site & social media"},
                                 {icon: <TrendingUp size={20}/>, text: "Increase foot traffic & sales"},
                             ].map((item, i) => (
                                 <div key={i} className="flex items-start">
                                     <div className="text-brand-gold mt-1 mr-3 shrink-0">{item.icon}</div>
                                     <span className="font-body font-bold text-sm text-brand-dark/80">{item.text}</span>
                                 </div>
                             ))}
                        </div>
                        <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-brand-pop mb-4">Limited spots per event</p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="funky-card bg-brand-cream border-[4px] sm:border-[6px] border-brand-green p-6 sm:p-10">
                             <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-brand-green mb-6 text-center">Claim Your Spot</h3>
                             <div className="space-y-4">
                                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center p-4 bg-[#25D366] text-white rounded-xl border-2 border-brand-green shadow-[4px_4px_0_0_#145942] hover:-translate-y-1 transition-all font-bold uppercase tracking-wide text-sm sm:text-base">
                                     <MessageCircle size={20} className="mr-3"/> Message Us (WhatsApp)
                                 </a>
                                 <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`} className="w-full flex items-center justify-center p-4 bg-white text-brand-green rounded-xl border-2 border-brand-green shadow-[4px_4px_0_0_#C9A84C] hover:-translate-y-1 transition-all font-bold uppercase tracking-wide text-sm sm:text-base">
                                     <Phone size={20} className="mr-3"/> Call Us
                                 </a>
                             </div>
                             <div className="my-6 flex items-center">
                                 <div className="flex-grow h-px bg-brand-gold/30"></div>
                                 <span className="px-4 text-xs font-bold text-brand-gold uppercase">OR</span>
                                 <div className="flex-grow h-px bg-brand-gold/30"></div>
                             </div>
                             <form
                                  onSubmit={async e => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const data = new FormData(form);
                                    try {
                                      await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeGnGWeLMPa77vZnUAJiSxgXtRk_bcbnmkujojCyuUF2ucKw/formResponse", {
                                        method: "POST", mode: "no-cors", body: data
                                      });
                                    } catch(_) {}
                                    form.reset();
                                    alert("✅ Sponsorship request submitted! We'll be in touch soon.");
                                  }}
                                  className="space-y-4"
                             >
                                  <input type="text" name="entry.2075610549" placeholder="Brand / Business Name" required className="w-full bg-white border-2 border-brand-green rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold font-body text-sm font-bold" />
                                  <input type="email" name="entry.1763421740" placeholder="Email Address" required className="w-full bg-white border-2 border-brand-green rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold font-body text-sm font-bold" />
                                  <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-sm py-4 rounded-xl border-2 border-brand-dark shadow-[4px_4px_0_0_#145942] hover:-translate-y-1 transition-all">
                                      Send Request
                                  </button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const Globe = ({size}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;

/* --- GALLERY --- */
const Gallery = () => {
  const images = [
    { src: "https://i.imgur.com/SVKdIjf.jpg", alt: "Elite Moment", style: "sm:rotate-1" },
    { src: "https://i.imgur.com/Iu5CyKt.jpg", alt: "VVIP Access", style: "sm:-rotate-2" },
    { src: "https://i.imgur.com/wpmuhaC.jpg", alt: "Blockbuster Moment", style: "sm:rotate-2" },
    { src: "https://i.imgur.com/FDPVQwP.jpg", alt: "Handling Elite", style: "sm:-rotate-1" },
    { src: "https://i.imgur.com/QHqmyr0.jpg", alt: "VIP Experience", style: "sm:rotate-1" },
    { src: "https://i.imgur.com/Jx3tf0b.jpg", alt: "Exclusive Access", style: "sm:-rotate-2" },
    { src: "https://i.imgur.com/g5I7rZ9.jpg", alt: "Grand Event", style: "sm:rotate-1" },
    { src: "https://i.imgur.com/XHOrKVS.jpg", alt: "Spectacle", style: "sm:-rotate-2" },
    { src: "https://i.imgur.com/zDXVSZz.jpg", alt: "Celebrity", style: "sm:rotate-2" },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-brand-cream overflow-hidden border-b-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-end mb-10 sm:mb-16 text-center sm:text-left">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase text-brand-green mb-4">Picture <span className="text-brand-gold">Abhi Baaki Hai</span></h2>
            <p className="text-lg sm:text-xl text-brand-dark/70 font-body font-bold">A glimpse into our high-voltage blockbuster moments.</p>
          </div>
          <Smile className="hidden md:block w-16 h-16 text-brand-gold animate-spin-slow" style={{ animationDuration: '8s' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-sm sm:max-w-none mx-auto">
          {images.map((img, i) => (
             <div key={i} className={`group relative bg-brand-ivory border-[3px] sm:border-4 border-brand-green p-2 sm:p-3 shadow-[4px_4px_0_0_#C9A84C] sm:shadow-[8px_8px_0_0_#C9A84C] hover:shadow-[8px_8px_0_0_#145942] hover:-translate-y-2 transition-all rounded-xl sm:rounded-2xl transform ${img.style}`}>
               <div className="relative overflow-hidden rounded-lg sm:rounded-xl border-2 border-brand-green/20 h-64">
                 <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- CONTACT --- */
const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase text-brand-green mb-6 sm:mb-8 leading-tight">Drop a <span className="text-brand-gold">Line.</span></h2>
            <p className="text-lg sm:text-xl text-brand-dark/70 font-body font-bold mb-8 sm:mb-12">Dallas based. Operating globally. Hit us up.</p>
            <div className="space-y-4 sm:space-y-6 max-w-sm mx-auto lg:mx-0">
              <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`} className="flex items-center bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-brand-green shadow-[4px_4px_0_0_#C9A84C] transform sm:rotate-1 hover:rotate-0 transition-transform group cursor-pointer text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-green flex items-center justify-center shrink-0 mr-4 sm:mr-6 rounded-lg sm:rounded-xl border border-brand-gold/20 group-hover:bg-brand-gold transition-colors">
                  <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:text-brand-dark" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-brand-gold mb-1">VVIP Hotline</h4>
                  <p className="text-brand-green font-display font-bold text-lg sm:text-xl">{PHONE_NUMBER}</p>
                </div>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-[#25D366] shadow-[4px_4px_0_0_#25D366] transform sm:-rotate-1 hover:rotate-0 transition-transform group cursor-pointer text-left">
                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] flex items-center justify-center shrink-0 mr-4 sm:mr-6 rounded-lg sm:rounded-xl border border-white/50 group-hover:scale-105 transition-transform">
                   <MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="white" />
                 </div>
                 <div>
                   <h4 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#25D366] mb-1">Instant Chat</h4>
                   <p className="text-[#25D366] font-display font-bold text-lg sm:text-xl">WhatsApp Us</p>
                 </div>
              </a>
              <div className="flex items-center bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-brand-green shadow-[4px_4px_0_0_#C9A84C] transform sm:rotate-1 hover:rotate-0 transition-transform text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-green flex items-center justify-center shrink-0 mr-4 sm:mr-6 rounded-lg sm:rounded-xl border border-brand-gold/20">
                  <Mail className="text-brand-gold w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-brand-gold mb-1">Email</h4>
                  <p className="text-brand-green font-display font-bold text-lg sm:text-xl break-all">visuvalvibe@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="funky-card p-6 sm:p-8 md:p-12 self-start bg-brand-cream border-[4px] sm:border-[6px] w-full max-w-md mx-auto lg:max-w-none">
             <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-brand-green mb-6 sm:mb-8 text-center tracking-wide">Inquiry Form</h3>
             <form
                onSubmit={async e => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  try {
                    await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfo1BkAtbagUkRDPVVplKnc3WRzTweW8zgxVn_b6j0xUqMLsQ/formResponse", {
                      method: "POST", mode: "no-cors", body: data
                    });
                  } catch(_) {}
                  form.reset();
                  alert("✅ Inquiry submitted! Our team will reach out to you shortly.");
                }}
                className="space-y-4 sm:space-y-6"
              >
              <div>
                <input type="text" name="entry.309188563" placeholder="Full Name *" required className="w-full bg-white border-2 border-brand-green rounded-xl px-4 py-3 sm:py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all font-body text-base sm:text-lg font-bold" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input type="email" name="entry.2123699389" placeholder="Email *" required className="w-full bg-white border-2 border-brand-green rounded-xl px-4 py-3 sm:py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all font-body text-base sm:text-lg font-bold" />
                <input type="tel" name="entry.454672993" placeholder="Phone *" required className="w-full bg-white border-2 border-brand-green rounded-xl px-4 py-3 sm:py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all font-body text-base sm:text-lg font-bold" />
              </div>
              <div>
                <select name="entry.517195690" required className="w-full bg-white border-2 border-brand-green rounded-xl px-4 py-3 sm:py-4 text-brand-dark appearance-none focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all font-body text-base sm:text-lg font-bold">
                  <option value="">Select Event Type</option>
                  <option value="Indian Wedding">Indian Wedding</option>
                  <option value="Movie Launch">Movie Launch</option>
                  <option value="VVIP/Political">VVIP/Political</option>
                  <option value="Sponsorship">Sponsorship</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-green text-white font-bold uppercase tracking-widest text-base sm:text-lg py-4 sm:py-5 rounded-xl hover:bg-white hover:text-brand-green border-[3px] border-brand-green shadow-[4px_4px_0_0_#C9A84C] hover:-translate-y-1 transition-all flex justify-center items-center mt-2 sm:mt-4">
                <span>Send It</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- FOOTER --- */
const Footer = () => {
  return (
    <footer className="bg-brand-green pt-16 sm:pt-24 pb-8 text-white border-t-8 border-brand-gold relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green-light/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b-2 border-brand-gold/50 pb-12 sm:pb-16 mb-8 mt-4">
          <div className="lg:col-span-2">
             <div className="bg-brand-ivory p-3 sm:p-5 rounded-3xl mb-6 shadow-[4px_4px_0_0_#C9A84C] inline-flex items-center gap-3 border-2 sm:border-4 border-brand-gold">
                <img src={LOGO_URL} alt="Visuval Vibe Logo" className="h-12 sm:h-16 lg:h-20 w-auto object-contain" />
                <span className="font-display font-bold text-brand-green text-xl sm:text-2xl uppercase tracking-widest leading-tight">Visuval<br/>Vibe</span>
              </div>
             <p className="text-white/90 font-body font-bold text-xl sm:text-2xl max-w-md mt-4">
               "We don't plan events; we architect legendary moments."
             </p>
             <p className="text-white/70 font-body mt-4 max-w-sm text-sm">
                 Dallas born. Operating globally. 
                 Specializing in extreme luxury, VVIP hospitality, and massive Indian cinematic events.
             </p>
          </div>
          <div>
             <h4 className="text-brand-gold font-display font-bold text-xl mb-6 uppercase tracking-widest border-l-4 border-brand-gold pl-3">Quick Links</h4>
             <ul className="space-y-4 text-white/80 font-bold uppercase text-xs tracking-widest">
                 <li><a href="#home" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-2 transform duration-200">The Vibe (Home)</a></li>
                 <li><a href="#about" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-2 transform duration-200">The Masters (About)</a></li>
                 <li><a href="#celebrity" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-2 transform duration-200">Celebrity Access</a></li>
                 <li><a href="#political" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-2 transform duration-200">Political Protocol</a></li>
                 <li><a href="#sponsor" className="hover:text-brand-pop transition-colors inline-block hover:translate-x-2 transform duration-200">Sponsor An Event</a></li>
             </ul>
          </div>
          <div>
            <h4 className="text-brand-gold font-display font-bold text-xl mb-6 uppercase tracking-widest border-l-4 border-brand-gold pl-3">Hit Us Up</h4>
            <div className="space-y-4">
                <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-brand-gold mt-1 mr-3 shrink-0" />
                    <p className="text-white/80 font-bold text-sm">Dallas, Texas<br/>(Global Operations)</p>
                </div>
                <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                    <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`} className="text-white font-display font-bold text-xl hover:text-brand-gold transition-colors">{PHONE_NUMBER}</a>
                </div>
                <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                    <a href="mailto:visuvalvibe@gmail.com" className="text-white/80 font-bold text-sm hover:text-brand-gold transition-colors block border-b border-brand-gold/30 pb-1">visuvalvibe@gmail.com</a>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-full shadow-[2px_2px_0_0_#FFFDF5] hover:-translate-y-1 transition-all text-xs uppercase font-bold tracking-widest border-2 border-white">
                  <MessageCircle size={18} fill="white" className="mr-2" /> Start WhatsApp Chat
                </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[10px] sm:text-xs tracking-widest uppercase font-bold text-white/50 pt-4">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Visuval Vibe LLC. Engineered in Dallas.</p>
          <div className="flex space-x-6">
              <span className="cursor-pointer hover:text-brand-gold transition-colors">Privacy</span>
              <span className="cursor-pointer hover:text-brand-gold transition-colors">Terms</span>
              <span className="cursor-pointer hover:text-brand-gold transition-colors">VVIP Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- MAIN APP --- */
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-brand-ivory text-brand-dark selection:bg-brand-green selection:text-white pb-0 pt-0 font-body">
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Ticker />
        <UpcomingEvent />
        <About />
        <CelebrityHospitality />
        <PoliticalHospitality />
        <Sponsor />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <a 
        href={WHATSAPP_LINK}
        target="_blank" rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] border-[3px] sm:border-4 border-white text-white rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#145942] sm:shadow-[6px_6px_0_0_#145942] hover:bg-[#20BE5A] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all p-3"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
