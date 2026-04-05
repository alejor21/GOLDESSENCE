import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    bgText: 'ORIGEN',
    title: 'Nuestra Filosofía',
    desc: 'No somos una tienda más. Somos guías olfativos dedicados a elevar la perfumería a una experiencia sensorial completa en Colombia.',
    img: '/assets/perfume1.png',
  },
  {
    id: 2,
    bgText: 'ESENCIA',
    title: 'Selección Curada',
    desc: 'Seleccionamos minuciosamente fragancias de diseñador, árabes y nicho. Originalidad 100% garantizada en cada botella que ofrecemos.',
    img: '/assets/perfume2.png',
  },
  {
    id: 3,
    bgText: 'DECANT',
    title: 'Formato Accesible',
    desc: 'Mediante nuestros decants puros, te damos la libertad de probar y descubrir fragancias exclusivas antes de comprometerte con un frasco completo.',
    img: '/assets/perfume3.png',
  }
];

export default function ParallaxSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  
  // Parallax physics tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Depth mappings
  const bgX = useTransform(mouseXSpring, [-1, 1], [-20, 20]);
  const bgY = useTransform(mouseYSpring, [-1, 1], [-20, 20]);
  
  const textX = useTransform(mouseXSpring, [-1, 1], [-30, 30]);
  const textY = useTransform(mouseYSpring, [-1, 1], [-30, 30]);

  const bottleX = useTransform(mouseXSpring, [-1, 1], [-50, 50]);
  const bottleY = useTransform(mouseYSpring, [-1, 1], [-50, 50]);

  const glassX = useTransform(mouseXSpring, [-1, 1], [25, -25]); // Inverse for glass layer
  const glassY = useTransform(mouseYSpring, [-1, 1], [25, -25]);

  const fgX = useTransform(mouseXSpring, [-1, 1], [80, -80]); // Fast inverse for front particles
  const fgY = useTransform(mouseYSpring, [-1, 1], [80, -80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center bg-[#050505]"
    >
      
      {/* ── BACKGROUND GLOW LAYER ── */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute w-[120%] h-[120%] pointer-events-none opacity-40 overflow-hidden"
      >
        <div className="absolute top-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#C9A84C]/20 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#8A713C]/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] rounded-full bg-white/5 blur-[100px]" />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* ── BEHIND-BOTTLE BIG TEXT ── */}
          <motion.div 
            style={{ x: textX, y: textY }}
            className="absolute z-0 flex items-center justify-center w-full pointer-events-none select-none"
          >
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.04 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="font-serif text-7xl md:text-[18rem] text-white tracking-[0.08em] uppercase whitespace-nowrap"
            >
              {SLIDES[active].bgText}
            </motion.h2>
          </motion.div>

          {/* ── CENTRAL SUBJECT (BOTTLE/IMAGE) ── */}
          <motion.div 
            style={{ x: bottleX, y: bottleY }}
            className="absolute z-20 w-[105%] h-[105%] flex items-center justify-center pointer-events-none"
          >
             <motion.img 
               initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)', rotate: -2 }}
               animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               src={SLIDES[active].img} 
               alt={SLIDES[active].title} 
               className="w-full h-full object-contain p-10 md:p-24 drop-shadow-2xl"
             />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── LIQUID GLASS CARD (HISTORY/STORY) ── */}
      <motion.div 
        style={{ x: glassX, y: glassY }}
        className="absolute z-30 md:left-[10%] bottom-[15%] md:bottom-[20%] w-[90%] md:w-[480px] liquid-glass p-10 md:p-14 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
              <p className="text-[#C9A84C] text-[10px] font-medium tracking-[0.4em] uppercase mb-4 opacity-80">
                GoldEssence
              </p>
              <h3 className="font-serif font-medium text-4xl text-white mb-6 leading-tight tracking-wide">
                {SLIDES[active].title}
              </h3>
              <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                {SLIDES[active].desc}
              </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── FAST FOREGROUND PARTICLES (Dust/Sparks) ── */}
      <motion.div 
        style={{ x: fgX, y: fgY }}
        className="absolute z-40 w-full h-full pointer-events-none"
      >
        <div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#C9A84C] blur-[2px] opacity-40" />
        <div className="absolute bottom-[20%] right-[30%] w-2 h-2 rounded-full bg-white blur-[3px] opacity-30" />
        <div className="absolute top-[60%] right-[15%] w-1 h-1 rounded-full bg-[#C9A84C] blur-[1px] opacity-50" />
      </motion.div>

      {/* ── NAVIGATION BALLS ── */}
      <div className="absolute bottom-[5%] z-50 flex gap-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-none transition-all duration-500 ease-out ${active === i ? 'bg-[#C9A84C] w-12' : 'bg-white/20 hover:bg-[#C9A84C]/50 w-6'}`}
          />
        ))}
      </div>

    </div>
  );
}
