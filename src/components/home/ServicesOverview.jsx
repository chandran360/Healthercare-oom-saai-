import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../../utils/constants';

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0A192F] mt-2 mb-6"
          >
            Comprehensive Support Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto"
          ></motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData?.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#D4AF37] text-white p-4 rounded-tl-2xl z-20">
                    {Icon && <Icon className="text-2xl" />}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#0A192F] mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-[#0A192F] font-semibold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                    Read More 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer View All CTA */}
        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center justify-center bg-[#0A192F] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 shadow-md">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
