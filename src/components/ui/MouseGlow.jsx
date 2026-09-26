import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MouseGlow() {
  const mouseX = useMotionValue(-1000); 
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 200); 
      mouseY.set(e.clientY - 200);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ x: smoothX, y: smoothY }}
      className="hidden md:block fixed top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_70%)] pointer-events-none z-[90] will-change-transform"
    />
  );
}
