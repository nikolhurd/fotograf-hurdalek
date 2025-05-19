// Importujeme potřebné typy (cesta je nyní relativní k této složce)
import type { PricingOption } from "../../../components/PricingSection";
import type { PricingListItem } from "../../../components/PricingList";

// Data specifická pro svatby - Balíčky
export const weddingPricingOptions: PricingOption[] = [
  {
    title: "Celý den",
    price: "od 25 000 Kč",
    description: "Zachycení vašeho dne od příprav až po večerní zábavu.",
    features: [
      "10-12 hodin focení",
      "Předsvatební schůzka",
      "Min. 400 upravených fotek",
      "Online galerie",
      "Doprava v ceně (do 50km)",
    ],
  },
  {
    title: "Obřad a hostina",
    price: "od 15 000 Kč",
    description: "Focení obřadu, skupinové fotky a začátek hostiny.",
    features: [
      "4-6 hodin focení",
      "Předsvatební schůzka",
      "Min. 200 upravených fotek",
      "Online galerie",
    ],
  },
  {
    title: "Jen obřad",
    price: "od 8 000 Kč",
    description: "Zdokumentování svatebního obřadu a gratulací.",
    features: [
      "cca 2 hodiny focení",
      "Min. 80 upravených fotek",
      "Online galerie",
    ],
  },
];

// Data pro seznam doplňků - Svatby
export const weddingAddons: PricingListItem[] = [
  {
    name: "Svatební fotokniha (Lux)",
    price: "od 5 000 Kč",
    description: "Kvalitní tisk, různé formáty a materiály.",
  },
  {
    name: "Předsvatební focení",
    price: "6 000 Kč",
    description: "Uvolněné focení pár týdnů před svatbou.",
  },
  {
    name: "Tištěné fotografie (100ks)",
    price: "1 500 Kč",
    description: "V dárkovém boxu.",
  },
  {
    name: "Druhý fotograf",
    price: "dle domluvy",
    description: "Pro zachycení více úhlů a momentů.",
  },
];
