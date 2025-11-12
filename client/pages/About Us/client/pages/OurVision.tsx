import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurVision() {
  return (
    <div className="bg-brand-dark min-h-screen overflow-x-hidden overflow-y-auto">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-8 h-12" viewBox="0 0 32 47" fill="none">
                <path d="M10.6028 11.6428L0.183105 11.5742L0.120948 23.2002L10.5406 23.2689L10.6028 11.6428Z" fill="#848FE1"/>
                <path d="M31.4236 11.8926L21.0039 11.824L20.9417 23.45L31.3614 23.5186L31.4236 11.8926Z" fill="#848FE1"/>
                <path d="M31.3621 23.3894L20.9424 23.3207L20.8802 34.9468L31.2999 35.0154L31.3621 23.3894Z" fill="#848FE1"/>
                <path d="M20.8777 34.9228L31.2973 34.9914L31.2352 46.6174C28.4717 46.5992 25.8279 45.3633 23.8855 43.1815C21.943 40.9997 20.8609 38.0509 20.8773 34.9836L20.8777 34.9196L20.8777 34.9228Z" fill="#848FE1"/>
                <path d="M22.1916 23.329L10.4771 23.2518L10.4149 34.8778L22.1294 34.955L22.1916 23.329Z" fill="#848FE1"/>
                <path d="M11.5314 0.0744211L11.4693 11.7004L0.171485 11.626L0.171827 11.562C0.180361 10.0424 0.481026 8.53977 1.05663 7.13989C1.63224 5.74001 2.47152 4.47037 3.52648 3.40352C4.58144 2.33668 5.83141 1.49355 7.20495 0.922322C8.57849 0.351096 10.0487 0.0629721 11.5314 0.0744211Z" fill="#848FE1"/>
                <path d="M21.1187 0.148586L10.699 0.0799561L10.6368 11.706L21.0565 11.7746L21.1187 0.148586Z" fill="#848FE1"/>
                <path d="M31.4832 0.212331L31.4159 12.7896L20.9991 12.721L20.9995 12.6517C21.0173 9.33347 22.132 6.15836 24.0987 3.82488C26.0653 1.4914 28.7226 0.190687 31.4861 0.208889L31.4832 0.212331Z" fill="#848FE1"/>
                <path d="M10.5408 23.2564L0.121094 23.1878L0.0589363 34.8138L10.4786 34.8825L10.5408 23.2564Z" fill="#848FE1"/>
                <path d="M0.0622559 34.7559L10.4819 34.8246L10.4816 34.8886C10.4652 37.9558 9.35168 40.8903 7.38601 43.0463C5.42035 45.2023 2.76355 46.4033 8.12861e-05 46.3851L0.0622559 34.7559Z" fill="#848FE1"/>
              </svg>
            </motion.div>
          </Link>

          {/* Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8 lg:gap-16 px-8 py-3 rounded-full border border-brand-purple-light"
            style={{
              background: "linear-gradient(90deg, #848FE1 0%, #336 82.69%)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="text-white text-xs hover:opacity-80 transition-opacity">Home</Link>
            <Link href="/#about" className="text-white text-xs hover:opacity-80 transition-opacity">About Us</Link>
            <Link href="/vision" className="text-white text-xs hover:opacity-80 transition-opacity">Our Vision</Link>
            <a href="#product" className="text-white text-xs hover:opacity-80 transition-opacity">Our the product</a>
            <a href="#help" className="text-white text-xs hover:opacity-80 transition-opacity">Help</a>
          </motion.nav>

          {/* Contact Button */}
          <motion.a
            className="hidden md:flex px-6 py-3 rounded-full text-white text-xs gradient-radial-purple hover:scale-105 transition-transform contact-link"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aseerco8supprt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </motion.a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
        {/* Background wave overlay */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4b9d0bc01d3147709117d2da8ec0eb51%2Fad33659c33381eac40061641b81f19d65a13ad9f?format=webp&width=1600"
            alt=""
            className="w-full h-full object-cover mix-blend-screen"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header with Icon and Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-3 mb-6">
              <svg className="w-12 h-12" viewBox="0 0 47 47" fill="none">
                <g clipPath="url(#clip0_110_163)">
                  <path d="M24.3692 6.30311C24.3692 8.01883 24.3692 9.73592 24.3692 11.4516C24.3692 12.2796 24.0574 12.5791 23.224 12.5941C20.5722 12.643 18.0306 13.6639 16.0818 15.4629C14.1329 17.2619 12.9124 19.7139 12.6519 22.3533C12.065 28.0724 15.7416 33.0861 21.3558 34.2327C27.1049 35.4078 33.1194 31.3418 34.1747 25.5506C34.2796 24.9318 34.3492 24.3076 34.3831 23.681C34.4348 22.9388 34.7235 22.6066 35.4479 22.6052C38.9311 22.5989 42.4139 22.5989 45.8961 22.6052C46.5593 22.6052 46.9487 22.9715 46.9474 23.5298C46.946 24.0881 46.5688 24.4258 45.8907 24.4299C44.8381 24.4299 43.7842 24.4435 42.7316 24.4299C42.2604 24.4231 42.0657 24.6164 42.0262 25.0849C41.3699 33.0072 35.6944 39.7475 28.0335 41.7179C27.1906 41.9344 26.6106 41.4877 26.729 40.7129C26.808 40.1996 27.2029 40.0484 27.6277 39.9395C29.1953 39.5492 30.6928 38.918 32.0668 38.0685C36.747 35.1396 39.439 30.9211 40.1771 25.4525C40.1988 25.2837 40.2002 25.1135 40.2138 24.9432C40.2424 24.5797 40.0777 24.3986 39.71 24.3986C38.7078 24.3986 37.7056 24.3986 36.7034 24.3986C36.2949 24.3986 36.1478 24.6055 36.1002 24.9895C35.8109 27.5575 34.7346 29.9732 33.0187 31.9056C30.8849 34.3171 28.2105 35.7401 25.0119 36.1431C24.5149 36.2058 24.3611 36.4155 24.3638 36.9043C24.3788 39.8088 24.3638 42.7146 24.3638 45.6191C24.3638 45.773 24.3706 45.9269 24.3638 46.078C24.3216 46.6404 23.9703 46.9999 23.4719 46.9999C22.9735 46.9999 22.5977 46.6376 22.5854 46.0766C22.5636 45.0921 22.5772 44.1063 22.5759 43.1204C22.5759 42.3252 22.5255 42.2707 21.7248 42.1822C13.793 41.3094 7.42711 35.7741 5.49896 28.0792C5.48126 28.0139 5.45403 27.943 5.44177 27.8831C5.33692 27.3289 5.58475 26.8782 6.05862 26.7611C6.5747 26.6331 7.0118 26.8973 7.16158 27.4705C7.5769 29.1264 8.17059 30.7127 9.06794 32.1697C12.0364 37.001 16.3557 39.723 21.9781 40.3943C22.3594 40.4406 22.5718 40.284 22.5745 39.8973C22.5745 38.8256 22.5745 37.7554 22.5745 36.6851C22.5745 36.2698 22.3022 36.1935 21.9713 36.1513C18.9293 35.7578 16.3312 34.4642 14.2233 32.2364C12.4272 30.3534 11.2695 27.9528 10.9144 25.3749C10.7782 24.4217 10.7782 24.4217 9.80598 24.4217H1.14156C0.393996 24.4217 -0.00769986 24.0908 -0.00089142 23.4958C0.00591702 22.9007 0.407612 22.593 1.16607 22.5903C2.11925 22.5903 3.07243 22.5903 4.02561 22.5903C4.88484 22.5903 4.92433 22.5535 5.00195 21.682C5.38867 17.3695 7.06626 13.6222 9.99798 10.4481C12.3025 7.94885 15.2485 6.12987 18.5153 5.18925C19.2071 4.98363 19.7136 5.20559 19.877 5.76933C20.0254 6.29494 19.7014 6.74565 19.0423 6.95399C12.4722 9.03465 8.47697 13.4601 7.02269 20.1855C6.89469 20.7819 6.85384 21.3961 6.77895 22.002C6.72993 22.4105 6.90831 22.6093 7.32362 22.6066C8.2768 22.6066 9.22998 22.5957 10.1832 22.6066C10.6325 22.6134 10.8027 22.4105 10.864 21.9761C11.5694 16.4872 15.4829 12.2156 20.8779 11.035C21.2239 10.9506 21.5757 10.8923 21.9304 10.8607C22.4152 10.8294 22.6113 10.6224 22.6031 10.1213C22.5868 7.1814 22.5949 4.24151 22.5949 1.30163C22.5949 0.43696 22.8795 0.0161977 23.4691 0.00258086C24.0846 -0.0123977 24.3869 0.411087 24.3869 1.30844L24.3692 6.30311Z" fill="white"/>
                  <path d="M34.1951 16.6942C32.4154 16.2354 31.2498 17.1028 30.1101 18.3623C28.2691 20.3803 26.2824 22.2636 24.3556 24.204C24.2406 24.3292 24.1149 24.444 23.9798 24.5471C23.807 24.6748 23.5928 24.7334 23.3791 24.7112C23.1655 24.689 22.9678 24.5878 22.825 24.4273C22.6758 24.2836 22.5844 24.0902 22.5681 23.8837C22.5518 23.6772 22.6117 23.4719 22.7365 23.3066C22.8268 23.1838 22.929 23.0702 23.0415 22.9675C25.4436 20.5424 27.8524 18.124 30.2408 15.6852C30.4375 15.4678 30.5538 15.1896 30.5703 14.8968C30.6044 13.6577 30.5948 12.4172 30.5812 11.1781C30.5742 10.9841 30.6093 10.7909 30.684 10.6118C30.7588 10.4327 30.8714 10.2719 31.0142 10.1404C33.0513 8.11789 35.082 6.08988 37.1064 4.05643C37.4278 3.73371 37.7723 3.52128 38.2393 3.72009C38.7064 3.9189 38.8004 4.30426 38.7949 4.76451C38.7813 5.76671 38.7867 6.76891 38.7949 7.76975C38.7949 8.3403 38.9488 8.48872 39.5248 8.49144C40.5093 8.49144 41.4938 8.50234 42.4783 8.49144C42.9589 8.49144 43.3702 8.58676 43.5526 9.07833C43.7229 9.53722 43.5145 9.86403 43.1782 10.1949C41.1493 12.1803 39.1358 14.1792 37.1377 16.1918C36.7905 16.5417 36.4283 16.7297 35.9272 16.7024C35.3512 16.6697 34.7725 16.6942 34.1951 16.6942ZM32.3364 12.7835C32.3364 13.4153 32.3528 13.8402 32.3364 14.2636C32.3146 14.7307 32.542 14.9064 32.9805 14.9023C33.8288 14.9023 34.6772 14.9104 35.5255 14.8927C35.7065 14.8935 35.8822 14.8314 36.0225 14.7171C37.2335 13.527 38.4313 12.3246 39.616 11.11C39.7522 10.9738 39.8625 10.6688 39.7957 10.553C39.7045 10.3937 39.4363 10.2807 39.2307 10.2576C38.8221 10.214 38.4136 10.2494 38.0051 10.2439C37.2807 10.2344 36.9417 9.90079 36.9308 9.18727C36.946 8.81464 36.9415 8.44147 36.9171 8.06932C36.8872 7.84464 36.781 7.51648 36.623 7.45248C36.4651 7.38848 36.1437 7.54235 35.9871 7.69486C35.1238 8.53502 34.3299 9.45144 33.4312 10.2507C32.5843 11.0051 32.0491 11.8112 32.3364 12.7835Z" fill="white"/>
                  <path d="M23.4528 31.0547C19.4875 31.0547 16.1582 27.9228 15.9376 23.9971C15.8167 22.068 16.4419 20.1662 17.6837 18.685C18.9256 17.2039 20.6893 16.2567 22.6099 16.0394C22.7787 16.0203 22.9476 15.9931 23.1164 15.9835C23.8218 15.9427 24.2589 16.2559 24.2943 16.8101C24.3297 17.3643 23.9212 17.6788 23.2349 17.7932C22.4587 17.9226 21.6485 18.056 20.9432 18.3815C18.5221 19.5021 17.2666 22.2527 17.8984 24.8536C18.2044 26.1098 18.9258 27.2259 19.9456 28.0208C20.9654 28.8157 22.2238 29.2428 23.5168 29.2328C26.665 29.1933 28.9499 26.9465 29.1759 23.6498C29.2045 23.2413 29.2849 22.875 29.677 22.6612C30.3211 22.3113 31.0387 22.7824 31.0142 23.5681C30.9162 26.395 29.6757 28.5737 27.2451 30.0402C26.1018 30.729 24.7872 31.0807 23.4528 31.0547Z" fill="white"/>
                </g>
              </svg>
              <h1 className="font-aboreto text-5xl md:text-6xl text-white uppercase tracking-tight" style={{ WebkitTextStroke: '1px white' }}>
                Our Vision
              </h1>
            </div>
            <p className="text-white font-poppins text-lg md:text-xl">Smart decisions start here</p>
          </motion.div>

          {/* Vision Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Card 1: Lead the middle east */}
            <motion.div
              className="rounded-2xl border border-brand-purple-light p-8 md:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(119deg, rgba(26, 26, 74, 0.30) 23.34%, rgba(132, 143, 225, 0.30) 45.1%), #161644',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <p className="text-white font-poppins text-xl md:text-2xl leading-relaxed">
                  Lead the middle<br />
                  east in ai powered decision-making
                </p>
              </div>
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-brand-purple-light flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -45 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
                  <path d="M18.0294 10.6061H23.3327M23.3327 10.6061V15.9094M23.3327 10.6061L10.6048 23.3341" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>

            {/* Card 2: Innovate intelligent systems */}
            <motion.div
              className="rounded-2xl border border-brand-purple-light p-8 md:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(119deg, rgba(26, 26, 74, 0.30) 23.34%, rgba(132, 143, 225, 0.30) 45.1%), #161644',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <p className="text-white font-poppins text-xl md:text-2xl leading-relaxed mb-20">
                  Innovate intelligent systems by<br />
                  integrating analytics,innovation,<br />
                  and governance
                </p>
                <h3 className="text-white font-sk-modernist text-3xl md:text-4xl">Instant Ideation</h3>
              </div>
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-brand-purple-light flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -45 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
                  <path d="M18.0294 10.6061H23.3327M23.3327 10.6061V15.9094M23.3327 10.6061L10.6048 23.3341" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Card 3: Drive sustainable growth - Full Width */}
          <motion.div
            className="rounded-2xl border border-brand-purple-light p-8 md:p-10 relative overflow-hidden"
            style={{
              background: '#161644',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative z-10">
              <p className="text-white font-poppins text-xl md:text-2xl leading-relaxed">
                Drive sustainable<br />
                growth and long-term impact across industries
              </p>
            </div>
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-brand-purple-light flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -45 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
                <path d="M18.0294 10.6061H23.3327M23.3327 10.6061V15.9094M23.3327 10.6061L10.6048 23.3341" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
