/**
 * Generates a deterministic image URL based on a string and an index using LoremFlickr.
 * This ensures we get real, high-quality photography from Flickr based on context,
 * avoiding generic stock pools or hallucinatory AI images.
 */
export function getContextualImage(slug: string, index: number = 0, type: "hero" | "gallery" | "card" = "gallery"): string {
  
  // Clean the slug to create perfect keywords for Flickr
  // 1. Remove duration patterns like -6n-7d or -5n
  let cleanSlug = slug.replace(/-\d+[a-z]-\d+[a-z]/gi, '').replace(/-\d+[a-z]/gi, '');
  
  // 2. Replace hyphens with commas for Flickr keyword searching
  let keywords = cleanSlug.replace(/-/g, ',');
  
  // Add landscape to ensure we get scenic orientation
  keywords += ',landscape';

  // Determine size based on use-case
  let width = 1600;
  let height = 1000;
  
  if (type === "card") {
    width = 800;
    height = 500;
  } else if (type === "gallery") {
    // some gallery images might be smaller, but 1200x800 is a safe high-res
    width = 1200;
    height = 800;
  }

  // Use a simple hash of the slug to seed the lock parameter deterministically
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Create a unique lock ID for this specific image to ensure it never changes on reload
  const lockId = Math.abs(hash + (index * 997)) % 10000;

  // Build the LoremFlickr URL
  // Format: https://loremflickr.com/{width}/{height}/{keywords}/all?lock={lockId}
  return `https://loremflickr.com/${width}/${height}/${keywords}/all?lock=${lockId}`;
}
