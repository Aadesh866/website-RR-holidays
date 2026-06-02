import fs from 'fs'
import path from 'path'

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
  packages: Package[]
}

// Function to sluggify names (e.g. "SOUTH AFRICA" -> "south-africa")
export function sluggify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getAllCountries(): Country[] {
  const filePath = path.join(process.cwd(), 'data', 'all-packages.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
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
  
  if (!pkg) return null
  
  return { country, pkg }
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
