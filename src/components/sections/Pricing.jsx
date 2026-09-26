import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { PRICING_STRINGS, APP_STRINGS } from '../../constants/strings';
import { FloralAccent } from '../ui/FloralAccent';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.fromTo('.pricing-header', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: '.pricing-header-container', start: 'top 85%', toggleActions: 'play reverse play reverse' }
      });

      gsap.fromTo('.pricing-card', { y: 80, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: '.pricing-card', start: 'top 95%', toggleActions: 'play reverse play reverse' }
      });

      gsap.utils.toArray('.price-item').forEach((item) => {
        gsap.fromTo(item, { x: -30, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: item, start: 'top 95%', toggleActions: 'play reverse play reverse' }
        });
      });

      mm.add("(min-width: 768px)", () => {
        gsap.to('.price-bg', {
          y: 250,
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
    <section id="pricing" ref={containerRef} className="py-20 md:py-32 px-6 relative perspective-[2000px]">
      <FloralAccent className="bottom-[5%] left-[-15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] opacity-30" type="leaf" />
      
      <div className="price-bg absolute top-[-10%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_70%)] -z-10 pointer-events-none will-change-transform" />
      
      <div className="pricing-header-container max-w-6xl w-full mx-auto text-center mb-16 md:mb-20">
        <h2 className="pricing-header text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground drop-shadow-sm will-change-transform">{APP_STRINGS.pricingTitle}</h2>
        <p className="pricing-header text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed will-change-transform">
          {APP_STRINGS.pricingSubtitle}
        </p>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <Card className="pricing-card border border-foreground/20 dark:border-foreground/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] shadow-primary/20 bg-card/40 backdrop-blur-3xl relative overflow-hidden hover:shadow-primary/40 transition-all duration-500 group hover:-translate-y-2 will-change-transform">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent dark:from-primary/10 opacity-30 pointer-events-none" />
          
          <div className="absolute top-0 right-0 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-bold px-6 py-2 rounded-bl-2xl shadow-lg uppercase tracking-wider">
            {APP_STRINGS.pricingBadge}
          </div>
          
          <CardHeader className="text-center pt-14 relative z-10">
            <CardTitle className="text-6xl font-black text-foreground drop-shadow-sm group-hover:scale-105 transition-transform duration-500">
              {PRICING_STRINGS.price}
              <span className="text-xl font-semibold text-muted-foreground ml-2">{PRICING_STRINGS.period}</span>
            </CardTitle>
            <p className="text-sm font-medium text-muted-foreground mt-4">{PRICING_STRINGS.description}</p>
          </CardHeader>
          <CardContent className="pt-8 relative z-10">
            <ul className="space-y-5">
              {PRICING_STRINGS.features.map((feature, idx) => (
                <li key={idx} className="price-item flex items-center gap-4 text-foreground will-change-transform">
                  <div className="rounded-full bg-primary/20 p-1.5 border border-primary/30 shadow-sm">
                    <Check size={16} className="text-primary font-bold" />
                  </div>
                  <span className="font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pb-12 pt-8 relative z-10">
            <Button className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/30 cursor-pointer hover:scale-[1.03] transition-transform rounded-2xl bg-primary text-primary-foreground">
              {APP_STRINGS.pricingButton}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
