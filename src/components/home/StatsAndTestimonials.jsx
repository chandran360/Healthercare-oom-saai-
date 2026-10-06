import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const stats = [
  { id: 1, value: 500, label: 'Happy Clients', suffix: '+' },
  { id: 2, value: 15, label: 'Years Experience', suffix: '+' },
  { id: 3, value: 100, label: 'Expert Staff', suffix: '%' },
  { id: 4, value: 24, label: 'Support Available', suffix: '/7' },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'NDIS Participant',
    content: 'The support workers from Astute Softcare have completely transformed my life. They are so compassionate and always go above and beyond to ensure I can participate in my community.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    role: 'Family Member',
    content: 'We were struggling to find the right care for our son until we found Astute Softcare. The level of professionalism and genuine care is outstanding. We finally have peace of mind.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
];

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gold mb-2">
      {count}{suffix}
    </div>
  );
};

const StatsAndTestimonials = () => {
  return (
    <>
      {/* Statistics Section */}
      <section className="py-16 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="p-4">
                <Counter end={stat.value} suffix={stat.suffix} />
                <div className="text-gray-300 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-navy">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-lg relative"
              >
                <FaQuoteLeft className="absolute top-10 right-10 text-5xl text-gray-100" />
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gold"
                  />
                  <div>
                    <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
                    <span className="text-gray-500 text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndTestimonials;
