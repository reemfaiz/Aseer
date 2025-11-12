import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const foundersRef = useRef<HTMLDivElement>(null);
  const foundersInView = useInView(foundersRef, { once: true });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Founders animation variants: container will stagger children as user scrolls
  const foundersContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const founderItem = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#161644] min-h-screen overflow-x-hidden overflow-y-auto flex flex-col pl-px">
      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fce5cc3e3ce1f4e97b565e3d7a63a4ab0%2F3e131be7e56e4865b9407683073ea9d5?format=webp&width=800"
        alt="Aseer Logo"
        className="fixed top-5 left-3 sm:left-5 md:left-8 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain"
      />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-0 px-3 sm:px-6 md:px-8 lg:px-12" ref={heroRef}>
        <div className="max-w-7xl mx-auto relative flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-4 sm:gap-6 md:gap-8 items-start">
            {/* About Us Card */}
            <motion.div
              className="rounded-2xl border border-[#DADCF5] p-6 sm:p-8 md:p-12 relative overflow-hidden h-auto lg:h-[324px]"
              style={{
                background: 'radial-gradient(122.33% 368.39% at 82.65% 30.41%, #336 24.52%, #848FE1 93.27%)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Blur circle decorations */}
              <div
                className="absolute top-8 sm:top-12 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#DADCF5] opacity-60"
                style={{ filter: 'blur(33px)' }}
              />
              <div
                className="absolute top-1/2 left-1/3 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#DADCF5] opacity-40"
                style={{ filter: 'blur(16px)' }}
              />

              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-aboreto text-white mb-4 sm:mb-6 uppercase"
                style={{ WebkitTextStroke: '1px white' }}
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Us
              </motion.h1>

              <motion.p
                className="text-white font-aboreto text-sm md:text-base leading-[28px] mb-8 max-w-[672px]"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Aseer is a Saudi tech company redefining the future of smart management through artificial
                intelligence. We design advanced digital solutions that connect financial analytics, governance, and
                risk management, empowering faster and more data-driven decisions. At Aseer, we believe technology is not
                just a tool — it's a strategic partner in building a smarter, more adaptive future for businesses in the
                Kingdom and beyond.
              </motion.p>

            </motion.div>

            {/* Side Card */}
            <motion.div
              className="rounded-2xl bg-white p-6 flex flex-col items-center justify-between h-auto lg:h-[324px] shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4b9d0bc01d3147709117d2da8ec0eb51%2Fce62edd6554f40d3b7637fbbf49bb55b?format=webp&width=800"
                alt="Biometric security"
                className="w-full h-40 object-cover rounded-2xl border border-[#DADCF5] mb-4"
              />
              <p className="text-[#161644] text-center font-aboreto text-sm md:text-base leading-relaxed capitalize">
                smart decisions<br />intelligent<br />management for<br />tomorrow
              </p>
            </motion.div>

            {/* Explore button under blue card (spans first column) */}
            <motion.div className="lg:col-start-1 mt-4 lg:mt-6 flex" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <motion.button className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-poppins" style={{ background: 'radial-gradient(129.81% 50% at 50% 50%, #848FE1 0%, #336 100%)' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Explore Our Solutions</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Social Media Icons */}
          <motion.div className="fixed right-4 md:right-8 top-1/3 flex flex-col gap-4 z-40">
            <motion.a
              href="https://x.com/Aseercompany?t=vgIo7JbUUtqlupCHA-WrbA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
                <path d="M20.2379 14.3983L32.8973 0H29.8985L18.9017 12.4993L10.1252 0H0L13.2747 18.903L0 34H2.9988L14.6041 20.7975L23.8748 34H34M4.08113 2.21269H8.68813L29.8962 31.896H25.2881" fill="white"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/aseer-company/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              style={{ transform: 'translateY(-10px) translateX(-6px)' }}
            >
              <span className="text-white font-instrument text-2xl">in</span>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aseercompany.sa?igsh=MTZsazIyM3Jhd2xpbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none">
                <path d="M17.5 3.15625C22.1725 3.15625 22.7267 3.17375 24.5729 3.25833C29.3154 3.47417 31.5306 5.72438 31.7465 10.4317C31.831 12.2765 31.8471 12.8306 31.8471 17.5031C31.8471 22.177 31.8296 22.7298 31.7465 24.5746C31.5292 29.2777 29.3198 31.5323 24.5729 31.7481C22.7267 31.8327 22.1754 31.8502 17.5 31.8502C12.8275 31.8502 12.2733 31.8327 10.4285 31.7481C5.67438 31.5308 3.47083 29.2704 3.255 24.5731C3.17042 22.7283 3.15292 22.1756 3.15292 17.5017C3.15292 12.8292 3.17188 12.2765 3.255 10.4302C3.47229 5.72438 5.68167 3.47271 10.4285 3.25687C12.2748 3.17375 12.8275 3.15625 17.5 3.15625ZM17.5 0C12.7473 0 12.1523 0.0204167 10.2856 0.105C3.93021 0.396667 0.398125 3.92292 0.106458 10.2842C0.0204167 12.1523 0 12.7473 0 17.5C0 22.2527 0.0204167 22.8492 0.105 24.7158C0.396667 31.0713 3.92292 34.6033 10.2842 34.895C12.1523 34.9796 12.7473 35 17.5 35C22.2527 35 22.8492 34.9796 24.7158 34.895C31.0654 34.6033 34.6063 31.0771 34.8935 24.7158C34.9796 22.8492 35 22.2527 35 17.5C35 12.7473 34.9796 12.1523 34.895 10.2856C34.6092 3.93563 31.0785 0.398125 24.7173 0.106458C22.8492 0.0204167 22.2527 0 17.5 0ZM17.5 8.51375C12.5373 8.51375 8.51375 12.5373 8.51375 17.5C8.51375 22.4627 12.5373 26.4877 17.5 26.4877C22.4627 26.4877 26.4863 22.4642 26.4863 17.5C26.4863 12.5373 22.4627 8.51375 17.5 8.51375ZM17.5 23.3333C14.2785 23.3333 11.6667 20.7229 11.6667 17.5C11.6667 14.2785 14.2785 11.6667 17.5 11.6667C20.7215 11.6667 23.3333 14.2785 23.3333 17.5C23.3333 20.7229 20.7215 23.3333 17.5 23.3333Z" fill="white"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Short intro and Meet the Experts badge (moved per diff) */}
      <div className="px-4 md:px-12 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
          <button
            onClick={() => foundersRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-3 rounded-full text-white font-poppins shadow-lg"
            style={{ background: 'linear-gradient(90deg,#848FE1,#336)', boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}
          >
            Pull under ↓
          </button>

          <div className="text-white text-[18px] leading-7 max-w-[672px] mt-8">We believe that leadership begins with an idea and is built with passion. Learn about who started the journey.</div>

          <div className="inline-block rounded-full px-6 py-3 bg-gradient-to-br from-[#848FE1] to-[#336] text-white">Meet the Experts</div>
        </div>
      </div>

      {/* Founders Section */}
      <section className="px-4 md:px-12 pt-0 pb-32 mt-32" ref={foundersRef}>
        <div className="max-w-7xl mx-auto">
          {/* Founders image with overlayed FOUNDERS text */}
          <div className="relative mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4b9d0bc01d3147709117d2da8ec0eb51%2F1b5d3dd1cefe42b0aa876d98f2ad68bc?format=webp&width=1600"
              alt="Founders team"
              className="w-full h-auto rounded-2xl object-cover"
              style={{ border: '1px solid rgba(255,255,255,1)' }}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-6 pointer-events-none">
              <motion.h2
                className="font-aboreto text-4xl md:text-6xl lg:text-7xl text-center px-6 py-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ color: '#848FE1', transform: 'translateY(12px)' }}
              >
                FOUNDERS
              </motion.h2>
            </div>
          </div>

          {/* Founder Cards */}
          <motion.div className="space-y-12" variants={foundersContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {/* Shahad Alanazi */}
            <motion.div
              variants={founderItem}
              className="rounded-2xl border border-white p-8 md:p-12 shadow-2xl overflow-hidden relative"
              style={{ background: 'radial-gradient(122.33% 368.39% at 82.65% 30.41%, #336 24.52%, #848FE1 93.27%)' }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(132, 143, 225, 0.5)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />

              <div className="mb-3 relative z-10">
                <div className="text-3xl md:text-4xl font-aboreto text-white uppercase">Shahad Alanazi</div>
                <div className="text-[29px] text-[#161644] font-poppins" style={{ margin: '4px auto 0 20px', padding: '8px 0', lineHeight: '43.5px' }}>Founder & CEO</div>
              </div>

              <p className="text-white font-poppins text-sm md:text-base leading-relaxed relative z-10">
                A Saudi entrepreneur and AI engineer driven by a vision to inspire the next generation of innovators.
                As the founder and CEO of Aseer, Shahad leads the development of advanced AI systems that empower
                smarter financial and business decisions proving that Saudi innovation can shape the future of
                intelligent technology.
                <br /><br />
                Her mission goes beyond building technology it's about building hope showing Saudi youth that with
                determination, creativity, and belief in their potential, they can design a brighter, smarter, and
                more impactful future for their nation.
              </p>
            </motion.div>

            {/* Asaeel Lardhi */}
            <motion.div
              variants={founderItem}
              className="rounded-2xl border border-white p-8 md:p-12 shadow-2xl overflow-hidden relative"
              style={{ background: 'radial-gradient(122.33% 368.39% at 82.65% 30.41%, #336 24.52%, #848FE1 93.27%)' }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(132, 143, 225, 0.5)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />

              <div className="mb-3 relative z-10">
                <div className="text-3xl md:text-4xl font-aboreto text-white uppercase">Asaeel Lardhi</div>
                <div className="text-[29px] text-[#161644] font-poppins" style={{ margin: '4px auto 0 20px' }}>CO-Founder &amp; COO</div>
              </div>

              <p className="text-white font-poppins text-sm md:text-base leading-relaxed relative z-10">
                As Co-Founder &amp; COO at Aseer, Asaeel Lardhi leads operations and executive management with a strategic vision that balances efficiency and creativity. She contributes to building a dynamic work environment that fosters innovation and transforms ideas into tangible achievements.
                <br /><br />
                Asaeel believes that success begins with teamwork and smart planning, striving to cultivate a culture of excellence and sustainability that drives the company toward continuous growth and a positive impact on the future of technology.
              </p>
            </motion.div>

            {/* Batool Alhur */}
            <motion.div
              variants={founderItem}
              className="rounded-2xl border border-white p-8 md:p-12 shadow-2xl overflow-hidden relative"
              style={{ background: 'radial-gradient(122.33% 368.39% at 82.65% 30.41%, #336 24.52%, #848FE1 93.27%)' }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(132, 143, 225, 0.5)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />

              <div className="mb-3 relative z-10">
                <div className="text-3xl md:text-4xl font-aboreto text-white uppercase">Batool Alhur</div>
                <div className="text-[29px] text-[#161644] font-poppins" style={{ margin: '4px auto 0 20px' }}>CO-Founder & CCO</div>
              </div>

              <p className="text-white font-poppins text-sm md:text-base leading-relaxed relative z-10">
                An Entrepreneur and Computer Engineer, specialized in Graphic Design and User Experience (UX/UI) with over five years of experience in creative direction, design, and
                advertising campaigns.
                As the Head of Design and Advertising, she leads innovative projects that merge creativity, technology, and strategy to deliver meaningful and lasting impact.
                <br /><br />
                She believes that the beauty of design lies in simplicity and experience, and is constantly driven to create innovative solutions that enhance and simplify the user journey.
                Her vision goes beyond design — she aims to uncover the unique essence within every individual and empower a new generation of creators and leaders to shape the future.
                <br /><br />
                A mentor, speaker, and design enthusiast, she is passionate about technology, innovation, and leaving a lasting mark through every project she leads.
                Her life motto:
                "Strive, try, and experiment — even if the result isn't perfect, the effort itself is success."
              </p>
            </motion.div>

            {/* Reem FAIZ */}
            <motion.div
              variants={founderItem}
              className="rounded-2xl border border-white p-8 md:p-12 shadow-2xl overflow-hidden relative"
              style={{ background: 'radial-gradient(122.33% 368.39% at 82.65% 30.41%, #336 24.52%, #848FE1 93.27%)' }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(132, 143, 225, 0.5)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />

              <div className="mb-3 relative z-10">
                <div className="text-3xl md:text-4xl font-aboreto text-white uppercase">Reem Faiz</div>
                <div className="text-[29px] text-[#161644] font-poppins" style={{ margin: '4px auto 0 20px' }}>CO-Founder &amp; CTO</div>
              </div>

              <p className="text-white font-poppins text-sm md:text-base leading-relaxed relative z-10">
                Software Engineer driven by a deep passion for technology and innovation.<br />
                As Co-Founder &amp; CTO at Aseer, Reem leads the development of advanced systems and intelligent solutions that blend creativity with efficiency to deliver impactful digital experiences.
                <br /><br />
                Her vision goes beyond writing code — she strives to build a future where technology serves humanity and empowers the next generation of innovators to make a real difference in the tech world.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Stars */}
        <div className="fixed bottom-20 right-20 pointer-events-none">
          <motion.svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity },
            }}
          >
            <path d="M7.54984 3.89956C4.89548 3.38993 4.53289 3.02735 4.02355 0.372962C4.01567 0.332074 3.99383 0.295201 3.96172 0.268684C3.92962 0.242166 3.88929 0.227661 3.84764 0.227661C3.80603 0.227661 3.76567 0.242166 3.73357 0.268684C3.70147 0.295201 3.67961 0.332074 3.67175 0.372962C3.1624 3.02735 2.79982 3.38993 0.145297 3.89956C0.104419 3.90737 0.0675469 3.92922 0.0410274 3.96128C0.0145081 3.99339 0 4.03368 0 4.07529C0 4.11694 0.0145081 4.15723 0.0410274 4.18934C0.0675469 4.22141 0.104419 4.24325 0.145297 4.25106C2.79981 4.76055 3.1624 5.12283 3.67175 7.7775C3.67964 7.81835 3.70152 7.85521 3.73362 7.88169C3.76572 7.90818 3.80603 7.92267 3.84764 7.92267C3.88925 7.92267 3.92958 7.90818 3.96168 7.88169C3.99379 7.85521 4.01563 7.81835 4.02355 7.7775C4.53289 5.12283 4.89548 4.76055 7.54984 4.25106C7.59074 4.24325 7.62759 4.22141 7.65412 4.18934C7.68064 4.15723 7.69516 4.11694 7.69516 4.07529C7.69516 4.03368 7.68064 3.99339 7.65412 3.96128C7.62759 3.92922 7.59074 3.90737 7.54984 3.89956Z" fill="white"/>
          </motion.svg>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32"></div>
    </div>
  );
}
