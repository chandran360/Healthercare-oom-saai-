import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaClipboardList, FaUserFriends, FaHeartbeat } from 'react-icons/fa';

const steps = [
  {
    icon: FaPhoneAlt,
    title: "1. Get in Touch",
    description: "Reach out to our friendly team. We'll listen to your needs, answer your initial questions, and schedule a free consultation to understand your situation."
  },
  {
    icon: FaClipboardList,
    title: "2. Meet & Plan",
    description: "We meet with you and your family to discuss your NDIS goals. Together, we'll design a highly personalised care plan tailored to your lifestyle and preferences."
  },
  {
    icon: FaUserFriends,
    title: "3. Match with Caregiver",
    description: "We carefully pair you with a qualified support worker whose skills, personality, and experience perfectly align with your unique needs and interests."
  },
  {
    icon: FaHeartbeat,
    title: "4. Start Support",
    description: "Begin receiving compassionate, top-tier support. We continuously monitor and adjust your care plan to ensure you achieve your goals and live independently."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDCB58]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FDCB58] font-bold tracking-wider uppercase text-sm mb-3 block"
          >
            Our Simple Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0A101D] font-secondary mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We've made accessing premium disability support as smooth and stress-free as possible. From your first call to everyday care, we guide you at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gray-200 border-dashed border-t-2 border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-6 relative">
                <div className="absolute inset-0 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_rgba(253,203,88,0.3)] transition-shadow duration-500 z-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-navy/5 group-hover:bg-[#FDCB58] transition-colors duration-500 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                {/* Ping Animation behind icon */}
                <div className="absolute inset-2 bg-[#FDCB58]/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </div>

              {/* Text Content */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:border-[#FDCB58]/30 group-hover:shadow-lg transition-all duration-300 w-full flex-1">
                <h3 className="text-xl font-bold text-[#0A101D] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
