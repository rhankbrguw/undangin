import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { APP_STRINGS } from '../../constants/strings';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloralAccent } from '../ui/FloralAccent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroBackground = () => (
  <>
    <FloralAccent className="top-[-5%] left-[-15%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-40" type="flower" />
    <FloralAccent className="bottom-[-10%] right-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] opacity-30" type="leaf" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
      <div className="hero-bg w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_60%)] rounded-full will-change-transform" />
    </div>
  </>
);

const HeroText = () => (
  <>
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero-text inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary font-semibold backdrop-blur-sm shadow-sm will-change-transform"
    >
      <Zap size={16} className="mr-2 fill-primary" />
      {APP_STRINGS.heroBadge}
    </motion.div>
    <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-sm will-change-transform">
      {APP_STRINGS.heroTitle}
    </h1>
    <p className="hero-text text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed will-change-transform">
      {APP_STRINGS.heroSubtitle}
    </p>
  </>
);

const HeroButtons = () => (
  <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 will-change-transform">
    <Button size="lg" className="w-full sm:w-auto gap-2 text-md h-12 px-8 cursor-pointer shadow-lg shadow-primary/30 hover:scale-[1.03] transition-transform bg-primary text-primary-foreground">
      {APP_STRINGS.ctaPrimary} <ArrowRight size={18} />
    </Button>
    <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 cursor-pointer bg-background/50 backdrop-blur-md hover:bg-muted border-border/50 shadow-md">
      {APP_STRINGS.ctaSecondary}
    </Button>
  </div>
);

export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      gsap.fromTo('.hero-text', { y: 80, opacity: 0, scale: 0.95, rotateX: -20 }, { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1.5, stagger: 0.2, ease: 'expo.out', scrollTrigger: { trigger: heroRef.current, start: 'top 80%', toggleActions: 'play reverse play reverse' } });
      mm.add("(min-width: 768px)", () => {
        gsap.to('.hero-bg', { y: 200, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-16 overflow-hidden perspective-[2000px]">
      <HeroBackground />
      <div className="max-w-4xl text-center space-y-6 z-10">
        <HeroText />
        <HeroButtons />
      </div>
    </section>
  );
}
