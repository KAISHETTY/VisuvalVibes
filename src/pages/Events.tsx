import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Movie Events', 'Weddings', 'Functions', 'Celebrity', 'Political', 'Corporate'];

  const events = [
    { title: "Grand Telugu Movie Pre-Release", type: "Movie Events", location: "Hyderabad", img: "https://images.unsplash.com/photo-1540039155732-6a71bbafcbde?q=80&w=800&auto=format&fit=crop" },
    { title: "Royal Rajputana Wedding", type: "Weddings", location: "Udaipur", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop" },
    { title: "Political Felicitation Ceremony", type: "Political", location: "Vijayawada", img: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800&auto=format&fit=crop" },
    { title: "Celebrity Audio Launch", type: "Movie Events", location: "Vizag", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" },
    { title: "Half Saree Ceremony", type: "Functions", location: "Hyderabad", img: "https://images.unsplash.com/photo-1597839219363-22dc99d6fb35?q=80&w=800&auto=format&fit=crop" },
    { title: "Global Corporate Summit", type: "Corporate", location: "Delhi", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop" },
    { title: "Private VVIP Yacht Meet", type: "Celebrity", location: "Mumbai", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" },
    { title: "Grand Sangeet Night", type: "Weddings", location: "Goa", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" },
  ];

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.type === filter);

  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden mb-12">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display text-brand-green mb-4">Our Legendary Events</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl font-sans text-brand-dark/70">Explore our showcase of masterful executions.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border text-sm uppercase tracking-widest font-bold transition-colors ${
                filter === cat 
                  ? 'bg-brand-green text-white border-brand-green' 
                  : 'bg-white border-brand-gold/50 text-brand-green hover:bg-brand-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group bg-white border border-brand-gold/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-brand-green border border-brand-gold/50 shadow-sm">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display text-brand-green mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-sm font-sans text-brand-dark/60 mb-6 uppercase tracking-widest">{event.location}</p>
                <div className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-brand-gold group-hover:text-brand-green transition-colors cursor-pointer">
                  <span>View Details</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-brand-dark/50 text-xl font-sans text-brand-dark/70">
            No events found in this category.
          </div>
        )}

      </div>
    </div>
  );
}
