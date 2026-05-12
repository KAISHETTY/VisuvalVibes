import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: "P. R.", title: "Tollywood Producer", event: "Pre-Release Event", review: "Visuval Vibe handled a crowd of 50,000 effortlessly. From the chief guest protocol to the final fireworks, everything was flawless." },
    { name: "Srinu & Anjali", title: "Industrialist Family", event: "Destination Wedding", review: "Our wedding in Udaipur felt like a dream. Every single detail, from the decor to the catering, was just perfect. The gold standard!" },
    { name: "CMO Staff", title: "VVIP Dignitary Protocol", event: "Felicitation Ceremony", review: "Exceptional discipline and security protocol adherence. The entire event was executed with absolute dignity and perfection." },
    { name: "K. Reddy", title: "Global Tech CEO", event: "Corporate Retreat", review: "We flew in 200 executives to Hyderabad. The logistics, hotels, and closing gala managed by Visuval Vibe were simply world-class." },
    { name: "Anita K.", title: "NRI Host", event: "Half Saree Function", review: "They brought our cultural traditions to life while keeping the luxury intact. The customized decor and authentic food were praised by everyone." },
    { name: "Anonymous", title: "Bollywood Actor", event: "VVIP Hospitality", review: "Complete discretion. Absolute luxury. I felt safe and incredibly well taken care of during my 3-day stay and events in the city." },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden mb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-brand-green mb-6">A Legacy of Trust</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl font-serif italic text-brand-dark/70 tracking-wide">Measured not by what we say, but by what they experience.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mx-auto mb-20 p-6 bg-white border border-brand-gold/30 shadow-sm inline-block">
           <div className="flex text-brand-gold mr-6">
             {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} className="mr-1" />)}
           </div>
           <div className="border-l border-brand-gold/30 pl-6">
             <span className="text-brand-green font-display text-3xl font-bold tracking-widest block">4.9/5</span>
             <span className="text-brand-dark/60 text-[10px] uppercase font-bold tracking-widest block">Average Rating</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 border border-brand-gold/20 relative pt-14 shadow-sm hover:shadow-lg transition-all">
               <div className="absolute top-0 left-10 -translate-y-1/2 w-14 h-14 bg-brand-green text-brand-gold rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                 <Quote size={20} strokeWidth={2} />
               </div>
               <p className="text-brand-dark/80 italic font-serif leading-relaxed mb-8 text-lg">"{t.review}"</p>
               <div className="border-t border-brand-gold/20 pt-6 mt-auto">
                 <h4 className="font-display text-brand-green text-xl mb-1">{t.name}</h4>
                 <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">{t.title}</p>
                 <p className="text-brand-dark/50 text-[10px] uppercase tracking-widest">{t.event}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
