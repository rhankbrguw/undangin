import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Testimonials } from './components/sections/Testimonials';
import { DashboardPreview } from './components/sections/DashboardPreview';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { ThemeProvider } from './components/theme-provider';
import { MouseGlow } from './components/ui/MouseGlow';

function App() {
  useEffect(() => {
    // Reset scroll position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="undangin-ui-theme">
      <div className="relative min-h-screen font-sans antialiased text-foreground bg-background selection:bg-primary/20 selection:text-primary transition-colors duration-300 z-0 overflow-x-hidden">
        <MouseGlow />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Testimonials />
          <DashboardPreview />
          <HowItWorks />
          <Features />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
