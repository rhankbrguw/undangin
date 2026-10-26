import { useEffect, useRef } from "react";
import { CTA_STRINGS } from "../../constants/strings";
import { Button } from "../ui/button";
import { FloralAccent } from "../ui/FloralAccent";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { scale: 0.95, opacity: 0, y: 60 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 px-6 max-w-6xl mx-auto w-full"
    >
      <div className="cta-content rounded-[2.5rem] bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40 will-change-transform">
        {/* Wedding Accents Inside the CTA Box */}
        <FloralAccent
          className="top-[-30%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] opacity-30"
          type="flower"
          colorClass="text-foreground dark:text-foreground"
        />
        <FloralAccent
          className="bottom-[-30%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-20"
          type="leaf"
          colorClass="text-foreground dark:text-foreground"
        />

        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/2 mix-blend-overlay pointer-events-none" />

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 relative z-10 drop-shadow-md">
          {CTA_STRINGS.title}
        </h2>
        <p className="text-primary-foreground/90 text-base md:text-xl max-w-2xl mx-auto mb-10 relative z-10 font-medium">
          {CTA_STRINGS.subtitle}
        </p>
        <Button
          variant="secondary"
          className="h-14 px-10 text-lg font-bold gap-2 hover:scale-[1.05] transition-transform relative z-10 cursor-pointer rounded-xl shadow-xl text-primary"
        >
          {CTA_STRINGS.button} <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
}
