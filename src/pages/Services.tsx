import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-10">
      <div className="py-32 border-b border-brand-gold/20 text-center relative overflow-hidden bg-brand-cream">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-brand-green mb-6">Our Premium Services</h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-brand-dark/80 tracking-wide font-sans">From traditional ceremonies to VVIP hospitality, we execute absolute perfection.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        
        {/* Service 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1549488344-c11c4709d01d?q=80&w=1000&auto=format&fit=crop" alt="VVIP Hospitality" className="relative w-full h-[500px] object-cover shadow-xl border border-brand-gold/30" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-cream -z-10 border border-brand-gold/30"></div>
          </div>
          <div className="md:pl-10">
            <div className="text-brand-gold uppercase tracking-[0.3em] font-bold text-[10px] mb-4">Service 01</div>
            <h2 className="text-4xl md:text-5xl font-display text-brand-green mb-8">VVIP & Celebrity Hospitality</h2>
            <p className="text-brand-dark/80 mb-8 leading-relaxed text-lg">Dedicated hospitality management for film stars, cricketers, politicians, and high-net-worth individuals requiring the utmost discretion and luxury.</p>
            <ul className="space-y-4 mb-10 text-sm font-sans tracking-wide text-brand-dark">
              {['Personal butler service & 24/7 concierge', 'Confidential security coordination', 'VIP airport transfers & suite management', 'Personal luxury chef arrangements'].map(item => (
                <li key={item} className="flex items-start">
                  <span className="text-brand-gold mr-4 text-xs mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <Link to="/vvip-hospitality" className="inline-flex items-center font-bold uppercase tracking-widest text-brand-gold hover:text-brand-green transition-colors">
               Explore Details <ChevronRight size={18} className="ml-1" />
             </Link>
          </div>
        </section>

        {/* Service 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 md:pr-10">
            <div className="text-brand-gold uppercase tracking-[0.3em] font-bold text-[10px] mb-4">Service 02</div>
            <h2 className="text-4xl md:text-5xl font-display text-brand-green mb-8">Movie Events</h2>
            <p className="text-brand-dark/80 mb-8 leading-relaxed text-lg">Creating massive buzz with grand scale execution for the entertainment industry. From 50,000 capacity open grounds to elite hotel launches.</p>
             <ul className="space-y-4 mb-10 text-sm font-sans tracking-wide text-brand-dark">
              {['Pre-Release Events (Grand stages, live streaming)', 'Audio Launch Events (Music themes, orchestra)', 'Trailer Launch Events (Red carpet, media walls)', 'Success Celebrations & OTT Launch Parties'].map(item => (
                <li key={item} className="flex items-start">
                  <span className="text-brand-gold mr-4 text-xs mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/movie-events" className="inline-flex items-center font-bold uppercase tracking-widest text-brand-gold hover:text-brand-green transition-colors">
               Explore Details <ChevronRight size={18} className="ml-1" />
             </Link>
          </div>
           <div className="order-1 md:order-2 relative">
            <img src="https://images.unsplash.com/photo-1540039155732-6a71bbafcbde?q=80&w=1000&auto=format&fit=crop" alt="Movie Events" className="relative w-full h-[500px] object-cover shadow-xl border border-brand-gold/30 z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-cream z-0 border border-brand-gold/30"></div>
          </div>
        </section>
        
        {/* Service 3 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop" alt="Royal Indian Weddings" className="relative w-full h-[500px] object-cover shadow-xl border border-brand-gold/30" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-cream -z-10 border border-brand-gold/30"></div>
          </div>
          <div className="md:pl-10">
            <div className="text-brand-gold uppercase tracking-[0.3em] font-bold text-[10px] mb-4">Service 03</div>
            <h2 className="text-4xl md:text-5xl font-display text-brand-green mb-8">Royal Indian Weddings</h2>
            <p className="text-brand-dark/80 mb-8 leading-relaxed text-lg">We respect the sanctity of Indian marriages while orchestrating them on a canvas of sheer luxury. Your special day deserves nothing less than perfection.</p>
            <ul className="space-y-4 mb-10 text-sm font-sans tracking-wide text-brand-dark">
              {['Telugu Weddings (Muhurtham, Saptapadi)', 'North Indian & Destination Weddings', 'End-to-end Mandap decoration & lighting', 'Pan-Indian royal catering & authentic cuisines'].map(item => (
                <li key={item} className="flex items-start">
                  <span className="text-brand-gold mr-4 text-xs mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <Link to="/weddings" className="inline-flex items-center font-bold uppercase tracking-widest text-brand-gold hover:text-brand-green transition-colors">
               Explore Details <ChevronRight size={18} className="ml-1" />
             </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
