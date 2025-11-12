export default function Index() {
  return (
    <div className="min-h-screen bg-[#0b1233] relative overflow-hidden">
      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fce5cc3e3ce1f4e97b565e3d7a63a4ab0%2F3e131be7e56e4865b9407683073ea9d5?format=webp&width=800"
        alt="Aseer Logo"
        className="fixed top-5 left-3 sm:left-5 md:left-8 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain"
      />

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mb-12 md:mb-20 text-left mt-6 md:mt-12 md:ml-8 animate-entrance">
          {/* Logo Icon */}
          <div className="mb-3">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_110_163)">
                <path d="M24.3692 6.30311C24.3692 8.01883 24.3692 9.73592 24.3692 11.4516C24.3692 12.2796 24.0574 12.5791 23.224 12.5941C20.5722 12.643 18.0306 13.6639 16.0818 15.4629C14.1329 17.2619 12.9124 19.7139 12.6519 22.3533C12.065 28.0724 15.7416 33.0861 21.3558 34.2327C27.1049 35.4078 33.1194 31.3418 34.1747 25.5506C34.2796 24.9318 34.3492 24.3076 34.3831 23.681C34.4348 22.9388 34.7235 22.6066 35.4479 22.6052C38.9311 22.5989 42.4139 22.5989 45.8961 22.6052C46.5593 22.6052 46.9487 22.9715 46.9474 23.5298C46.946 24.0881 46.5688 24.4258 45.8907 24.4299C44.8381 24.4299 43.7842 24.4435 42.7316 24.4299C42.2604 24.4231 42.0657 24.6164 42.0262 25.0849C41.3699 33.0072 35.6944 39.7475 28.0335 41.7179C27.1906 41.9344 26.6106 41.4877 26.729 40.7129C26.808 40.1996 27.2029 40.0484 27.6277 39.9395C29.1953 39.5492 30.6928 38.918 32.0668 38.0685C36.747 35.1396 39.439 30.9211 40.1771 25.4525C40.1988 25.2837 40.2002 25.1135 40.2138 24.9432C40.2424 24.5797 40.0777 24.3986 39.71 24.3986C38.7078 24.3986 37.7056 24.3986 36.7034 24.3986C36.2949 24.3986 36.1478 24.6055 36.1002 24.9895C35.8109 27.5575 34.7346 29.9732 33.0187 31.9056C30.8849 34.3171 28.2105 35.7401 25.0119 36.1431C24.5149 36.2058 24.3611 36.4155 24.3638 36.9043C24.3788 39.8088 24.3638 42.7146 24.3638 45.6191C24.3638 45.773 24.3706 45.9268 24.3638 46.078C24.3216 46.6404 23.9703 46.9999 23.4719 46.9999C22.9735 46.9999 22.5977 46.6376 22.5854 46.0766C22.5636 45.0921 22.5772 44.1063 22.5759 43.1204C22.5759 42.3252 22.5255 42.2707 21.7248 42.1822C13.793 41.3094 7.42711 35.7741 5.49896 28.0792C5.48126 28.0139 5.45403 27.943 5.44177 27.8831C5.33692 27.3289 5.58475 26.8782 6.05862 26.7611C6.5747 26.6331 7.0118 26.8973 7.16158 27.4705C7.5769 29.1264 8.17059 30.7127 9.06794 32.1697C12.0364 37.001 16.3557 39.723 21.9781 40.3943C22.3594 40.4406 22.5718 40.284 22.5745 39.8973C22.5745 38.8256 22.5745 37.7554 22.5745 36.6851C22.5745 36.2698 22.3022 36.1935 21.9713 36.1513C18.9293 35.7578 16.3312 34.4642 14.2233 32.2364C12.4272 30.3534 11.2695 27.9528 10.9144 25.3749C10.7782 24.4217 10.7782 24.4217 9.80598 24.4217H1.14156C0.393996 24.4217 -0.00769986 24.0908 -0.00089142 23.4958C0.00591702 22.9007 0.407612 22.593 1.16607 22.5903C2.11925 22.5903 3.07243 22.5903 4.02561 22.5903C4.88484 22.5903 4.92433 22.5535 5.00195 21.682C5.38867 17.3695 7.06626 13.6222 9.99798 10.4481C12.3025 7.94885 15.2485 6.12987 18.5153 5.18925C19.2071 4.98363 19.7136 5.20559 19.877 5.76933C20.0254 6.29494 19.7014 6.74565 19.0423 6.95399C12.4722 9.03465 8.47697 13.4601 7.02269 20.1855C6.89469 20.7819 6.85384 21.3961 6.77895 22.002C6.72993 22.4105 6.90831 22.6093 7.32362 22.6066C8.2768 22.6066 9.22998 22.5957 10.1832 22.6066C10.6325 22.6134 10.8027 22.4105 10.864 21.9761C11.5694 16.4872 15.4829 12.2156 20.8779 11.035C21.2239 10.9506 21.5757 10.8923 21.9304 10.8607C22.4152 10.8294 22.6113 10.6224 22.6031 10.1213C22.5868 7.1814 22.5949 4.24151 22.5949 1.30163C22.5949 0.43696 22.8795 0.0161977 23.4691 0.00258086C24.0846 -0.0123977 24.3869 0.411087 24.3869 1.30844L24.3692 6.30311Z" fill="white"/>
                <path d="M34.1951 16.6942C32.4154 16.2354 31.2498 17.1028 30.1101 18.3623C28.2691 20.3803 26.2824 22.2636 24.3556 24.204C24.2406 24.3292 24.1149 24.444 23.9798 24.5471C23.807 24.6748 23.5928 24.7334 23.3791 24.7112C23.1655 24.689 22.9678 24.5878 22.825 24.4273C22.6758 24.2836 22.5844 24.0902 22.5681 23.8837C22.5518 23.6772 22.6117 23.4719 22.7365 23.3066C22.8268 23.1838 22.929 23.0702 23.0415 22.9675C25.4436 20.5424 27.8524 18.124 30.2408 15.6852C30.4375 15.4678 30.5538 15.1896 30.5703 14.8968C30.6044 13.6577 30.5948 12.4172 30.5812 11.1781C30.5742 10.9841 30.6093 10.7909 30.684 10.6118C30.7588 10.4327 30.8714 10.2719 31.0142 10.1405C33.0513 8.11789 35.082 6.08988 37.1064 4.05643C37.4278 3.73371 37.7723 3.52128 38.2393 3.72009C38.7064 3.9189 38.8004 4.30426 38.7949 4.76451C38.7813 5.76671 38.7867 6.76891 38.7949 7.76975C38.7949 8.3403 38.9488 8.48872 39.5248 8.49144C40.5093 8.49144 41.4938 8.50234 42.4783 8.49144C42.959 8.49144 43.3702 8.58676 43.5526 9.07833C43.7229 9.53722 43.5145 9.86403 43.1782 10.1949C41.1493 12.1803 39.1358 14.1792 37.1377 16.1918C36.7905 16.5417 36.4283 16.7297 35.9272 16.7024C35.3512 16.6697 34.7725 16.6942 34.1951 16.6942ZM32.3364 12.7835C32.3364 13.4153 32.3528 13.8402 32.3364 14.2636C32.3146 14.7307 32.542 14.9064 32.9805 14.9023C33.8288 14.9023 34.6772 14.9104 35.5255 14.8927C35.7065 14.8935 35.8822 14.8314 36.0225 14.7171C37.2335 13.527 38.4313 12.3246 39.616 11.11C39.7522 10.9738 39.8625 10.6688 39.7957 10.553C39.7045 10.3937 39.4363 10.2807 39.2306 10.2576C38.8221 10.214 38.4136 10.2494 38.0051 10.2439C37.2807 10.2344 36.9417 9.90079 36.9308 9.18727C36.946 8.81464 36.9415 8.44147 36.9171 8.06932C36.8872 7.84464 36.781 7.51648 36.623 7.45248C36.4651 7.38848 36.1437 7.54235 35.9871 7.69486C35.1238 8.53502 34.3299 9.45144 33.4312 10.2507C32.5843 11.0051 32.0491 11.8112 32.3364 12.7835Z" fill="white"/>
                <path d="M23.4528 31.0547C19.4875 31.0547 16.1582 27.9228 15.9376 23.9971C15.8167 22.068 16.4419 20.1662 17.6837 18.685C18.9256 17.2039 20.6893 16.2567 22.6099 16.0394C22.7787 16.0203 22.9476 15.9931 23.1164 15.9835C23.8218 15.9427 24.2589 16.2559 24.2943 16.8101C24.3297 17.3643 23.9212 17.6788 23.2349 17.7932C22.4587 17.9226 21.6485 18.056 20.9432 18.3815C18.5221 19.5021 17.2666 22.2527 17.8984 24.8536C18.2044 26.1098 18.9258 27.2259 19.9456 28.0208C20.9654 28.8157 22.2238 29.2428 23.5168 29.2328C26.665 29.1933 28.9499 26.9465 29.1759 23.6498C29.2045 23.2413 29.2849 22.875 29.677 22.6612C30.3211 22.3113 31.0387 22.7824 31.0142 23.5681C30.9162 26.395 29.6757 28.5737 27.2451 30.0402C26.1018 30.729 24.7872 31.0807 23.4528 31.0547Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_110_163">
                  <rect width="46.9455" height="47" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl font-normal text-white mb-3 tracking-tight animate-slide-up max-w-3xl"
            style={{ fontFamily: 'Aboreto, serif' }}
          >
            OUR VISION
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl font-normal animate-slide-up-delay max-w-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Smart decisions start here
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto justify-center items-center">
          {/* Card 1 - Top Left (Larger) */}
          <div className="vision-card group relative rounded-[20px] border border-[#848FE1] bg-gradient-to-br from-[#1a1a4a4d] via-[#848fe14d] to-[#161644] p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 animate-fade-in-up">
            <div className="relative h-full flex flex-col justify-between min-h-[120px]">
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Lead the middle<br />
                east in ai powered decision-making
              </p>
              
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#848FE1] flex items-center justify-center transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
                  <path d="M18.0294 10.6061H23.3327M23.3327 10.6061V15.9094M23.3327 10.6061L10.6048 23.3341" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Top Right (Larger) */}
          <div className="vision-card group relative rounded-[20px] border border-[#848FE1] bg-gradient-to-br from-[#1a1a4a4d] via-[#848fe14d] to-[#161644] p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 animate-fade-in-up-delay-1">
            <div className="relative h-full flex flex-col justify-between min-h-[120px]">
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Innovate intelligent systems by<br />
                integrating analytics,innovation,<br />
                and governance
              </p>
              
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#848FE1] flex items-center justify-center transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
                  <path d="M18.0294 10.6061H23.3327M23.3327 10.6061V15.9094M23.3327 10.6061L10.6048 23.3341" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 - Bottom (Full Width) */}
          <div className="md:col-span-2 vision-card group relative rounded-[20px] border border-[#848FE1] bg-[#161644] p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 animate-fade-in-up-delay-2">
            <div className="relative h-full flex flex-col justify-between min-h-[120px]">
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Drive sustainable<br />
                growth and long-term impact across industries
              </p>
              
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#848FE1] flex items-center justify-center transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
                  <path d="M18.0294 10.6061H23.3327M23.3327 10.6061V15.9094M23.3327 10.6061L10.6048 23.3341" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes logoSlide {
          from { transform: translateX(0); opacity: 0; }
          to { transform: translateX(12px); opacity: 1; }
        }

        @keyframes textEnter {
          from { opacity: 0; transform: translateY(18px) translateX(-8px); }
          to { opacity: 1; transform: translateY(0) translateX(0); }
        }

        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
        .animate-slide-up-delay { animation: slideUp 0.6s ease-out 0.2s both; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out 0.3s both; }
        .animate-fade-in-up-delay-1 { animation: fadeInUp 0.8s ease-out 0.5s both; }
        .animate-fade-in-up-delay-2 { animation: fadeInUp 0.8s ease-out 0.7s both; }

        .animate-entrance { animation: textEnter 0.9s cubic-bezier(.2,.9,.2,1) both; }

        .logo-animate { animation: logoSlide 0.9s cubic-bezier(.2,.9,.2,1) both; }

        .vision-card { backdrop-filter: blur(10px); }
      `}</style>
    </div>
  );
}
