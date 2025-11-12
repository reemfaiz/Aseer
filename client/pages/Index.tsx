import HeroSection from '@/components/HeroSection';
import ProductFeatures from '@/components/ProductFeatures';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-aseer-purple/30 to-aseer-purple/30">
      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fce5cc3e3ce1f4e97b565e3d7a63a4ab0%2F90dcd7a3055a4912a12e4e1ef1cfb135?format=webp&width=800"
        alt="Aseer Logo"
        className="fixed top-5 left-3 sm:left-5 md:left-8 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain"
      />

      <HeroSection />
      <ProductFeatures />
      <CTASection />
      <Footer />
    </div>
  );
}
