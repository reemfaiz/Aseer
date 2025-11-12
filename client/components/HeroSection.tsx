import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-aseer-purple/30 to-aseer-purple/30 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8" style={{ minHeight: '100vh' }}>
      <div className="max-w-[1440px] mx-auto px-0 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`flex flex-col justify-center items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-extrabold text-white leading-tight sm:leading-snug lg:leading-normal">
              <br className="hidden sm:block" />
              <div className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Welcome to</div>
              <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">Aseer !</div>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-montserrat font-bold text-white mt-6 sm:mt-8">
              One system . Total clarity
            </p>
            <button
              onClick={() => navigate('/try-nero')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-aseer-purple to-[#336] border border-aseer-light-purple text-white font-montserrat font-semibold text-sm sm:text-base hover:scale-110 hover:shadow-2xl transition-all duration-300 mt-6 sm:mt-8 w-full sm:w-auto text-center"
            >
              Try Nero
            </button>
          </div>

          <div className={`relative w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1a0434040e4443baa014b330cc175222%2Fb1c9e0090339444ba94855a092f4d93b?format=webp&width=1436"
              alt="Aseer Analytics Dashboard"
              className="rounded-lg border border-white/10 w-full h-auto"
            />

            {/* Overlapping Explore Features Card */}
            <div className="relative md:absolute md:top-2/3 md:left-0 md:right-0 w-full md:w-fit px-0 md:px-0 mt-6 md:mt-0">
              {/* Dark card with content */}
              <div className="rounded-2xl shadow-[0_4px_97px_-12px_rgba(0,0,0,0.25)] p-6 sm:p-8 backdrop-blur-sm border border-aseer-dark/50 w-full md:w-96" style={{ backgroundColor: '#161644' }}>
                <div>
                  <div className="font-medium text-xl sm:text-2xl lg:text-3xl text-white">
                    Explore
                  </div>
                  <h2 className="text-gray-400 font-inter font-medium">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#848FE1' }}>
                      Features
                    </div>
                  </h2>
                  <div className="flex flex-col gap-3 mt-4 sm:mt-6">
                    <button className="flex items-center gap-2 rounded-full border border-aseer-light-purple bg-aseer-purple text-aseer-dark font-inter text-xs sm:text-sm font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 w-full md:w-auto px-6 sm:px-10 py-2 sm:py-3 justify-center md:justify-start">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.54984 3.6719C4.89548 3.16227 4.53289 2.79969 4.02355 0.145301C4.01567 0.104412 3.99383 0.0675397 3.96172 0.0410225C3.92962 0.0145053 3.88929 0 3.84764 0C3.80603 0 3.76567 0.0145053 3.73357 0.0410225C3.70147 0.0675397 3.67961 0.104412 3.67175 0.145301C3.1624 2.79969 2.79982 3.16227 0.145297 3.6719C0.104419 3.67971 0.0675469 3.70156 0.0410274 3.73362C0.0145081 3.76573 0 3.80602 0 3.84763C0 3.88928 0.0145081 3.92957 0.0410274 3.96168C0.0675469 3.99374 0.104419 4.01559 0.145297 4.0234C2.79981 4.53289 3.1624 4.89517 3.67175 7.54983C3.67964 7.59069 3.70152 7.62755 3.73362 7.65403C3.76572 7.68052 3.80603 7.695 3.84764 7.695C3.88925 7.695 3.92958 7.68052 3.96168 7.65403C3.99379 7.62755 4.01563 7.59069 4.02355 7.54983C4.53289 4.89517 4.89548 4.53289 7.54984 4.0234C7.59074 4.01559 7.62759 3.99374 7.65412 3.96168C7.68064 3.92957 7.69516 3.88928 7.69516 3.84763C7.69516 3.80602 7.68064 3.76573 7.65412 3.73362C7.62759 3.70156 7.59074 3.67971 7.54984 3.6719Z" fill="#181947"/>
                      </svg>
                      <div className="text-xs sm:text-xs font-semibold">The Minds Behind the Nission !</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
