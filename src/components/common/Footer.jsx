import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaHandsHelping } from 'react-icons/fa';
import { navLinks } from '../../utils/constants';

const Footer = () => {
  const brandName = "Astute Softcare";
  const brandDescription = "Empowering Independence Through Quality Disability Support. We provide compassionate, person-centered care to help you achieve your goals.";

  const socialLinks = [
    { icon: <FaFacebookF className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    ...navLinks.map(link => ({ label: link.name, href: link.path })),
  ];

  return (
    <section className="relative w-full mt-0 overflow-hidden bg-navy">
      <footer className="border-t border-white/10 mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10 z-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-3xl font-bold font-secondary">
                    {brandName}<span className="text-gold"></span>
                  </span>
                </div>
                <p className="text-gray-400 font-medium text-center w-full max-w-md sm:w-96 px-4 sm:px-0 leading-relaxed">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-gold transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300 flex items-center justify-center">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {footerLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400 max-w-2xl px-4">
                  {footerLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-gold transition-colors duration-300 hover:font-semibold"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-20">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} {brandName} Disability Support Services. All rights reserved.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="text-white/20 hidden md:inline">|</span>
              <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Large background text */}
        <div
          className="bg-gradient-to-b from-white/10 via-white/5 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-black tracking-tighter pointer-events-none select-none text-center px-4 font-secondary whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.5rem, 11vw, 10rem)',
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo */}
        <div className="absolute hover:border-gold duration-500 drop-shadow-[0_0px_20px_rgba(253,183,20,0.2)] bottom-24 md:bottom-20 backdrop-blur-md rounded-3xl bg-navy/80 left-1/2 border-2 border-white/10 flex items-center justify-center p-3 -translate-x-1/2 z-20 hover:-translate-y-2">
          <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden p-2">
            <img src="/Glossy Heart of Inclusive Care.png" alt="Astute Softcare Logo" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent w-full left-1/2 -translate-x-1/2 z-10"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-slate-950 via-navy/80 blur-[2em] to-transparent absolute bottom-0 w-full h-40 z-0 pointer-events-none"></div>
      </footer>
    </section>
  );
};

export default Footer;
