import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-dark">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-brand-gold/20 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-brand-cream/90 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="font-decorative text-brand-green text-2xl md:text-3xl tracking-widest font-bold">
                VAIBHAV EVENTS
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors hover:text-brand-gold ${
                    location.pathname === link.path ? 'text-brand-gold' : 'text-brand-green'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-brand-green text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>

            <button
              className="lg:hidden text-brand-green focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-ivory z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-brand-gold/20">
                <div className="font-decorative text-brand-green text-xl tracking-widest font-bold">
                  VAIBHAV EVENTS
                </div>
                <button
                  className="text-brand-green hover:text-brand-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 overflow-y-auto flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-sm font-bold tracking-widest uppercase py-4 border-b border-brand-gold/10 hover:text-brand-gold ${
                      location.pathname === link.path ? 'text-brand-gold' : 'text-brand-green'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-brand-green text-white px-6 py-4 font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-brand-green pt-20 pb-10 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="font-decorative text-brand-gold text-2xl tracking-widest font-bold mb-6">
                VAIBHAV EVENTS
              </div>
              <p className="text-white/80 font-serif text-lg mb-8">
                "Where Every Moment Becomes a Legend"
              </p>
            </div>

            <div>
              <h4 className="text-brand-gold font-display text-xl mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 font-serif text-lg text-white/80">
                {['Home', 'About Us', 'Events Portfolio', 'Gallery', 'Testimonials'].map(item => (
                  <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-gold transition-colors block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-brand-gold font-display text-xl mb-6 uppercase tracking-widest text-sm">Our Services</h4>
              <ul className="space-y-4 font-serif text-lg text-white/80">
                {[
                  { name: 'VVIP Hospitality', path: '/vvip-hospitality' },
                  { name: 'Movie Events', path: '/movie-events' },
                  { name: 'Premium Weddings', path: '/weddings' },
                  { name: 'Traditional Functions', path: '/traditional-functions' },
                  { name: 'Packages & Pricing', path: '/packages' }
                ].map(service => (
                  <li key={service.name}>
                    <Link to={service.path} className="hover:text-brand-gold transition-colors block">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-brand-gold font-display text-xl mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
              <address className="not-italic text-white/80 space-y-4 font-serif text-lg">
                <p>
                  <strong className="text-white font-sans uppercase text-xs tracking-widest block mb-1">Office</strong>
                  Jubilee Hills, Hyderabad,<br />
                  Telangana, India
                </p>
                <p>
                  <strong className="text-white font-sans uppercase text-xs tracking-widest block mb-1">Phone</strong>
                  +91 98765 43210
                </p>
                <p>
                  <strong className="text-white font-sans uppercase text-xs tracking-widest block mb-1">Email</strong>
                  vvip@vaibhavevents.com
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/20 mt-16 pt-8 text-center text-xs tracking-widest uppercase font-bold text-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} VAIBHAV EVENTS.</p>
            <p className="normal-case font-serif italic text-sm text-white/80">Made with <span className="text-brand-gold">❤️</span> for Indian Celebrations</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <a href="#" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" title="WhatsApp Us">
          <MessageCircle size={28} />
        </a>
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-14 h-14 bg-white border border-brand-green text-brand-green rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors shadow-lg"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
