import { motion } from 'framer-motion';
import { FaUserMd, FaHeart, FaShieldAlt, FaClock } from 'react-icons/fa';

const features = [
  {
    id: 1,
    title: 'Professional Team',
    description: 'Highly qualified and experienced support workers dedicated to your care.',
    icon: FaUserMd,
  },
  {
    id: 2,
    title: 'Compassionate Care',
    description: 'We treat every individual with the respect, dignity, and empathy they deserve.',
    icon: FaHeart,
  },
  {
    id: 3,
    title: 'Trusted & Safe',
    description: 'Fully compliant with NDIS standards and rigorous safety protocols.',
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: '24/7 Availability',
    description: 'Round-the-clock support to ensure you have help whenever you need it.',
    icon: FaClock,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 transform skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-semibold tracking-wider uppercase text-sm">Why Choose Allarewellcare</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Experience the Difference in Disability Care</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                At Allarewellcare, we believe that disability support should be as unique as the individuals we serve. We don't just provide services; we build lasting relationships based on trust, respect, and a genuine desire to see you thrive.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="text-gold text-xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Caregiver supporting an individual"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[600px]"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -left-8 bg-navy p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="text-gold text-5xl font-bold mb-1">15+</div>
                <div className="text-white text-sm uppercase tracking-wider">Years of<br />Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
