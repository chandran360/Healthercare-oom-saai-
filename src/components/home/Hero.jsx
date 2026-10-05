import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#060B14] overflow-hidden font-['Inter',_sans-serif]">
      
      {/* Background Image Container (Mobile: Top 60vh / Desktop: Full Cover) */}
      <div className="absolute top-0 left-0 w-full h-[60vh] lg:h-full z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Premium Disability Support"
          className="w-full h-full object-cover object-[center_top] lg:object-[65%_center]"
        />
        
        {/* Mobile Gradient: Blends the bottom of the image smoothly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14]/40 via-[#060B14]/80 to-[#060B14] lg:hidden"></div>
        
        {/* Desktop Gradient: Solid dark on left for text readability, fading to transparent on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/80 to-transparent"></div>
        
        {/* Subtle Ambient Glow behind text */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-[35vh] sm:pt-[45vh] lg:pt-0 pb-16 lg:pb-0">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between min-h-[65vh] lg:min-h-screen gap-12 lg:gap-8">
          
          {/* Left Column: Typography & CTAs */}
          <div className="w-full lg:w-[55%] flex flex-col items-start lg:pt-0">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-widest uppercase">Registered NDIS Provider</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="text-[2.5rem] leading-[1.1] sm:text-6xl lg:text-[4.5rem] font-light text-white mb-6 tracking-tight drop-shadow-2xl"
            >
              Empowering <br className="hidden sm:block" />
              <span className="font-['Playfair_Display',_serif] italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#D4AF37] drop-shadow-lg">Independence</span> <br className="hidden sm:block" />
              Through Care
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light drop-shadow-md"
            >
              Personalised support services designed to help you live confidently, achieve your goals, and enjoy greater independence every day.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <Link 
                to="/get-started" 
                className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-400 text-[#060B14] font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                <span className="relative z-10">Get Started Today</span>
                <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" /></svg>
                <div className="absolute inset-0 bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-8 py-4 w-full sm:w-auto rounded-full bg-white/10 border border-white/20 text-white font-medium text-lg hover:bg-white hover:text-[#060B14] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                Book a Consultation
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Floating Glass Stats staggered over the background */}
     

        </div>
      </div>
    </section>
  );
};

export default Hero;