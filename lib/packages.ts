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
  state?: string
  stateSlug?: string
}

export interface Country {
  name: string
  continent: string
  overview: string
  markdownContent?: string
  packages: Package[]
}

export interface ParsedCountryData {
  overview: string;
  stats: { label: string; value: string }[];
  tips: { title: string; content: string }[];
}

export function parseCountryMarkdown(markdown: string | undefined): ParsedCountryData {
  const result: ParsedCountryData = { overview: '', stats: [], tips: [] };
  if (!markdown) return result;

  const lines = markdown.split('\n');
  let currentSection = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### Country Overview')) {
      currentSection = 'overview';
      continue;
    } else if (trimmed.startsWith('### Country Information')) {
      currentSection = 'stats';
      continue;
    } else if (trimmed.startsWith('### Essential Travel Tips')) {
      currentSection = 'tips';
      continue;
    } else if (trimmed.startsWith('###')) {
      currentSection = 'other';
      continue;
    }

    if (currentSection === 'overview' && trimmed && !trimmed.startsWith('#')) {
      result.overview += trimmed + '\n\n';
    } else if (currentSection === 'stats' && trimmed.startsWith('**')) {
      // e.g. **Capital:** Rome
      const match = trimmed.match(/\*\*(.*?):\*\*\s*(.*)/);
      if (match) {
        result.stats.push({ label: match[1].trim(), value: match[2].trim() });
      }
    } else if (currentSection === 'tips' && trimmed.startsWith('**')) {
      // e.g. **ATM & Banking:** text...
      const match = trimmed.match(/\*\*(.*?):\*\*\s*(.*)/);
      if (match) {
        result.tips.push({ title: match[1].trim(), content: match[2].trim() });
      }
    }
  }

  result.overview = result.overview.trim();
  return result;
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
  const related: (Package & { countryName: string, countrySlug: string })[] = []
  
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

export function getPackagesByCategory(category: string, limit: number = 12): { countryName: string, continentSlug: string, countrySlug: string, pkg: Package }[] {
  const countries = getAllCountries()
  const results = []
  
  const keywordsMap: Record<string, string[]> = {
    'honeymoon': ['honeymoon', 'romantic', 'couple', 'maldives', 'bali', 'mauritius', 'seychelles', 'santorini', 'venice', 'paris'],
    'educational': ['education', 'student', 'history', 'heritage', 'museum', 'culture', 'university'],
  }
  
  const keywords = keywordsMap[category.toLowerCase()] || [category.toLowerCase()]

  for (const country of countries) {
    for (const pkg of country.packages) {
      const searchableText = `${pkg.title} ${pkg.overview} ${pkg.highlights.join(' ')}`.toLowerCase()
      
      const isMatch = keywords.some(keyword => searchableText.includes(keyword))
      
      if (isMatch) {
        results.push({
          countryName: country.name,
          continentSlug: sluggify(country.continent),
          countrySlug: sluggify(country.name),
          pkg: pkg
        })
      }
      
      if (results.length >= limit) {
        return results
      }
    }
  }
  
  // If we didn't find enough, just return whatever we have
  return results
}
