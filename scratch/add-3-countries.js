const fs = require('fs');

const dbFile = './data/all-packages.json';
const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));

const sluggify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const newCountries = [
  {
    continent: "Americas",
    name: "Mexico",
    packages: [
      { title: "Cancun Beach Escape (5N/6D)", duration: "5 Nights / 6 Days" },
      { title: "Mayan Ruins Explorer (6N/7D)", duration: "6 Nights / 7 Days" }
    ]
  },
  {
    continent: "Americas",
    name: "Argentina",
    packages: [
      { title: "Buenos Aires City Break (4N/5D)", duration: "4 Nights / 5 Days" },
      { title: "Patagonia Adventure (7N/8D)", duration: "7 Nights / 8 Days" }
    ]
  },
  {
    continent: "Oceania",
    name: "Bora Bora",
    packages: [
      { title: "Bora Bora Romantic Getaway (5N/6D)", duration: "5 Nights / 6 Days" }
    ]
  }
];

newCountries.forEach(nc => {
  if (!db.some(c => c.name === nc.name)) {
    const populatedPackages = nc.packages.map(p => {
      let basePrice = 120000;
      const days = parseInt(p.duration.match(/(\d+)\s*Nights?/)[1]) + 1;
      const finalPrice = basePrice + (days * 12000);
      return {
        title: p.title,
        slug: sluggify(p.title),
        duration: p.duration,
        price: finalPrice,
        originalPrice: finalPrice + 15000,
        category: "International",
        overview: "",
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
    console.log(`Added country: ${nc.name}`);
  }
});

fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf8');
console.log('Done adding shells!');
