import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa'; // à®à®•à®¾à®©à¯ à®‡à®®à¯à®ªà¯‹à®°à¯à®Ÿà¯ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯

const CompanyIntroduction = () => {
  // à®¸à¯à®²à¯ˆà®Ÿà®°à¯à®•à¯à®•à®¾à®© à®‡à®®à¯‡à®œà¯ à®²à®¿à®¸à¯à®Ÿà¯à®•à®³à¯ (à®‡à®¤à¯ˆ à®‰à®™à¯à®•à®³à¯à®•à¯à®•à¯ à®¤à¯‡à®µà¯ˆà®¯à®¾à®© à®ªà®Ÿà®™à¯à®•à®³à®¾à®• à®®à®¾à®±à¯à®±à®¿à®•à¯à®•à¯Šà®³à¯à®³à®²à®¾à®®à¯)
  const images = [
    "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 4 à®µà®¿à®©à®¾à®Ÿà®¿à®•à¯à®•à¯ à®’à®°à¯à®®à¯à®±à¯ˆ à®¤à®¾à®©à®¾à®• à®‡à®®à¯‡à®œà¯ à®®à®¾à®±à¯à®µà®¤à®±à¯à®•à®¾à®© à®²à®¾à®œà®¿à®•à¯ (Auto-slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4000ms = 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column (Premium Auto Image Slider) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
            {/* Decorative Background Element */}
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-4 border-l-4 border-gold/30 rounded-tl-3xl pointer-events-none hidden sm:block"></div>
            <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 bg-gold/10 rounded-br-3xl -z-10 hidden sm:block"></div>

            {/* Slider Container */}
            <div className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl bg-navy/5 border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Astute Softcare Team Support"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Tint overlay for rich look */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Slider Indicators (Dots) */}
            <div className="flex justify-center space-x-2 mt-4">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column (Styled Content) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gold font-bold tracking-wider uppercase text-sm">Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-6 font-secondary">
              Empowering Lives <br className="hidden sm:inline" />Since <span className="text-navy border-b-4 border-gold/40 pb-1">2008</span>
            </h2>

            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed font-light">
              Astute Softcare Disability Support Services was founded with a clear vision: to redefine the standard of care for individuals with disabilities. We believe that everyone deserves the opportunity to live a fulfilling, independent life within their community.
            </p>

            <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed font-light">
              Our approach is deeply person-centered. We don't believe in one-size-fits-all solutions. Instead, we take the time to listen, understand your unique goals, and craft support plans that truly work for you.
            </p>

            {/* Interactive Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Person-Centered Approach', 'Highly Trained Professionals', 'NDIS Registered Provider', 'Community-Focused Care'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center text-navy font-semibold text-sm sm:text-base bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <FaCheckCircle className="text-gold mr-3 text-lg flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
