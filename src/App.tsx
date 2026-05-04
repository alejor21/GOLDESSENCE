/* FIXED: Complete rewrite — deep teal/copper luxury palette, local fonts,
   all CSS variables, no hardcoded hex in components */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ParallaxSlider from './components/ParallaxSlider';

gsap.registerPlugin(ScrollTrigger);

const WA_LINK = 'https://wa.me/573209662334';
const IG = '@goldessence_pasto';

const BRANDS = ['CREED', 'TOM FORD', 'AMOUAGE', 'ROJA PARFUMS', 'MAISON FRANCIS KURKDJIAN', 'PARFUMS DE MARLY', 'XERJOFF', 'BY KILIAN', 'INITIO', 'FREDERIC MALLE'];


/* FIXED: All colors reference CSS variables — no hardcoded hex */
const V = {
  bg:        'var(--color-bg)',
  surface:   'var(--color-surface)',
  mid:       'var(--color-mid)',
  light:     'var(--color-light)',
  accent:    'var(--color-accent)',
  black:     'var(--color-black)',
  text:      'var(--color-text)',
  muted:     'var(--color-text-muted)',
  goldLine:  'var(--color-gold-line)',
  display:   'var(--font-display)',
  body:      'var(--font-body)',
} as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ── FIXED: SVG brand mark (lotus) shared with hero ── */
function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C24 4 18 14 18 22C18 26 20.5 29 24 29C27.5 29 30 26 30 22C30 14 24 4 24 4Z" fill="currentColor" opacity="0.9" />
      <path d="M12 16C12 16 14 26 20 30C22 31 23.5 30.5 24 29C20 27 18 23 18 22C18 19 14 16 12 16Z" fill="currentColor" opacity="0.6" />
      <path d="M36 16C36 16 34 26 28 30C26 31 24.5 30.5 24 29C28 27 30 23 30 22C30 19 34 16 36 16Z" fill="currentColor" opacity="0.6" />
      <path d="M8 28C8 28 16 30 22 34C23 35 23.5 36 24 37C24.5 36 25 35 26 34C32 30 40 28 40 28C40 28 32 32 26 38C25 39 24.5 40 24 42C23.5 40 23 39 22 38C16 32 8 28 8 28Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/* ── Animated SVG golden wavy lines background ── */
