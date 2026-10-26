import { useEffect, useRef } from 'react';
import { APP_STRINGS } from '../../constants/strings';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const DashboardMockupWindow = () => (
  <div className="w-full h-[350px] md:h-[600px] bg-background/20 rounded-xl overflow-hidden flex flex-col border border-border/20 relative z-10">
    <div className="h-14 border-b border-border/20 bg-foreground/5 flex items-center px-6 gap-4 backdrop-blur-sm">
      <div className="flex gap-2">
        <div className="w-3.5 h-3.5 rounded-full bg-destructive shadow-sm opacity-80" />
        <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground shadow-sm opacity-80" />
        <div className="w-3.5 h-3.5 rounded-full bg-primary shadow-sm opacity-80" />
      </div>
      <div className="h-7 w-40 sm:w-64 bg-foreground/10 rounded-md mx-auto" />
    </div>
    <div className="flex-1 flex p-4 md:p-6 gap-4 md:gap-6">
      <div className="hidden md:block w-56 space-y-4">
        <div className="h-10 bg-primary/20 rounded-md w-full border border-primary/20" />
        <div className="h-10 bg-foreground/5 rounded-md w-3/4" />
        <div className="h-10 bg-foreground/5 rounded-md w-5/6" />
        <div className="h-10 bg-foreground/5 rounded-md w-4/6" />
      </div>
      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="h-24 md:h-32 bg-primary/15 rounded-xl border border-primary/20" />
          <div className="h-24 md:h-32 bg-foreground/5 rounded-xl border border-border/10" />
          <div className="h-24 md:h-32 bg-foreground/5 rounded-xl border border-border/10 hidden md:block" />
        </div>
        <div className="h-48 md:h-64 bg-foreground/5 rounded-xl border border-border/10" />
      </div>
    </div>
  </div>
);

export function DashboardPreview() {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const rotateX = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [10, -10]);
  const rotateY = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-10, 10]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      gsap.fromTo('.mockup-enter', { y: 150, opacity: 0, scale: 0.9, rotateX: 10 }, { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1.5, stagger: 0.2, ease: 'expo.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play reverse play reverse' } });
      mm.add("(min-width: 768px)", () => {
        gsap.to('.dash-bg', { y: 250, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.dash-mockup-parallax', { y: -100, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if(typeof window !== 'undefined' && window.innerWidth >= 768) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    }
  };

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove} className="py-16 md:py-32 px-6 relative overflow-hidden perspective-[2500px]">
      <div className="dash-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,hsl(var(--primary)/0.15)_0%,transparent_60%)] -z-10 pointer-events-none will-change-transform" />
      <div className="max-w-6xl mx-auto w-full text-center mb-16 z-10 relative">
        <h2 className="mockup-enter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground drop-shadow-sm will-change-transform">
          {APP_STRINGS.dashboardTitle}
        </h2>
        <p className="mockup-enter text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto will-change-transform">
          {APP_STRINGS.dashboardSubtitle}
        </p>
      </div>
      <div className="dash-mockup-parallax max-w-5xl mx-auto w-full relative z-10 will-change-transform">
        <motion.div style={{ rotateX, rotateY }} className="mockup-enter relative rounded-2xl border border-foreground/10 bg-card/40 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-2 md:p-4 mx-0 sm:mx-4 z-10 overflow-hidden will-change-transform">
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent opacity-40 pointer-events-none" />
          <DashboardMockupWindow />
        </motion.div>
      </div>
    </section>
  );
}
