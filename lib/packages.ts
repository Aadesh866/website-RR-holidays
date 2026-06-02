import allPackagesData from '@/data/all-packages.json'

export interface ItineraryDay {
  title: string
  activities: string[]
}

export interface Package {
  title: string
  slug: string
  duration: string
  overview: string
  highlights: string[]
  inclusions: string[]
  itinerary: ItineraryDay[]
  imagePrompts: string[]
}

export interface Country {
  name: string
  continent: string
  overview: string
  markdownContent?: string
  packages: Package[]
}

// Function to sluggify names (e.g. "SOUTH AFRICA" -> "south-africa")
export function sluggify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getAllCountries(): Country[] {
  return allPackagesData as Country[]
}

export function getPackagesByCountry(continentSlug: string, countrySlug: string): Country | null {
  const countries = getAllCountries()
  
  const foundCountry = countries.find(c => 
    sluggify(c.continent) === continentSlug && 
    sluggify(c.name) === countrySlug
  )

  return foundCountry || null
}

export function getPackageBySlug(continentSlug: string, countrySlug: string, packageSlug: string): { country: Country, pkg: Package } | null {
  const country = getPackagesByCountry(continentSlug, countrySlug)
  if (!country) return null

  const pkg = country.packages.find(p => p.slug === packageSlug)
  return pkg ? { country, pkg } : null
}

export function getRelatedPackages(continentSlug: string, excludePackageSlug: string, limit: number = 3): (Package & { countryName: string, countrySlug: string })[] {
  const countries = getAllCountries()
  let related: (Package & { countryName: string, countrySlug: string })[] = []
  
  const sourceCountry = countries.find(c => sluggify(c.continent) === continentSlug && c.packages.some(p => p.slug === excludePackageSlug))
  
  if (sourceCountry) {
    const pkgs = sourceCountry.packages.filter(p => p.slug !== excludePackageSlug).map(p => ({
      ...p,
      countryName: sourceCountry.name,
      countrySlug: sluggify(sourceCountry.name)
    }))
    related.push(...pkgs)
  }
  
  if (related.length < limit) {
    const continentCountries = countries.filter(c => sluggify(c.continent) === continentSlug)
    for (const country of continentCountries) {
      if (related.length >= limit) break;
      const otherPackages = country.packages
        .filter(p => p.slug !== excludePackageSlug && !related.some(r => r.slug === p.slug))
        .map(p => ({
          ...p,
          countryName: country.name,
          countrySlug: sluggify(country.name)
        }))
      related.push(...otherPackages)
    }
  }
  
  return related.slice(0, limit)
}

export function getTopPackages(limit: number = 6): { countryName: string, continentSlug: string, countrySlug: string, pkg: Package }[] {
  const countries = getAllCountries()
  const topPackages = []
  
  // Just get a mix of packages from different countries for the overview page
  for (const country of countries) {
    if (country.packages.length > 0) {
      topPackages.push({
        countryName: country.name,
        continentSlug: sluggify(country.continent),
        countrySlug: sluggify(country.name),
        pkg: country.packages[0]
      })
      if (topPackages.length >= limit) break
    }
  }
  
  return topPackages
}
