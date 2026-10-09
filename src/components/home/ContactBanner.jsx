import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // à®²à¯‹à®•à¯‹à®•à¯à®•à®³à¯ à®šà®°à®¿à®¯à®¾à®• à®‡à®®à¯à®ªà¯‹à®°à¯à®Ÿà¯ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯

const ContactBanner = () => {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Start Your Journey With Us?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Contact our friendly team today to discuss how we can support you in achieving your goals and living life to the fullest.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          // à®ªà®Ÿà¯à®Ÿà®©à¯à®•à®³à¯ à®…à®´à®•à®¾à®• à®…à®®à¯ˆà®¯ flex-wrap à®®à®±à¯à®±à¯à®®à¯ gap à®šà¯‡à®°à¯à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4"
        >
          {/* Contact Us Now Button */}
          <Link 
            to="/contact" 
            className="btn-outline border-white text-white hover:bg-white hover:text-navy px-6 py-3.5 text-base font-semibold flex items-center justify-center gap-3 rounded-lg border-2 transition-all duration-300 group w-full sm:w-auto"
          >
            Contact Us Now
          </Link>
          
          {/* Phone Number Button with Real Logo */}
          <a 
            href="tel:0433504551" 
            className="btn-outline border-white text-white hover:bg-white hover:text-navy px-6 py-3.5 text-base font-semibold flex items-center justify-center gap-3 rounded-lg border-2 transition-all duration-300 group w-full sm:w-auto"
          >
            <FaPhoneAlt className="w-4 h-4 text-white group-hover:text-navy transition-colors duration-300" />
            <span>Call 0433 504 551</span>
          </a>

          {/* Email ID Button with Real Logo */}
          <a 
            href="mailto:support@astutesoftcare.com.au" 
            className="btn-outline border-white text-white hover:bg-white hover:text-navy px-6 py-3.5 text-base font-semibold flex items-center justify-center gap-3 rounded-lg border-2 transition-all duration-300 group w-full sm:w-auto"
          >
            <FaEnvelope className="w-4 h-4 text-white group-hover:text-navy transition-colors duration-300" />
            <span>support@astutesoftcare.com.au</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
