// components/HeroV2.tsx
"use client";

import React from "react";
import Button from "./Button";
import WavyUnderline from "./WavyUnderline";

const Hero: React.FC = () => {
  return (
    // Sekce zabírající minimálně výšku obrazovky, tmavé pozadí
    // Použití flexboxu pro centrování obsahu vertikálně i horizontálně
    <section className=" flex items-center justify-center text-center text-white px-10 py-30">
      <div>
        {/* Hlavní nadpis */}
        {/* Použije výchozí písmo (Geist Sans), velmi tučné */}
        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl  // Responzivní velikost textu
          font-extrabold           // Velmi tučné písmo
          leading-tight            // Menší řádkování
          uppercase                // Velká písmena
          tracking-wide            // Širší mezery mezi písmeny
          mb-12                    // Spodní margin
          drop-shadow-lg drop-shadow-cyan-500/50
        "
        >
          Jmenuji se Martin Hurdálek, <br className="hidden sm:block" /> jsem
          fotograf z Náchoda
          <WavyUnderline
            color="red"
            className="drop-shadow-xl drop-shadow-gray-300/50"
          />
        </h1>

        {/* Kontejner pro tlačítka */}
        {/* Použití flexboxu pro umístění vedle sebe s mezerou */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href="/galerie">Prohlédnout portfolio</Button>
          <Button href="/kontakt">Kontaktovat</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
