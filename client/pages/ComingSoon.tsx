import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f1447] to-[#1a1f5e] flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Coming Soon
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-aseer-purple hover:bg-aseer-purple/80 text-white font-semibold transition-all hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-aseer-purple to-[#336] border border-aseer-light-purple text-white font-semibold transition-all hover:scale-105"
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
