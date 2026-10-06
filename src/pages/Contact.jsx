import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import { servicesData } from '../utils/constants';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: location.state?.service || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Astute Softcare Disability Support</title>
        <meta name="description" content="Get in touch with Astute Softcare for disability support services. We are here to answer your questions and help you navigate your NDIS plan." />
      </Helmet>

      <main>
        <PageHeader
          title="Contact Us"
          bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-24 bg-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-gold font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-navy">We'd Love to Hear From You</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Whether you have a question about our services, need help with your NDIS plan, or are ready to get started, our friendly team is here to help.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                    <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-1">Call Us</h4>
                      <p className="text-gray-500 mb-1">We are available Mon-Fri, 9am-5pm</p>
                      <a href="tel:0433504551" className="text-lg font-semibold text-navy hover:text-gold transition-colors">0433 504 551</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                    <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-1">Email Us</h4>
                      <p className="text-gray-500 mb-1">Send us an email anytime</p>
                      <a href="mailto:hello@Astute Softcare.example.com" className="text-lg font-semibold text-navy hover:text-gold transition-colors">hello@Astute Softcare.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                    <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-1">Visit Us</h4>
                      <p className="text-gray-500 mb-1">216 Lance Road</p>
                      <p className="text-lg font-semibold text-navy">North Maclean QLD 4280</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full z-0"></div>

                <h3 className="text-2xl font-bold text-navy mb-6 relative z-10">Send us a message</h3>

                {isSuccess ? (
                  <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center relative z-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                          placeholder="0000 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                        placeholder="ABC@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        {servicesData.map(service => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Map Embedded (Iframe Placeholder) */}
        <section className="h-[400px] w-full bg-gray-200 relative">
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=216%20Lance%20Road,%20North%20Maclean%20QLD%204280+(Astute%20Softcare)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="absolute inset-0 grayscale contrast-125 opacity-90"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default Contact;
