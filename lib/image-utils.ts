import allPackagesData from '@/data/all-packages.json';

const FALLBACK_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Al_Deir_Petra.JPG";

/**
 * Gets a deterministic image URL based on the slug.
 * It looks up the country or package in the database to fetch the exact, specific Wikipedia images 
 * associated with it, ensuring high-quality and contextually accurate photos.
 */
export function getContextualImage(slug: string, index: number = 0, type: "hero" | "gallery" | "card" = "gallery"): string {
  const db = allPackagesData as any[];
  
  // 1. Try to find if slug matches a Country
  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const country = db.find(c => 
    c.slug === cleanSlug || 
    c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === cleanSlug
  );
  
  if (country) {
    if (country.imageUrl) return country.imageUrl;
    return FALLBACK_IMAGE;
  }
  
  // 2. Try to find if slug matches a Package
  for (const c of db) {
    if (!c.packages) continue;
    const pkg = c.packages.find((p: any) => p.slug === cleanSlug || p.slug === slug);
    if (pkg) {
      if (pkg.images && pkg.images.length > 0) {
        // Return the image at the requested index, wrapping around if index > length
        return pkg.images[index % pkg.images.length];
      }
      return FALLBACK_IMAGE;
    }
  }
  
  // Last resort fallback
  return FALLBACK_IMAGE;
}
