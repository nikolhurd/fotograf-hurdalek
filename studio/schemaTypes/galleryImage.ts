// studio/schemaTypes/galleryImage.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage', // Název typu (interní)
  title: 'Fotografie do Galerie', // Název v Sanity Studiu
  type: 'document', // Typ dokumentu (samostatná položka v Sanity)

  // Pole (fields), která bude dokument obsahovat
  fields: [
    defineField({
      name: 'title',
      title: 'Název / Popisek (interní)',
      type: 'string',
      description: 'Krátký název pro snadnou identifikaci v administraci.',
      validation: (Rule) => Rule.required().error('Název je povinný.'), // Povinné pole
    }),
    defineField({
      name: 'image',
      title: 'Obrázek',
      type: 'image', // Sanity typ pro obrázky
      options: {
        hotspot: true, // Umožňuje vybrat "focus point" pro ořezy
      },
      validation: (Rule) => Rule.required().error('Obrázek je povinný.'),
      // Sanity automaticky uloží metadata jako rozměry
      // Pokud budeš používat Cloudinary, změníš type na 'cloudinary.asset'
    }),
    defineField({
      name: 'alt',
      title: 'Alternativní text (Alt)',
      type: 'string',
      description: 'Krátký popis obrázku pro SEO a přístupnost (důležité!).',
      validation: (Rule) => Rule.required().error('Alternativní text je povinný.'),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      description: 'Vyberte kategorii, do které fotka spadá (pro filtrování).',
      options: {
        list: [
          {title: 'Svatby', value: 'svatby'},
          {title: 'Maturitní plesy', value: 'plesy'},
          {title: 'Školy - Vánoční', value: 'skoly-vanocni'}, // Nová
          {title: 'Školy - Jarní', value: 'skoly-jarni'}, // Nová
          {title: 'Školy - Prvňáčci', value: 'skoly-prvnacci'}, // Nová
          {title: 'Školy - Tabla', value: 'skoly-tabla'}, // Nová
          {title: 'Školy - Konec roku', value: 'skoly-konec-roku'}, // Nová
          {title: 'Vítání občánků', value: 'vitani'},
          {title: 'Ostatní', value: 'ostatni'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Kategorie je povinná.'),
    }),
  ],

  // Volitelně: Jak se bude dokument zobrazovat v seznamu v Sanity Studiu
  preview: {
    select: {
      title: 'title',
      media: 'image', // Zobrazí náhled obrázku
      category: 'category',
    },
    prepare(selection) {
      const {title, media, category} = selection
      return {
        title: title,
        media: media,
        subtitle: category
          ? `Kategorie: ${category.charAt(0).toUpperCase() + category.slice(1)}`
          : 'Bez kategorie',
      }
    },
  },
})
