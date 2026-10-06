import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaRegCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { navLinks } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/Astute Softcare Heart Care Logo.png" 
              alt="Astute Softcare" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-gold ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : (location.pathname !== '/' && !scrolled ? 'text-white' : 'text-navy')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#FDCB58] text-[#0A101D] px-5 lg:px-6 py-2.5 rounded-full font-bold hover:bg-[#FBBF24] transition-all shadow-sm hover:shadow-md group"
            >
              <FaRegCalendarAlt className="w-4 h-4" />
              <span>Book a Consultation</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-3xl focus:outline-none ${location.pathname !== '/' && !scrolled ? 'text-white' : 'text-navy'}`}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-gold bg-navy/5'
                      : 'text-navy hover:text-gold hover:bg-navy/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
