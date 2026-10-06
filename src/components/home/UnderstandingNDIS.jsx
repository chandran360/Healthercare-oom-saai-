import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const UnderstandingNDIS = () => {
  const benefits = [
    "Maximize your allocated NDIS funding",
    "Find the right support categories for your goals",
    "Navigate plan reviews and changes easily",
    "Understand self-managed vs. plan-managed options"
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FDCB58] font-bold tracking-wider uppercase text-sm mb-3 block"
            >
              Funding & Support
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0A101D] font-secondary mb-6"
            >
              Understanding NDIS
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Navigating the National Disability Insurance Scheme (NDIS) can be overwhelming. As a registered and experienced provider, Astute Softcare is here to help you understand your plan, maximize your funding, and get the exact support you need without the confusion.
            </motion.p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="text-[#FDCB58] w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-navy/90 transition-all shadow-md group"
              >
                <span>Discuss Your Plan</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="NDIS Consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FDCB58]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-[#FDCB58] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">Registered Provider</h4>
                    <p className="text-sm text-gray-600">Trusted NDIS partner</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FDCB58] rounded-full mix-blend-multiply opacity-20 blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply opacity-20 blur-3xl z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UnderstandingNDIS;
