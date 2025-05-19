import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mně | Fotograf Martin Hurdálek",
};

export default function AboutMePage() {
  return (
    <section className="py-16 md:py-24 text-white">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm h-[600px] md:max-w-md lg:max-w-none lg:w-[450px] lg:h-[650px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/portrait-placeholder.jpg" // Placeholder
                alt="Portrét fotografa Martina Hurdálka"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 450px"
              />
              {/* Fallback pro obrázek*/}
              <div className="absolute inset-0 bg-gray-700 -z-10 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                Obrázek se načítá...
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-martel text-white mb-4">
              Dobrý den,
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>
                jmenuji se Martin Hurdálek a jako fotograf působím tady na
                Náchodsku už přes 35 let. Za tu dobu jsem si nejvíce oblíbil
                focení dětí ve školkách a školách. Jejich energie a
                bezprostřednost jsou prostě skvělé.
              </p>
              <p>
                Moje původní vzdělání v oblasti mimoškolní pedagogiky mi asi
                pomáhá lépe navázat kontakt a zajistit, aby focení proběhlo v
                klidu a pohodě. Výsledkem by pak měly být hlavně přirozené
                fotky, které zachytí tu správnou atmosféru.
              </p>
              <p>
                Občas si fotím i reportáže, svatby nebo plesy.Pokud vás má práce
                zaujala a hledáte spolehlivého fotografa s citem pro práci s
                dětmi, neváhejte mě kontaktovat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
