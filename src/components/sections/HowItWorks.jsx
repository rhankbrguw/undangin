import { useEffect, useRef } from 'react';
import { HOW_IT_WORKS_STRINGS } from '../../constants/strings';
import { FileSpreadsheet, QrCode, ScanFace } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = [
  <FileSpreadsheet key="i1" className="text-primary w-10 h-10 md:w-12 md:h-12" />,
  <QrCode key="i2" className="text-primary w-10 h-10 md:w-12 md:h-12" />,
  <ScanFace key="i3" className="text-primary w-10 h-10 md:w-12 md:h-12" />
];

export function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.fromTo('.hiw-header', 
        { y: 50, opacity: 0, rotateX: -10 },
        {
          y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: {
            trigger: '.hiw-header-container',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );

      gsap.utils.toArray('.hiw-card').forEach((card) => {
        gsap.fromTo(card, 
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

      mm.add("(min-width: 768px)", () => {
        gsap.to('.hiw-bg', {
          y: 200,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
        
        gsap.to('.hiw-parallax-mid', {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 relative perspective-[2000px]">
      <div className="hiw-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_60%)] pointer-events-none -z-10 will-change-transform" />
      
      <div className="hiw-header-container max-w-6xl mx-auto text-center mb-16 md:mb-24 relative z-10">
        <h2 className="hiw-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground drop-shadow-sm will-change-transform">
          {HOW_IT_WORKS_STRINGS.title}
        </h2>
        <p className="hiw-header text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed will-change-transform">
          {HOW_IT_WORKS_STRINGS.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {HOW_IT_WORKS_STRINGS.steps.map((step, idx) => (
          <div 
            key={idx} 
            className={`hiw-card rounded-3xl border border-foreground/20 dark:border-foreground/10 bg-card/40 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-primary/20 transition-all duration-500 overflow-hidden relative group will-change-transform ${idx === 1 ? 'md:mt-16 hiw-parallax-mid' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5 opacity-50 pointer-events-none" />
            
            <div className="p-6 sm:p-8 md:p-10 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
