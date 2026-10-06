import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaChevronDown } from 'react-icons/fa';
import { servicesData } from '../utils/constants';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    // Find the service by ID
    const foundService = servicesData.find(s => s.id === id);
    if (foundService) {
      setService(foundService);
    } else {
      // If service not found, redirect to services page
      navigate('/services');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  if (!service) return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;

  return (
    <>
      <Helmet>
        <title>{service.title} | Astute Softcare Disability Support</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <main className="bg-white">

        {/* Hero Section (Banner) - Optimized for Mobile Viewport Scale */}
        <div className="relative w-full flex items-center justify-center overflow-hidden py-24 md:py-0 md:h-[60vh] md:min-h-[500px]">
          <div className="absolute inset-0 bg-navy/60 z-10 mix-blend-multiply"></div>
          <img
            src={service.bannerImage || service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-12 md:pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-secondary drop-shadow-lg leading-tight"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light drop-shadow-md max-w-2xl mx-auto leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center space-x-2 bg-gray-50 text-navy px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-300 font-semibold border border-gray-200 group text-sm"
            >
              <FaArrowLeft className="text-gold group-hover:text-navy transition-colors" />
              <span>Back to Services</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column (Main Content) */}
            <div className="lg:col-span-8 space-y-16 md:space-y-20">

              {/* Detailed Description */}
              <section>
                <div className="flex items-center space-x-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy font-secondary">About This Service</h2>
                </div>
                <div className="prose prose-base md:prose-lg text-gray-600 leading-relaxed max-w-none whitespace-pre-line">
                  {service.fullDescription}
                </div>
              </section>

              {/* Key Benefits */}
              <section className="bg-gray-light p-6 sm:p-10 rounded-3xl border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-6 md:text-navymb-8 font-secondary">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-sm"
                    >
                      <div className="mt-1 bg-gold/10 p-2 rounded-full flex-shrink-0">
                        <FaCheck className="text-gold text-sm" />
                      </div>
                      <p className="text-navy font-medium leading-snug">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* How We Help / Features */}
              <section>
                <div className="flex items-center space-x-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy font-secondary">How We Support You</h2>
                </div>
                <ul className="space-y-4">
                  {service.supportFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-base md:text-lg text-gray-700 bg-white border-l-4 border-navy pl-4 md:pl-6 py-3 shadow-sm rounded-r-xl">
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Image Gallery */}
              {service.gallery && service.gallery.length > 0 && (
                <section>
                  <h3 className="text-xl md:text-2xl font-bold text-navy mb-8 font-secondary">Service in Action</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {service.gallery.map((img, idx) => (
                      <div key={idx} className="h-64 overflow-hidden rounded-2xl shadow-md group">
                        <img
                          src={img}
                          alt={`${service.title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8 md:space-y-12">

              {/* Eligibility Box */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-bl-full z-0 mix-blend-screen"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 font-secondary relative z-10 text-gold">Eligibility</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">
                  {service.eligibility}
                </p>
              </motion.div>

              {/* FAQs */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-6 font-secondary">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex justify-between items-center text-left focus:outline-none"
                      >
                        <span className="font-semibold text-sm sm:text-base text-navy pr-4">{faq.question}</span>
                        <FaChevronDown className={`text-gold transition-transform duration-300 flex-shrink-0 ${activeFaqIndex === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Large CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-slate-900 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gold rounded-full filter blur-[120px] opacity-20 z-0 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Take The Next Step</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 font-secondary leading-tight">Ready to receive support that empowers you?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Our team is here to answer your questions, assess your needs, and design a tailored plan that perfectly aligns with your goals.
            </p>
            <Link
              to="/contact"
              state={{ service: service.id }}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-navy bg-gradient-to-r from-gold to-yellow-400 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Inquire Now About This Service
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetails;
