import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import { faqData } from '../utils/constants';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>FAQ | Allarewellcare Disability Support</title>
        <meta name="description" content="Find answers to common questions about our disability support services, NDIS funding, and how we can help you." />
      </Helmet>

      <main>
        <PageHeader
          title="Frequently Asked Questions"
          bgImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-24 bg-gray-light min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Search Bar */}
            <div className="mb-12 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-none shadow-md focus:ring-2 focus:ring-gold focus:outline-none text-lg text-navy"
              />
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                  >
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gold flex-shrink-0"
                      >
                        <FaChevronDown />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  No questions found matching your search.
                </div>
              )}
            </div>

            {/* Still have questions */}
            <div className="mt-16 text-center bg-navy rounded-2xl p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold rounded-full mix-blend-multiply opacity-20 transform translate-x-10 -translate-y-10"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Still have questions?</h3>
              <p className="text-gray-300 mb-6 relative z-10">If you cannot find the answer to your question in our FAQ, you can always contact us directly.</p>
              <a href="/contact" className="btn-secondary inline-block relative z-10">Contact Support Team</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
