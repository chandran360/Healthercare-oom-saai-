import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with actual WhatsApp number in international format without + or spaces
  const phoneNumber = '61433504551'; // Updated phone number without spaces, with country code for WhatsApp
  const defaultMessage = 'Hello Astute Softcare, I would like to know more about your disability support services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20, 
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
     
    </motion.a>
  );
};

export default WhatsAppButton;
