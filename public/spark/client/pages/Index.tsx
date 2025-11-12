import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#161644] overflow-hidden relative">
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

      {/* Header/Navigation - Sticky */}
      <header className={`${isSticky ? 'fixed top-0 left-0 right-0 z-50 pt-4 px-4 backdrop-blur-md bg-[#161644]/80 shadow-lg' : 'relative pt-12 px-4'} transition-all duration-300`}>
        <nav className="max-w-[1299px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.603 11.6431L0.18335 11.5745L0.121192 23.2005L10.5409 23.2691L10.603 11.6431Z" fill="#848FE1"/>
              <path d="M31.4236 11.8928L21.0039 11.8242L20.9417 23.4502L31.3614 23.5189L31.4236 11.8928Z" fill="#848FE1"/>
              <path d="M31.3623 23.3894L20.9426 23.3208L20.8805 34.9468L31.3001 35.0155L31.3623 23.3894Z" fill="#848FE1"/>
              <path d="M20.8777 34.9229L31.2973 34.9915L31.2352 46.6175C28.4717 46.5993 25.8279 45.3634 23.8855 43.1816C21.943 40.9999 20.8609 38.051 20.8773 34.9837L20.8777 34.9197L20.8777 34.9229Z" fill="#848FE1"/>
              <path d="M22.1916 23.3291L10.4771 23.252L10.4149 34.878L22.1294 34.9551L22.1916 23.3291Z" fill="#848FE1"/>
              <path d="M11.5314 0.0744211L11.4693 11.7004L0.171485 11.626L0.171827 11.562C0.180361 10.0424 0.481026 8.53977 1.05663 7.13989C1.63224 5.74001 2.47152 4.47037 3.52648 3.40352C4.58144 2.33668 5.83141 1.49355 7.20495 0.922322C8.57849 0.351096 10.0487 0.0629721 11.5314 0.0744211Z" fill="#848FE1"/>
              <path d="M21.1187 0.148708L10.699 0.0800781L10.6368 11.7061L21.0565 11.7747L21.1187 0.148708Z" fill="#848FE1"/>
              <path d="M31.4832 0.212453L31.4159 12.7897L20.9991 12.7211L20.9995 12.6518C21.0173 9.33359 22.132 6.15848 24.0987 3.825C26.0653 1.49152 28.7226 0.190809 31.4861 0.209011L31.4832 0.212453Z" fill="#848FE1"/>
              <path d="M10.5408 23.2566L0.121094 23.188L0.0589363 34.814L10.4786 34.8826L10.5408 23.2566Z" fill="#848FE1"/>
              <path d="M0.0622559 34.7561L10.4819 34.8247L10.4816 34.8887C10.4652 37.956 9.35168 40.8905 7.38601 43.0465C5.42035 45.2025 2.76355 46.4035 8.12861e-05 46.3853L0.0622559 34.7561Z" fill="#848FE1"/>
            </svg>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full border border-white/20"
            style={{
              background: 'linear-gradient(90deg, #848FE1 0%, #333366 82.69%)',
            }}
          >
            <a href="/" className="text-white font-['Poppins'] text-xs hover:opacity-80 transition-opacity">Home</a>
            <a href="#about" className="text-white font-['Poppins'] text-xs hover:opacity-80 transition-opacity">About Us</a>
            <a href="#vision" className="text-white font-['Poppins'] text-xs hover:opacity-80 transition-opacity">Our Vision</a>
            <a href="#product" className="text-white font-['Poppins'] text-xs hover:opacity-80 transition-opacity">Our the product</a>
            <a href="#help" className="text-white font-['Poppins'] text-xs hover:opacity-80 transition-opacity">Help</a>
          </motion.div>

          {/* Contact Button */}
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block px-8 py-3 rounded-full text-white font-['Poppins'] text-xs hover:opacity-90 transition-opacity contact-link"
            style={{
              background: 'radial-gradient(129.81% 50% at 50% 50%, #848FE1 0%, #336 100%)',
            }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aseerco8supprt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </motion.a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.h1
            className="text-white text-center font-['Aboreto'] text-4xl md:text-5xl lg:text-[64px] font-normal mb-12 md:mb-16"
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
                      Innovate intelligent systems Nero is the first smart product by Aseer an integrated AI system powered by four specialized intelligent agents that work in harmony to manage risk, finance, market insights, and governance. It empowers businesses and individuals to analyze smarter, decide faster, and act confidently, all through one seamless and intelligent experience.by
                    </TextAnimationWrapper>
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href="#decision"
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
                  </motion.a>
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
