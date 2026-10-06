import { motion } from 'framer-motion';

const PageHeader = ({ title, breadcrumb, bgImage }) => {
  return (
    <div className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Optional Background Image */}
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url('${bgImage}')` }}
          ></div>
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-0"></div>
        </>
      )}

      {/* Background Pattern (shows when no image, or overlays subtly) */}
      <div className={`absolute inset-0 z-0 ${bgImage ? 'opacity-30' : 'opacity-10'}`}>
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-gold to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-gold to-transparent transform -skew-x-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center space-x-2 text-gray-300 font-medium"
        >
          <span>Home</span>
          <span className="text-gold">/</span>
          <span className="text-white">{breadcrumb || title}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
