import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-aseer-purple/30 to-aseer-purple/30">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-ibm font-bold text-white mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ready to get started?
        </h2>
        <button
          onClick={() => navigate('/try-nero')}
          className={`px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 rounded-full bg-gradient-to-b from-white to-aseer-light-purple text-aseer-dark font-ibm font-bold text-lg sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 hover:shadow-2xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } w-full sm:w-auto`}
        >
          Get started
        </button>
      </div>
    </section>
  );
}
