/* FIXED: positioning — Hero with fondo.png marble background, tronco.png stump pedestal,
   giant white watermark text, centered bottle carousel sitting ON the stump. */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Carousel data — all 4 PNG files from /public/carrusel-perfumes/ */
const BOTTLES = [
  { id: 1, img: '/carrusel-perfumes/hawas.png',      name: 'HAWAS',      house: 'Rasasi',         type: 'Eau de Parfum' },
  { id: 2, img: '/carrusel-perfumes/afnan-9am.png',   name: 'AFNAN 9AM',  house: 'Afnan',          type: 'Eau de Parfum' },
  { id: 3, img: '/carrusel-perfumes/invictus.png',    name: 'INVICTUS',   house: 'Paco Rabanne',   type: 'Eau de Toilette' },
  { id: 4, img: '/carrusel-perfumes/stronger.png',    name: 'STRONGER',   house: 'Emporio Armani', type: 'Eau de Parfum' },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ParallaxSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Auto-advance every 4000ms, reset on manual click */
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(p => (p + 1) % BOTTLES.length), 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    resetTimer();
  };

  return (
    /* FIXED: positioning — hero-section applies fondo.png background + overlay */
    <div className="hero-section">

      {/* ── GOLDESCENCE text — centered behind the bottles ── */}
      <motion.div
        className="hero-bg-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        aria-hidden="true"
      >
        GOLDESCENCE
      </motion.div>




      {/* ── Carousel bottle — centered in the hero ── */}
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 120, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            exit={{ opacity: 0, x: -120, rotate: -6 }}
            transition={{ duration: 0.75, ease: EASE }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={BOTTLES[active].img}
              alt={BOTTLES[active].name}
              className="bottle-img"
              fetchPriority={active === 0 ? 'high' : 'auto'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottle label — name, house, type ── */}
      <div className="bottle-label">
        <span className="bottle-name">{BOTTLES[active].name}</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '4px' }}>
          <span className="bottle-descriptor" style={{ fontStyle: 'italic' }}>
            {BOTTLES[active].house}
          </span>
          <span style={{ width: '1px', height: '12px', background: 'var(--color-gold-line)' }} />
          <span className="bottle-descriptor">
            {BOTTLES[active].type}
          </span>
        </div>
      </div>

      {/* ── CTA button ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        className="hero-cta"
      >
        <a
          href="#catalogo"
          className="hero-cta-btn"
        >
          Explorar Colección
        </a>
      </motion.div>

      {/* ── Line indicators ── */}
      <div className="carousel-indicators">
        {BOTTLES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Fragancia ${i + 1}`}
            className="carousel-indicator"
            data-active={active === i ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
 
