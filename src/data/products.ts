export type Product = {
  id: number;
  brand: string;
  name: string;
  category: 'arabe' | 'disenador' | 'nicho';
  prices: { size: string; price: string }[];
  img?: string;
};

const BOTTLE1 = 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&auto=format&fit=crop';
const BOTTLE2 = 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&auto=format&fit=crop';

const IMG_GOLD = '/images/brand/al_haramain_gold.png';
const IMG_9PM = '/images/brand/afnan_9pm.png';
const IMG_CDN = '/images/brand/cdn_intense_man.png';
const IMG_NITRO = '/images/brand/nitro_red.png';

let _id = 1;

const p = (brand: string, name: string, category: Product['category'], prices: { size: string; price: string }[], img?: string): Product => {
  const currentId = _id++;
  const imgNumber = ((currentId - 1) % 40) + 1; // 1 to 40 inclusive
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
  // ── ÁRABES ──────────────────────────────────────────────────────────────────
  // AL HARAMAIN
  p('Al Haramain','Gold Edition','arabe',[{size:'120ml',price:'$300.000'},{size:'60ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}], IMG_GOLD),
  p('Al Haramain','L\'Aventure Rose','arabe',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('Al Haramain','Dubai Night','arabe',[{size:'75ml',price:'$280.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$25.000'}]),
  // AFNAN
  p('Afnan','9PM','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}], IMG_9PM),
  p('Afnan','9PM Rebel','arabe',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('Afnan','9AM Dive','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  // ARMAF
  p('Armaf','CDN Intense Man','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}], IMG_CDN),
  p('Armaf','CDN Maleka','arabe',[{size:'100ml',price:'$260.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$25.000'}]),
  p('Armaf','CDN OUD','arabe',[{size:'100ml',price:'$270.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Armaf','CDN Milestone','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','CDN Sillage','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','CDN Iconic','arabe',[{size:'100ml',price:'$300.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Armaf','CDN Untold','arabe',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','CDN Woman','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Armaf','Black Forest','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Armaf','Candee','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Armaf','Dubai Chocolat','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Armaf','Mandarin Sky','arabe',[{size:'200ml',price:'$250.000'},{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Armaf','MS Elixir','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','Montagne','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','Toffee Coffee','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','Aqua','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Armaf','Limoni','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  // BHARARA
  p('Bharara','Enigma','arabe',[{size:'100ml',price:'$325.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Bharara','King','arabe',[{size:'100ml',price:'$320.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Bharara','King Parfum','arabe',[{size:'100ml',price:'$370.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  // DUMONT
  p('Dumont','Nitro Red','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}], IMG_NITRO),
  p('Dumont','NR Intensely','arabe',[{size:'100ml',price:'$265.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Dumont','Nitro Elixir','arabe',[{size:'100ml',price:'$265.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  // FRENCH AVENUE
  p('French Avenue','Liquid Brun','arabe',[{size:'100ml',price:'$260.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('French Avenue','Azzure Aoud','arabe',[{size:'100ml',price:'$240.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('French Avenue','Vulcan Feu','arabe',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  // EMPER
  p('Emper','Stallion 53','arabe',[{size:'100ml',price:'$170.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  // JO MILANO
  p('Jo Milano','786 Saudi King','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Jo Milano','Dubai King','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Jo Milano','GOS Jackpot','arabe',[{size:'100ml',price:'$320.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Jo Milano','GOS Opal','arabe',[{size:'90ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Jo Milano','Mandarin Sky','arabe',[{size:'100ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Jo Milano','GOS Full House','arabe',[{size:'100ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  // LATTAFA
  p('Lattafa','Ajwad','arabe',[{size:'60ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Pink to Pink','arabe',[{size:'60ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Al Noble Ameer','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Alqiam Gold','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Art Universe','arabe',[{size:'100ml',price:'$270.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Lattafa','Asad','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Asad Bourbon','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Asad Zanzibar','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Al Noble Blush','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Amethyst','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Honor & Glory','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Oud for Glory','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Sublime','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Eclaire','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Eeman','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Emeer','arabe',[{size:'100ml',price:'$270.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Lattafa','Fakhar Men','arabe',[{size:'100ml',price:'$180.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Her Confession','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Haya','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','His Confession','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Kamrah','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Kamrah Dukhan','arabe',[{size:'100ml',price:'$235.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Kamrah Qahwa','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Liam Blue','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Mayar Cherry','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Mayar Natural I','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Mayar','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Qaed Al Fursan','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','QAF Unlimited','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Ramz Gold','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Ramz Silver','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Rave Black','arabe',[{size:'100ml',price:'$215.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Rave Woman','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Sehr','arabe',[{size:'100ml',price:'$300.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Lattafa','Saheen Silver','arabe',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Teriaq','arabe',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Teriaq Intense','arabe',[{size:'100ml',price:'$280.000'},{size:'10ml',price:'$40.000'},{size:'5ml',price:'$28.000'}]),
  p('Lattafa','Tharwah Gold','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','The Kingdom','arabe',[{size:'100ml',price:'$245.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('Lattafa','Victoria','arabe',[{size:'100ml',price:'$270.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Lattafa','Yara','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Yara Candy','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Yara Moi','arabe',[{size:'100ml',price:'$185.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  p('Lattafa','Yara Tous','arabe',[{size:'100ml',price:'$190.000'},{size:'10ml',price:'$20.000'},{size:'5ml',price:'$15.000'}]),
  // MAISON ALHAMBRA
  p('Maison Alhambra','Deliah','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Maison Alhambra','JL Immortel','arabe',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Maison Alhambra','JL Noir','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Maison Alhambra','Malachite','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  // ZAKAT
  p('Zakat','You Are My Fire','arabe',[{size:'100ml',price:'$200.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  // MAST PERFUME
  p('Mast Perfume','Velvet Rose','arabe',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  // RASASI
  p('Rasasi','Hawas for Him','arabe',[{size:'100ml',price:'$260.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Rasasi','Hawas Malibu','arabe',[{size:'100ml',price:'$280.000'},{size:'10ml',price:'$40.000'},{size:'5ml',price:'$28.000'}]),
  p('Rasasi','Hawas Kobra','arabe',[{size:'100ml',price:'$280.000'},{size:'10ml',price:'$40.000'},{size:'5ml',price:'$28.000'}]),
  p('Rasasi','Hawas Ice','arabe',[{size:'100ml',price:'$280.000'},{size:'10ml',price:'$40.000'},{size:'5ml',price:'$28.000'}]),

  // ── DISEÑADOR ──────────────────────────────────────────────────────────────
  // CAROLINA HERRERA
  p('Carolina Herrera','212 NYC','disenador',[{size:'100ml',price:'$350.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Carolina Herrera','212 VIP','disenador',[{size:'100ml',price:'$320.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Carolina Herrera','212 VIP Black','disenador',[{size:'100ml',price:'$380.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Carolina Herrera','VIP Black Elixir','disenador',[{size:'100ml',price:'$420.000'},{size:'10ml',price:'$58.000'},{size:'5ml',price:'$38.000'}]),
  p('Carolina Herrera','Forever Young','disenador',[{size:'80ml',price:'$420.000'},{size:'10ml',price:'$58.000'},{size:'5ml',price:'$40.000'}]),
  p('Carolina Herrera','NYC Woman','disenador',[{size:'100ml',price:'$390.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Carolina Herrera','212 VIP Rose','disenador',[{size:'80ml',price:'$400.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Carolina Herrera','Rose Elixir','disenador',[{size:'80ml',price:'$450.000'},{size:'10ml',price:'$60.000'},{size:'5ml',price:'$40.000'}]),
  // GIORGIO ARMANI
  p('Giorgio Armani','My Way Int','disenador',[{size:'90ml',price:'$400.000'},{size:'10ml',price:'$58.000'},{size:'5ml',price:'$40.000'}]),
  p('Giorgio Armani','Si Passione Int','disenador',[{size:'100ml',price:'$430.000'},{size:'10ml',price:'$60.000'},{size:'5ml',price:'$45.000'}]),
  p('Giorgio Armani','My Way L\'Parfum','disenador',[{size:'90ml',price:'$410.000'},{size:'10ml',price:'$58.000'},{size:'5ml',price:'$40.000'}]),
  p('Giorgio Armani','SWY Absolutely','disenador',[{size:'100ml',price:'$420.000'},{size:'10ml',price:'$58.000'},{size:'5ml',price:'$40.000'}]),
  // JEAN PAUL GAULTIER
  p('Jean Paul Gaultier','Le Beau L\'Parfum','disenador',[{size:'125ml',price:'$430.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Jean Paul Gaultier','Paradise Garden','disenador',[{size:'125ml',price:'$430.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Jean Paul Gaultier','Le Male Elixir','disenador',[{size:'125ml',price:'$425.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Jean Paul Gaultier','Le Male L\'Parfum','disenador',[{size:'125ml',price:'$410.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Jean Paul Gaultier','Scandal L\'Parfum','disenador',[{size:'100ml',price:'$420.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  p('Jean Paul Gaultier','Ultramale','disenador',[{size:'125ml',price:'$425.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$38.000'}]),
  // ARIANA GRANDE
  p('Ariana Grande','Cloud','disenador',[{size:'100ml',price:'$315.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Ariana Grande','Sweet Like Candy','disenador',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$25.000'},{size:'5ml',price:'$15.000'}]),
  p('Ariana Grande','Thank U Next','disenador',[{size:'100ml',price:'$230.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  // PACO RABANNE
  p('Paco Rabanne','One Million','disenador',[{size:'100ml',price:'$400.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  p('Paco Rabanne','Gold for Her','disenador',[{size:'100ml',price:'$480.000'}]),
  p('Paco Rabanne','Invictus Vic Elx','disenador',[{size:'100ml',price:'$390.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  // ISSEY MIYAKE
  p('Issey Miyake','L\'Eau Dissey','disenador',[{size:'100ml',price:'$315.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Issey Miyake','L\'D Pour Homme','disenador',[{size:'200ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  // LANCÔME
  p('Lancôme','Set Idole 4pzas','disenador',[{size:'100ml',price:'$490.000'}]),
  p('Lancôme','Set Est Belle 4pz','disenador',[{size:'100ml',price:'$510.000'}]),
  // MOSCHINO
  p('Moschino','Fresh Gold','disenador',[{size:'100ml',price:'$210.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Moschino','Toy 2','disenador',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Moschino','Toy Boy','disenador',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$25.000'}]),
  p('Moschino','Toffee Coffee','disenador',[{size:'100ml',price:'$240.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  p('Moschino','Mandarin Sky','disenador',[{size:'100ml',price:'$250.000'},{size:'10ml',price:'$35.000'},{size:'5ml',price:'$20.000'}]),
  // POLO
  p('Polo','Polo Blue','disenador',[{size:'125ml',price:'$400.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  p('Polo','Polo Red','disenador',[{size:'100ml',price:'$320.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  // TOMMY HILFIGER
  p('Tommy Hilfiger','Tommy Girl','disenador',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  p('Tommy Hilfiger','MS Elixir','disenador',[{size:'100ml',price:'$220.000'},{size:'10ml',price:'$30.000'},{size:'5ml',price:'$20.000'}]),
  // VERSACE
  p('Versace','Bright Crystal','disenador',[{size:'90ml',price:'$350.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Versace','DB Pour Femme','disenador',[{size:'100ml',price:'$310.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Versace','Eros EDP','disenador',[{size:'100ml',price:'$280.000'},{size:'10ml',price:'$40.000'},{size:'5ml',price:'$28.000'}]),
  p('Versace','Eros Flame','disenador',[{size:'200ml',price:'$320.000'},{size:'100ml',price:'$280.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$28.000'}]),
  p('Versace','Eros Energy','disenador',[{size:'100ml',price:'$280.000'},{size:'10ml',price:'$40.000'},{size:'5ml',price:'$28.000'}]),
  p('Versace','Eros Najim','disenador',[{size:'100ml',price:'$330.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Versace','Yellow Diamond','disenador',[{size:'90ml',price:'$275.000'},{size:'10ml',price:'$38.000'},{size:'5ml',price:'$28.000'}]),
  // YSL
  p('YSL','YSL Myself','disenador',[{size:'60ml',price:'$320.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  p('YSL','YSL Y EDP','disenador',[{size:'60ml',price:'$360.000'},{size:'10ml',price:'$55.000'},{size:'5ml',price:'$35.000'}]),
  // VIKTOR&ROLF
  p('Viktor&Rolf','Spicebomb Infrared','disenador',[{size:'90ml',price:'$310.000'},{size:'10ml',price:'$45.000'},{size:'5ml',price:'$30.000'}]),
  p('Viktor&Rolf','Flower Bomb 3pz','disenador',[{size:'100ml',price:'$450.000'}]),
  p('Viktor&Rolf','Spicebomb 2pz','disenador',[{size:'90ml',price:'$350.000'}]),
  p('Viktor&Rolf','FB Tiger Lily','disenador',[{size:'100ml',price:'$350.000'}]),

  // ── NICHO ─────────────────────────────────────────────────────────────────
  // AHLI
  p('Ahli','Canes','nicho',[{size:'60ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Ahli','Corvus','nicho',[{size:'60ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Ahli','Karpos','nicho',[{size:'60ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  p('Ahli','Vega','nicho',[{size:'60ml',price:'$360.000'},{size:'10ml',price:'$50.000'},{size:'5ml',price:'$35.000'}]),
  // ILMIN
  p('Ilmin','IL Bordeaux','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Dolce','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Ego','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Erotique','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Femme','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Kakuno','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Mexico','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Orgasme','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Roso','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Sexuel','nicho',[{size:'30ml',price:'$430.000'}]),
  p('Ilmin','IL Voss','nicho',[{size:'30ml',price:'$430.000'}]),
  // LORENZO PAZZAGLIA
  p('Lorenzo Pazzaglia','Black Sea','nicho',[{size:'50ml',price:'$630.000'}]),
  p('Lorenzo Pazzaglia','Que Chimba','nicho',[{size:'50ml',price:'$630.000'}]),
  p('Lorenzo Pazzaglia','Sex Sea','nicho',[{size:'50ml',price:'$630.000'}]),
  p('Lorenzo Pazzaglia','Summer Hammer','nicho',[{size:'50ml',price:'$630.000'}]),
  // MONTALE
  p('Montale','Arabians Tonka','nicho',[{size:'100ml',price:'$450.000'}]),
  p('Montale','Intense Cafe','nicho',[{size:'100ml',price:'$420.000'}]),
  // MANCERA
  p('Mancera','Instant Crush','nicho',[{size:'120ml',price:'$470.000'}]),
];
