import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegCalendarAlt, FaStar, FaUsers, FaChartLine, FaHome } from 'react-icons/fa';
import { FiHeart, FiUsers, FiShield, FiTrendingUp } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-0 lg:aspect-[21/10] flex flex-col justify-center pt-24 lg:pt-16 font-['Inter',_sans-serif]">

      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://res.cloudinary.com/defqgygsf/image/upload/v1791280014/Caring_Nurse_with_Elderly_Woman_1_ncfd4o.png"
          alt="Premium Disability Support"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Subtle Gradient Overlay to make image highly visible */}
        <div className="absolute inset-0 bg-white/10 lg:bg-gradient-to-r lg:from-white/50 lg:via-transparent lg:to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-10 pb-48 lg:pb-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left relative z-20">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[3rem] sm:text-[4rem] md:text-[4.5rem] leading-[1.05] font-bold text-[#0A101D] mb-4 tracking-tight font-['Playfair_Display',_serif]"
          >
            Empowering <br />
            <span className="italic text-[#FDCB58] drop-shadow-sm">Independence</span> <br />
            Through Care
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-700 font-medium mb-6 max-w-lg leading-relaxed"
          >
            Personalised support services designed to help you live confidently, achieve your goals, and enjoy greater independence every day.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
          >
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-full bg-white border border-gray-200 text-[#0A101D] font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <FaRegCalendarAlt className="w-5 h-5 text-gray-700" />
              <span>Book a Consultation</span>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10 pt-2"
          >
            {/* Avatars & Lives Supported */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://i.pravatar.cc/100?img=4" alt="Client" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover" />
              </div>
              <div className="text-left">
                <div className="text-[#0A101D] font-bold text-lg leading-tight">34+</div>
                <div className="text-gray-600 text-sm font-medium">Lives Supported</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

            {/* Stars & Satisfaction */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-[#FDCB58] w-5 h-5" />
                  ))}
                </div>
                <div className="text-[#0A101D] font-bold text-lg leading-tight">4.9/5</div>
              </div>
              <div className="text-gray-600 text-sm font-medium">Client Satisfaction</div>
            </div>

          </motion.div>

        </div>

        {/* RIGHT COLUMN: Floating Cards over the Image */}
        <div className="hidden lg:block w-[40%] relative min-h-[600px] z-20">

          {/* Cursive Text */}
          {/* <div className="absolute top-10 right-0 transform rotate-[-8deg] z-20">
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');`}
            </style>
            <span
              className="text-4xl text-gray-800 leading-tight block drop-shadow-md"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Care<br />Support<br />Independence
            </span>
            <svg className="w-24 h-4 text-[#FDCB58] mt-1" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 15C30 5 70 5 98 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div> */}
        </div>
      </div>

      {/* BOTTOM BANNER (Glassmorphism overlap) */}
      <div className="absolute bottom-0 translate-y-1/2 left-0 w-full px-4 sm:px-8 lg:px-12 z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-[1440px] mx-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 lg:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 lg:divide-x divide-gray-200">

            {/* Item 1 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 lg:px-4">
              <div className="w-14 h-14 rounded-full bg-[#FEF3C7] text-[#FBBF24] flex items-center justify-center flex-shrink-0">
                <FiHeart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A101D] text-sm md:text-base">Personalised Support</h3>
                <p className="text-gray-500 text-xs md:text-sm">Tailored to your unique goals</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 lg:px-4">
              <div className="w-14 h-14 rounded-full bg-[#F3E8FF] text-[#A855F7] flex items-center justify-center flex-shrink-0">
                <FiUsers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A101D] text-sm md:text-base">Qualified Care Team</h3>
                <p className="text-gray-500 text-xs md:text-sm">Compassionate & experienced</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 lg:px-4">
              <div className="w-14 h-14 rounded-full bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center flex-shrink-0">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A101D] text-sm md:text-base">NDIS Focused</h3>
                <p className="text-gray-500 text-xs md:text-sm">Supporting a more independent you</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 lg:px-4">
              <div className="w-14 h-14 rounded-full bg-[#FCE7F3] text-[#EC4899] flex items-center justify-center flex-shrink-0">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A101D] text-sm md:text-base">Live • Achieve • Belong</h3>
                <p className="text-gray-500 text-xs md:text-sm">Brighter tomorrows together</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
