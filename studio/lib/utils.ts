import {client} from './client'
import type {Photo} from 'react-photo-album'

interface SanityGalleryImage {
  _id: string
  title?: string
  alt?: string
  imageUrl: string
  metadata: {
    dimensions: {
      width: number
      height: number
      aspectRatio: number
    }
  }
  category?: string
}

/**
 * Načte fotografie ze Sanity, volitelně filtrované podle kategorie.
 * @param category - Volitelný název kategorie pro filtrování.
 * @returns Pole objektů Photo pro react-photo-album.
 */
export async function getGalleryPhotosByCategory(category?: string): Promise<Photo[]> {
  let query = `*[_type == "galleryImage"`
  if (category) {
    query += ` && category == $category`
  }
  // Přidáme výchozí řazení od nejnovějších i zde
  query += `] | order(_createdAt desc) {
    _id,
    title,
    alt,
    "imageUrl": image.asset->url,
    "metadata": image.asset->metadata { dimensions }
  }`

  const params = category ? {category: category} : {}

  try {
    const sanityData: SanityGalleryImage[] = await client.fetch(query, params)
    const photosForAlbum: Photo[] = sanityData
      .filter((img) => img.imageUrl && img.metadata?.dimensions)
      .map((img) => ({
        key: img._id,
        src: img.imageUrl,
        width: img.metadata.dimensions.width,
        height: img.metadata.dimensions.height,
        alt: img.alt || img.title || 'Fotografie z galerie',
      }))
    return photosForAlbum
  } catch (error) {
    console.error('Error fetching Sanity photos:', error)
    return []
  }
}

/**
 * Načte nejnovější fotografie pro náhled na homepage z vybraných kategorií.
 * @param limit - Maximální počet fotek k načtení.
 * @param categories - Pole názvů kategorií, ze kterých se má vybírat.
 * @returns Pole objektů Photo pro react-photo-album.
 */
export async function getLatestPhotosForHomepage(
  limit: number = 6,
  categories: string[] = ['svatby', 'ostatni', 'vitani'],
): Promise<Photo[]> {
  // Sestavíme část dotazu pro filtrování kategorií
  // Vytvoří string jako 'category == "svatby" || category == "ostatni" || category == "vitani"'
  const categoryFilter = categories.map((cat) => `category == "${cat}"`).join(' || ')

  // GROQ dotaz: Vyber fotky daných kategorií, seřaď od nejnovějších a omez počet
  const query = `*[_type == "galleryImage" && (${categoryFilter})] | order(_createdAt desc) [0...$limit]{
    _id,
    title,
    alt,
    "imageUrl": image.asset->url,
    "metadata": image.asset->metadata { dimensions }
  }`

  const params = {limit} // Parametr pro limit

  try {
    const sanityData: SanityGalleryImage[] = await client.fetch(query, params)

    const photosForAlbum: Photo[] = sanityData
      .filter((img) => img.imageUrl && img.metadata?.dimensions)
      .map((img) => ({
        key: img._id,
        src: img.imageUrl,
        width: img.metadata.dimensions.width,
        height: img.metadata.dimensions.height,
        alt: img.alt || img.title || 'Fotografie z galerie',
      }))

    return photosForAlbum
  } catch (error) {
    console.error('Error fetching homepage photos:', error)
    return []
  }
}
