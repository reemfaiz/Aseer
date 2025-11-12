import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TextAnimationWrapper = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const words = children.split(" ");
  return (
    <>
      {words.map((word, wordIdx) => (
        <span key={wordIdx}>
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wordIdx * 0.05) + (charIdx * 0.02),
              }}
            >
              {char}
            </motion.span>
          ))}
          <span> </span>
        </span>
      ))}
    </>
  );
};

export default function TryNero() {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#161644] overflow-hidden relative flex flex-col">
      {/* Background blur effect */}
      <div className="absolute left-1/2 top-[460px] -translate-x-1/2 w-[1072px] h-[972px] rounded-full bg-[#333366] blur-[152px] opacity-100 mix-blend-screen pointer-events-none" />

      {/* Decorative rounded rectangles */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -left-[68px] top-[388px] w-[318px] h-[170px] rotate-90 rounded-[117px] border-[23px] border-[#DADCF5]"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-[1318px] top-[440px] w-[637px] h-[226px] rounded-[117px] border-[23px] border-[#848FE1]"
      />

        {/* Header with Back Button */}
        <header className={`${isSticky ? 'fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-12 backdrop-blur-md bg-[#161644]/80 shadow-lg' : 'relative pt-12 px-4 md:px-12'} transition-all duration-300`}>
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-aseer-light-purple transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-montserrat font-medium">Home</span>
            </button>
          </div>
        </header>

      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center px-4 md:px-8">
        <div className="w-full">
          {/* CTA Section - Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-[1400px] mx-auto"
          >
            {/* Card Container */}
            <div className="relative rounded-[20px] border border-[#848FE1] bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              {/* Background Image with Mask */}
              <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-black/80 via-black/40 to-black/10" />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f74c934ecd3cd2c80919d30e3e14b2a06d9256da?width=2240"
                  alt=""
                  className="w-full h-full object-cover opacity-23 rounded-[10px]"
                />
              </div>

              {/* Inner Gradient Effect */}
              <div className="absolute left-0 -top-[410px] w-full h-[850px] rounded-[10px] pointer-events-none"
                style={{
                  background: 'radial-gradient(60% 50% at 50% 32.8%, rgba(255, 255, 255, 0.40) 7.35%, rgba(52, 52, 116, 0.40) 24.23%, rgba(132, 143, 225, 0.40) 36%, rgba(46, 36, 148, 0.40) 49.99%, rgba(0, 0, 0, 0.00) 100%)'
                }}
              />

              {/* Content */}
              <div className="relative px-6 md:px-24 py-12 md:py-14">
                <div className="flex flex-col items-center gap-8 md:gap-10">
                  {/* Coming Soon Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-[#848FE1] font-bold text-2xl md:text-3xl"
                  >
                    <TextAnimationWrapper delay={0.6}>COMING SOON</TextAnimationWrapper>
                  </motion.div>
                    {/* Nero Title */}
                    <motion.h2
                      className="text-white text-center font-['Poppins'] text-4xl md:text-5xl font-bold"
                    >
                      <TextAnimationWrapper delay={0.8}>Nero</TextAnimationWrapper>
                    </motion.h2>
                  {/* Nero title removed per request */}

                </div>

                {/* Decorative Star */}
                <motion.div
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="absolute right-6 md:right-12 top-6 md:top-8"
                >
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0L38.4601 22.0867L52.5 4.68911L44.4532 25.5468L65.3109 17.5L47.9133 31.5399L70 35L47.9133 38.4601L65.3109 52.5L44.4532 44.4532L52.5 65.3109L38.4601 47.9133L35 70L31.5399 47.9133L17.5 65.3109L25.5468 44.4532L4.68911 52.5L22.0867 38.4601L0 35L22.0867 31.5399L4.68911 17.5L25.5468 25.5468L17.5 4.68911L31.5399 22.0867L35 0Z" fill="#AEB7FA"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
