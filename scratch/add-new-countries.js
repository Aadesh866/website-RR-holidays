const fs = require('fs');

const dbFile = './data/all-packages.json';
const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));

const sluggify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const newCountries = [
  {
    continent: "Asia",
    name: "Indonesia",
    packages: [
      { title: "Bali Explorer (5N/6D)", duration: "5 Nights / 6 Days" },
      { title: "Bali & Beyond (7N/8D)", duration: "7 Nights / 8 Days" }
    ]
  },
  {
    continent: "Asia",
    name: "Sri Lanka",
    packages: [
      { title: "Sri Lanka Highlights (6N/7D)", duration: "6 Nights / 7 Days" },
      { title: "Cultural Triangle (5N/6D)", duration: "5 Nights / 6 Days" }
    ]
  },
  {
    continent: "Asia",
    name: "Philippines",
    packages: [
      { title: "Palawan Beach Paradise (5N/6D)", duration: "5 Nights / 6 Days" },
      { title: "Boracay Getaway (4N/5D)", duration: "4 Nights / 5 Days" }
    ]
  },
  {
    continent: "Europe",
    name: "Turkey",
    packages: [
      { title: "Best of Turkey (7N/8D)", duration: "7 Nights / 8 Days" },
      { title: "Istanbul & Cappadocia (5N/6D)", duration: "5 Nights / 6 Days" }
    ]
  },
  {
    continent: "Middle East",
    name: "Egypt",
    packages: [
      { title: "Pyramids & Nile Cruise (6N/7D)", duration: "6 Nights / 7 Days" },
      { title: "Ancient Wonders (8N/9D)", duration: "8 Nights / 9 Days" }
    ]
  },
  {
    continent: "Middle East",
    name: "Qatar",
    packages: [
      { title: "Doha City Break (3N/4D)", duration: "3 Nights / 4 Days" }
    ]
  },
  {
    continent: "Africa",
    name: "Kenya",
    packages: [
      { title: "Masai Mara Safari (5N/6D)", duration: "5 Nights / 6 Days" },
      { title: "Kenya Wildlife Explorer (7N/8D)", duration: "7 Nights / 8 Days" }
    ]
  },
  {
    continent: "Africa",
    name: "Mauritius",
    packages: [
      { title: "Mauritius Romantic Retreat (6N/7D)", duration: "6 Nights / 7 Days" },
      { title: "Mauritius Family Fiesta (5N/6D)", duration: "5 Nights / 6 Days" }
    ]
  },
  {
    continent: "Africa",
    name: "Seychelles",
    packages: [
      { title: "Seychelles Island Hop (6N/7D)", duration: "6 Nights / 7 Days" }
    ]
  },
  {
    continent: "Oceania",
    name: "Fiji",
    packages: [
      { title: "Fiji Island Escape (5N/6D)", duration: "5 Nights / 6 Days" }
    ]
  },
  {
    continent: "Americas",
    name: "USA",
    packages: [
      { title: "Classic West Coast (8N/9D)", duration: "8 Nights / 9 Days" },
      { title: "New York Highlights (4N/5D)", duration: "4 Nights / 5 Days" },
      { title: "East Coast Explorer (7N/8D)", duration: "7 Nights / 8 Days" }
    ]
  },
  {
    continent: "Americas",
    name: "Canada",
    packages: [
      { title: "Canadian Rockies (7N/8D)", duration: "7 Nights / 8 Days" },
      { title: "Niagara & Toronto (4N/5D)", duration: "4 Nights / 5 Days" }
    ]
  },
  {
    continent: "Americas",
    name: "Brazil",
    packages: [
      { title: "Rio & Iguazu Falls (6N/7D)", duration: "6 Nights / 7 Days" }
    ]
  }
];

newCountries.forEach(nc => {
  // Check if country already exists
  if (!db.some(c => c.name === nc.name)) {
    // Generate full packages
    const populatedPackages = nc.packages.map(p => {
      // Basic price logic
      let basePrice = 45000;
      if (nc.continent === "Americas" || nc.continent === "Oceania" || nc.continent === "Europe") basePrice = 120000;
      if (nc.continent === "Africa" && nc.name === "Kenya") basePrice = 90000;
      const days = parseInt(p.duration.match(/(\d+)\s*Nights?/)[1]) + 1;
      const finalPrice = basePrice + (days * 12000);
      const originalPrice = finalPrice + 15000;

      return {
        title: p.title,
        slug: sluggify(p.title),
        duration: p.duration,
        price: finalPrice,
        originalPrice: originalPrice,
        category: "International",
        overview: "", // will be filled by fill-packages.js
        highlights: [],
        inclusions: [],
        exclusions: [],
        itinerary: [],
        imageUrl: "",
        images: []
      };
    });

    db.push({
      continent: nc.continent,
      name: nc.name,
      markdownContent: `## Why Visit ${nc.name}?\n\nExperience the best of ${nc.name} with our curated packages.`,
      packages: populatedPackages
    });
    console.log(`Added country: ${nc.name} with ${populatedPackages.length} packages.`);
  }
});

fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf8');
console.log('Done!');
