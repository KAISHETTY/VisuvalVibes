import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://i.imgur.com/SVKdIjf.jpg", alt: "VVIP Elite Moment" },
    { src: "https://i.imgur.com/Iu5CyKt.jpg", alt: "Celebrity Hospitality" },
    { src: "https://i.imgur.com/KT9So0f.jpg", alt: "Power & Protocol" },
    { src: "https://i.imgur.com/FDPVQwP.jpg", alt: "Handling The Elite" },
    { src: "https://i.imgur.com/QHqmyr0.jpg", alt: "VVIP Experience" },
    { src: "https://i.imgur.com/c5P6T82.jpg", alt: "Exclusive Access" },
    { src: "https://i.imgur.com/SBUKdpX.jpg", alt: "Grand Event" },
    { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800", alt: "Audio Launch" },
    { src: "https://images.unsplash.com/photo-1540039155732-6a71bbafcbde?q=80&w=800", alt: "Stage Setup" },
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800", alt: "Wedding Mandap" },
    { src: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800", alt: "Political Event" },
    { src: "https://images.unsplash.com/photo-1597839219363-22dc99d6fb35?q=80&w=800", alt: "Traditional Ceremony" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800", alt: "Corporate Event" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800", alt: "VVIP Hospitality" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800", alt: "Floral Decor" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800", alt: "Luxury Travel" },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-10 pb-20">
      <div className="bg-brand-cream py-32 border-b border-brand-gold/30 text-center relative overflow-hidden mb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display text-brand-green mb-4">Our Visual Legacy</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl font-serif italic text-brand-dark/70">A glimpse into our meticulously crafted moments.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative group cursor-pointer border border-brand-gold/20 bg-white overflow-hidden"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white uppercase tracking-widest text-xs font-bold border border-white px-6 py-3 bg-brand-green/50 backdrop-blur-sm">Enlarge View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-cream/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-brand-green hover:text-brand-gold transition-colors z-[60]" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain border border-brand-gold shadow-2xl relative z-50"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
