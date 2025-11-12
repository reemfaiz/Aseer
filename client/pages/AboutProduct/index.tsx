import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

export default function AboutProduct() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#161644] overflow-hidden relative">
      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fce5cc3e3ce1f4e97b565e3d7a63a4ab0%2F3e131be7e56e4865b9407683073ea9d5?format=webp&width=800"
        alt="Aseer Logo"
        className="fixed top-5 left-3 sm:left-5 md:left-8 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain"
      />

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

      {/* Main Content */}
      <main className="relative px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.h1
            className="text-white text-center font-['Aboreto'] text-4xl md:text-5xl lg:text-[64px] font-normal mt-8 md:mt-16 mb-12 md:mb-16"
            style={{ WebkitTextStroke: '1px white' }}
          >
            <TextAnimationWrapper delay={0.3}>ABOUT THE PRODCUT</TextAnimationWrapper>
          </motion.h1>

          {/* CTA Section - Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-[1120px] mx-auto mb-8"
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
                  {/* Nero Title */}
                  <motion.h2
                    className="text-white text-center font-['Poppins'] text-4xl md:text-5xl font-bold"
                  >
                    <TextAnimationWrapper delay={0.8}>Nero</TextAnimationWrapper>
                  </motion.h2>

                  {/* Description */}
                  <p className="text-white text-center font-['Poppins'] text-base md:text-xl font-normal leading-[29.6px] max-w-[986px]">
                    <TextAnimationWrapper delay={1}>
                      Innovate intelligent systems Nero is the first smart product by Aseer an integrated AI system powered by four specialized intelligent agents that work in harmony to manage risk, finance, market insights, and governance. It empowers businesses and individuals to analyze smarter, decide faster, and act confidently, all through one seamless and intelligent experience.
                    </TextAnimationWrapper>
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => navigate('/coming-soon')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    whileHover={{ scale: 1.05, gap: 20 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-3 rounded-full text-white font-['Poppins'] text-[15px] hover:opacity-90 transition-all cursor-pointer"
                    style={{
                      background: 'radial-gradient(129.81% 50% at 50% 50%, #848FE1 0%, #336 100%)',
                    }}
                  >
                    <span><TextAnimationWrapper delay={1.4}>Make your decision</TextAnimationWrapper></span>
                    <motion.svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                    >
                      <path d="M15.7071 8.07112C16.0976 7.6806 16.0976 7.04743 15.7071 6.65691L9.34315 0.292946C8.95262 -0.0975784 8.31946 -0.0975784 7.92893 0.292946C7.53841 0.68347 7.53841 1.31664 7.92893 1.70716L13.5858 7.36401L7.92893 13.0209C7.53841 13.4114 7.53841 14.0446 7.92893 14.4351C8.31946 14.8256 8.95262 14.8256 9.34315 14.4351L15.7071 8.07112ZM0 7.36401L0 8.36401L15 8.36401V7.36401V6.36401L0 6.36401L0 7.36401Z" fill="white"/>
                    </motion.svg>
                  </motion.button>
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

          {/* Bottom Tagline */}
          <div className="text-center font-['Poppins'] text-2xl md:text-[32px] leading-[29.6px] mt-16 md:mt-24">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-[#848FE1] font-bold text-3xl md:text-[40px]"
            >
              <TextAnimationWrapper delay={1.6}>Nero</TextAnimationWrapper>
            </motion.span>
            <span className="text-white font-bold">, </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-white font-normal"
            >
              <TextAnimationWrapper delay={1.8}>Smarter choices, every time</TextAnimationWrapper>
            </motion.span>
          </div>
        </div>
      </main>
    </div>
  );
}
