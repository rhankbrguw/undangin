import { useState, useEffect, useRef } from 'react';
import { FAQ_STRINGS } from '../../constants/strings';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.fromTo('.faq-header', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.faq-header-container', start: 'top 92%', toggleActions: 'play reverse play reverse' }
      });

      gsap.utils.toArray('.faq-item').forEach((item) => {
        gsap.fromTo(item, { y: 60, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: item, start: 'top 92%', toggleActions: 'play reverse play reverse' }
        });
      });

      mm.add("(min-width: 768px)", () => {
        gsap.to('.faq-bg', {
          y: -200,
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
    <section id="faq" ref={containerRef} className="py-20 md:py-32 px-6 max-w-4xl mx-auto w-full relative">
      <div className="faq-bg absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_0%,transparent_70%)] -z-10 pointer-events-none will-change-transform" />

      <div className="faq-header-container text-center mb-16">
        <h2 className="faq-header text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground drop-shadow-sm will-change-transform">
          {FAQ_STRINGS.title}
        </h2>
      </div>
      
      <div className="space-y-5">
        {FAQ_STRINGS.faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="faq-item border border-foreground/20 dark:border-foreground/10 rounded-2xl bg-card/40 backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:bg-card/60 hover:shadow-xl hover:shadow-foreground/5 cursor-pointer shadow-md relative will-change-transform" 
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/5 opacity-50 pointer-events-none" />
            
            <div className="flex justify-between items-center p-6 md:p-8 relative z-10">
              <h3 className="font-bold text-foreground text-base md:text-lg pr-4 leading-snug">{faq.q}</h3>
              <div className={`p-2 rounded-full transition-colors duration-300 ${openIdx === idx ? 'bg-primary/20' : 'bg-secondary/50'}`}>
                <ChevronDown className={`shrink-0 transition-transform duration-500 ${openIdx === idx ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
              </div>
            </div>
            <div className={`grid transition-all duration-500 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="p-6 pt-0 md:px-8 pb-8 text-muted-foreground leading-relaxed text-base relative z-10 font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
