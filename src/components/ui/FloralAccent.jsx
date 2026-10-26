import { useEffect, useRef } from 'react';
import { Flower2, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FloralAccent({ className = "", type = "flower", colorClass = "text-primary/15 dark:text-primary/10" }) {
  const Icon = type === "flower" ? Flower2 : Leaf;
  const accentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(accentRef.current, {
        rotate: type === "flower" ? 360 : -360,
        duration: 180,
        repeat: -1,
        ease: 'none'
      });
      
      gsap.matchMedia().add("(min-width: 768px)", () => {
        gsap.to(accentRef.current, {
          yPercent: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: accentRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        });
      });
    }, accentRef);
    return () => ctx.revert();
  }, [type]);

  return (
    <div 
      ref={accentRef} 
      className={`absolute pointer-events-none z-0 will-change-transform ${colorClass} ${className}`}
    >
      <Icon className="w-full h-full stroke-[0.3] md:stroke-[0.5] mix-blend-multiply dark:mix-blend-screen drop-shadow-2xl" />
    </div>
  );
}
