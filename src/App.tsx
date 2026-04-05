import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { products } from './data/products';
import ParallaxSlider from './components/ParallaxSlider';

const WA_LINK = 'https://wa.me/573209662334';
const IG = '@goldessence_pasto';

const BRANDS = ['CREED','TOM FORD','AMOUAGE','ROJA PARFUMS','MAISON FRANCIS KURKDJIAN','PARFUMS DE MARLY','XERJOFF','BY KILIAN','INITIO','FREDERIC MALLE'];

type FilterKey = 'todos' | 'arabe' | 'disenador' | 'nicho';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <motion.div 
      variants={fadeUp}
      className="group cursor-pointer flex flex-col mb-16"
    >
      {/* Image Container with Vignette and Grayscale */}
      <div className="relative overflow-hidden mb-6 bg-[#0a0a0a] aspect-[4/5] border border-white/5 transition-all duration-700 group-hover:border-[#C9A84C]/30">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover p-8 opacity-60 grayscale-[0.8] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.22,1,0.36,1]"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Minimalist CTA */}
        <div className="absolute bottom-8 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit mx-auto text-[10px] font-medium tracking-[0.3em] uppercase text-white border-b border-transparent hover:text-[#C9A84C] hover:border-[#C9A84C] pb-1 transition-all duration-500"
          >
            Descubrir
          </a>
        </div>
      </div>
      {/* Info */}
      <div className="px-1 text-center">
        <p className="text-[#C9A84C] text-[9px] font-medium tracking-[0.4em] uppercase mb-3">{product.brand}</p>
        <h4 className="text-white font-serif font-medium text-2xl leading-tight mb-4 tracking-wide">{product.name}</h4>
        <div className="flex flex-col gap-1 items-center">
          {product.prices.map((pr) => (
            <p key={pr.size} className="text-gray-500 text-[10px] font-light tracking-widest italic">
              {pr.size} <span className="mx-2 not-italic">—</span> <span className="text-gray-300 not-italic">{pr.price}</span>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [filter, setFilter] = useState<FilterKey>('todos');
  const [visibleCount, setVisibleCount] = useState(12);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter);
  const visible = filtered.slice(0, visibleCount);

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'todos', label: 'Ver Todo' },
    { key: 'arabe', label: 'Extracto Árabe' },
    { key: 'disenador', label: 'Alta Costura' },
    { key: 'nicho', label: 'Reserva Nicho' },
  ];

  return (
    <div className="min-h-screen selection:bg-[#C9A84C]/30">

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-700 ease-[0.22,1,0.36,1] ${
          isScrolled 
            ? 'glass-dark border-b border-white/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.1em] text-white">
          GOLDESSENCE
        </span>
        <div className={`hidden md:flex gap-12 text-[9px] tracking-[0.3em] uppercase font-medium text-gray-400 hover:[&>a]:text-white`}>
          <a href="#catalogo" className="transition-colors duration-500">La Boutique</a>
          <a href="#colecciones" className="transition-colors duration-500">Curaduría</a>
          <a href="#quienes-somos" className="transition-colors duration-500">Filosofía</a>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-[9px] font-medium tracking-[0.2em] uppercase px-8 py-3 transition-all duration-500 bg-transparent text-white border border-white hover:bg-white hover:text-black"
        >
          Concierge
        </a>
      </nav>

      {/* ── HERO PARALLAX SLIDER ── */}
      <section className="min-h-screen">
         <ParallaxSlider />
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 py-6 overflow-hidden bg-[#020202]">
        <div className="marquee-track">
          {[...BRANDS,...BRANDS].map((b, i) => (
            <span key={i} className="text-[9px] font-medium tracking-[0.4em] uppercase text-gray-600 px-16 whitespace-nowrap">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ── QUIÉNES SOMOS ──────────────────────────────────────────────────── */}
      <section id="quienes-somos" className="py-40 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-medium mb-8">Nuestra Filosofía</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif font-medium text-5xl md:text-7xl leading-[1.1] tracking-tight text-white">
              No somos una tienda.<br/>Somos el destino del buen gusto.
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} className="flex flex-col justify-center border-l border-white/5 pl-12 md:pl-20">
            <motion.span variants={fadeUp} className="gold-divider w-16 mb-10" />
            <motion.p variants={fadeUp} className="text-gray-400 font-light leading-relaxed text-2xl max-w-lg">
              GoldEssence materializó la alta perfumería en Colombia. Navegando entre extractos nicho y creaciones de autor que trascienden el tiempo.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-500 font-sans font-light leading-relaxed text-sm mt-8 max-w-md">
              Acompañamiento a medida y cuidado excepcional en cada despacho desde Nariño hacia cualquier latitud nacional.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── QUÉ ES UN DECANT ───────────────────────────────────────────────── */}
      <section className="py-40 px-6 md:px-12 mx-auto border-t border-white/5 bg-[#020202]">
        <div className="max-w-screen-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-32">
              <motion.p variants={fadeUp} className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-medium mb-6">Democratizando el lujo</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif font-medium text-5xl md:text-[5.5rem] tracking-tight text-white">El Arte del Decant</motion.h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
              {[
                { size: '5ml', shots: '80 atomizaciones', from: 'Inversión desde $15.000', img: 'https://images.unsplash.com/photo-1595425970377-c9703bc48baf?w=500&auto=format&fit=crop' },
                { size: '10ml', shots: '160 atomizaciones', from: 'Inversión desde $20.000', img: 'https://images.unsplash.com/photo-1594145904033-0c46f1ec01ff?w=500&auto=format&fit=crop' },
              ].map((d, i) => (
                <motion.div 
                  key={d.size} 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} 
                  variants={{ hidden: { opacity: 0, y: i % 2 === 0 ? 50 : 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }}
                  className="relative overflow-hidden group bg-black p-0 border border-white/5 h-[500px]"
                >
                  <img src={d.img} alt={d.size} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[0.5] group-hover:scale-105 group-hover:opacity-40 transition-all duration-[1.5s]" />
                  <div className="relative z-10 p-16 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
                    <p className="font-serif text-7xl md:text-8xl font-medium mb-6 text-white tracking-tight">{d.size}</p>
                    <p className="text-gray-400 text-xs tracking-[0.3em] uppercase font-medium mb-8">{d.shots}</p>
                    <p className="text-[#C9A84C] font-light tracking-widest text-sm">{d.from}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} className="text-center text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto font-serif italic mb-20 leading-relaxed">
              "La exclusividad no recae en el frasco, recae en el néctar en contacto con tu piel."
            </motion.p>
        </div>
      </section>

      {/* ── TRES COLECCIONES ───────────────────────────────────────────────── */}
      <section id="colecciones" className="py-40 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-32">
          <motion.p variants={fadeUp} className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-medium mb-6">Tres Mundos Olfativos</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif font-medium text-5xl md:text-[5.5rem] tracking-tight text-white">La Curaduría</motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
          {[
            { name: 'Extracto Árabe', desc: 'Suntuosidad, incienso y resinas. La opulencia sin límites y una duración extrema sobre la piel.', filter: 'arabe' },
            { name: 'Alta Costura', desc: 'Diseño occidental, frescura sofisticada y reconocimiento inmediato. Tu firma diaria e inconfundible.', filter: 'disenador' },
            { name: 'Reserva Nicho', desc: 'Materias primas experimentales y escasez mundial. Perfumes que no solo huelen, cuentan historias.', filter: 'nicho' },
          ].map((col, i) => (
            <motion.div 
              key={col.name} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1, delay: i * 0.2 }}
              onClick={() => { setFilter(col.filter as FilterKey); setVisibleCount(12); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-black p-16 hover:bg-[#080808] transition-all duration-[1s] cursor-pointer group flex flex-col items-start border-r border-b border-white/5 last:border-r-0 md:[&:nth-child(n+3)]:border-b-0"
            >
              <h3 className="text-white font-serif font-medium text-4xl mb-8 tracking-tight leading-tight">{col.name}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-16">{col.desc}</p>
              <div className="mt-auto overflow-hidden flex items-center gap-4">
                 <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#C9A84C] transition-all duration-700" />
                 <p className="text-white text-[9px] font-medium tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:text-[#C9A84C]">Explorar</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CATÁLOGO COMPLETO (Asymmetrical Grid) ────────────────────────── */}
      <section id="catalogo" className="py-40 px-6 md:px-12 bg-[#020202]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-32 flex flex-col items-center text-center">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-medium mb-6">Inventario Actual</p>
            <h2 className="font-serif font-medium text-6xl md:text-8xl text-white tracking-tight mb-16">La Boutique</h2>
            
            <div className="flex gap-6 flex-wrap justify-center border-b border-white/10 pb-6 w-full max-w-3xl glass-dark md:border-none md:pb-0 md:bg-transparent md:backdrop-filter-none">
              {filters.map((f) => (
                <button key={f.key} onClick={() => { setFilter(f.key); setVisibleCount(12); }}
                  className={`text-[9px] font-medium tracking-[0.3em] uppercase transition-all duration-500 pb-2 border-b md:border-b hover:text-white ${filter === f.key ? 'text-[#C9A84C] border-[#C9A84C]' : 'text-gray-600 border-transparent'}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
             variants={staggerContainer}
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {visible.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {visibleCount < filtered.length && (
            <div className="text-center mt-20">
              <button
                onClick={() => setVisibleCount(v => v + 12)}
                className="border border-[#C9A84C]/50 text-[#C9A84C] text-[9px] font-medium tracking-[0.3em] uppercase px-16 py-5 hover:bg-[#C9A84C] hover:text-black transition-all duration-700">
                Cargar Reserva Adicional
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-40 px-6 text-center border-t border-white/5 bg-black relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 max-w-3xl mx-auto">
          <motion.p variants={fadeUp} className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-medium mb-10">Servicio Concierge</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif font-medium text-6xl md:text-8xl text-white mb-20 leading-[1.1] tracking-tight">
            Viste tu aura de opulencia.
          </motion.h2>
          
          <motion.div variants={fadeUp} className="flex justify-center mt-12">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-medium text-[9px] tracking-[0.3em] uppercase px-20 py-6 hover:bg-[#C9A84C] hover:text-black transition-all duration-[1s]">
               Contactar a un asesor
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="text-gray-600 text-[9px] mt-20 tracking-[0.3em] font-medium uppercase">
            Despachos a Nivel Nacional — Colombia
          </motion.p>
        </motion.div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="pt-32 pb-16 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-sm">
            <p className="font-serif text-3xl text-white font-medium tracking-[0.1em] mb-8">GOLDESSENCE</p>
            <p className="text-[#C9A84C] text-[9px] font-medium leading-relaxed uppercase tracking-[0.4em]">
              Nicho · Diseñador · Árabe
            </p>
          </div>
          <div className="grid grid-cols-2 gap-32">
            <div className="flex flex-col gap-8">
              <p className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-medium mb-4">Descubrir</p>
              <a href="#catalogo" className="text-gray-400 hover:text-[#C9A84C] text-[10px] font-light uppercase tracking-widest transition-colors duration-500">La Reserva</a>
              <a href="#colecciones" className="text-gray-400 hover:text-[#C9A84C] text-[10px] font-light uppercase tracking-widest transition-colors duration-500">Curaduría</a>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-medium mb-4">Contacto</p>
              <a href={WA_LINK} className="text-gray-400 hover:text-[#C9A84C] text-[10px] font-light uppercase tracking-widest transition-colors duration-500">WhatsApp</a>
              <a href={`https://instagram.com/${IG.substring(1)}`} className="text-gray-400 hover:text-[#C9A84C] text-[10px] font-light uppercase tracking-widest transition-colors duration-500">Instagram</a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[9px] font-medium tracking-[0.3em] uppercase">© 2026 GOLDESSENCE </p>
          <p className="text-gray-600 text-[9px] font-medium tracking-[0.3em] uppercase">Alta Perfumería de Autor</p>
        </div>
      </footer>
    </div>
  );
}
