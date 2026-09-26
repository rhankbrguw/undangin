import { useEffect, useRef } from 'react';
import { TESTIMONIAL_STRINGS } from '../../constants/strings';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testi-header', 
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to('.testi-marquee', {
          xPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to('.testi-marquee', {
          xPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-20 border-y border-border/50 bg-muted/20 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none -z-10 will-change-transform" />
      
      <h3 className="testi-header text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground mb-10 text-center will-change-transform">
        {TESTIMONIAL_STRINGS.title}
      </h3>
      
      <div className="w-full flex overflow-hidden mask-horizontal">
        <div className="testi-marquee flex gap-12 md:gap-24 whitespace-nowrap px-10 will-change-transform">
          {[...TESTIMONIAL_STRINGS.logos, ...TESTIMONIAL_STRINGS.logos].map((logo, i) => (
            <span key={i} className="text-xl md:text-3xl font-black text-foreground/20 hover:text-foreground/40 transition-colors duration-500 cursor-default select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .mask-horizontal {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </section>
  );
}
