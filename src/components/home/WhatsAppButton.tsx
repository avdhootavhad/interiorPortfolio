import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+919876543210"; // Replace with actual number
  const whatsappMessage = "Hello! I'm interested in your interior design services. Could you tell me more about your Heritage & Fusion design approach?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Floating Animation Background Pulse */}
      <motion.div
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-30 w-16 h-16"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-25" />
      </motion.div>

      {/* Main Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40"
        initial={{ opacity: 0, scale: 0, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-4 py-3 shadow-2xl transition-all duration-300 group"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 2 }}
          >
            <MessageCircle className="w-5 h-5" />
          </motion.div>
          <motion.span
            className="text-sm font-semibold hidden group-hover:inline"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Chat on WhatsApp
          </motion.span>
        </motion.div>
      </motion.a>
    </>
  );
};

export default WhatsAppButton;
