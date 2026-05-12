import { motion } from 'motion/react';
import { Target, Eye, Diamond } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-5">
           <img src="https://images.unsplash.com/photo-1544253303-ba4d9fe89f7d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Texture" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-brand-green mb-6">Our Legacy</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl font-serif italic text-brand-dark/70 tracking-wide">The architects behind India's most prestigious celebrations.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <section className="mb-24 text-center">
          <Diamond className="w-10 h-10 text-brand-gold mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-display text-brand-green mb-8">The Visuval Vibe Story</h2>
          <p className="text-lg text-brand-dark/80 font-sans leading-relaxed mb-6">
            What started as a passion for flawless execution has evolved into the gold standard of premium event management. We realized that true luxury isn't just about expensive decor; it's about anticipation, absolute discretion, and allowing the host to be a guest at their own event.
          </p>
          <p className="text-lg text-brand-dark/80 font-sans leading-relaxed">
            Today, Visuval Vibe is trusted by Tollywood & Bollywood celebrities, political dignitaries, and high-net-worth families to orchestrate their most important moments out of the public eye, but always in the spotlight of elegance.
          </p>
        </section>

        {/* Founders */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-brand-green mb-4">Our Founders</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Founder 1 */}
            <div className="bg-white p-12 border border-brand-gold/20 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-32 h-32 mx-auto rounded-full bg-brand-cream border-4 border-brand-gold/50 flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Venkat Bomma" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display text-brand-green mb-2">Venkat Bomma</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6 border-b border-brand-gold/20 pb-4 inline-block">Managing Director</p>
              <p className="text-brand-dark/70 font-serif italic">"Execution is our only metric. When a client trusts us, they buy peace of mind."</p>
            </div>
            {/* Founder 2 */}
            <div className="bg-white p-12 border border-brand-gold/20 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-32 h-32 mx-auto rounded-full bg-brand-cream border-4 border-brand-gold/50 flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Sunita" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display text-brand-green mb-2">Sunita</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6 border-b border-brand-gold/20 pb-4 inline-block">Creative Director</p>
              <p className="text-brand-dark/70 font-serif italic">"Design is how we make people feel. We aim for breathtaking from the first step inside."</p>
            </div>
             {/* Founder 3 */}
             <div className="bg-white p-12 border border-brand-gold/20 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-32 h-32 mx-auto rounded-full bg-brand-cream border-4 border-brand-gold/50 flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" alt="Naga Vamshi" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display text-brand-green mb-2">Naga Vamshi</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6 border-b border-brand-gold/20 pb-4 inline-block">Head of Operations</p>
              <p className="text-brand-dark/70 font-serif italic">"Protocol, logistics, and precision. We leave nothing to chance."</p>
            </div>
             {/* Founder 4 */}
             <div className="bg-white p-12 border border-brand-gold/20 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-32 h-32 mx-auto rounded-full bg-brand-cream border-4 border-brand-gold/50 flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="Pavan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display text-brand-green mb-2">Pavan</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6 border-b border-brand-gold/20 pb-4 inline-block">Director of VVIP Relations</p>
              <p className="text-brand-dark/70 font-serif italic">"Discretion is our foremost promise. Our client's privacy is non-negotiable."</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-brand-green border border-brand-gold p-12 text-center text-white shadow-xl">
             <Target className="w-12 h-12 text-brand-gold mx-auto mb-6" />
             <h3 className="text-3xl font-display mb-4">Our Mission</h3>
             <p className="text-white/90 font-sans leading-relaxed text-lg">To execute flaweless, ultra-premium events that honor Indian traditions while providing uncompromising modern luxury and security.</p>
          </div>
          <div className="bg-white border border-brand-gold/30 p-12 text-center shadow-xl">
             <Eye className="w-12 h-12 text-brand-green mx-auto mb-6" />
             <h3 className="text-3xl font-display text-brand-green mb-4">Our Vision</h3>
             <p className="text-brand-dark/80 font-sans leading-relaxed text-lg">To remain India's absolute gold standard and undisputed leader in magnificent VVIP hospitality and legendary event management.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
