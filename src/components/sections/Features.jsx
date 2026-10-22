import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { FEATURES_STRINGS, APP_STRINGS } from '../../constants/strings';
import { FloralAccent } from '../ui/FloralAccent';
import { WifiOff, Zap, HeartHandshake, LayoutDashboard } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  f1: <WifiOff className="text-primary mb-4" size={32} />,
  f2: <Zap className="text-primary mb-4" size={32} />,
  f3: <HeartHandshake className="text-primary mb-4" size={32} />,
  f4: <LayoutDashboard className="text-primary mb-4" size={32} />,
};

export function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.fromTo('.feature-header', 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );

      gsap.utils.toArray('.feature-card-item').forEach((card) => {
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
        gsap.to('.feat-bg', {
          y: 200,
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
    <section id="features" ref={containerRef} className="py-20 md:py-32 px-6 relative">
      <FloralAccent className="top-[20%] right-[-15%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] opacity-30" type="flower" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="feature-header inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-extrabold tracking-widest uppercase backdrop-blur-md will-change-transform">
            {APP_STRINGS.featuresBadge}
          </div>
          <h2 className="feature-header text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground drop-shadow-sm will-change-transform">{APP_STRINGS.featuresTitle}</h2>
          <p className="feature-header text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed will-change-transform">
            {APP_STRINGS.featuresDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="feat-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_60%)] -z-10 pointer-events-none will-change-transform" />
          
          {FEATURES_STRINGS.map((feature) => (
            <Card key={feature.id} className="feature-card-item border border-border/40 shadow-xl shadow-foreground/5 hover:shadow-primary/20 transition-all duration-500 bg-card/40 backdrop-blur-2xl cursor-pointer group hover:-translate-y-3 relative overflow-hidden will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5 opacity-40 pointer-events-none" />
              <CardHeader className="relative z-10">
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-md">
                  {iconMap[feature.id]}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
                  {feature.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
