import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { navLinks } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-navy to-slate-950 text-white pt-20 pb-8 border-t-4 border-gold relative overflow-hidden">
      {/* பிரீமியம் தோற்றத்திற்கான பேக்கிரவுண்ட் எஃபெக்ட் */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Services நீக்கப்பட்டு 3 சீரான Columns ஆக மாற்றப்பட்டுள்ளது */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Company Info - 5 Columns அகலத்திற்கு அழகாக மாற்றப்பட்டுள்ளது */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <Link to="/" className="text-3xl font-secondary font-bold mb-5 block tracking-tight hover:opacity-90 transition-opacity">
                Allarewellcare<span className="text-gold animate-pulse">.</span>
              </Link>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-md">
                Empowering Independence Through Quality Disability Support. We provide compassionate, person-centered care to help you achieve your goals.
              </p>
            </div>
            
            {/* புதிய Hover Effect கொண்ட சமூக ஊடக ஐகான்கள் */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:-translate-y-1.5 shadow-xl transition-all duration-300">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:-translate-y-1.5 shadow-xl transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:-translate-y-1.5 shadow-xl transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links - 3 Columns அகலம் */}
          <div className="md:col-span-3 md:pl-4">
            <h4 className="text-lg font-secondary font-semibold uppercase tracking-wider text-gold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-gold">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-gold hover:pl-2 flex items-center transition-all duration-300 group text-sm sm:text-base"
                  >
                    <span className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 text-gold transition-all duration-300 font-bold">&rarr;</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 4 Columns அகலம் */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-secondary font-semibold uppercase tracking-wider text-gold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300 flex-shrink-0">
                  <FaMapMarkerAlt className="text-gold text-sm" />
                </div>
                <span className="text-gray-300 text-sm sm:text-base pt-1.5 leading-relaxed group-hover:text-white transition-colors">
                  123 Support Avenue,<br />Healthcare District, Sydney 2000
                </span>
              </li>
              <li className="flex items-center space-x-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300 flex-shrink-0">
                  <FaPhoneAlt className="text-gold text-sm" />
                </div>
                <a href="tel:1800123456" className="text-gray-300 hover:text-gold transition-colors text-sm sm:text-base pt-0.5">
                  1800 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300 flex-shrink-0">
                  <FaEnvelope className="text-gold text-sm" />
                </div>
                <a href="mailto:hello@Allarewellcare.example.com" className="text-gray-300 hover:text-gold transition-colors text-sm sm:text-base truncate pt-0.5">
                  hello@Allarewellcare.example.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-400">
          <p className="text-xs sm:text-sm mb-4 md:mb-0 tracking-wide">
            &copy; {new Date().getFullYear()} Allarewellcare Disability Support Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs sm:text-sm font-medium">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors duration-200">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="#" className="hover:text-gold transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;