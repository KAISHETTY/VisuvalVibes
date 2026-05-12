import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', date: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted. Our concierge team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden mb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-brand-gold uppercase tracking-[0.3em] font-bold text-[10px] mb-8">Priority Concierge</div>
          <h1 className="text-5xl md:text-7xl font-display text-brand-green mb-6">Commence Planning</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl font-serif italic text-brand-dark/70 tracking-wide">Connect with our directors to discuss your grand vision.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-display text-brand-green mb-10">Direct Access</h2>
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center shrink-0 mr-6 border border-brand-gold/20 rounded-full">
                  <MapPin className="text-brand-green w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest text-brand-gold mb-3">Corporate Headquarters</h3>
                  <p className="text-brand-dark/80 font-sans text-lg leading-relaxed">Level 4, Premium Towers<br/>Jubilee Hills, Hyderabad<br/>Telangana, India 500033</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center shrink-0 mr-6 border border-brand-gold/20 rounded-full">
                  <Phone className="text-brand-green w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest text-brand-gold mb-3">VVIP Hotline</h3>
                  <p className="text-brand-dark/80 font-sans text-lg mb-1">+91 98765 43210</p>
                  <p className="text-brand-dark/80 font-sans text-lg">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center shrink-0 mr-6 border border-brand-gold/20 rounded-full">
                  <Mail className="text-brand-green w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest text-brand-gold mb-3">Priority Email</h3>
                  <p className="text-brand-dark/80 font-sans text-lg mb-1">vvip@vaibhavevents.com</p>
                  <p className="text-brand-dark/80 font-sans text-lg">events@vaibhavevents.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-brand-green text-white p-8 border border-brand-gold/30 shadow-lg">
              <h3 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">Notice regarding VVIP Bookings</h3>
              <p className="text-white/80 text-sm font-serif italic leading-relaxed">
                For political events and high-security celebrity appearances, please email us directly with your security clearance requirements. Our NDA and protocol team will engage with your representatives.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-brand-gold/30 p-10 md:p-14 shadow-xl">
            <h2 className="text-4xl font-display text-brand-green mb-10 text-center">Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-dark/70 mb-2 font-bold">Full Name / Rep Name *</label>
                  <input type="text" required className="w-full bg-brand-ivory border border-brand-gold/30 px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green transition-colors font-sans" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-dark/70 mb-2 font-bold">Phone Number *</label>
                  <input type="tel" required className="w-full bg-brand-ivory border border-brand-gold/30 px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green transition-colors font-sans" onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-dark/70 mb-2 font-bold">Email Address *</label>
                <input type="email" required className="w-full bg-brand-ivory border border-brand-gold/30 px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green transition-colors font-sans" onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-dark/70 mb-2 font-bold">Event Type *</label>
                  <select required className="w-full bg-brand-ivory border border-brand-gold/30 px-4 py-3 text-brand-dark appearance-none focus:outline-none focus:border-brand-green transition-colors font-sans" onChange={e => setFormData({...formData, eventType: e.target.value})}>
                    <option value="">Select Event Type</option>
                    <option value="wedding">Royal Wedding</option>
                    <option value="movie">Movie / Audio Launch</option>
                    <option value="vvip">VVIP Hospitality</option>
                    <option value="traditional">Traditional Function</option>
                    <option value="corporate">Corporate / Political</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-dark/70 mb-2 font-bold">Est. Date</label>
                  <input type="date" className="w-full bg-brand-ivory border border-brand-gold/30 px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green transition-colors font-sans" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-dark/70 mb-2 font-bold">Event Requirements</label>
                <textarea rows={4} className="w-full bg-brand-ivory border border-brand-gold/30 px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green transition-colors font-sans resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-green text-white font-bold uppercase tracking-widest text-xs py-5 hover:bg-brand-gold hover:text-brand-dark transition-colors flex justify-center items-center shadow-md">
                <span>Submit Inquiry</span>
                <Send size={16} className="ml-3" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
