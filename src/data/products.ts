export type Product = {
  id: number;
  brand: string;
  name: string;
  category: 'arabe' | 'disenador' | 'nicho';
  prices: { size: string; price: string }[];
  img?: string;
};

const IMG_GOLD = '/images/brand/al_haramain_gold.png';
const IMG_9PM = '/images/brand/afnan_9pm.png';
const IMG_CDN = '/images/brand/cdn_intense_man.png';
const IMG_NITRO = '/images/brand/nitro_red.png';
const IMG_JPG = '/assets/perfumes/1.png';

let _id = 1;

const p = (brand: string, name: string, category: Product['category'], prices: { size: string; price: string }[], img?: string): Product => {
  const currentId = _id++;
  const imgNumber = ((currentId - 1) % 40) + 1;
  return {
    id: currentId,
    brand,
    name,
    category,
    prices,
    img: img || `/assets/perfumes/${imgNumber}.png`,
  };
};

export const products: Product[] = [
  // ── ÁRABES — Top 6 más vendidos ────────────────────────────────────────────
  p('Al Haramain','Gold Edition','arabe',[{size:'120ml',price:'$300.000'},{size:'60ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}], IMG_GOLD),
  p('Afnan','9PM','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}], IMG_9PM),
  p('Armaf','CDN Intense Man','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}], IMG_CDN),
  p('Dumont','Nitro Red','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}], IMG_NITRO),
  p('Lattafa','Asad','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Rasasi','Hawas for Him','arabe',[{size:'100ml',price:'$260.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),

  // ── DISEÑADOR — Top 6 más vendidos ─────────────────────────────────────────
  p('Carolina Herrera','212 VIP Black','disenador',[{size:'100ml',price:'$380.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Jean Paul Gaultier','Le Male Elixir','disenador',[{size:'125ml',price:'$425.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}], IMG_JPG),
  p('Paco Rabanne','One Million','disenador',[{size:'100ml',price:'$400.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  p('Giorgio Armani','My Way Int','disenador',[{size:'90ml',price:'$400.000'},{size:'10ml',price:'$58.000'},{size:'5ml',price:'$40.000'}]),
  p('Versace','Eros Flame','disenador',[{size:'200ml',price:'$320.000'},{size:'100ml',price:'$280.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$28.000'}]),
  p('Ariana Grande','Cloud','disenador',[{size:'100ml',price:'$315.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),

  // ── NICHO — Top 6 más vendidos ─────────────────────────────────────────────
  p('Montale','Intense Cafe','nicho',[{size:'100ml',price:'$420.000'}]),
  p('Mancera','Instant Crush','nicho',[{size:'120ml',price:'$470.000'}]),
  p('Lorenzo Pazzaglia','Que Chimba','nicho',[{size:'50ml',price:'$630.000'}]),
  p('Lorenzo Pazzaglia','Black Sea','nicho',[{size:'50ml',price:'$630.000'}]),
  p('Ahli','Corvus','nicho',[{size:'60ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Ilmin','IL Bordeaux','nicho',[{size:'30ml',price:'$430.000'}]),
];
 
