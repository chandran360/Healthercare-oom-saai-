import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import { servicesData } from '../utils/constants';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Astute Softcare Disability Support</title>
        <meta name="description" content="Explore our comprehensive range of NDIS and disability support services including Daily Living Support, Personal Care, and Community Participation." />
      </Helmet>

      <main>
        <PageHeader
          title="Our Services"
          bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-24 bg-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
              
              {/* NDIS Logo Container (Mobile Responsive & Centered) */}
              <div className="mb-8 max-w-[280px] sm:max-w-[320px] w-full px-4">
                <img 
                  src="https://res.cloudinary.com/defqgygsf/image/upload/v1782190437/images_18_r7n7wm.jpg" 
                  alt="Registered NDIS Provider" 
                  className="w-full h-auto object-contain object-center"
                />
              </div>

              <span className="text-gold font-semibold tracking-wider uppercase text-sm">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-navy">Tailored Support for Your Unique Needs</h2>
              <p className="text-gray-600 text-lg">
                We provide a wide range of flexible, high-quality disability support services designed to help you achieve your goals and live life your way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card group overflow-hidden flex flex-col h-full bg-white"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy p-3 rounded-full z-20 shadow-lg">
                        <Icon className="text-2xl text-gold" />
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-gold transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                      
                      {/* Responsive Flex layout for buttons on mobile */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                        {/* Read More Link */}
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center text-sm font-semibold text-navy hover:text-navy/80 transition-colors group"
                        >
                          <span>Read More</span>
                          <svg
                            className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>

                        {/* Inquire Now Button */}
                        <Link
                          to="/contact"
                          state={{ service: service.id }}
                          className="btn-outline border border-navy text-navy rounded-full text-center py-2 px-6 text-sm font-semibold hover:bg-navy hover:text-white transition-all duration-300 w-full sm:w-auto"
                        >
                          Inquire Now
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NDIS Section */}
        <section className="py-20 bg-navy text-white relative overflow-hidden">
          <div className="absolute -left-20 top-0 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -right-20 bottom-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Registered NDIS Provider</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              As a registered National Disability Insurance Scheme (NDIS) provider, we adhere to strict quality and safety standards. We can help you navigate your plan and maximize your funding to get the right support.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/contact" className="btn-secondary px-8">Talk to an NDIS Expert</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