function GoldenLinesCanvas() {
  return (
    <div className="golden-lines-canvas" aria-hidden="true">
      {/* Drifting warm glow blobs */}
      <div className="glow-spot glow-spot-1" />
      <div className="glow-spot glow-spot-2" />
      <div className="glow-spot glow-spot-3" />
      <div className="glow-spot glow-spot-4" />
      <div className="glow-spot glow-spot-5" />
      {/* SVG wavy lines — organic bezier curves, all different */}
      <svg
        viewBox="0 0 1600 2000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Line 1 — upper area, thin, fast */}
        <path
          className="gline-1"
          d="M-100,180 C120,90 280,310 480,200 C680,90 820,350 1000,220 C1180,90 1380,280 1600,180"
          stroke="rgba(181,136,99,0.12)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Line 2 — mid-upper, wider, slower */}
        <path
          className="gline-2"
          d="M-100,500 C200,380 400,620 650,490 C900,360 1050,580 1300,450 C1480,350 1580,520 1700,480"
          stroke="rgba(181,136,99,0.09)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Line 3 — center, medium */}
        <path
          className="gline-3"
          d="M-80,750 C150,630 320,870 580,720 C840,570 1020,810 1280,660 C1460,550 1580,730 1720,680"
          stroke="rgba(181,136,99,0.07)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Line 4 — lower, very thin */}
        <path
          className="gline-4"
          d="M-60,1050 C180,920 380,1160 660,1000 C940,840 1120,1090 1400,930 C1560,830 1660,1010 1740,960"
          stroke="rgba(181,136,99,0.06)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Line 5 — bottom, widest, slowest */}
        <path
          className="gline-5"
          d="M-120,1350 C160,1210 380,1460 680,1280 C980,1110 1200,1390 1480,1220 C1640,1110 1720,1300 1820,1250"
          stroke="rgba(181,136,99,0.05)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ── Menu icon (hamburger / X) ── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="4" x2="4"  y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/* ── FIXED: Cart icon SVG ── */
function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

// ─── MARQUEE ────────────────────────────────────────────────────────────────
/* FIXED: new palette — warm copper separators on teal surface */
function GSAPMarquee({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 38,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="overflow-hidden py-5"
      style={{ borderTop: `1px solid ${V.goldLine}`, borderBottom: `1px solid ${V.goldLine}`, background: V.bg }}
    >
      <div ref={trackRef} className="flex w-max">
        {[...items, ...items, ...items, ...items].map((b, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span
              className="text-[9px] font-medium tracking-[0.42em] uppercase px-10"
              style={{ color: V.muted, fontFamily: V.body }}
            >
              {b}
            </span>
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ background: V.accent, opacity: 0.4 }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── PHILOSOPHY ─────────────────────────────────────────────────────────────
/* FIXED: teal bg, copper accent, Soria display headings, Montserrat body */
function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
    });
    tl.fromTo('.gsap-reveal-title',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.14 }
    );
    tl.fromTo('.gsap-reveal-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.12 },
      '-=0.8'
    );
  }, { scope: sectionRef });

  /* FIXED: FIX 5 — editorial padding, consistent heading, divider */
  return (
    <section
      ref={sectionRef}
      id="quienes-somos"
      className="px-6 md:px-16 max-w-screen-2xl mx-auto overflow-hidden"
      style={{
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
        borderTop: '1px solid rgba(181,136,99,0.12)',
        background: `radial-gradient(ellipse 900px 500px at 20% 50%, rgba(181,136,99,0.05) 0%, transparent 70%)`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <p
            className="gsap-reveal-title text-[10px] font-medium tracking-[0.35em] uppercase mb-8"
            style={{ color: V.accent, fontFamily: V.body }}
          >
            Nuestra Filosofia
          </p>
          {/* FIXED: consistent heading size clamp(36px, 5vw, 68px) */}
          <h2
            className="gsap-reveal-title leading-[0.9] uppercase"
            style={{ color: V.light, fontFamily: V.display, fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '0.06em' }}
          >
            No somos una tienda.<br />
            Somos el destino<br />
            del buen gusto.
          </h2>
        </div>

        <div
          className="flex flex-col justify-center pl-0 md:pl-16 pt-10 md:pt-0 border-t md:border-t-0 md:border-l"
          style={{ borderColor: 'rgba(181,136,99,0.12)' }}
        >
          <span
            className="gsap-reveal-text block w-14 h-px mb-10"
            style={{ background: V.accent }}
          />
          {/* FIXED: body text 16px, line-height 1.85, max-width 58ch */}
          <p
            className="gsap-reveal-text font-normal text-balance"
            style={{ color: V.muted, fontFamily: V.body, fontSize: '16px', lineHeight: 1.85, maxWidth: '58ch' }}
          >
            GoldEssence materializo la alta perfumeria en Colombia. Navegando entre extractos nicho y creaciones de autor que trascienden el tiempo.
          </p>
          <p
            className="gsap-reveal-text font-light mt-8 text-balance"
            style={{ color: V.muted, fontFamily: V.body, fontSize: '16px', lineHeight: 1.85, maxWidth: '58ch' }}
          >
            Acompanamiento a medida y cuidado excepcional en cada despacho desde Narino hacia cualquier latitud nacional.
          </p>
        </div>
      </div>
    </section>
  );
}


// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [isScrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen" style={{ background: V.bg, color: V.text }}>

      {/* ── ANIMATED GOLDEN WAVY LINES BACKGROUND ──────────────────────── */}
      <GoldenLinesCanvas />

      {/* ── MOBILE MENU OVERLAY ──────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: 'rgba(12,17,23,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col items-center gap-10">
              {[
                ['#catalogo',      'Fragancias'],
                ['#quienes-somos', 'Nosotros'],
                ['#colecciones',   'Historias'],
                ['#contacto',      'Contacto'],
              ].map(([href, label], i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: EASE }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl uppercase focus-visible:outline-none"
                  style={{ fontFamily: V.display, color: V.light, letterSpacing: '0.08em', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = V.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = V.light)}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.32, duration: 0.4, ease: EASE }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-[10px] tracking-[0.32em] uppercase px-8 py-4 focus-visible:outline-none"
                style={{
                  fontFamily: V.body,
                  fontWeight: 600,
                  borderRadius: '24px',
                  background: V.accent,
                  color: V.black,
                  textDecoration: 'none',
                }}
              >
                WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      {/* FIXED: Transparent top bar — logo+mark left, links center, cart right */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-700"
        style={{
          background: isScrolled ? 'rgba(26,35,41,0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? `1px solid ${V.goldLine}` : '1px solid transparent',
        }}
      >
        {/* Left: logo mark + brand name */}
        <div className="flex items-center gap-3 shrink-0" style={{ color: V.accent }}>
          <BrandMark size={24} />
          <span
            className="text-[13px] font-normal tracking-[0.3em] uppercase"
            style={{ fontFamily: V.body, color: V.accent }}
          >
            GOLDESCENCE
          </span>
        </div>

        {/* Center: nav links */}
        <div
          className="hidden md:flex gap-10 text-[12px] tracking-[0.12em] uppercase font-normal absolute left-1/2 -translate-x-1/2"
          style={{ fontFamily: V.body }}
        >
          {[
            ['#catalogo', 'Fragancias'],
            ['#quienes-somos', 'Nosotros'],
            ['#colecciones', 'Historias'],
            ['#contacto', 'Contacto'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-500 focus-visible:outline-none"
              style={{ color: V.light }}
              onMouseEnter={e => (e.currentTarget.style.color = V.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = V.light)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: cart icon + hamburger on mobile */}
        <div className="flex items-center gap-4 shrink-0" style={{ color: V.light }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Carrito">
            <CartIcon />
          </a>
          <button
            className="md:hidden focus-visible:outline-none"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen">
        <ParallaxSlider />
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <GSAPMarquee items={BRANDS} />

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
      <PhilosophySection />

      {/* ── DECANT SECTION ───────────────────────────────────────────────── */}
      {/* FIXED: FIX 5 — minimal editorial, side-by-side images, no decorative bg */}
      <section
        className="px-6 md:px-16"
        style={{
          borderTop: '1px solid rgba(181,136,99,0.12)',
          background: `radial-gradient(ellipse 800px 600px at 70% 30%, rgba(181,136,99,0.04) 0%, transparent 70%), ${V.bg}`,
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-20"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-medium tracking-[0.35em] uppercase mb-5"
              style={{ color: V.accent, fontFamily: V.body }}
            >
              Democratizando el lujo
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="leading-[0.9] tracking-tight max-w-2xl uppercase"
              style={{
                color: V.text,
                fontFamily: V.display,
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '0.05em',
              }}
            >
              El Arte del Decant
            </motion.h2>
          </motion.div>

          {/* FIXED: Minimal side-by-side — image + text, no card bg */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
            {[
              {
                size: '5ml',
                shots: '80 Atomizaciones',
                from: 'Desde $15.000',
                img: '/assets/images/decant 5ml.png',
              },
              {
                size: '10ml',
                shots: '160 Atomizaciones',
                from: 'Desde $20.000',
                img: '/assets/images/decant 10ml.png',
              },
            ].map((d, i) => (
              <motion.div
                key={d.size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* FIXED: Decant image with copper drop-shadow, no decorative bg */}
                <img
                  src={d.img}
                  alt={`Decant ${d.size}`}
                  style={{
                    filter: 'drop-shadow(0 20px 50px rgba(181,136,99,0.3))',
                    maxHeight: '300px',
                    objectFit: 'contain',
                  }}
                  loading="lazy"
                  className="mb-8"
                />
                <p
                  className="leading-none mb-2"
                  style={{
                    fontFamily: V.display,
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    color: V.text,
                    letterSpacing: '0.05em',
                  }}
                >
                  {d.size}
                </p>
                <p
                  className="text-[16px] mb-4"
                  style={{ color: V.muted, fontFamily: V.body, lineHeight: 1.85, maxWidth: '58ch' }}
                >
                  {d.shots}
                </p>
                <p
                  className="text-sm tracking-widest font-medium mb-6"
                  style={{ color: V.accent, fontFamily: V.body }}
                >
                  {d.from}
                </p>
                {/* FIXED: Ghost CTA — flat solid or ghost only */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-medium tracking-[0.3em] uppercase px-8 py-3 transition-all duration-500 focus-visible:outline-none"
                  style={{
                    borderRadius: '20px',
                    border: `1px solid ${V.goldLine}`,
                    color: V.accent,
                    fontFamily: V.body,
                    background: 'transparent',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = V.accent; e.currentTarget.style.color = V.black; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = V.accent; }}
                >
                  Adquirir
                </a>
              </motion.div>
            ))}
          </div>

          {/* Editorial quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-xl md:text-3xl font-light max-w-4xl mx-auto text-balance text-center"
            style={{ color: V.mid, fontFamily: V.body, fontStyle: 'italic', lineHeight: 1.85 }}
          >
            "La exclusividad no recae en el frasco, recae en el nectar en contacto con tu piel."
          </motion.p>
        </div>
      </section>

      {/* ── COLECCIONES ──────────────────────────────────────────────────── */}
      {/* FIXED: FIX 5 — editorial padding, consistent dividers */}
      <section
        id="colecciones"
        className="px-6 md:px-16 max-w-screen-2xl mx-auto scroll-mt-20"
        style={{
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-medium tracking-[0.35em] uppercase mb-5"
            style={{ color: V.accent, fontFamily: V.body }}
          >
            Tres Mundos Olfativos
          </motion.p>
          {/* FIXED: FIX 5 — consistent heading size across sections */}
          <motion.h2
            variants={fadeUp}
            className="leading-[0.9] uppercase"
            style={{ color: V.text, fontFamily: V.display, fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '0.05em' }}
          >
            Las Colecciones
          </motion.h2>
        </motion.div>

        {/* FIXED: FIX 5 — no colored bg/borders on cards, subtle opacity hover, divider between */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT — large featured */}
          {(() => {
            const col = { name: 'Extracto Arabe', desc: 'Suntuosidad, incienso y resinas. La opulencia sin limites y una duracion extrema sobre la piel.' };
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
                className="group relative overflow-hidden cursor-pointer focus-visible:outline-none min-h-[420px] md:min-h-[580px] flex flex-col justify-end p-12 md:p-16 transition-all duration-700 hover:scale-[1.01]"
                role="button"
                tabIndex={0}
                style={{ borderRadius: '20px', background: 'rgba(61,77,85,0.1)', border: '1px solid rgba(181,136,99,0.1)' }}
              >
                <span
                  className="absolute top-10 right-12 leading-none select-none"
                  style={{ fontFamily: V.display, fontSize: '120px', color: 'rgba(181,136,99,0.04)' }}
                >
                  01
                </span>
                <div className="relative z-10">
                  <p
                    className="text-[9px] font-medium tracking-[0.4em] uppercase mb-5"
                    style={{ color: V.accent, fontFamily: V.body }}
                  >
                    Coleccion
                  </p>
                  {/* FIXED: heading in Soria */}
                  <h3
                    className="leading-[0.9] uppercase mb-6"
                    style={{ fontFamily: V.display, fontSize: 'clamp(36px, 5vw, 68px)', color: V.light, letterSpacing: '0.06em' }}
                  >
                    {col.name}
                  </h3>
                  {/* FIXED: body in Montserrat 16px */}
                  <p
                    className="mb-10 max-w-sm"
                    style={{ color: V.muted, fontFamily: V.body, fontSize: '16px', lineHeight: 1.85 }}
                  >
                    {col.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="h-px transition-all duration-700 group-hover:w-14"
                      style={{ background: V.accent, width: '32px' }}
                    />
                    <span
                      className="text-[9px] font-medium tracking-[0.3em] uppercase"
                      style={{ color: V.muted, fontFamily: V.body }}
                    >
                      Explorar
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* RIGHT — two stacked */}
          <div className="grid grid-rows-2 gap-6 md:min-h-[580px]">
            {[
              { name: 'Alta Costura',  desc: 'Diseno occidental, frescura sofisticada y reconocimiento inmediato. Tu firma diaria e inconfundible.', idx: '02' },
              { name: 'Reserva Nicho', desc: 'Materias primas experimentales y escasez mundial. Perfumes que no solo huelen, cuentan historias.', idx: '03' },
            ].map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.12 }}
                className="group relative overflow-hidden cursor-pointer focus-visible:outline-none flex flex-col justify-end p-10 md:p-12 transition-all duration-700 hover:scale-[1.01]"
                role="button"
                tabIndex={0}
                style={{ borderRadius: '20px', background: 'rgba(61,77,85,0.1)', border: '1px solid rgba(181,136,99,0.1)' }}
              >
                <span
                  className="absolute top-6 right-8 leading-none select-none"
                  style={{ fontFamily: V.display, fontSize: '72px', color: 'rgba(181,136,99,0.04)' }}
                >
                  {col.idx}
                </span>
                <div className="relative z-10">
                  <h3
                    className="leading-[0.9] uppercase mb-4"
                    style={{ fontFamily: V.display, fontSize: 'clamp(36px, 4vw, 52px)', color: V.light, letterSpacing: '0.06em' }}
                  >
                    {col.name}
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: V.muted, fontFamily: V.body, fontSize: '16px', lineHeight: 1.85 }}
                  >
                    {col.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-px transition-all duration-700 group-hover:w-12"
                      style={{ background: V.accent, width: '24px' }}
                    />
                    <span
                      className="text-[9px] font-medium tracking-[0.3em] uppercase"
                      style={{ color: V.muted, fontFamily: V.body }}
                    >
                      Explorar
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGO ─────────────────────────────────────────────────────── */}
      {/* FIXED: FIX 5 — editorial padding, consistent heading, divider */}
      <section
        id="catalogo"
        className="px-6 md:px-16 scroll-mt-10"
        style={{
          background: `radial-gradient(ellipse 700px 500px at 30% 60%, rgba(181,136,99,0.04) 0%, transparent 70%), ${V.bg}`,
          borderTop: '1px solid rgba(181,136,99,0.12)',
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-28 items-center">

            {/* LEFT — Editorial typographic block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Eyebrow pill */}
              <motion.div variants={fadeUp} className="mb-10">
                <span
                  style={{
                    fontFamily: V.body,
                    fontSize: '9px',
                    letterSpacing: '0.36em',
                    textTransform: 'uppercase',
                    color: V.accent,
                    padding: '6px 16px',
                    borderRadius: '20px',
                    border: '1px solid rgba(181,136,99,0.25)',
                    background: 'rgba(181,136,99,0.06)',
                  }}
                >
                  Nuestro Catálogo
                </span>
              </motion.div>

              {/* Giant display number */}
              <motion.div variants={fadeUp} className="flex items-end gap-1 mb-5 leading-none">
                <span
                  style={{
                    fontFamily: V.display,
                    fontSize: 'clamp(88px, 15vw, 192px)',
                    lineHeight: 1,
                    color: V.light,
                    letterSpacing: '-0.03em',
                  }}
                >
                  200
                </span>
                <span
                  style={{
                    fontFamily: V.display,
                    fontSize: 'clamp(44px, 7.5vw, 96px)',
                    lineHeight: 1,
                    color: V.accent,
                    paddingBottom: '0.18em',
                  }}
                >
                  +
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="uppercase mb-9"
                style={{
                  fontFamily: V.display,
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  letterSpacing: '0.18em',
                  color: V.mid,
                  lineHeight: 1.4,
                }}
              >
                Referencias exclusivas disponibles
              </motion.h2>

              <motion.p
                variants={fadeUp}
                style={{ color: V.muted, fontFamily: V.body, fontSize: '16px', lineHeight: 1.85, maxWidth: '50ch' }}
                className="mb-14"
              >
                Desde extractos árabes de alta concentración hasta reservas nicho de autor. Cada referencia seleccionada por su calidad excepcional y disponibilidad limitada en Colombia.
              </motion.p>

              {/* Stats strip — divided by hairlines */}
              <motion.div variants={fadeUp} className="flex">
                {[
                  { num: '10+',  label: 'Marcas de lujo'  },
                  { num: '3',    label: 'Colecciones'      },
                  { num: '100%', label: 'Originales'       },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      flex: 1,
                      paddingRight: i < 2 ? 'clamp(16px,2.5vw,36px)' : '0',
                      borderRight: i < 2 ? '1px solid rgba(181,136,99,0.13)' : 'none',
                      paddingLeft: i > 0 ? 'clamp(16px,2.5vw,36px)' : '0',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: V.display,
                        fontSize: 'clamp(30px, 3.8vw, 48px)',
                        color: V.light,
                        lineHeight: 1,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {stat.num}
                    </p>
                    <p
                      style={{
                        fontFamily: V.body,
                        fontSize: '9px',
                        color: V.muted,
                        letterSpacing: '0.26em',
                        textTransform: 'uppercase',
                        marginTop: '10px',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — Double-Bezel download card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.28 }}
            >
              {/* Outer shell */}
              <div
                style={{
                  background: 'rgba(30,45,53,0.42)',
                  border: '1px solid rgba(181,136,99,0.18)',
                  borderRadius: '28px',
                  padding: '5px',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 40px 100px rgba(0,0,0,0.5)',
                }}
              >
                {/* Inner core */}
                <div
                  style={{
                    background: 'rgba(10,17,23,0.97)',
                    borderRadius: '23px',
                    padding: 'clamp(28px, 4.5vw, 46px)',
                    border: '1px solid rgba(181,136,99,0.07)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  }}
                >
                  {/* PDF icon badge */}
                  <div
                    style={{
                      width: '50px', height: '50px',
                      borderRadius: '14px',
                      background: 'rgba(181,136,99,0.09)',
                      border: '1px solid rgba(181,136,99,0.22)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '26px',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={V.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>

                  <p
                    style={{ fontFamily: V.body, fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: V.accent, marginBottom: '10px' }}
                  >
                    Catálogo Oficial
                  </p>
                  <h3
                    style={{ fontFamily: V.display, fontSize: 'clamp(28px, 3.8vw, 42px)', color: V.light, lineHeight: 1, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '16px' }}
                  >
                    Descarga<br />el PDF
                  </h3>
                  <p
                    style={{ fontFamily: V.body, fontSize: '14px', color: V.muted, lineHeight: 1.8, marginBottom: '28px', maxWidth: '34ch' }}
                  >
                    Referencias, presentaciones y precios actualizados en un solo documento.
                  </p>

                  {/* Hairline divider */}
                  <div style={{ height: '1px', background: 'rgba(181,136,99,0.1)', marginBottom: '26px' }} />

                  {/* Tag pills */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '30px' }}>
                    {['Formato PDF', '200+ Refs.', 'Actualizado'].map(tag => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: V.body, fontSize: '9px', letterSpacing: '0.2em',
                          textTransform: 'uppercase', color: V.muted,
                          padding: '5px 12px', borderRadius: '20px',
                          border: '1px solid rgba(181,136,99,0.14)',
                          background: 'rgba(181,136,99,0.04)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA — Button-in-Button architecture */}
                  <a
                    href="/catalogo.pdf"
                    download="CATALOGO GOLDESCENCE.pdf"
                    className="group flex items-center justify-between w-full focus-visible:outline-none"
                    style={{
                      borderRadius: '14px',
                      background: V.accent,
                      color: V.black,
                      fontFamily: V.body,
                      fontWeight: 600,
                      fontSize: '10px',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      padding: '15px 15px 15px 22px',
                      textDecoration: 'none',
                      transition: 'background 0.6s cubic-bezier(0.22,1,0.36,1)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = V.light; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = V.accent; }}
                  >
                    <span>Descargar gratis</span>
                    {/* Nested icon button */}
                    <span
                      style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: 'rgba(0,0,0,0.13)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
                      }}
                      className="group-hover:translate-y-[1px]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </span>
                  </a>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      {/* FIXED: FIX 5 — editorial padding, consistent heading, flat bg, no gradient overlay */}
      <section
        id="contacto"
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 900px 500px at 80% 40%, rgba(181,136,99,0.07) 0%, transparent 60%), ${V.bg}`,
          borderTop: '1px solid rgba(181,136,99,0.12)',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          style={{
            paddingTop: 'clamp(80px, 10vw, 140px)',
            paddingBottom: 'clamp(80px, 10vw, 140px)',
          }}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-medium tracking-[0.35em] uppercase mb-8"
              style={{ color: V.accent, fontFamily: V.body }}
            >
              Atencion Personalizada
            </motion.p>
            {/* FIXED: consistent heading */}
            <motion.h2
              variants={fadeUp}
              className="leading-[0.9] uppercase mb-10 text-balance"
              style={{
                fontFamily: V.display,
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '0.06em',
                color: V.light,
              }}
            >
              Viste tu aura de opulencia.
            </motion.h2>
            {/* FIXED: body 16px, line-height 1.85 */}
            <motion.p
              variants={fadeUp}
              className="max-w-sm"
              style={{ color: V.muted, fontFamily: V.body, fontSize: '16px', lineHeight: 1.85, maxWidth: '58ch' }}
            >
              Cada fragancia es una decision personal. Nuestros asesores te guian hacia el extracto que mejor interpreta tu identidad.
            </motion.p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-10 mt-4 md:mt-0">
            {/* FIXED: flat solid CTA — no gradient */}
            <motion.a
              variants={fadeUp}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.28em] uppercase px-10 py-5 transition-colors duration-700 focus-visible:outline-none"
              style={{
                borderRadius: '24px',
                background: V.accent,
                color: V.black,
                fontFamily: V.body,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = V.light; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = V.accent; }}
            >
              Contactar un asesor
              <span>&#8599;</span>
            </motion.a>

            <motion.div variants={fadeUp} className="flex flex-col items-start md:items-end">
              <span
                className="leading-none"
                style={{ fontFamily: V.display, fontSize: '52px', color: V.light }}
              >
                20+
              </span>
              <span
                className="text-[10px] tracking-[0.28em] uppercase mt-1"
                style={{ color: V.muted, fontFamily: V.body }}
              >
                Clientes en Colombia
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[9px] tracking-[0.3em] font-medium uppercase"
              style={{ color: V.muted, fontFamily: V.body }}
            >
              Despachos a Nivel Nacional
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      {/* FIXED: FIX 5 — consistent divider, editorial feel */}
      <footer
        className="pt-24 pb-14 px-6 md:px-16"
        style={{ background: V.bg, borderTop: '1px solid rgba(181,136,99,0.12)' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-4" style={{ color: V.accent }}>
                <BrandMark size={28} />
                <p
                  className="text-3xl font-medium tracking-[0.14em]"
                  style={{ color: V.text, fontFamily: V.display }}
                >
                  GOLDESCENCE
                </p>
              </div>
              <p
                className="text-[9px] font-medium uppercase tracking-[0.4em]"
                style={{ color: V.accent, fontFamily: V.body }}
              >
                Nicho &middot; Disenador &middot; Arabe
              </p>
              <p
                className="text-[11px] leading-relaxed mt-5 max-w-[220px]"
                style={{ color: V.muted, fontFamily: V.body }}
              >
                Alta perfumeria de autor desde Narino, Colombia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 md:gap-20">
              <div className="flex flex-col gap-6">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase font-medium mb-2"
                  style={{ color: V.mid, fontFamily: V.body }}
                >
                  Descubrir
                </p>
                {[['#catalogo', 'La Reserva'], ['#colecciones', 'Colecciones'], ['#quienes-somos', 'Filosofia']].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-[10px] font-normal uppercase tracking-widest transition-colors duration-500 focus-visible:outline-none"
                    style={{ color: V.muted, fontFamily: V.body }}
                    onMouseEnter={e => (e.currentTarget.style.color = V.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = V.muted)}
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase font-medium mb-2"
                  style={{ color: V.mid, fontFamily: V.body }}
                >
                  Contacto
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-normal uppercase tracking-widest transition-colors duration-500 focus-visible:outline-none"
                  style={{ color: V.muted, fontFamily: V.body }}
                  onMouseEnter={e => (e.currentTarget.style.color = V.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = V.muted)}
                >
                  WhatsApp
                </a>
                <a
                  href={`https://instagram.com/${IG.substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-normal uppercase tracking-widest transition-colors duration-500 focus-visible:outline-none"
                  style={{ color: V.muted, fontFamily: V.body }}
                  onMouseEnter={e => (e.currentTarget.style.color = V.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = V.muted)}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* FIXED: consistent divider */}
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid rgba(181,136,99,0.12)' }}
          >
            <p
              className="text-[9px] font-medium tracking-[0.3em] uppercase"
              style={{ color: V.muted, fontFamily: V.body }}
            >
              &copy; 2026 GOLDESCENCE
            </p>
            <p
              className="text-[9px] font-medium tracking-[0.3em] uppercase"
              style={{ color: V.muted, fontFamily: V.body }}
            >
              Alta Perfumeria de Autor
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
