const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'all-packages.json');
let content = fs.readFileSync(filePath, 'utf8');
if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
const data = JSON.parse(content);

const southIndia = data.find(c => c.name === 'SOUTH INDIA');

if (southIndia) {
  const newPackages = [
    {
      "slug": "ooty-coonoor-getaway-3n-4d",
      "title": "Ooty & Coonoor Getaway (3N/4D)",
      "duration": "3N/4D",
      "overview": "Escape to the Queen of Hill Stations. Enjoy the pleasant climate, tea gardens, and the famous Nilgiri Mountain Railway.",
      "highlights": ["Nilgiri Mountain Railway", "Ooty Lake", "Sim's Park", "Tea Estates"],
      "images": [],
      "stateSlug": "tamil-nadu",
      "itinerary": []
    },
    {
      "slug": "mysore-coorg-trail-4n-5d",
      "title": "Mysore & Coorg Trail (4N/5D)",
      "duration": "4N/5D",
      "overview": "Experience the royal heritage of Mysore followed by the serene coffee plantations and waterfalls of Coorg.",
      "highlights": ["Mysore Palace", "Abbey Falls", "Coffee Plantations", "Namdroling Monastery"],
      "images": [],
      "stateSlug": "karnataka",
      "itinerary": []
    },
    {
      "slug": "kanyakumari-rameshwaram-pilgrimage-4n-5d",
      "title": "Kanyakumari & Rameshwaram Pilgrimage (4N/5D)",
      "duration": "4N/5D",
      "overview": "A spiritual journey to the southernmost tip of India and the sacred island of Rameshwaram.",
      "highlights": ["Vivekananda Rock Memorial", "Ramanathaswamy Temple", "Dhanushkodi", "Triveni Sangam"],
      "images": [],
      "stateSlug": "tamil-nadu",
      "itinerary": []
    },
    {
      "slug": "munnar-thekkady-wildlife-4n-5d",
      "title": "Munnar & Thekkady Wildlife (4N/5D)",
      "duration": "4N/5D",
      "overview": "Discover the misty hills of Munnar and the thrilling wildlife of Periyar National Park in Thekkady.",
      "highlights": ["Periyar National Park", "Mattupetty Dam", "Spice Plantations", "Elephant Safari"],
      "images": [],
      "stateSlug": "kerala",
      "itinerary": []
    },
    {
      "slug": "pondicherry-french-riviera-3n-4d",
      "title": "Pondicherry French Riviera (3N/4D)",
      "duration": "3N/4D",
      "overview": "Relax in the French capital of India. Explore colonial architecture, serene ashrams, and beautiful beaches.",
      "highlights": ["Auroville", "Promenade Beach", "French Quarter", "Sri Aurobindo Ashram"],
      "images": [],
      "stateSlug": "puducherry",
      "itinerary": []
    },
    {
      "slug": "hampi-badami-heritage-5n-6d",
      "title": "Hampi & Badami Heritage (5N/6D)",
      "duration": "5N/6D",
      "overview": "Step back in time to the glorious Vijayanagara Empire with a tour of the mesmerizing ruins of Hampi and Badami.",
      "highlights": ["Virupaksha Temple", "Vittala Temple", "Badami Cave Temples", "Tungabhadra River"],
      "images": [],
      "stateSlug": "karnataka",
      "itinerary": []
    }
  ];

  // Fix itineraries
  newPackages.forEach(pkg => {
    const days = parseInt(pkg.duration.match(/(\d+)D/)[1]);
    for(let i=1; i<=days; i++) {
      pkg.itinerary.push({
        title: "Day " + i + ": South India Exploration",
        activities: [
          "Enjoy breakfast and proceed for sightseeing.",
          "Visit key attractions mentioned in the highlights.",
          "Return to hotel for overnight stay."
        ]
      });
    }
  });

  southIndia.packages.push(...newPackages);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log("Added 6 packages to South India!");
}
