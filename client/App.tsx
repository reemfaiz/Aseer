import "./global.css";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/About Us";
import AboutProduct from "./pages/AboutProduct";
import ComingSoon from "./pages/ComingSoon";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurVision from "./pages/OUR VISION";
import TryNero from "./pages/TryNero";

const queryClient = new QueryClient();

const getContactLink = () => {
  const isMobile = /iPhone|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const email = 'aseerco8supprt@gmail.com';
  const subject = 'Contact%20Request';

  if (isMobile) {
    return `mailto:${email}?subject=${subject}`;
  }
  return `https://mail.google.com/mail/?view=cm&to=${email}&subject=${subject}`;
};

const App = () => {
  const contactLink = getContactLink();

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <a
          href={contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-6 right-4 sm:right-6 md:right-8 z-40 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity hover:scale-105 inline-block contact-link"
          style={{
            background: 'linear-gradient(90deg, #848FE1 0%, #336 100%)',
            boxShadow: '0 4px 12px rgba(132, 143, 225, 0.4)',
          }}
        >
          Contact us
        </a>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/try-nero" element={<TryNero />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-product" element={<AboutProduct />} />
          <Route path="/our-vision" element={<OurVision />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
