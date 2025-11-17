import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

function FeatureCard({ title, subtitle, description, icon, delay = 0 }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
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
  }, [delay]);

  const bgColors = [
    'rgba(192, 197, 240, 0.56)',
    'rgba(255, 255, 255, 1)',
    'rgba(192, 197, 240, 0.56)',
  ];
  const bgColor = bgColors[delay / 200] || 'rgba(192, 197, 240, 0.56)';

  return (
    <div
      ref={ref}
      className={`rounded-3xl p-8 shadow-lg transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 flex items-center justify-center bg-aseer-purple/10 rounded-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-poppins font-bold text-aseer-dark">
          {title}
        </h3>
        <p className="text-sm font-poppins font-medium text-aseer-dark/70">
          {subtitle}
        </p>
        <p className="text-xs font-poppins text-aseer-dark/60">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ProductFeatures() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-poppins font-extrabold text-aseer-dark text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Product Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <FeatureCard
            title="Seamless"
            subtitle="Integration"
            description="Works smoothly with your workflow system"
            delay={0}
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#848FE1" strokeWidth="2" fill="none" />
                <path d="M24 12V24L32 28" stroke="#848FE1" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          />
          <FeatureCard
            title="Risk Management"
            subtitle="Engine"
            description="Identify threats and build resilience instantly"
            delay={200}
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8L28 20H40L30 28L34 40L24 32L14 40L18 28L8 20H20L24 8Z" stroke="#848FE1" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          <FeatureCard
            title="Smart Data"
            subtitle="Analysis"
            description="Turn Complexity data into actionable insights"
            delay={400}
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="20" width="8" height="18" stroke="#848FE1" strokeWidth="2" fill="none" />
                <rect x="20" y="12" width="8" height="26" stroke="#848FE1" strokeWidth="2" fill="none" />
                <rect x="30" y="16" width="8" height="22" stroke="#848FE1" strokeWidth="2" fill="none" />
              </svg>
            }
          />
        </div>

      </div>
    </section>
  );
}
