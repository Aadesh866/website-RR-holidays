export interface ItineraryDay {
  day: number;
  title: string;
  morning: string;
  lunch: string;
  afternoon: string;
  evening: string;
  dinner: string;
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  description: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice: number;
  features: string[];
  category: "International" | "Domestic" | "Honeymoon" | "Adventure";
  itinerary: ItineraryDay[];
}

export const packages: Package[] = [
  {
    id: "maldives-escape",
    name: "Romantic Maldives Escape",
    duration: "7 Days / 6 Nights",
    description: "Overwater villa stay, sunset dolphin cruise, private beach dinner under the stars",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/MaldivesBungalows.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 54999,
    originalPrice: 62999,
    category: "Honeymoon",
    features: [
      "Overwater villa accommodation",
      "Sunset dolphin cruise",
      "Private beach dinner",
      "Snorkeling equipment included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        morning: "Arrive at Velana International Airport. Greeted by our representative. Scenic seaplane transfer to your luxury resort.",
        lunch: "Welcome lunch at the main resort restaurant featuring global cuisines.",
        afternoon: "Check-in to your Overwater Villa. Time to unpack, relax, and take your first dip into the crystal-clear lagoon directly from your deck.",
        evening: "Resort orientation and a gentle walk along the pristine white sand beach.",
        dinner: "Romantic candlelit dinner by the beach with a customized seafood menu."
      },
      {
        day: 2,
        title: "Lagoon Exploration & Snorkeling",
        morning: "Gourmet buffet breakfast with tropical fruits and fresh pastries. Head out for a guided house-reef snorkeling session.",
        lunch: "Casual lunch at the poolside bar with tropical cocktails.",
        afternoon: "Free time to enjoy water sports like paddleboarding or kayaking around the calm lagoon waters.",
        evening: "Sunset Dolphin Cruise on a traditional Dhoni boat. Watch playful dolphins as the sun dips below the horizon.",
        dinner: "Dinner at the underwater restaurant, surrounded by marine life."
      },
      {
        day: 3,
        title: "Spa Day & Relaxation",
        morning: "Breakfast in bed. Proceed to the award-winning Overwater Spa for a 90-minute couples Balinese massage.",
        lunch: "Healthy organic lunch at the Spa Cafe.",
        afternoon: "Lounge by your private infinity pool. Perfect time for photography and soaking up the sun.",
        evening: "Beachside cocktail hour with live acoustic music.",
        dinner: "Gourmet dining experience at the resort's signature Teppanyaki restaurant."
      },
      {
        day: 4,
        title: "Local Island Excursion",
        morning: "Early breakfast. Take a speedboat to a nearby inhabited local island to experience authentic Maldivian culture and lifestyle.",
        lunch: "Traditional Maldivian lunch (Garudhiya and Mashuni) prepared by locals.",
        afternoon: "Shop for local handicrafts and souvenirs. Return to the resort.",
        evening: "Movie night under the stars on the beach with popcorn and champagne.",
        dinner: "International buffet dinner with a live cooking station."
      },
      {
        day: 5,
        title: "Adventure & Water Sports",
        morning: "Energizing breakfast. Get your adrenaline pumping with jet skiing or a thrilling parasailing session over the atolls.",
        lunch: "Mediterranean style lunch at the oceanfront Italian restaurant.",
        afternoon: "Relaxation time or opt for a Scuba Diving introductory course (optional).",
        evening: "Sunset yoga session on the beach pavilion led by a wellness expert.",
        dinner: "Exclusive private sandbank dinner setup. A truly magical and intimate experience."
      },
      {
        day: 6,
        title: "Leisure & Photography",
        morning: "Floating breakfast served in your private pool. Capture stunning photos for your memories.",
        lunch: "Light lunch at the beach club.",
        afternoon: "Farewell walk around the island. Collect some shells and enjoy the final ocean breeze.",
        evening: "Farewell cocktail reception hosted by the resort management.",
        dinner: "Grand farewell Gala Dinner featuring a mix of Maldivian, Asian, and Continental delicacies."
      },
      {
        day: 7,
        title: "Departure with Memories",
        morning: "Final breakfast at the resort. Pack your bags and bid goodbye to the island paradise.",
        lunch: "Early light lunch depending on your flight schedule.",
        afternoon: "Seaplane transfer back to Male Velana International Airport for your onward journey.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps Adventure",
    duration: "7 Days / 6 Nights",
    description: "Jungfraujoch, Interlaken, Lucerne lake cruise, chocolate factory tour",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 185000,
    originalPrice: 210000,
    category: "International",
    features: [
      "Jungfraujoch Top of Europe visit",
      "Interlaken adventure activities",
      "Lucerne lake cruise",
      "Swiss chocolate factory tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich",
        morning: "Arrive at Zurich Airport. Meet and greet by our tour manager. Scenic transfer to Lucerne.",
        lunch: "Authentic Swiss lunch in a traditional restaurant in Lucerne old town.",
        afternoon: "Check-in to your premium hotel. Brief orientation and a leisurely walking tour of the Chapel Bridge and Lion Monument.",
        evening: "Enjoy a peaceful evening walking along Lake Lucerne.",
        dinner: "Welcome dinner featuring traditional Swiss Cheese Fondue."
      },
      {
        day: 2,
        title: "Mt. Titlis & Lake Cruise",
        morning: "Hearty breakfast. Excursion to Mt. Titlis via the rotating Rotair cable car. Experience the Ice Flyer and Glacier Cave.",
        lunch: "Lunch at the Panorama Restaurant atop Mt. Titlis.",
        afternoon: "Return to Lucerne. Enjoy a scenic 1-hour cruise on Lake Lucerne with stunning Alpine backdrops.",
        evening: "Free time for shopping for Swiss watches and souvenirs.",
        dinner: "Dinner at an Indian or local European restaurant of your choice."
      },
      {
        day: 3,
        title: "Interlaken Transfer & Chocolate Tour",
        morning: "Breakfast and check-out. Board the premium GoldenPass Line train towards Interlaken.",
        lunch: "Lunch onboard the train or upon arrival in Interlaken.",
        afternoon: "Visit a famous Swiss Chocolate Factory (Lindt Home of Chocolate experience). Enjoy tasting sessions.",
        evening: "Check-in to your Interlaken hotel. Stroll down the Hoheweg promenade.",
        dinner: "Gourmet dinner in Interlaken overlooking the Jungfrau massif."
      },
      {
        day: 4,
        title: "Jungfraujoch - Top of Europe",
        morning: "Early breakfast. Board the cogwheel train to Jungfraujoch, the highest railway station in Europe.",
        lunch: "Lunch at the Top of Europe complex with breathtaking views of the Aletsch Glacier.",
        afternoon: "Explore the Ice Palace and Sphinx Observatory. Train ride back down via Grindelwald.",
        evening: "Relaxing evening at the hotel. Optional visit to the Casino Kursaal.",
        dinner: "Hearty dinner featuring Swiss Rösti and local delicacies."
      },
      {
        day: 5,
        title: "Zermatt & Matterhorn",
        morning: "Breakfast. Scenic train ride to the car-free village of Zermatt.",
        lunch: "Lunch in Zermatt village with views of the iconic Matterhorn peak.",
        afternoon: "Ride the Gornergrat Bahn cog railway for the best panoramic views of the Matterhorn.",
        evening: "Explore the charming wooden chalets and boutique shops of Zermatt.",
        dinner: "Dinner at a traditional Valais restaurant."
      },
      {
        day: 6,
        title: "Bern City Tour",
        morning: "Breakfast. Travel to Bern, the capital of Switzerland. Guided tour of the UNESCO World Heritage Old Town.",
        lunch: "Lunch at a lively cafe in the Bärenplatz.",
        afternoon: "Visit the Bear Park and the famous Zytglogge (Clock Tower). Transfer back to Zurich.",
        evening: "Check-in to your Zurich hotel. Enjoy a farewell stroll down the luxurious Bahnhofstrasse.",
        dinner: "Farewell Gala Dinner at a premium Zurich restaurant."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Final Swiss breakfast. Depending on flight time, optional visit to the Rhine Falls.",
        lunch: "Quick lunch near the airport.",
        afternoon: "Transfer to Zurich Airport for your flight back home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "kashmir-paradise",
    name: "Kashmir Paradise",
    duration: "7 Days / 6 Nights",
    description: "Shikara ride on Dal Lake, Gulmarg gondola, Pahalgam valley, houseboat stay",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Srinagar_pano.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 28999,
    originalPrice: 34999,
    category: "Domestic",
    features: [
      "Shikara ride on Dal Lake",
      "Gulmarg gondola ride",
      "Pahalgam valley tour",
      "Traditional houseboat stay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Houseboat Stay",
        morning: "Arrive at Srinagar Airport. Traditional Kashmiri welcome by our team. Transfer to a premium Houseboat on Dal Lake.",
        lunch: "Authentic Kashmiri Wazwan lunch served on the houseboat.",
        afternoon: "Enjoy a relaxing 2-hour Shikara ride on Dal Lake, visiting floating gardens and markets.",
        evening: "Sip on hot Kahwa tea while watching a mesmerizing sunset over the lake.",
        dinner: "Dinner on the houseboat prepared by your personal chef."
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        morning: "Breakfast on the houseboat. Proceed to visit the famous Mughal Gardens: Nishat Bagh and Shalimar Bagh.",
        lunch: "Lunch at a popular local restaurant in Srinagar.",
        afternoon: "Visit the Shankaracharya Temple situated on a hilltop, offering panoramic views of the city.",
        evening: "Check-in to a luxury hotel in Srinagar. Free time to explore the local markets for Pashmina shawls and saffron.",
        dinner: "Lavish buffet dinner at the hotel."
      },
      {
        day: 3,
        title: "Excursion to Gulmarg",
        morning: "Early breakfast. Drive to Gulmarg (Meadow of Flowers). The scenic drive takes about 2 hours.",
        lunch: "Lunch at a resort in Gulmarg overlooking the snow-capped peaks.",
        afternoon: "Experience the thrilling Gondola ride (Phase 1 & 2) up to Mt. Apharwat. Enjoy snow activities.",
        evening: "Return to Srinagar. Relax at the hotel.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 4,
        title: "Transfer to Pahalgam",
        morning: "Breakfast and check-out. Drive to Pahalgam (Valley of Shepherds), visiting saffron fields and Awantipora ruins en route.",
        lunch: "Lunch upon arrival in Pahalgam at a riverside restaurant.",
        afternoon: "Check-in to your Pahalgam resort. Relax by the Lidder River.",
        evening: "Leisurely walk through the pine forests and local village.",
        dinner: "Dinner at the resort featuring local specialties."
      },
      {
        day: 5,
        title: "Exploring Pahalgam Valleys",
        morning: "Breakfast. Head out to explore the stunning Betaab Valley and Aru Valley (via local union taxis).",
        lunch: "Picnic lunch amidst the breathtaking alpine meadows.",
        afternoon: "Visit Chandanwari, the starting point of the Amarnath Yatra. Enjoy pony rides.",
        evening: "Return to the resort. Enjoy a bonfire evening (weather permitting).",
        dinner: "Dinner at the resort."
      },
      {
        day: 6,
        title: "Sonamarg Day Trip",
        morning: "Early breakfast. Drive to Sonamarg (Meadow of Gold). The drive through the Sindh Valley is spectacular.",
        lunch: "Lunch at a local dhaba or restaurant in Sonamarg.",
        afternoon: "Trek or take a pony ride to the Thajiwas Glacier. Experience snow even in summer.",
        evening: "Drive back to Srinagar for your final night. Check-in to the hotel.",
        dinner: "Farewell dinner at the hotel."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Final breakfast in Kashmir. Pack your bags with beautiful memories.",
        lunch: "N/A",
        afternoon: "Transfer to Srinagar Airport for your return flight.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "bali-hopper",
    name: "Bali Island Hopper",
    duration: "7 Days / 6 Nights",
    description: "Ubud rice terraces, Tanah Lot temple, Nusa Penida day trip, spa retreat",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 42999,
    originalPrice: 49999,
    category: "Honeymoon",
    features: [
      "Ubud rice terraces tour",
      "Tanah Lot temple visit",
      "Nusa Penida island day trip",
      "Traditional Balinese spa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali",
        morning: "Arrive at Ngurah Rai International Airport. Traditional flower garland welcome. Transfer to your private pool villa in Seminyak.",
        lunch: "Welcome lunch at the villa or a nearby trendy cafe.",
        afternoon: "Relax and unwind. Enjoy a 60-minute traditional Balinese welcome massage.",
        evening: "Head to Seminyak beach for your first stunning Balinese sunset.",
        dinner: "Romantic seafood dinner at Jimbaran Bay right on the beach."
      },
      {
        day: 2,
        title: "Ubud Cultural & Nature Tour",
        morning: "Breakfast at the villa. Drive to Ubud. Visit the Sacred Monkey Forest Sanctuary.",
        lunch: "Lunch overlooking the lush jungle valleys of Ubud.",
        afternoon: "Explore the famous Tegalalang Rice Terraces. Try the thrilling Bali Swing experience.",
        evening: "Visit the Ubud Art Market and Royal Palace. Check-in to your Ubud resort.",
        dinner: "Dinner featuring authentic Bebek Betutu (Balinese crispy duck)."
      },
      {
        day: 3,
        title: "Nusa Penida Island Adventure",
        morning: "Early breakfast. Take a fast boat from Sanur to Nusa Penida island.",
        lunch: "Local Indonesian lunch on the island.",
        afternoon: "Visit iconic spots: Kelingking Beach (T-Rex shape), Broken Beach, and Angel's Billabong.",
        evening: "Return to mainland Bali via fast boat. Transfer back to your resort.",
        dinner: "Relaxed dinner at the hotel."
      },
      {
        day: 4,
        title: "Temples & Sunsets",
        morning: "Breakfast. Visit the iconic Ulun Danu Beratan Temple located on a lake in the highlands.",
        lunch: "Buffet lunch in Bedugul with panoramic views.",
        afternoon: "Visit the breathtaking Tanah Lot Temple, perched on a rock formation in the sea.",
        evening: "Watch the spectacular sunset at Tanah Lot.",
        dinner: "Dinner at a premium restaurant in Canggu."
      },
      {
        day: 5,
        title: "Water Sports & Beach Club",
        morning: "Breakfast. Head to Tanjung Benoa for exciting water sports (Parasailing, Banana Boat, Jet Ski).",
        lunch: "Lunch at a popular beach club (e.g., Potato Head or Finns).",
        afternoon: "Lounge by the infinity pool at the beach club, sipping cocktails and listening to the DJ.",
        evening: "Visit Uluwatu Temple perched on a cliff. Watch the traditional Kecak Fire Dance at sunset.",
        dinner: "Fine dining experience in Seminyak."
      },
      {
        day: 6,
        title: "Mount Batur Sunrise & Spa",
        morning: "Early morning (2 AM) departure for Mount Batur Sunrise Trek (or a 4WD Jeep tour for a relaxed option). Watch the sunrise over the caldera.",
        lunch: "Relaxing brunch/lunch after the trek.",
        afternoon: "Visit the natural hot springs to soothe your muscles. Return to hotel for rest.",
        evening: "Indulge in a luxurious 2-hour Spa and wellness treatment.",
        dinner: "Farewell dinner at a highly-rated international restaurant."
      },
      {
        day: 7,
        title: "Farewell Bali",
        morning: "Enjoy your final floating breakfast in your private pool. Last-minute souvenir shopping.",
        lunch: "Quick lunch before heading to the airport.",
        afternoon: "Transfer to Ngurah Rai International Airport for your departure.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "dubai-luxury",
    name: "Dubai City Tour",
    duration: "7 Days / 6 Nights",
    description: "Burj Khalifa, desert safari, Dhow cruise, Dubai Mall, Atlantis Aquaventure",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 48999,
    originalPrice: 55999,
    category: "International",
    features: [
      "Burj Khalifa observation deck",
      "Desert safari with BBQ dinner",
      "Dubai Marina Dhow cruise",
      "Atlantis Aquaventure waterpark",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Dhow Cruise",
        morning: "Arrive at Dubai International Airport. Meet our representative and transfer to your luxury hotel.",
        lunch: "Lunch at the hotel or nearby cafe.",
        afternoon: "Relax in your room or enjoy the hotel pool.",
        evening: "Head to Dubai Marina for a luxurious Dhow Cruise.",
        dinner: "International buffet dinner onboard the Dhow Cruise."
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa",
        morning: "Breakfast. Half-day Dubai city tour covering Dubai Museum, Jumeirah Mosque, and Burj Al Arab photo stop.",
        lunch: "Lunch at Dubai Mall.",
        afternoon: "Visit the observation deck on the 124th floor of Burj Khalifa. Shop at Dubai Mall.",
        evening: "Watch the spectacular Dubai Fountain show.",
        dinner: "Dinner at a premium restaurant overlooking the fountains."
      },
      {
        day: 3,
        title: "Desert Safari Experience",
        morning: "Relaxed breakfast. Spend the morning at leisure or visit the Gold Souk.",
        lunch: "Light lunch.",
        afternoon: "Embark on an exhilarating Desert Safari in a 4x4 Land Cruiser. Dune bashing and sandboarding.",
        evening: "Arrive at the desert camp. Enjoy camel rides, henna painting, and belly dancing shows.",
        dinner: "Traditional BBQ dinner under the stars at the desert camp."
      },
      {
        day: 4,
        title: "Atlantis Aquaventure",
        morning: "Breakfast. Transfer to Atlantis The Palm.",
        lunch: "Lunch inside the waterpark.",
        afternoon: "Full day access to Aquaventure Waterpark and The Lost Chambers Aquarium.",
        evening: "Return to your hotel and relax.",
        dinner: "Dinner at your leisure."
      },
      {
        day: 5,
        title: "Abu Dhabi Grand Mosque Tour",
        morning: "Early breakfast. Full day trip to Abu Dhabi. Visit the majestic Sheikh Zayed Grand Mosque.",
        lunch: "Lunch in Abu Dhabi city.",
        afternoon: "Visit Ferrari World for thrilling rides or the Louvre Abu Dhabi (optional).",
        evening: "Drive back to Dubai.",
        dinner: "Dinner in Dubai."
      },
      {
        day: 6,
        title: "Miracle Garden & Global Village",
        morning: "Breakfast. Visit the Dubai Miracle Garden, the world's largest natural flower garden.",
        lunch: "Lunch near the garden.",
        afternoon: "Head to Global Village (seasonal) to experience cultures, shopping, and entertainment from around the world.",
        evening: "Explore the various pavilions at Global Village.",
        dinner: "Dinner featuring international street food at Global Village."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Enjoy your final breakfast in Dubai. Check out of the hotel.",
        lunch: "N/A",
        afternoon: "Transfer to Dubai International Airport for your onward journey.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    duration: "7 Days / 6 Nights",
    description: "Alleppey houseboat, Munnar tea gardens, Kathakali show, Ayurvedic massage",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 24999,
    originalPrice: 29999,
    category: "Domestic",
    features: [
      "Alleppey houseboat cruise",
      "Munnar tea plantation tour",
      "Traditional Kathakali show",
      "Ayurvedic spa treatment",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        morning: "Arrive at Cochin Airport. Meet our representative. Transfer to hotel.",
        lunch: "Traditional Kerala lunch.",
        afternoon: "Half-day sightseeing of Fort Kochi, Chinese Fishing Nets, and Mattancherry Palace.",
        evening: "Watch a traditional Kathakali dance performance.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 2,
        title: "Drive to Munnar",
        morning: "Breakfast. Drive to Munnar (approx. 4 hours), enjoying scenic views of waterfalls and lush hills.",
        lunch: "Lunch en route to Munnar.",
        afternoon: "Check-in to your resort in Munnar. Visit the Cheeyappara and Valara waterfalls.",
        evening: "Relax at the resort and enjoy the cool mountain breeze.",
        dinner: "Dinner at the resort."
      },
      {
        day: 3,
        title: "Munnar Tea Gardens",
        morning: "Breakfast. Visit the famous Eravikulam National Park to see the Nilgiri Tahr.",
        lunch: "Lunch in Munnar town.",
        afternoon: "Visit the Tea Museum, Mattupetty Dam, and Echo Point.",
        evening: "Free time for shopping (spices and tea).",
        dinner: "Dinner at the resort."
      },
      {
        day: 4,
        title: "Thekkady Wildlife Sanctuary",
        morning: "Breakfast. Drive to Thekkady (Periyar).",
        lunch: "Lunch upon arrival.",
        afternoon: "Enjoy a boat ride on Periyar Lake to spot wild elephants and wildlife.",
        evening: "Optional: Elephant ride or traditional Kalaripayattu martial arts show.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 5,
        title: "Alleppey Houseboat",
        morning: "Breakfast. Drive to Alleppey. Board your traditional private houseboat at noon.",
        lunch: "Authentic Kerala meals prepared fresh on the houseboat.",
        afternoon: "Cruise through the serene backwaters, observing local village life along the canals.",
        evening: "Enjoy the sunset from the deck of your houseboat.",
        dinner: "Candlelit dinner on the houseboat."
      },
      {
        day: 6,
        title: "Kumarakom & Ayurveda",
        morning: "Breakfast on the houseboat. Disembark and drive to Kumarakom.",
        lunch: "Lunch at the resort in Kumarakom.",
        afternoon: "Visit the Kumarakom Bird Sanctuary or enjoy a rejuvenating Ayurvedic massage.",
        evening: "Relax by the Vembanad Lake.",
        dinner: "Dinner at the resort."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Final breakfast. Check out of the resort.",
        lunch: "N/A",
        afternoon: "Drive back to Cochin Airport for your onward journey.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "thailand-explorer",
    name: "Amazing Thailand",
    duration: "7 Days / 6 Nights",
    description: "Bangkok temples, Phuket beaches, Phi Phi island, floating market, Thai massage",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 35999,
    originalPrice: 42999,
    category: "International",
    features: [
      "Bangkok Grand Palace tour",
      "Phi Phi island speedboat trip",
      "Floating market experience",
      "Authentic Thai spa session",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Phuket",
        morning: "Arrive at Phuket Airport. Transfer to your beach resort in Patong or Karon.",
        lunch: "Lunch at the resort.",
        afternoon: "Relax on the beach or explore the local area.",
        evening: "Experience the vibrant nightlife of Bangla Road or watch the Phuket FantaSea show.",
        dinner: "Dinner at a local Thai restaurant."
      },
      {
        day: 2,
        title: "Phi Phi Island Tour",
        morning: "Early breakfast. Full day speedboat tour to Phi Phi Islands. Visit Maya Bay.",
        lunch: "Buffet lunch served on Phi Phi Don.",
        afternoon: "Snorkeling at Monkey Beach and Viking Cave.",
        evening: "Return to Phuket. Relax after a long day in the sun.",
        dinner: "Dinner at your leisure."
      },
      {
        day: 3,
        title: "Phuket City Tour & Spa",
        morning: "Breakfast. Half-day Phuket city tour covering Big Buddha, Wat Chalong, and Karon Viewpoint.",
        lunch: "Lunch in Phuket Old Town.",
        afternoon: "Enjoy a traditional 2-hour Thai Massage at a premium spa.",
        evening: "Free time for shopping.",
        dinner: "Seafood dinner by the beach."
      },
      {
        day: 4,
        title: "Flight to Bangkok",
        morning: "Breakfast and check out. Flight from Phuket to Bangkok.",
        lunch: "Lunch upon arrival in Bangkok.",
        afternoon: "Check in to your hotel. Visit the MBK Center or Siam Paragon for shopping.",
        evening: "Dinner cruise on the Chao Phraya River.",
        dinner: "International buffet dinner onboard."
      },
      {
        day: 5,
        title: "Bangkok Temples & Grand Palace",
        morning: "Breakfast. Guided tour of the Grand Palace, Wat Phra Kaew (Emerald Buddha), and Wat Arun.",
        lunch: "Authentic Thai street food lunch.",
        afternoon: "Visit Wat Pho (Reclining Buddha).",
        evening: "Explore the bustling Asiatique The Riverfront night market.",
        dinner: "Dinner at Asiatique."
      },
      {
        day: 6,
        title: "Floating Market Excursion",
        morning: "Early morning trip to Damnoen Saduak Floating Market. Experience traditional Thai boat shopping.",
        lunch: "Lunch at the market.",
        afternoon: "Return to Bangkok. Free time for last-minute shopping at Chatuchak Weekend Market (if weekend) or Pratunam.",
        evening: "Farewell drinks at a rooftop bar (e.g., Sky Bar at Lebua).",
        dinner: "Farewell dinner."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Final breakfast. Check out of the hotel.",
        lunch: "N/A",
        afternoon: "Transfer to Suvarnabhumi Airport for your flight back home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "vietnam-discovery",
    name: "Vietnam Discovery",
    duration: "7 Days / 6 Nights",
    description: "Ha Long Bay cruise, Hanoi Old Quarter, Ho Chi Minh City, Cu Chi tunnels",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 38999,
    originalPrice: 46999,
    category: "International",
    features: [
      "Ha Long Bay overnight cruise",
      "Hanoi street food tour",
      "Cu Chi tunnels exploration",
      "Hoi An ancient town visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi",
        morning: "Arrive at Noi Bai International Airport. Transfer to your hotel in the Old Quarter.",
        lunch: "Enjoy a welcome bowl of authentic Pho.",
        afternoon: "Take a cyclo tour around the bustling streets of the Old Quarter and Hoan Kiem Lake.",
        evening: "Watch a traditional Water Puppet Show.",
        dinner: "Welcome dinner at a local Vietnamese restaurant."
      },
      {
        day: 2,
        title: "Ha Long Bay Cruise",
        morning: "Breakfast. Drive to Ha Long Bay. Board a traditional luxury junk boat.",
        lunch: "Seafood lunch served onboard while cruising among limestone karsts.",
        afternoon: "Visit Sung Sot (Surprise) Cave and go kayaking around the islands.",
        evening: "Cooking class onboard (learn to make spring rolls).",
        dinner: "Dinner on the deck under the stars."
      },
      {
        day: 3,
        title: "Return to Hanoi & Fly to Da Nang",
        morning: "Early morning Tai Chi on the deck. Explore Titop Island. Disembark after brunch.",
        lunch: "Brunch onboard.",
        afternoon: "Transfer back to Hanoi airport for a flight to Da Nang. Transfer to Hoi An.",
        evening: "Check-in to your hotel in Hoi An. Stroll through the lantern-lit ancient town.",
        dinner: "Dinner featuring local specialty Cao Lau."
      },
      {
        day: 4,
        title: "Hoi An Ancient Town",
        morning: "Breakfast. Guided walking tour of Hoi An: Japanese Covered Bridge, ancient houses.",
        lunch: "Lunch in Hoi An.",
        afternoon: "Free time to get custom clothes tailored or relax at An Bang Beach.",
        evening: "Take a boat ride on the Thu Bon River and release paper lanterns.",
        dinner: "Dinner at a riverside restaurant."
      },
      {
        day: 5,
        title: "Fly to Ho Chi Minh City",
        morning: "Breakfast. Transfer to Da Nang airport for a flight to Ho Chi Minh City (Saigon).",
        lunch: "Lunch in HCMC.",
        afternoon: "City tour: Reunification Palace, Notre Dame Cathedral, Central Post Office.",
        evening: "Explore Ben Thanh Market for shopping.",
        dinner: "Dinner cruise on the Saigon River."
      },
      {
        day: 6,
        title: "Cu Chi Tunnels",
        morning: "Breakfast. Half-day excursion to the historic Cu Chi Tunnels network.",
        lunch: "Lunch back in HCMC.",
        afternoon: "Visit the War Remnants Museum or spend time shopping.",
        evening: "Enjoy a farewell cocktail at a rooftop bar.",
        dinner: "Farewell dinner."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Final breakfast. Free time until your transfer to Tan Son Nhat International Airport.",
        lunch: "N/A",
        afternoon: "Flight home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "ladakh-expedition",
    name: "Ladakh Bike Expedition",
    duration: "7 Days / 6 Nights",
    description: "Leh to Nubra Valley, Pangong Lake, Khardung La pass, Turtuk village",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 32999,
    originalPrice: 39999,
    category: "Adventure",
    features: [
      "Khardung La pass crossing",
      "Pangong Lake overnight camp",
      "Nubra Valley camel ride",
      "Turtuk village excursion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Acclimatization",
        morning: "Arrive at Leh Airport. Transfer to hotel. Rest for the entire day to acclimatize to the high altitude.",
        lunch: "Light lunch at the hotel.",
        afternoon: "Rest.",
        evening: "Short walk to Leh Market and Shanti Stupa for sunset.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        morning: "Breakfast. Visit Hall of Fame, Magnetic Hill, and Sangam (confluence of Zanskar and Indus rivers).",
        lunch: "Lunch en route.",
        afternoon: "Visit Pathar Sahib Gurudwara and Spituk Monastery.",
        evening: "Bike allocation and trial ride.",
        dinner: "Dinner and briefing for the expedition."
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        morning: "Early breakfast. Ride to Nubra Valley over Khardung La, one of the world's highest motorable passes.",
        lunch: "Lunch in Khardung village.",
        afternoon: "Arrive in Hunder. Check into camps. Enjoy a ride on the double-humped Bactrian camels.",
        evening: "Relax at the camp under the stars.",
        dinner: "Dinner at the camp."
      },
      {
        day: 4,
        title: "Turtuk Village Excursion",
        morning: "Breakfast. Ride to Turtuk, a beautiful village near the LoC (Line of Control).",
        lunch: "Lunch in Turtuk, enjoying Balti cuisine.",
        afternoon: "Explore the village and its apricot orchards. Ride back to Hunder.",
        evening: "Relax at the camp.",
        dinner: "Dinner at the camp."
      },
      {
        day: 5,
        title: "Nubra to Pangong Tso via Shyok",
        morning: "Breakfast. Ride to Pangong Lake via the rugged and thrilling Shyok river route.",
        lunch: "Packed lunch or lunch en route.",
        afternoon: "Arrive at the stunning Pangong Tso lake. Check into your lakeside camp.",
        evening: "Watch the lake change colors during sunset.",
        dinner: "Dinner at the camp."
      },
      {
        day: 6,
        title: "Pangong to Leh via Chang La",
        morning: "Wake up early for a spectacular sunrise over the lake. Breakfast.",
        lunch: "Lunch en route.",
        afternoon: "Ride back to Leh via Chang La pass. Visit Thiksey Monastery on the way.",
        evening: "Handover bikes. Last-minute shopping in Leh market.",
        dinner: "Farewell dinner."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Early breakfast. Transfer to Leh Airport for your onward flight.",
        lunch: "N/A",
        afternoon: "N/A",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "rajasthan-royal",
    name: "Royal Rajasthan",
    duration: "7 Days / 6 Nights",
    description: "Jaipur palaces, Udaipur lakes, Jaisalmer desert safari, Jodhpur blue city",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 22999,
    originalPrice: 27999,
    category: "Domestic",
    features: [
      "Amber Fort elephant ride",
      "Udaipur lake palace visit",
      "Jaisalmer desert camp stay",
      "Jodhpur heritage walk",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        morning: "Arrive at Jaipur. Transfer to hotel.",
        lunch: "Lunch.",
        afternoon: "Visit City Palace, Jantar Mantar, and Hawa Mahal.",
        evening: "Visit Chokhi Dhani for an authentic Rajasthani dinner and cultural show.",
        dinner: "Dinner at Chokhi Dhani."
      },
      {
        day: 2,
        title: "Jaipur Sightseeing & Drive to Jodhpur",
        morning: "Visit Amber Fort. Enjoy an elephant ride.",
        lunch: "Lunch en route to Jodhpur.",
        afternoon: "Drive to Jodhpur (The Blue City).",
        evening: "Check-in and relax.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 3,
        title: "Jodhpur Sightseeing & Drive to Jaisalmer",
        morning: "Visit the massive Mehrangarh Fort and Jaswant Thada.",
        lunch: "Lunch in Jodhpur.",
        afternoon: "Drive to Jaisalmer (The Golden City).",
        evening: "Check-in to your hotel.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 4,
        title: "Jaisalmer Desert Safari",
        morning: "Visit Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake.",
        lunch: "Lunch in Jaisalmer.",
        afternoon: "Drive to the Sam Sand Dunes. Check-in to your desert camp.",
        evening: "Enjoy a camel safari during sunset, followed by a cultural folk dance performance.",
        dinner: "Dinner at the desert camp."
      },
      {
        day: 5,
        title: "Drive to Udaipur",
        morning: "Breakfast at the camp. Long drive to Udaipur.",
        lunch: "Lunch en route.",
        afternoon: "Arrive in Udaipur (City of Lakes) and check-in to your hotel.",
        evening: "Enjoy a serene boat ride on Lake Pichola during sunset.",
        dinner: "Dinner at a lakeside restaurant."
      },
      {
        day: 6,
        title: "Udaipur Sightseeing",
        morning: "Visit the magnificent City Palace and Jagdish Temple.",
        lunch: "Lunch in Udaipur.",
        afternoon: "Visit Saheliyon Ki Bari and explore the local markets.",
        evening: "Free time for shopping.",
        dinner: "Farewell dinner."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Breakfast. Transfer to Udaipur airport or railway station.",
        lunch: "N/A",
        afternoon: "N/A",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "goa-getaway",
    name: "Goa Beach Getaway",
    duration: "7 Days / 6 Nights",
    description: "North & South Goa beaches, Old Goa churches, Dudhsagar falls, water sports",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 18999,
    originalPrice: 23999,
    category: "Domestic",
    features: [
      "North & South Goa beach tour",
      "Dudhsagar waterfall excursion",
      "Water sports package included",
      "Old Goa heritage walk",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        morning: "Arrive at Goa Airport. Transfer to your resort in North Goa.",
        lunch: "Lunch at the resort.",
        afternoon: "Relax and acclimatize.",
        evening: "Visit Baga Beach to enjoy the sunset.",
        dinner: "Dinner at a beach shack."
      },
      {
        day: 2,
        title: "North Goa Beaches & Water Sports",
        morning: "Visit Calangute and Anjuna beaches. Enjoy water sports (parasailing, jet ski).",
        lunch: "Lunch at Curlies, Anjuna.",
        afternoon: "Visit the historic Aguada Fort and Lighthouse.",
        evening: "Experience the vibrant nightlife at Tito's Lane.",
        dinner: "Dinner at a popular restaurant."
      },
      {
        day: 3,
        title: "South Goa & Old Goa",
        morning: "Drive to Old Goa to visit Basilica of Bom Jesus and Se Cathedral.",
        lunch: "Traditional Goan fish curry lunch.",
        afternoon: "Visit the serene Colva and Palolem beaches in South Goa.",
        evening: "Sunset Mandovi River cruise with live music.",
        dinner: "Dinner at the resort."
      },
      {
        day: 4,
        title: "Dudhsagar Waterfalls",
        morning: "Early morning jeep safari to the majestic Dudhsagar Waterfalls.",
        lunch: "Lunch near the spice plantation.",
        afternoon: "Guided tour of a Goan Spice Plantation.",
        evening: "Return to resort. Relax.",
        dinner: "Dinner."
      },
      {
        day: 5,
        title: "Island Trip & Snorkeling",
        morning: "Boat trip to Grand Island. Enjoy snorkeling and spotting dolphins.",
        lunch: "BBQ lunch on the boat or private beach.",
        afternoon: "Swim and relax.",
        evening: "Return to the hotel.",
        dinner: "Dinner."
      },
      {
        day: 6,
        title: "Leisure & Shopping",
        morning: "Free day to explore on your own. Rent a scooter and discover hidden beaches.",
        lunch: "Lunch at your leisure.",
        afternoon: "Shopping at the Mapusa or Anjuna flea market.",
        evening: "Farewell beach party.",
        dinner: "Farewell dinner."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Breakfast. Pack your bags.",
        lunch: "N/A",
        afternoon: "Transfer to the airport.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "andaman-paradise",
    name: "Andaman Island Escape",
    duration: "7 Days / 6 Nights",
    description: "Havelock Island, Radhanagar Beach, scuba diving, Cellular Jail, Ross Island",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 32999,
    originalPrice: 38999,
    category: "Honeymoon",
    features: [
      "Havelock Island beach stay",
      "Scuba diving experience",
      "Cellular Jail light & sound show",
      "Ross Island ferry tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        morning: "Arrive at Port Blair. Transfer to hotel.",
        lunch: "Lunch.",
        afternoon: "Visit the historic Cellular Jail and Corbyn's Cove Beach.",
        evening: "Watch the spectacular Light and Sound show at Cellular Jail.",
        dinner: "Dinner at the hotel."
      },
      {
        day: 2,
        title: "Transfer to Havelock Island",
        morning: "Board the luxury cruise (Makruzz/Green Ocean) to Havelock Island.",
        lunch: "Lunch at Havelock resort.",
        afternoon: "Visit the world-famous Radhanagar Beach (Asia's best beach).",
        evening: "Watch the sunset at the beach.",
        dinner: "Dinner at the resort."
      },
      {
        day: 3,
        title: "Elephant Beach & Water Sports",
        morning: "Boat ride to Elephant Beach. Enjoy complimentary snorkeling.",
        lunch: "Lunch back at the resort.",
        afternoon: "Optional water sports: Sea Walk or Scuba Diving.",
        evening: "Relax at the resort.",
        dinner: "Dinner."
      },
      {
        day: 4,
        title: "Transfer to Neil Island",
        morning: "Take a ferry to Neil Island. Check-in to the hotel.",
        lunch: "Lunch.",
        afternoon: "Visit Bharatpur Beach and Laxmanpur Beach.",
        evening: "See the natural rock formation at Howrah Bridge.",
        dinner: "Dinner."
      },
      {
        day: 5,
        title: "Return to Port Blair",
        morning: "Ferry back to Port Blair.",
        lunch: "Lunch.",
        afternoon: "Free time for shopping at Aberdeen Bazaar.",
        evening: "Relax.",
        dinner: "Dinner."
      },
      {
        day: 6,
        title: "Ross Island & North Bay",
        morning: "Full day excursion to Ross Island (erstwhile capital of Port Blair during British regime) and North Bay Island.",
        lunch: "Lunch.",
        afternoon: "Enjoy glass-bottom boat ride or semi-submarine ride.",
        evening: "Return to Port Blair.",
        dinner: "Farewell dinner."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Breakfast. Transfer to airport.",
        lunch: "N/A",
        afternoon: "N/A",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "romantic-paris-escape",
    name: "Romantic Paris Escape",
    duration: "6 Days / 5 Nights",
    description: "Eiffel Tower, Louvre Museum, Seine River Cruise, Montmartre, Palace of Versailles",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 125000,
    originalPrice: 145000,
    category: "Honeymoon",
    features: [
      "Seine River Dinner Cruise",
      "Eiffel Tower Summit Access",
      "Guided Louvre Tour",
      "Private Airport Transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        morning: "Arrive at Charles de Gaulle Airport where your private transfer awaits.",
        lunch: "Enjoy a classic French lunch at a local bistro near your hotel.",
        afternoon: "Check into your romantic hotel and spend the afternoon at leisure, exploring the nearby streets. Relax and overcome any jet lag in the comfort of your room.",
        evening: "Take a beautiful twilight stroll along the Seine River.",
        dinner: "Enjoy a welcome dinner at a traditional Parisian brasserie."
      },
      {
        day: 2,
        title: "Eiffel Tower & The Louvre",
        morning: "Head to the Eiffel Tower for an early summit access, enjoying panoramic views of the city.",
        lunch: "Grab a quick bite at a café near the Louvre Museum.",
        afternoon: "Embark on a comprehensive guided tour of the Louvre, seeing the Mona Lisa and the Venus de Milo. Spend time appreciating the vast art collections at your own pace.",
        evening: "Enjoy a free evening to walk through the beautifully lit Tuileries Garden.",
        dinner: "Dine at a cozy restaurant in the vibrant Montmartre district."
      },
      {
        day: 3,
        title: "Palace of Versailles",
        morning: "Take a half-day trip to the magnificent Palace of Versailles and explore the opulent State Apartments.",
        lunch: "Have a delightful lunch near the palace gardens.",
        afternoon: "Wander through the sprawling Gardens of Versailles and rent a rowboat on the Grand Canal. Marvel at the stunning fountains and manicured lawns.",
        evening: "Return to Paris and board a glass-enclosed boat for a Seine River Dinner Cruise.",
        dinner: "Savor a multi-course gourmet dinner on the cruise while passing illuminated landmarks."
      },
      {
        day: 4,
        title: "Montmartre & Champs-Élysées",
        morning: "Join a morning walking tour of Montmartre, visiting the Sacré-Cœur Basilica and the artist square.",
        lunch: "Enjoy a relaxed lunch at Place du Tertre while watching local artists paint.",
        afternoon: "Head to the Champs-Élysées for an afternoon of luxury shopping and sightseeing. Don't forget to take photos by the Arc de Triomphe.",
        evening: "Find a perfect spot to watch the Eiffel Tower sparkle on the hour.",
        dinner: "Treat yourselves to dinner at a chic, modern French restaurant."
      },
      {
        day: 5,
        title: "Macaron Class & Free Time",
        morning: "Participate in a fun and interactive French baking and macaron class.",
        lunch: "Taste your sweet creations alongside some light savory crepes for lunch.",
        afternoon: "Enjoy a free afternoon for last-minute souvenir shopping or an optional visit to the Musée d'Orsay. Stroll through the charming Le Marais neighborhood.",
        evening: "Take a final romantic farewell walk through the heart of the city.",
        dinner: "Celebrate your trip with a farewell dinner at a renowned Michelin-star restaurant."
      },
      {
        day: 6,
        title: "Departure",
        morning: "Enjoy a final French breakfast with freshly baked croissants and coffee.",
        lunch: "Grab a quick bite at a nearby café before heading back to the hotel to pack.",
        afternoon: "Take your private transfer to the airport for your onward journey home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "japan-highlights",
    name: "Japan Highlights",
    duration: "8 Days / 7 Nights",
    description: "Tokyo City Tour, Mt. Fuji, Bullet Train, Kyoto Temples, Nara Deer Park",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 165000,
    originalPrice: 185000,
    category: "International",
    features: [
      "Shinkansen (Bullet Train) Tickets",
      "Mt. Fuji Full Day Tour",
      "Traditional Tea Ceremony",
      "English Speaking Guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        morning: "Arrive in Tokyo and take a convenient transfer to your centrally located hotel.",
        lunch: "Warm up with a bowl of authentic local ramen near your hotel.",
        afternoon: "Take the afternoon to rest and recover from your flight. Familiarize yourself with the local neighborhood and nearby convenience stores.",
        evening: "Head to Shibuya to witness the famous crossing and explore the neon-lit streets.",
        dinner: "Enjoy fresh conveyor-belt sushi for a fun and casual dinner."
      },
      {
        day: 2,
        title: "Tokyo City Tour",
        morning: "Visit the historic Asakusa district and marvel at the Senso-ji Temple.",
        lunch: "Snack on traditional street food along the bustling Nakamise shopping street.",
        afternoon: "Travel to the serene Meiji Shrine surrounded by lush forest, then walk down the vibrant Takeshita Street in Harajuku.",
        evening: "Dive into the electric atmosphere of Akihabara, Tokyo's anime and electronics hub.",
        dinner: "Dine at a lively Izakaya, sampling various Japanese tapas and drinks."
      },
      {
        day: 3,
        title: "Mt. Fuji Excursion",
        morning: "Board a comfortable coach to the Mt. Fuji 5th station for breathtaking views of the iconic volcano.",
        lunch: "Warm up with a hearty bowl of local Hoto noodles in the Fuji Five Lakes region.",
        afternoon: "Enjoy a scenic cruise on Lake Kawaguchiko, offering incredible photo opportunities of Mt. Fuji. Take the Mt. Fuji Panoramic Ropeway for higher vantage points.",
        evening: "Return to Tokyo and relax after a long day of exploring.",
        dinner: "Savor crispy and light tempura at a specialized local restaurant."
      },
      {
        day: 4,
        title: "Bullet Train to Kyoto",
        morning: "Ride the high-speed Shinkansen (Bullet Train) from Tokyo to the historic city of Kyoto.",
        lunch: "Enjoy an intricate and delicious Ekiben (bento box) while riding the train.",
        afternoon: "Check into your Kyoto hotel and visit the spectacular Kinkaku-ji, the Golden Pavilion. Stroll through the beautiful traditional gardens surrounding it.",
        evening: "Walk through the preserved historic streets of the Gion district, keeping an eye out for Geishas.",
        dinner: "Experience a traditional multi-course Kaiseki dinner."
      },
      {
        day: 5,
        title: "Kyoto Temples & Shrines",
        morning: "Hike through the thousands of vermilion torii gates at the Fushimi Inari Shrine.",
        lunch: "Stop for Kitsune Udon (fox udon) at a small eatery near the shrine.",
        afternoon: "Visit the impressive wooden stage of Kiyomizu-dera Temple, offering panoramic views of Kyoto. Browse the pottery and sweet shops along the steep lanes.",
        evening: "Enjoy a peaceful evening walk along the banks of the Kamogawa River.",
        dinner: "Cook your own Okonomiyaki (savory Japanese pancake) at a popular local spot."
      },
      {
        day: 6,
        title: "Nara Day Trip",
        morning: "Take a short train ride to Nara and meet the friendly, bowing wild deer in Nara Park.",
        lunch: "Try some traditional Nara cuisine, like persimmon leaf sushi.",
        afternoon: "Visit the massive Todai-ji Temple, home to the awe-inspiring Great Buddha bronze statue. Explore the surrounding shrines and quiet forest pathways.",
        evening: "Head back to Kyoto and enjoy a relaxing evening in the downtown area.",
        dinner: "Enjoy savory Yakitori skewers grilled to perfection."
      },
      {
        day: 7,
        title: "Arashiyama & Tea Ceremony",
        morning: "Wander through the towering stalks of the Arashiyama Bamboo Grove early in the morning.",
        lunch: "Have a relaxing lunch overlooking the Togetsukyo Bridge in Arashiyama.",
        afternoon: "Participate in a serene and traditional Japanese Tea Ceremony, learning the art of matcha preparation. Spend your remaining time shopping for beautiful Kyoto crafts.",
        evening: "Take a final evening stroll through Kyoto's beautifully preserved historic quarters.",
        dinner: "Indulge in a premium Wagyu beef dinner for your final night in Japan."
      },
      {
        day: 8,
        title: "Departure",
        morning: "Enjoy a relaxed breakfast at your hotel and do some final packing.",
        lunch: "Grab a quick lunch at Kyoto Station before your transfer.",
        afternoon: "Take the airport shuttle or train to the airport for your departure flight.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "singapore-explorer",
    name: "Singapore Explorer",
    duration: "5 Days / 4 Nights",
    description: "Marina Bay Sands, Gardens by the Bay, Sentosa Island, Universal Studios, Night Safari",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 65000,
    originalPrice: 75000,
    category: "International",
    features: [
      "Universal Studios Pass",
      "Night Safari Tickets",
      "Sentosa Cable Car Ride",
      "Centrally Located 4-Star Hotel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore",
        morning: "Arrive at Changi Airport and take a seamless transfer to your centrally located hotel.",
        lunch: "Taste the famous Hainanese Chicken Rice at a nearby hawker center.",
        afternoon: "Check into your room and take some time to rest and refresh. Explore the immediate surroundings of your hotel at a leisurely pace.",
        evening: "Head up to the Marina Bay Sands Skypark for stunning panoramic views of the city skyline.",
        dinner: "Feast on local street food specialties at Makansutra Gluttons Bay."
      },
      {
        day: 2,
        title: "Gardens & Night Safari",
        morning: "Explore the futuristic Gardens by the Bay, visiting both the Flower Dome and the Cloud Forest.",
        lunch: "Enjoy a casual outdoor lunch at Satay by the Bay.",
        afternoon: "Take photos at the iconic Merlion Park, then dive into the rich heritage of Chinatown. Visit the Buddha Tooth Relic Temple and browse the vibrant market stalls.",
        evening: "Travel to the world-renowned Night Safari for a guided tram tour through nocturnal wildlife habitats.",
        dinner: "Dine at the Ulu Ulu Safari Restaurant located right at the Night Safari entrance."
      },
      {
        day: 3,
        title: "Universal Studios Thrills",
        morning: "Spend the morning hitting the biggest rides and attractions at Universal Studios Singapore.",
        lunch: "Grab a quick themed lunch inside the Universal Studios park.",
        afternoon: "Continue enjoying the shows, parades, and movie-themed zones. Meet your favorite characters and ride the rollercoasters.",
        evening: "Exit the park and enjoy a relaxed evening exploring the rest of the Resorts World Sentosa complex.",
        dinner: "Have a satisfying dinner at one of the many restaurants in VivoCity mall."
      },
      {
        day: 4,
        title: "Sentosa Island & Shopping",
        morning: "Take the scenic Sentosa Cable Car over to the island and visit the massive S.E.A. Aquarium.",
        lunch: "Enjoy a lovely waterside lunch at Sentosa Cove.",
        afternoon: "Head back to the mainland for an afternoon of world-class shopping along Orchard Road. Browse the luxury boutiques and mega-malls.",
        evening: "Watch the spectacular Spectra Light and Water show at Marina Bay.",
        dinner: "Celebrate your last night with a fine dining experience along the lively Clarke Quay riverside."
      },
      {
        day: 5,
        title: "Departure via Jewel Changi",
        morning: "Head to the airport early to explore the incredible Jewel Changi and its massive indoor Rain Vortex waterfall.",
        lunch: "Enjoy a final meal at one of the top-rated restaurants inside Jewel Changi.",
        afternoon: "Proceed to your departure gate for your flight back home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "aussie-adventure",
    name: "Aussie Adventure",
    duration: "9 Days / 8 Nights",
    description: "Sydney Opera House, Bondi Beach, Blue Mountains, Theme Parks, Surfers Paradise",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526958097901-5e6d742d3371?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562281302-809108fd533c?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 195000,
    originalPrice: 225000,
    category: "Adventure",
    features: [
      "Sydney Harbor Cruise",
      "Gold Coast Theme Park Passes",
      "Blue Mountains Day Trip",
      "Domestic Flights Included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Sydney",
        morning: "Arrive in Sydney, transfer to your hotel, and drop off your luggage.",
        lunch: "Enjoy a relaxed waterfront lunch at Darling Harbour.",
        afternoon: "Take some time to rest and refresh at your hotel. Later, visit the SEA LIFE Sydney Aquarium to see incredible marine life.",
        evening: "Take a leisurely walk around the bustling Circular Quay.",
        dinner: "Dine at a premium seafood restaurant with views of the harbor."
      },
      {
        day: 2,
        title: "Sydney Landmarks",
        morning: "Take an official guided tour of the iconic Sydney Opera House.",
        lunch: "Grab lunch at a historic pub in The Rocks district.",
        afternoon: "Embark on the thrilling Sydney Harbour Bridge climb for unmatched views of the city. Alternatively, walk across the pedestrian path.",
        evening: "Board a luxury vessel for a scenic Sydney Harbour Dinner Cruise.",
        dinner: "Enjoy a multi-course dinner on the cruise while the city lights up."
      },
      {
        day: 3,
        title: "Blue Mountains Excursion",
        morning: "Take a full-day guided trip to the breathtaking Blue Mountains and see the Three Sisters rock formation.",
        lunch: "Stop for lunch at a quaint mountain café in Leura.",
        afternoon: "Ride the steepest passenger railway in the world at Scenic World. Walk through the ancient Jurassic rainforest canopy.",
        evening: "Return to Sydney in the evening and relax.",
        dinner: "Have a casual dinner at a lively local pub near your hotel."
      },
      {
        day: 4,
        title: "Bondi Beach Lifestyle",
        morning: "Embark on the spectacular Bondi to Coogee coastal walk, taking in stunning ocean views.",
        lunch: "Relax with a healthy, quintessential Aussie lunch at a beachside cafe.",
        afternoon: "Take a beginner's surfing lesson or simply lounge on the golden sands of Bondi Beach. Browse the local surf boutiques.",
        evening: "Enjoy free time to experience Sydney's vibrant evening culture.",
        dinner: "Dine at a trendy, modern Australian restaurant right on Bondi Beach."
      },
      {
        day: 5,
        title: "Fly to the Gold Coast",
        morning: "Take a morning domestic flight from Sydney to the sunny Gold Coast.",
        lunch: "Grab a quick and tasty lunch upon arrival near your new hotel.",
        afternoon: "Check into your high-rise hotel in Surfers Paradise. Spend the afternoon exploring the vibrant esplanade and beach.",
        evening: "Walk through the bustling Surfers Paradise night markets.",
        dinner: "Enjoy dinner at a bustling restaurant on the famous Cavill Avenue."
      },
      {
        day: 6,
        title: "Movie World Thrills",
        morning: "Spend the morning riding world-class rollercoasters at Warner Bros. Movie World.",
        lunch: "Have a fun, themed lunch inside the amusement park.",
        afternoon: "Watch the spectacular stunt shows and the famous Star Parade featuring beloved characters.",
        evening: "Return to your hotel to freshen up and relax by the pool.",
        dinner: "Treat yourself to a hearty meal at a local Australian steakhouse."
      },
      {
        day: 7,
        title: "Sea World & SkyPoint",
        morning: "Get up close with dolphins, penguins, and polar bears at Sea World.",
        lunch: "Grab a bite to eat at one of Sea World's family-friendly cafes.",
        afternoon: "Head to the SkyPoint Observation Deck atop the Q1 building for 360-degree views of the coastline.",
        evening: "Take a twilight barefoot stroll along the endless stretch of beach.",
        dinner: "Enjoy elegant oceanfront dining with fresh local ingredients."
      },
      {
        day: 8,
        title: "Gold Coast Hinterland",
        morning: "Take a tour into the lush Gold Coast Hinterland and explore the Tamborine Mountain glow worm caves.",
        lunch: "Enjoy a gourmet lunch and wine tasting at a local hinterland vineyard.",
        afternoon: "Stroll down the Gallery Walk to browse artisan shops, fudge makers, and boutique galleries.",
        evening: "Enjoy farewell drinks overlooking the ocean at a stylish rooftop bar.",
        dinner: "Celebrate your trip with a premium dining experience in Broadbeach."
      },
      {
        day: 9,
        title: "Departure",
        morning: "Enjoy a final Aussie breakfast at a local cafe.",
        lunch: "Grab a quick bite before checking out of your hotel.",
        afternoon: "Take your arranged transfer to the Gold Coast or Brisbane airport for your flight home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "roman-holiday",
    name: "Roman Holiday",
    duration: "7 Days / 6 Nights",
    description: "Colosseum, Vatican City, Trevi Fountain, Pantheon, Amalfi Coast Day Trip",
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 140000,
    originalPrice: 160000,
    category: "International",
    features: [
      "Skip-the-line Colosseum Tickets",
      "Vatican Museum Tour",
      "Authentic Italian Cooking Class",
      "Premium Accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Benvenuti a Roma",
        morning: "Arrive in Rome and enjoy a private transfer to your boutique hotel.",
        lunch: "Have your first taste of Italy with a traditional wood-fired pizza.",
        afternoon: "Settle into your room and rest. Later, take a gentle walk to the iconic Spanish Steps and do some light window shopping.",
        evening: "Enjoy the romantic atmosphere of Rome's illuminated streets.",
        dinner: "Dine on authentic Roman pasta like Cacio e Pepe at a cozy local restaurant."
      },
      {
        day: 2,
        title: "Ancient Wonders",
        morning: "Take a comprehensive skip-the-line tour of the majestic Colosseum.",
        lunch: "Grab a quick and delicious panino at a highly-rated deli near the ruins.",
        afternoon: "Walk through the historic Roman Forum and climb Palatine Hill. Discover the ruins where emperors once lived and ruled.",
        evening: "Visit the stunning Trevi Fountain and toss a coin over your shoulder to ensure your return to Rome.",
        dinner: "Enjoy a hearty meal at a classic family-run trattoria."
      },
      {
        day: 3,
        title: "Vatican City",
        morning: "Embark on an early morning guided tour of the vast Vatican Museums and marvel at the Sistine Chapel.",
        lunch: "Enjoy a relaxed lunch just outside the walls of Vatican City.",
        afternoon: "Step into the breathtaking St. Peter's Basilica. Optionally, climb to the top of the dome for incredible views of St. Peter's Square.",
        evening: "Enjoy some free time to wander the charming cobblestone streets at your own pace.",
        dinner: "Dine al fresco at one of the lively restaurants lining Piazza Navona."
      },
      {
        day: 4,
        title: "Florence Day Trip",
        morning: "Catch a high-speed train for a full day trip to Florence, the cradle of the Renaissance.",
        lunch: "Savor a famous Florentine steak or a hearty ribollita soup.",
        afternoon: "Visit the world-renowned Uffizi Gallery and marvel at the magnificent Florence Duomo. Walk across the historic Ponte Vecchio.",
        evening: "Take the high-speed train back to Rome in the evening.",
        dinner: "Have a light, relaxing dinner at a cafe near your hotel."
      },
      {
        day: 5,
        title: "Cooking Class & The Pantheon",
        morning: "Start with a local market visit to pick fresh ingredients, followed by a hands-on Italian cooking class.",
        lunch: "Enjoy the fruits of your labor by eating the fresh pasta you handmade.",
        afternoon: "Visit the architectural marvel that is the Pantheon, and stop for some of Rome's best gelato nearby.",
        evening: "Cross the river to explore the bohemian and lively Trastevere neighborhood.",
        dinner: "Feast at a bustling Trastevere osteria, surrounded by locals and live music."
      },
      {
        day: 6,
        title: "Amalfi Coast Day Trip",
        morning: "Take an early morning scenic drive down south to the spectacular Amalfi Coast.",
        lunch: "Enjoy fresh seafood for lunch while overlooking the sparkling Mediterranean sea.",
        afternoon: "Explore the vertical, colorful town of Positano. Browse the boutique shops and relax on the pebbled beach.",
        evening: "Enjoy the picturesque drive back to Rome as the sun sets.",
        dinner: "Celebrate your final night with an exquisite Italian farewell dinner."
      },
      {
        day: 7,
        title: "Arrivederci Roma",
        morning: "Enjoy a final Italian breakfast with a perfect espresso and a cornetto.",
        lunch: "Have a relaxed lunch at a local cafe if time permits before your flight.",
        afternoon: "Take your private airport transfer for your journey home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "south-african-safari",
    name: "South African Safari",
    duration: "8 Days / 7 Nights",
    description: "Table Mountain, Cape of Good Hope, Kruger National Park, Big Five Safari, Wine Tasting",
    image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 185000,
    originalPrice: 210000,
    category: "Adventure",
    features: [
      "4x4 Game Drives in Kruger",
      "Table Mountain Cableway Tickets",
      "Cape Winelands Tour",
      "Luxury Safari Lodge Stay"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cape Town",
        morning: "Arrive at Cape Town International Airport and transfer to your luxury hotel.",
        lunch: "Enjoy a vibrant welcome lunch at the bustling V&A Waterfront.",
        afternoon: "Spend the afternoon relaxing and exploring the waterfront shops and attractions at your leisure.",
        evening: "Take in the beautiful sunset views over the harbor.",
        dinner: "Dine on fresh seafood at a top-rated restaurant along the waterfront."
      },
      {
        day: 2,
        title: "Table Mountain & City Tour",
        morning: "Take the rotating cable car up to the summit of Table Mountain for spectacular panoramic views.",
        lunch: "Grab a relaxed lunch at a trendy cafe in the city center.",
        afternoon: "Explore the brightly colored houses of the Bo-Kaap neighborhood. Stroll through the historic Company's Garden.",
        evening: "Head over to the chic suburb of Camps Bay to watch the sunset over the Atlantic Ocean.",
        dinner: "Enjoy dinner at a stylish beachfront restaurant in Camps Bay."
      },
      {
        day: 3,
        title: "Cape Peninsula Tour",
        morning: "Take a breathtaking scenic drive along Chapman's Peak Drive towards the Cape Peninsula.",
        lunch: "Stop for a delightful seafood lunch in the historic naval village of Simon's Town.",
        afternoon: "Visit the adorable African penguin colony at Boulders Beach, then continue to the dramatic cliffs of the Cape of Good Hope.",
        evening: "Return to Cape Town in the evening for some well-deserved rest.",
        dinner: "Experience an interactive and authentic African cuisine dinner experience."
      },
      {
        day: 4,
        title: "Cape Winelands",
        morning: "Travel to the renowned Stellenbosch region for a morning of premium wine tasting and cellar tours.",
        lunch: "Indulge in a gourmet lunch set on a picturesque vineyard estate.",
        afternoon: "Explore the charming French-inspired town of Franschhoek and take a ride on the wine tram.",
        evening: "Head back to your hotel to pack and prepare for tomorrow's safari adventure.",
        dinner: "Enjoy a fine dining experience at one of Cape Town's top culinary spots."
      },
      {
        day: 5,
        title: "Fly to Kruger National Park",
        morning: "Take a morning domestic flight from Cape Town to the Kruger Mpumalanga region.",
        lunch: "Savor a welcoming lunch upon arrival at your luxury safari lodge.",
        afternoon: "Embark on your very first thrilling 4x4 open-vehicle game drive as the wildlife becomes active in the late afternoon.",
        evening: "Gather around a traditional boma fire under the African stars.",
        dinner: "Enjoy a traditional and hearty lodge dinner cooked over an open fire."
      },
      {
        day: 6,
        title: "The Big Five Safari",
        morning: "Wake up before dawn for an early morning game drive, the best time to spot predators on the hunt.",
        lunch: "Return to the lodge for a massive, well-deserved brunch/lunch and a midday rest.",
        afternoon: "Lounge by the lodge pool during the heat of the day, then head out for your late afternoon game drive.",
        evening: "Stop in the bush for sundowner drinks as the sun sets, then do some stargazing on the drive back.",
        dinner: "Feast on a magnificent bush dinner back at the lodge."
      },
      {
        day: 7,
        title: "Safari & Conservation",
        morning: "Experience the bush on foot with a guided morning walking safari, learning about tracks and smaller wildlife.",
        lunch: "Enjoy your final full lunch at the scenic lodge overlooking a watering hole.",
        afternoon: "Visit a local wildlife conservation center, followed by your final exhilarating evening game drive.",
        evening: "Toast to your successful wildlife sightings with final sundowner drinks in the wild.",
        dinner: "Celebrate your safari experience with a lavish farewell feast."
      },
      {
        day: 8,
        title: "Departure",
        morning: "Squeeze in one last sunrise game drive, followed by a hearty breakfast.",
        lunch: "Grab a light lunch at the airport before checking in for your flight.",
        afternoon: "Board your flight home, taking incredible memories of South Africa with you.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "seychelles-paradise",
    name: "Seychelles Paradise",
    duration: "6 Days / 5 Nights",
    description: "Pristine beaches, luxury resorts, coral reefs, giant tortoises, tropical bliss",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 155000,
    originalPrice: 185000,
    category: "Honeymoon",
    features: [
      "Luxury Beachfront Accommodation",
      "Guided Island Hopping Tour",
      "Water Sports & Snorkeling Gear",
      "Romantic Sunset Dinner"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mahé",
        morning: "Arrive at Seychelles International Airport where our representative will welcome you. Enjoy a scenic transfer to your luxury beachfront resort.",
        lunch: "Relish a relaxed lunch at the resort's sea-view restaurant.",
        afternoon: "Spend the afternoon unwinding on the pristine white sands. Take your first dip in the crystal-clear waters of the Indian Ocean.",
        evening: "Enjoy a welcome cocktail by the beach while watching a spectacular tropical sunset.",
        dinner: "Indulge in a traditional Creole seafood dinner."
      },
      {
        day: 2,
        title: "Mahé Island Exploration",
        morning: "Embark on a guided tour of Mahé, starting with a visit to Victoria, one of the smallest capital cities in the world.",
        lunch: "Enjoy local delicacies at a charming restaurant in Victoria.",
        afternoon: "Visit the stunning Botanical Gardens to see the famous Coco de Mer palms and giant Aldabra tortoises.",
        evening: "Take a leisurely evening stroll along Beau Vallon beach as the island cools down.",
        dinner: "Dine at a popular beachfront eatery offering international cuisines."
      },
      {
        day: 3,
        title: "Praslin Island Excursion",
        morning: "Take a high-speed ferry to Praslin Island. Visit the renowned Vallée de Mai Nature Reserve, a UNESCO World Heritage site.",
        lunch: "Savor a beachside lunch with fresh catches of the day.",
        afternoon: "Relax on the shores of Anse Lazio, frequently rated as one of the most beautiful beaches in the world.",
        evening: "Return to your resort in Mahé and freshen up after a day of island hopping.",
        dinner: "Enjoy a romantic private dinner set up on the beach."
      },
      {
        day: 4,
        title: "La Digue Island Adventure",
        morning: "Board a boat to La Digue island, known for its laid-back atmosphere. Rent bicycles to explore the island at your own pace.",
        lunch: "Stop for a casual lunch at a local Creole café.",
        afternoon: "Head to Anse Source d'Argent to marvel at the iconic granite boulders framing the turquoise water.",
        evening: "Ferry back to Mahé, relaxing on the deck as the sun sets over the ocean.",
        dinner: "A lavish buffet dinner awaits at your resort."
      },
      {
        day: 5,
        title: "Sainte Anne Marine Park",
        morning: "Set sail on a glass-bottom boat tour to the Sainte Anne Marine National Park.",
        lunch: "Enjoy a delicious barbecue lunch served on board the boat.",
        afternoon: "Jump into the warm waters for an afternoon of snorkeling among colorful coral reefs and exotic marine life.",
        evening: "Return to the resort for a rejuvenating session at the luxury spa.",
        dinner: "Celebrate your final night with a grand farewell dinner featuring live local music."
      },
      {
        day: 6,
        title: "Departure",
        morning: "Take one last morning walk along the beach and enjoy a hearty breakfast. Pack your bags and complete the check-out process.",
        lunch: "Grab a quick bite at the resort lounge before your transfer.",
        afternoon: "Transfer to Seychelles International Airport for your onward journey home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "london-heritage",
    name: "London Heritage",
    duration: "6 Days / 5 Nights",
    description: "Buckingham Palace, London Eye, Thames Cruise, Tower Bridge, British Museum",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 125000,
    originalPrice: 145000,
    category: "International",
    features: [
      "Central London Premium Hotel",
      "London Pass Included",
      "River Thames Sightseeing Cruise",
      "Guided Royal Tour"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to London",
        morning: "Arrive at Heathrow Airport and transfer to your centrally located London hotel. Check in and refresh after your flight.",
        lunch: "Enjoy classic fish and chips at a nearby traditional British pub.",
        afternoon: "Take a leisurely walk through Hyde Park and visit the beautiful Kensington Gardens.",
        evening: "Head to the vibrant Covent Garden to watch street performers and explore boutique shops.",
        dinner: "Dine at an elegant restaurant in the West End."
      },
      {
        day: 2,
        title: "Royal London Tour",
        morning: "Witness the iconic Changing of the Guard ceremony at Buckingham Palace. Stroll down The Mall towards Trafalgar Square.",
        lunch: "Grab a quick and delicious lunch near Leicester Square.",
        afternoon: "Visit Westminster Abbey and see the majestic Big Ben and the Houses of Parliament from the outside.",
        evening: "Ride the London Eye for breathtaking panoramic views of the illuminated city skyline.",
        dinner: "Enjoy a delightful dinner overlooking the River Thames."
      },
      {
        day: 3,
        title: "History and The Tower",
        morning: "Explore the historic Tower of London and marvel at the dazzling Crown Jewels.",
        lunch: "Have lunch at the historic St Katharine Docks nearby.",
        afternoon: "Walk across the stunning Tower Bridge and take in the views from the high-level walkways. Continue to the modern Shard building.",
        evening: "Embark on a relaxing River Thames evening sightseeing cruise.",
        dinner: "Savor a three-course dinner aboard the cruise ship."
      },
      {
        day: 4,
        title: "Museums and Culture",
        morning: "Spend the morning exploring the vast collections at the British Museum, including the Rosetta Stone and Egyptian mummies.",
        lunch: "Enjoy a light lunch at the museum's impressive Great Court restaurant.",
        afternoon: "Head to South Kensington to visit the Natural History Museum and the Victoria and Albert Museum.",
        evening: "Catch a world-class theater performance in London's famous West End district.",
        dinner: "Enjoy a late post-theater dinner in Soho."
      },
      {
        day: 5,
        title: "Shopping and Greenwich",
        morning: "Take a boat ride down the Thames to the historic maritime neighborhood of Greenwich. Visit the Royal Observatory.",
        lunch: "Wander through Greenwich Market and grab some international street food.",
        afternoon: "Return to central London for shopping on Oxford Street, Regent Street, and a visit to the luxurious Harrods department store.",
        evening: "Enjoy a relaxed final evening walking along the South Bank, taking in the lively arts scene.",
        dinner: "Indulge in a farewell dinner featuring modern British cuisine."
      },
      {
        day: 6,
        title: "Farewell London",
        morning: "Enjoy a leisurely final English breakfast at your hotel. Pick up any last-minute souvenirs nearby.",
        lunch: "Have a quick bite at a local cafe before your airport transfer.",
        afternoon: "Private transfer to the airport for your departure flight.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "turkish-delight",
    name: "Turkish Delight",
    duration: "7 Days / 6 Nights",
    description: "Hot air balloons, Hagia Sophia, Grand Bazaar, cave hotels, Bosphorus cruise",
    image: "https://images.unsplash.com/photo-1541432901042-2d8b3f19d21c?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 110000,
    originalPrice: 135000,
    category: "International",
    features: [
      "Cappadocia Hot Air Balloon Ride",
      "Authentic Cave Hotel Stay",
      "Bosphorus Dinner Cruise",
      "Guided Historical Tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Istanbul",
        morning: "Arrive at Istanbul Airport and meet our representative. Transfer to your centrally located hotel in the Sultanahmet district.",
        lunch: "Enjoy a traditional Turkish kebab for your first lunch in the city.",
        afternoon: "Take a walking tour around the Hippodrome square and admire the Blue Mosque from the outside.",
        evening: "Stroll around the lively streets of Sultanahmet as the historical monuments light up.",
        dinner: "Dine at a local restaurant featuring authentic Ottoman cuisine."
      },
      {
        day: 2,
        title: "Istanbul Historical Tour",
        morning: "Visit the magnificent Hagia Sophia, a masterpiece of Byzantine architecture. Continue to the grand Topkapi Palace.",
        lunch: "Savor lunch at a restaurant with panoramic views of the Bosphorus.",
        afternoon: "Descend into the mystical Basilica Cistern. Later, get lost in the vibrant alleys of the Grand Bazaar.",
        evening: "Relax at your hotel or experience a traditional Turkish Bath (Hamam) at your leisure.",
        dinner: "Enjoy dinner at a seafood restaurant near the Galata Bridge."
      },
      {
        day: 3,
        title: "Bosphorus Cruise & Flight to Cappadocia",
        morning: "Embark on a scenic Bosphorus Cruise, sailing between the continents of Europe and Asia.",
        lunch: "Have a quick bite at the Spice Bazaar, sampling local Turkish delights.",
        afternoon: "Transfer to the airport for a short domestic flight to Cappadocia. Arrive and transfer to your unique cave hotel.",
        evening: "Settle into your fascinating cave accommodation and enjoy the serene landscape.",
        dinner: "Enjoy a hearty Anatolian dinner at your cave hotel's restaurant."
      },
      {
        day: 4,
        title: "Cappadocia Balloon Ride & Valleys",
        morning: "Wake up before dawn for a magical hot air balloon ride over the fairy chimneys at sunrise. Return to the hotel for a celebratory breakfast.",
        lunch: "Dine at a local pottery town, Avanos, famous for its clay dishes.",
        afternoon: "Visit the Goreme Open-Air Museum to see ancient rock-cut churches with stunning frescoes.",
        evening: "Watch a spectacular sunset from the Uchisar Castle panoramic viewpoint.",
        dinner: "Enjoy dinner accompanied by a traditional Turkish Night show with folk dancing."
      },
      {
        day: 5,
        title: "Underground City Exploration",
        morning: "Descend into the Kaymakli Underground City, a massive subterranean complex used by early Christians.",
        lunch: "Enjoy a traditional home-cooked meal in a nearby Cappadocian village.",
        afternoon: "Hike through the beautiful Rose Valley, discovering hidden churches and enjoying the spectacular pink-hued rock formations.",
        evening: "Relax at your hotel or take a leisurely walk through the streets of Goreme.",
        dinner: "Savor a quiet dinner at a highly-rated local restaurant."
      },
      {
        day: 6,
        title: "Return to Istanbul",
        morning: "Transfer to the airport for your return flight to Istanbul. Check into your hotel in the modern Taksim district.",
        lunch: "Have lunch on Istiklal Avenue, enjoying the bustling city vibe.",
        afternoon: "Explore the Galata neighborhood and take the elevator up the Galata Tower for sweeping 360-degree views of Istanbul.",
        evening: "Prepare for an elegant evening on the water to celebrate your final night.",
        dinner: "Enjoy a luxurious farewell dinner cruise on the Bosphorus with live entertainment."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Enjoy your final Turkish breakfast at the hotel. Spend your remaining time shopping for last-minute gifts like baklava and Turkish tea.",
        lunch: "Grab a quick snack or sandwich before your departure.",
        afternoon: "Transfer to Istanbul Airport for your flight back home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "egyptian-wonders",
    name: "Egyptian Wonders",
    duration: "6 Days / 5 Nights",
    description: "Pyramids of Giza, Sphinx, Nile Cruise, Egyptian Museum, Khan el-Khalili",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 95000,
    originalPrice: 115000,
    category: "International",
    features: [
      "Pyramid View Accommodation",
      "Expert Egyptologist Guide",
      "Nile River Felucca Ride",
      "Museum Entry Included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Cairo",
        morning: "Arrive at Cairo International Airport. Our representative will assist you with customs and transfer you to your hotel overlooking the Pyramids.",
        lunch: "Enjoy a relaxed lunch at the hotel while taking in the magnificent pyramid views.",
        afternoon: "Rest and acclimatize to the vibrant energy of Cairo.",
        evening: "Attend the spectacular Sound and Light Show at the Giza Pyramids.",
        dinner: "Dine at a fine restaurant offering traditional Egyptian cuisine."
      },
      {
        day: 2,
        title: "The Great Pyramids & Sphinx",
        morning: "Meet your expert Egyptologist guide and head to the Giza Plateau. Marvel at the Great Pyramids of Cheops, Chephren, and Mykerinos.",
        lunch: "Savor a delicious BBQ lunch at a local restaurant near the pyramids.",
        afternoon: "Visit the iconic Great Sphinx and the Valley Temple. Enjoy an optional camel ride across the desert sands.",
        evening: "Return to the hotel to freshen up and relax.",
        dinner: "Enjoy dinner at a rooftop restaurant with a night view of the pyramids."
      },
      {
        day: 3,
        title: "Egyptian Museum & Old Cairo",
        morning: "Visit the world-renowned Egyptian Museum in Tahrir Square. Discover the incredible treasures of King Tutankhamun.",
        lunch: "Have lunch at a local eatery in downtown Cairo.",
        afternoon: "Explore Islamic Cairo and the historic Citadel of Saladin, including the beautiful Alabaster Mosque of Mohamed Ali.",
        evening: "Wander through the maze-like alleys of the Khan el-Khalili Bazaar, shopping for spices, jewelry, and souvenirs.",
        dinner: "Experience dinner at the famous Naguib Mahfouz Cafe inside the bazaar."
      },
      {
        day: 4,
        title: "Memphis & Sakkara",
        morning: "Travel to the ancient capital of Memphis to see the colossal statue of Ramses II. Continue to the Sakkara necropolis.",
        lunch: "Enjoy a traditional countryside lunch in Sakkara.",
        afternoon: "Explore the Step Pyramid of Djoser, the world's oldest major stone structure.",
        evening: "Head to the banks of the Nile for a relaxing evening on the water.",
        dinner: "Dine on a traditional felucca boat as you sail along the Nile."
      },
      {
        day: 5,
        title: "Alexandria Day Trip",
        morning: "Embark on a day trip to the coastal city of Alexandria. Visit the Catacombs of Kom El Shoqafa and the impressive Pompey's Pillar.",
        lunch: "Enjoy fresh Mediterranean seafood at a restaurant overlooking the sea.",
        afternoon: "Visit the stunning modern Library of Alexandria and admire the imposing Qaitbay Citadel.",
        evening: "Return to Cairo in the evening, enjoying the scenic desert highway drive.",
        dinner: "Celebrate your final night in Egypt with a grand farewell dinner."
      },
      {
        day: 6,
        title: "Departure",
        morning: "Enjoy a final breakfast at your hotel with the pyramids in the background. Pack your belongings and complete check-out.",
        lunch: "Grab a quick bite at the hotel or airport lounge.",
        afternoon: "Transfer to Cairo International Airport for your departure flight.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "greek-island-hopping",
    name: "Greek Island Hopping",
    duration: "8 Days / 7 Nights",
    description: "Acropolis, Santorini sunsets, Oia village, Mediterranean cuisine, Aegean Sea",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 165000,
    originalPrice: 195000,
    category: "Honeymoon",
    features: [
      "Premium Catamaran Cruise",
      "Caldera View Hotel in Santorini",
      "Athens Historical Tour",
      "Ferry Transfers Included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Athens",
        morning: "Arrive at Athens International Airport. Enjoy a private transfer to your hotel in the city center.",
        lunch: "Have your first taste of authentic Greek gyros at a local taverna.",
        afternoon: "Spend the afternoon exploring the charming Plaka neighborhood.",
        evening: "Take a relaxed evening walk through Monastiraki square to experience the local vibe.",
        dinner: "Dine at a rooftop restaurant with a spectacular illuminated view of the Acropolis."
      },
      {
        day: 2,
        title: "Athens Antiquities Tour",
        morning: "Join a guided tour of the Acropolis. Marvel at the Parthenon, the Erechtheion, and the Temple of Athena Nike.",
        lunch: "Enjoy a traditional Greek salad and moussaka at a nearby restaurant.",
        afternoon: "Visit the modern Acropolis Museum to see the ancient artifacts up close. Later, witness the changing of the guard at Syntagma Square.",
        evening: "Explore the upscale Kolonaki neighborhood for boutique shopping and cafe culture.",
        dinner: "Savor a fine dining experience featuring modern Mediterranean cuisine."
      },
      {
        day: 3,
        title: "Ferry to Santorini",
        morning: "Transfer to Piraeus port early in the morning and board a high-speed ferry to Santorini.",
        lunch: "Enjoy lunch on the ferry or upon arrival at your cliffside hotel.",
        afternoon: "Check into your Caldera-view hotel. Spend the afternoon relaxing by the infinity pool.",
        evening: "Head to the picturesque village of Oia to secure a spot for the world-famous sunset.",
        dinner: "Dine at a romantic cliffside restaurant in Oia."
      },
      {
        day: 4,
        title: "Santorini Volcano & Hot Springs",
        morning: "Set sail on a traditional wooden boat to the Nea Kameni volcanic island. Hike to the crater.",
        lunch: "Enjoy a light lunch onboard the boat.",
        afternoon: "Sail to Palea Kameni and swim in the therapeutic, mineral-rich hot springs. Return to the main island and relax.",
        evening: "Wander through the lively alleys of Fira, the island's capital, exploring local shops and art galleries.",
        dinner: "Savor fresh Aegean seafood at a traditional Greek taverna in Fira."
      },
      {
        day: 5,
        title: "Santorini Wine Tasting",
        morning: "Take a leisurely morning and enjoy breakfast on your private balcony. Visit the ancient ruins of Akrotiri.",
        lunch: "Have lunch near the unique Red Beach, known for its volcanic sand.",
        afternoon: "Embark on a wine tasting tour, visiting local vineyards to sample the island's famous Assyrtiko wines.",
        evening: "Return to your hotel to freshen up and enjoy the twilight over the caldera.",
        dinner: "Enjoy a wine-paired dinner at a renowned vineyard restaurant."
      },
      {
        day: 6,
        title: "Luxury Catamaran Cruise",
        morning: "Board a premium catamaran for a semi-private sailing cruise along the stunning Santorini coastline.",
        lunch: "Indulge in a rich barbecue lunch prepared and served fresh on the catamaran.",
        afternoon: "Drop anchor in a secluded bay for swimming and snorkeling in the crystal-clear Aegean waters.",
        evening: "Watch a magical sunset directly from the deck of the catamaran as you sail back to port.",
        dinner: "Enjoy a relaxed, late dinner at a local spot near your hotel."
      },
      {
        day: 7,
        title: "Return to Athens",
        morning: "Enjoy a final morning taking in the caldera views. Check out and transfer to the port or airport.",
        lunch: "Have a quick lunch before catching your high-speed ferry or flight back to Athens.",
        afternoon: "Arrive in Athens and check into your hotel. Spend your final afternoon picking up souvenirs in the bustling Monastiraki flea market.",
        evening: "Take a final evening stroll through the historical center of the city.",
        dinner: "Celebrate your Greek adventure with a farewell dinner featuring live Bouzouki music."
      },
      {
        day: 8,
        title: "Departure",
        morning: "Enjoy a hearty Greek breakfast. Depending on your flight time, take a short final walk around the city.",
        lunch: "Grab a coffee and a spanakopita before heading to the airport.",
        afternoon: "Transfer to Athens International Airport for your journey home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "spanish-fiesta",
    name: "Spanish Fiesta",
    duration: "7 Days / 6 Nights",
    description: "Sagrada Familia, Park Guell, Royal Palace, Tapas tasting, Flamenco show",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 140000,
    originalPrice: 165000,
    category: "International",
    features: [
      "High-speed Train Transfers",
      "Skip-the-line Sagrada Familia",
      "Authentic Tapas Tour",
      "Live Flamenco Performance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Hola Barcelona",
        morning: "Arrive at Barcelona El Prat Airport and transfer to your centrally located hotel.",
        lunch: "Enjoy a traditional Catalan lunch at a local restaurant near your hotel.",
        afternoon: "Take a leisurely walk down the famous tree-lined Las Ramblas boulevard. Explore the vibrant Boqueria Market.",
        evening: "Wander through the narrow, atmospheric streets of the Gothic Quarter.",
        dinner: "Delight in your first Spanish tapas experience at a bustling local bar."
      },
      {
        day: 2,
        title: "Gaudí's Masterpieces",
        morning: "Enjoy skip-the-line access to Antoni Gaudí's awe-inspiring Sagrada Familia.",
        lunch: "Have lunch in the trendy Eixample district.",
        afternoon: "Visit the colorful Park Güell, offering fantastic panoramic views over Barcelona.",
        evening: "Walk along Passeig de Gràcia to see Casa Batlló and Casa Milà illuminated at night.",
        dinner: "Dine on authentic seafood paella at a restaurant near the waterfront."
      },
      {
        day: 3,
        title: "Montjuïc & Beach Vibe",
        morning: "Take the cable car up to Montjuïc Hill. Visit the Montjuïc Castle and enjoy sweeping views of the city.",
        lunch: "Enjoy a relaxed lunch by the beach at Barceloneta.",
        afternoon: "Spend the afternoon relaxing on the sandy shores of Barceloneta Beach or exploring the nearby Olympic Port marina.",
        evening: "Witness the spectacular Magic Fountain of Montjuïc light and music show.",
        dinner: "Enjoy dinner in the lively El Born neighborhood."
      },
      {
        day: 4,
        title: "High-Speed Train to Madrid",
        morning: "Board the comfortable AVE high-speed train to Spain's capital, Madrid.",
        lunch: "Enjoy lunch on the train or upon arrival at Madrid Atocha station.",
        afternoon: "Check into your Madrid hotel. Take an introductory walk to the bustling Puerta del Sol and the grand Plaza Mayor.",
        evening: "Stroll through the beautiful Retiro Park as the sun begins to set.",
        dinner: "Experience traditional Madrilenian cuisine at one of the world's oldest restaurants."
      },
      {
        day: 5,
        title: "Royal Madrid & Art",
        morning: "Take a guided tour of the magnificent Royal Palace of Madrid.",
        lunch: "Savor a bocadillo de calamares (calamari sandwich) near Plaza Mayor.",
        afternoon: "Visit the world-renowned Prado Museum to marvel at masterpieces by Velázquez, Goya, and El Greco.",
        evening: "Head to the vibrant La Latina neighborhood, famous for its energetic evening atmosphere.",
        dinner: "Join an authentic Tapas Crawl, moving from bar to bar to sample various Spanish delicacies."
      },
      {
        day: 6,
        title: "Toledo Day Trip & Flamenco",
        morning: "Embark on a half-day trip to the ancient hilltop city of Toledo, the 'City of Three Cultures'.",
        lunch: "Enjoy traditional Castilian roast lamb for lunch in Toledo.",
        afternoon: "Return to Madrid and spend the late afternoon shopping along the upscale Gran Vía.",
        evening: "Prepare for a night of deep emotion and incredible skill at an authentic Flamenco tablao.",
        dinner: "Enjoy a farewell dinner served alongside the passionate Flamenco performance."
      },
      {
        day: 7,
        title: "Adiós España",
        morning: "Savor a final Spanish breakfast of churros with thick hot chocolate.",
        lunch: "Grab a quick bite at a local cafe.",
        afternoon: "Transfer to Adolfo Suárez Madrid-Barajas Airport for your departure flight.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "brazilian-carnival",
    name: "Brazilian Carnival",
    duration: "6 Days / 5 Nights",
    description: "Christ the Redeemer, Copacabana Beach, Sugarloaf Mountain, Samba shows, Tijuca Forest",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 135000,
    originalPrice: 160000,
    category: "Adventure",
    features: [
      "Christ the Redeemer Skip-the-line",
      "Sugarloaf Mountain Cable Car",
      "Authentic Samba Show Tickets",
      "Guided Favela Walking Tour"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Rio de Janeiro",
        morning: "Arrive at Galeão International Airport and enjoy a scenic transfer to your Copacabana beachfront hotel.",
        lunch: "Savor your first taste of Brazilian cuisine with a classic feijoada at a local restaurant.",
        afternoon: "Check into your room and spend the afternoon relaxing on the iconic Copacabana Beach. Soak in the vibrant atmosphere.",
        evening: "Take a sunset walk along the beach promenade, watching the city come alive.",
        dinner: "Enjoy a churrascaria experience — unlimited grilled meats served tableside by expert carvers."
      },
      {
        day: 2,
        title: "Christ the Redeemer & Santa Teresa",
        morning: "Take the cog train up Corcovado Mountain with skip-the-line access to the Christ the Redeemer statue. Enjoy jaw-dropping 360-degree views of Rio.",
        lunch: "Dine at a charming restaurant in the bohemian hillside neighborhood of Santa Teresa.",
        afternoon: "Explore Santa Teresa's cobblestone streets, colorful street art, and visit the Selarón Steps — a world-famous tiled staircase.",
        evening: "Head to the Lapa neighborhood for a night of live Brazilian music and samba.",
        dinner: "Enjoy traditional Brazilian street food and caipirinhas at a Lapa bar."
      },
      {
        day: 3,
        title: "Sugarloaf Mountain & Botafogo",
        morning: "Take the iconic cable car ride up Sugarloaf Mountain for spectacular views of Guanabara Bay and the city skyline.",
        lunch: "Enjoy a seafood lunch at a restaurant near Praia Vermelha at the base of Sugarloaf.",
        afternoon: "Explore the upscale Botafogo neighborhood. Visit the nearby Flamengo Park for waterfront views and photo opportunities.",
        evening: "Watch the sunset from Arpoador Rock, the famous vantage point between Copacabana and Ipanema.",
        dinner: "Indulge in a fine dining experience at an Ipanema rooftop restaurant."
      },
      {
        day: 4,
        title: "Tijuca Forest & Samba Show",
        morning: "Embark on a guided hike through the Tijuca National Park, the world's largest urban rainforest. Visit stunning waterfalls and viewpoints.",
        lunch: "Enjoy a healthy, organic lunch at a cafe near the forest entrance.",
        afternoon: "Relax at your hotel or do some shopping at the Ipanema Hippie Fair (if Sunday) or local boutiques.",
        evening: "Get dressed up for an unforgettable evening at an authentic Brazilian Samba Show featuring elaborate costumes and electrifying performances.",
        dinner: "A gourmet dinner is included as part of the Samba Show experience."
      },
      {
        day: 5,
        title: "Favela Tour & Beach Day",
        morning: "Join a respectful, community-led guided walking tour of the Rocinha favela, learning about the culture, resilience, and art of its residents.",
        lunch: "Enjoy traditional home-cooked Brazilian food at a local community restaurant.",
        afternoon: "Spend your final afternoon basking in the sun on the legendary Ipanema Beach. Try fresh coconut water from a vendor and play beach volleyball.",
        evening: "Take a final evening stroll through Rio, soaking in the sounds and energy of the Cidade Maravilhosa.",
        dinner: "Celebrate with a farewell dinner at a top-rated contemporary Brazilian restaurant."
      },
      {
        day: 6,
        title: "Departure",
        morning: "Enjoy a leisurely final breakfast at your hotel with ocean views. Pack your bags and check out.",
        lunch: "Grab a quick açaí bowl or pão de queijo before your airport transfer.",
        afternoon: "Transfer to Galeão International Airport for your departure flight.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "fiji-island-retreat",
    name: "Fiji Island Retreat",
    duration: "7 Days / 6 Nights",
    description: "Crystal lagoons, coral reefs, Fijian village visit, island hopping, tropical paradise",
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 175000,
    originalPrice: 205000,
    category: "Honeymoon",
    features: [
      "Overwater Bure Accommodation",
      "Private Island Day Trip",
      "Snorkeling & Diving Gear Included",
      "Traditional Fijian Kava Ceremony"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bula! Welcome to Fiji",
        morning: "Arrive at Nadi International Airport. Greeted with a warm Fijian 'Bula!' and a fresh flower lei. Take a scenic boat transfer to your island resort.",
        lunch: "Enjoy a tropical welcome lunch at the resort's beachfront restaurant.",
        afternoon: "Check into your luxurious Overwater Bure. Spend the afternoon swimming in the warm turquoise lagoon right from your private deck.",
        evening: "Participate in a traditional Fijian Kava Ceremony with the resort staff.",
        dinner: "Romantic candlelit dinner on the beach with freshly caught seafood."
      },
      {
        day: 2,
        title: "Coral Reef Snorkeling",
        morning: "After a tropical breakfast, join a guided snorkeling tour on the pristine house reef. Discover vibrant coral gardens and tropical fish.",
        lunch: "Enjoy a light lunch by the infinity pool.",
        afternoon: "Relax on the beach or try stand-up paddleboarding across the calm lagoon. Opt for a couples spa treatment.",
        evening: "Watch the sunset from a hammock strung between two palm trees.",
        dinner: "Dine at the resort's overwater restaurant featuring Pan-Pacific fusion cuisine."
      },
      {
        day: 3,
        title: "Fijian Village Visit",
        morning: "Take a boat ride to a nearby authentic Fijian village. Experience a traditional welcoming ceremony and learn about local customs.",
        lunch: "Enjoy a traditional 'Lovo' feast — food cooked in an underground earth oven.",
        afternoon: "Interact with village elders, watch traditional craft demonstrations, and play with the local children.",
        evening: "Return to your resort and enjoy a relaxing evening by the pool.",
        dinner: "International buffet dinner at the main restaurant."
      },
      {
        day: 4,
        title: "Private Island Excursion",
        morning: "Set sail on a catamaran to a stunning, uninhabited private island. Enjoy pristine, untouched beaches all to yourselves.",
        lunch: "A gourmet picnic lunch is served on the white sand beach.",
        afternoon: "Snorkel in crystal-clear waters, explore tidal pools, or simply sunbathe in total seclusion.",
        evening: "Return to the resort. Enjoy cocktails at the swim-up bar.",
        dinner: "Enjoy a themed Fijian Night dinner with live traditional music and fire dancing."
      },
      {
        day: 5,
        title: "Scuba Diving & Waterfall Trek",
        morning: "For certified divers, embark on a thrilling scuba dive at one of Fiji's famous soft coral dive sites. Non-divers can enjoy a glass-bottom boat tour.",
        lunch: "Casual beachside lunch at the dive center café.",
        afternoon: "Take a guided trek through the lush tropical rainforest to a hidden waterfall. Swim in the refreshing natural pool at its base.",
        evening: "Return to the resort for a rejuvenating deep-tissue massage at the spa.",
        dinner: "Enjoy an intimate private dining experience set up on a sandbar."
      },
      {
        day: 6,
        title: "Leisure & Farewell",
        morning: "Sleep in and enjoy a floating breakfast delivered to your Bure. Spend the morning at total leisure.",
        lunch: "Final poolside lunch with tropical cocktails.",
        afternoon: "Take final photos around the resort. Try kayaking through the mangrove channels.",
        evening: "Watch your final Fijian sunset from the resort's sunset deck with a glass of champagne.",
        dinner: "Grand farewell dinner with a special dessert and a traditional Fijian farewell song from the staff."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Enjoy a final breakfast. Pack your bags and say goodbye to the island paradise.",
        lunch: "Quick bite at the airport lounge.",
        afternoon: "Boat transfer back to Nadi, then transfer to Nadi International Airport for your flight home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "mauritius-getaway",
    name: "Mauritius Getaway",
    duration: "6 Days / 5 Nights",
    description: "Seven Colored Earth, Le Morne, Île aux Cerfs, Chamarel Waterfall, Port Louis",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 89000,
    originalPrice: 105000,
    category: "Honeymoon",
    features: [
      "5-Star Beach Resort Stay",
      "Île aux Cerfs Catamaran Trip",
      "Chamarel Nature Tour",
      "Complimentary Water Sports"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        morning: "Arrive at Sir Seewoosagur Ramgoolam International Airport. Meet your driver for a scenic transfer to your luxury beach resort.",
        lunch: "Welcome lunch at the resort's beachside restaurant featuring Mauritian Creole flavors.",
        afternoon: "Check into your ocean-view room and spend the afternoon exploring the pristine resort beach and pool area.",
        evening: "Enjoy a welcome cocktail as you watch the sun set over the Indian Ocean.",
        dinner: "Romantic seafood dinner at the resort's fine dining restaurant."
      },
      {
        day: 2,
        title: "Port Louis & Cultural Exploration",
        morning: "Drive to the vibrant capital, Port Louis. Visit the bustling Central Market for local spices, fruits, and handcrafted souvenirs.",
        lunch: "Taste authentic Dholl Puri and other street food delicacies at the market.",
        afternoon: "Explore the Caudan Waterfront, the Blue Penny Museum, and the historic Aapravasi Ghat (UNESCO World Heritage Site).",
        evening: "Return to your resort and enjoy a relaxing swim in the pool.",
        dinner: "Dine at the resort's Indian-inspired restaurant."
      },
      {
        day: 3,
        title: "Chamarel & Seven Colored Earth",
        morning: "Head south to the Chamarel region. Visit the impressive Chamarel Waterfall cascading 100 meters into the jungle below.",
        lunch: "Enjoy a gourmet Mauritian lunch at a restaurant overlooking the gorge.",
        afternoon: "Explore the fascinating Seven Colored Earth geological formation. Visit a local rum distillery for a tasting session.",
        evening: "Stop at Le Morne Brabant for stunning sunset views over the lagoon.",
        dinner: "Enjoy a BBQ dinner on the beach back at your resort."
      },
      {
        day: 4,
        title: "Île aux Cerfs Island Trip",
        morning: "Board a catamaran for a full-day trip to the stunning Île aux Cerfs. Sail through the turquoise lagoons.",
        lunch: "Barbecue lunch served on the island's white sand beach.",
        afternoon: "Enjoy parasailing, glass-bottom boat rides, or simply relax on the pristine beach. Snorkel in the shallow reefs.",
        evening: "Sail back to the mainland as the sun paints the sky in golden hues.",
        dinner: "Enjoy a casual pizza and pasta night at the resort's Italian restaurant."
      },
      {
        day: 5,
        title: "Water Sports & Spa Day",
        morning: "Start the day with complimentary water sports — kayaking, windsurfing, or paddleboarding in the calm lagoon.",
        lunch: "Light healthy lunch by the pool.",
        afternoon: "Indulge in a luxurious couple's spa treatment with aromatherapy oils and a hot stone massage.",
        evening: "Take a final sunset walk along the beach. Collect some shells as souvenirs.",
        dinner: "Farewell gala dinner with live Sega music and dance performances."
      },
      {
        day: 6,
        title: "Departure",
        morning: "Enjoy a final leisurely breakfast at the resort. Take last photos of the stunning surroundings.",
        lunch: "Quick snack at the resort lounge before departure.",
        afternoon: "Transfer to the airport for your flight back home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "kiwi-adventure",
    name: "Kiwi Adventure",
    duration: "10 Days / 9 Nights",
    description: "Milford Sound, Hobbiton, Queenstown bungy, Rotorua geysers, glaciers, Maori culture",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 225000,
    originalPrice: 265000,
    category: "Adventure",
    features: [
      "Milford Sound Scenic Cruise",
      "Hobbiton Movie Set Tour",
      "Queenstown Adventure Activities",
      "Domestic Flights Included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Auckland",
        morning: "Arrive at Auckland International Airport and transfer to your centrally located hotel.",
        lunch: "Enjoy a fresh seafood lunch at the Viaduct Harbour waterfront.",
        afternoon: "Take the elevator to the top of the Sky Tower for 360-degree views of the city and the Hauraki Gulf.",
        evening: "Explore the vibrant Ponsonby Road for boutique shopping and cafe culture.",
        dinner: "Dine at a top-rated New Zealand restaurant featuring locally-sourced lamb and wines."
      },
      {
        day: 2,
        title: "Hobbiton & Rotorua",
        morning: "Drive south through the lush Waikato countryside to the Hobbiton Movie Set. Take the full guided tour of the Shire.",
        lunch: "Enjoy a feast at the Green Dragon Inn inside Hobbiton itself.",
        afternoon: "Continue driving to Rotorua. Check into your hotel and visit Te Puia to see the spectacular Pohutu Geyser.",
        evening: "Experience an authentic Maori cultural evening with traditional songs, dances (Haka), and a Hangi feast.",
        dinner: "The Hangi feast is your dinner — food cooked underground using volcanic steam."
      },
      {
        day: 3,
        title: "Rotorua Geothermal Wonders",
        morning: "Visit the Wai-O-Tapu Thermal Wonderland and see the Champagne Pool and the vibrant Artist's Palette.",
        lunch: "Enjoy lunch at a lakeside cafe in Rotorua.",
        afternoon: "Go zip-lining through the Redwoods Treewalk canopy or mountain biking through the ancient forest trails.",
        evening: "Relax in the Polynesian Spa hot pools overlooking Lake Rotorua.",
        dinner: "Dine at a cozy bistro in Rotorua's Eat Streat dining precinct."
      },
      {
        day: 4,
        title: "Fly to Queenstown",
        morning: "Take a domestic flight from Rotorua to Queenstown, the adventure capital of the world.",
        lunch: "Grab a gourmet burger at the iconic Fergburger upon arrival.",
        afternoon: "Check into your lakefront hotel. Take the Skyline Gondola up Bob's Peak for breathtaking views of Lake Wakatipu and The Remarkables.",
        evening: "Enjoy a thrilling luge ride down the mountain as the sun sets.",
        dinner: "Dine at a waterfront restaurant with views of the Remarkables mountain range."
      },
      {
        day: 5,
        title: "Milford Sound Cruise",
        morning: "Depart early for the scenic drive to Milford Sound through the stunning Fiordland National Park. Pass through the Homer Tunnel.",
        lunch: "A gourmet picnic lunch is provided during the cruise.",
        afternoon: "Board a scenic cruise through the majestic Milford Sound. Sail past towering Mitre Peak, cascading waterfalls, and spot dolphins and fur seals.",
        evening: "Return to Queenstown in the evening via the scenic route.",
        dinner: "Enjoy a hearty dinner at a cozy Queenstown restaurant."
      },
      {
        day: 6,
        title: "Queenstown Adventure Day",
        morning: "Choose your adrenaline fix: AJ Hackett Bungy Jump off the Kawarau Bridge, jet boating on the Shotover River, or skydiving over the lake.",
        lunch: "Refuel with a big Kiwi pie and flat white coffee in town.",
        afternoon: "Take a scenic cruise across Lake Wakatipu on the vintage TSS Earnslaw steamship to Walter Peak High Country Farm.",
        evening: "Return to Queenstown. Enjoy free time to browse the eclectic shops and galleries.",
        dinner: "Treat yourself to a premium New Zealand wine and dine experience."
      },
      {
        day: 7,
        title: "Arrowtown & Wine Country",
        morning: "Drive to the charming historic gold mining village of Arrowtown. Walk along the Arrow River and explore the Chinese settlement.",
        lunch: "Enjoy a long lunch with wine tasting at a Central Otago vineyard, famous for its Pinot Noir.",
        afternoon: "Visit 2-3 more boutique wineries in the Gibbston Valley — the 'Valley of the Vines'.",
        evening: "Return to Queenstown for a relaxed evening at your hotel.",
        dinner: "Enjoy a relaxed final Queenstown dinner featuring local venison and lamb."
      },
      {
        day: 8,
        title: "Fly to Christchurch",
        morning: "Fly from Queenstown to Christchurch. Check into your hotel and explore the regenerating city center.",
        lunch: "Lunch at the innovative Riverside Market food hall.",
        afternoon: "Visit the Canterbury Museum, the Botanic Gardens, and punt on the peaceful Avon River through the city.",
        evening: "Walk through the Transitional Cathedral and see the vibrant street art that defines post-earthquake Christchurch.",
        dinner: "Dine at a top-rated restaurant in the Oxford Terrace 'Strip' dining precinct."
      },
      {
        day: 9,
        title: "Kaikoura Whale Watching",
        morning: "Take a morning excursion to Kaikoura for a thrilling whale watching boat tour. Spot sperm whales, dolphins, and albatross.",
        lunch: "Enjoy the freshest crayfish (lobster) lunch right at the Kaikoura coast.",
        afternoon: "Drive back to Christchurch through the stunning coastal scenery. Stop at a local vineyard along the way.",
        evening: "Spend your final evening picking up souvenirs — Manuka honey, Merino wool, and Pounamu (greenstone) jewelry.",
        dinner: "Celebrate with a farewell dinner featuring the best of New Zealand cuisine and wines."
      },
      {
        day: 10,
        title: "Departure",
        morning: "Enjoy a final flat white coffee and breakfast at a Christchurch cafe.",
        lunch: "Grab a quick bite at the airport before checking in.",
        afternoon: "Transfer to Christchurch International Airport for your flight home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "canadian-rockies",
    name: "Canadian Rockies",
    duration: "7 Days / 6 Nights",
    description: "Banff National Park, Lake Louise, Moraine Lake, Jasper, Icefields Parkway, wildlife",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 195000,
    originalPrice: 230000,
    category: "Adventure",
    features: [
      "Columbia Icefield Glacier Walk",
      "Lake Louise Canoeing",
      "Icefields Parkway Scenic Drive",
      "Premium Mountain Lodge Stays"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Calgary",
        morning: "Arrive at Calgary International Airport. Meet your driver for a scenic 90-minute transfer through the foothills to Banff.",
        lunch: "Enjoy a welcome lunch at a Banff Avenue restaurant featuring Alberta beef.",
        afternoon: "Check into your mountain lodge. Take the Banff Gondola to the summit of Sulphur Mountain for stunning panoramic views of the Rockies.",
        evening: "Explore the charming town of Banff — browse outdoor gear shops and art galleries.",
        dinner: "Dine at a premium steakhouse with views of the surrounding peaks."
      },
      {
        day: 2,
        title: "Lake Louise & Moraine Lake",
        morning: "Drive to the iconic Lake Louise. Marvel at the impossibly turquoise glacial waters backed by Victoria Glacier. Take a canoe ride across the lake.",
        lunch: "Enjoy high tea or a gourmet lunch at the historic Fairmont Chateau Lake Louise.",
        afternoon: "Continue to the breathtaking Moraine Lake in the Valley of the Ten Peaks. Hike to the rockpile viewpoint for the classic postcard photo.",
        evening: "Return to Banff for a relaxed evening. Soak in the Banff Upper Hot Springs.",
        dinner: "Enjoy Canadian comfort food at a cozy Banff pub."
      },
      {
        day: 3,
        title: "Icefields Parkway Drive",
        morning: "Begin the legendary Icefields Parkway drive from Lake Louise to Jasper — one of the most scenic roads in the world.",
        lunch: "Stop at The Crossing for a quick lunch amidst mountain scenery.",
        afternoon: "Visit the Columbia Icefield and take the Ice Explorer bus onto the Athabasca Glacier. Walk on the Glacier Skywalk — a glass-floored observation platform over a 280m-deep valley.",
        evening: "Continue the drive to Jasper, spotting wildlife like elk, mountain goats, and bears along the way.",
        dinner: "Check into your Jasper lodge and enjoy a hearty mountain dinner."
      },
      {
        day: 4,
        title: "Jasper National Park",
        morning: "Take the Jasper SkyTram to the top of Whistlers Mountain for breathtaking alpine views.",
        lunch: "Enjoy lunch at a café in the quaint town of Jasper.",
        afternoon: "Visit the stunning Maligne Canyon and take a boat cruise on Maligne Lake to the famous Spirit Island — one of Canada's most photographed spots.",
        evening: "Join a guided evening wildlife safari to spot elk, bears, and wolves in the golden hour light.",
        dinner: "Dine on wild game and locally foraged ingredients at a top Jasper restaurant."
      },
      {
        day: 5,
        title: "Athabasca Falls & Return to Banff",
        morning: "Visit the thundering Athabasca Falls and the stunning Sunwapta Falls before heading south.",
        lunch: "Packed picnic lunch enjoyed at a scenic pullout along the Icefields Parkway.",
        afternoon: "Drive back to Banff with stops for wildlife spotting. Visit Peyto Lake — famous for its fox-head shape and vivid blue color.",
        evening: "Return to Banff and enjoy free time to shop for Canadian souvenirs — maple syrup, Mountie memorabilia, and Indigenous art.",
        dinner: "Enjoy fondue and craft beer at a lively Banff restaurant."
      },
      {
        day: 6,
        title: "Johnston Canyon & Farewell",
        morning: "Hike the stunning Johnston Canyon trail to the Lower and Upper Falls, walking along catwalks bolted into the canyon walls.",
        lunch: "Enjoy a relaxed final lunch in the town of Banff.",
        afternoon: "Take a scenic helicopter tour over the Rockies for a bird's-eye view of the peaks, lakes, and glaciers (optional upgrade).",
        evening: "Pack your bags and prepare for departure the next morning.",
        dinner: "Farewell dinner featuring Canadian cuisine — poutine, smoked salmon, and Nanaimo bars for dessert."
      },
      {
        day: 7,
        title: "Departure",
        morning: "Enjoy a final mountain breakfast at your lodge. Soak in the crisp Rocky Mountain air one last time.",
        lunch: "Quick coffee stop at the Calgary airport.",
        afternoon: "Transfer to Calgary International Airport for your flight home.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  },
  {
    id: "bhutan-mystical-tour",
    name: "Bhutan Mystical Tour",
    duration: "6 Days / 5 Nights",
    description: "Tiger's Nest Monastery, Punakha Dzong, Thimphu, Dochula Pass, Himalayan valleys",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=95&auto=format&fit=crop"
    ],
    price: 115000,
    originalPrice: 140000,
    category: "Adventure",
    features: [
      "Tiger's Nest Monastery Trek",
      "Punakha Dzong Guided Tour",
      "Traditional Bhutanese Hot Stone Bath",
      "Licensed Bhutanese Guide Included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paro",
        morning: "Experience one of the world's most thrilling airport landings as your flight descends into the Paro Valley surrounded by Himalayan peaks.",
        lunch: "Welcome lunch at a traditional Bhutanese restaurant featuring Ema Datshi (chili cheese) and red rice.",
        afternoon: "Check into your hotel and visit the Paro Rinpung Dzong, a stunning fortress-monastery overlooking the Paro River. Walk across the traditional cantilever bridge.",
        evening: "Stroll through the charming Paro town, visiting local handicraft shops and the weekend market.",
        dinner: "Enjoy a traditional Bhutanese dinner at your hotel with locally brewed Ara (rice wine)."
      },
      {
        day: 2,
        title: "Tiger's Nest Monastery",
        morning: "Begin the iconic hike to Taktsang (Tiger's Nest) Monastery, perched dramatically on a cliff face at 3,120 meters. The trail winds through beautiful pine forest with prayer flags.",
        lunch: "Stop at the halfway cafeteria for lunch with spectacular views of the monastery across the valley.",
        afternoon: "Reach the monastery and explore its sacred temples and shrines. Soak in the spiritual atmosphere and breathtaking views.",
        evening: "Descend back to Paro. Enjoy a traditional Bhutanese hot stone bath to soothe your muscles after the trek.",
        dinner: "Celebratory dinner at a local restaurant with live traditional Bhutanese music."
      },
      {
        day: 3,
        title: "Drive to Thimphu",
        morning: "Drive from Paro to Thimphu, Bhutan's capital city. Visit the National Memorial Chorten and the towering Buddha Dordenma statue.",
        lunch: "Enjoy lunch at a rooftop restaurant in Thimphu with valley views.",
        afternoon: "Visit the unique Takin Preserve to see Bhutan's national animal. Explore the Folk Heritage Museum and the traditional paper-making factory.",
        evening: "Walk through the bustling Norzin Lam main street. Visit the weekend market if timing permits.",
        dinner: "Dine at a popular Thimphu restaurant offering both Bhutanese and continental cuisine."
      },
      {
        day: 4,
        title: "Dochula Pass & Punakha",
        morning: "Drive over the spectacular Dochula Pass (3,100m) with its 108 memorial chortens and panoramic views of the Himalayan range.",
        lunch: "Enjoy a hot lunch at the Dochula cafeteria surrounded by prayer flags and mountain views.",
        afternoon: "Continue to Punakha and visit the magnificent Punakha Dzong, the 'Palace of Great Happiness', situated at the confluence of two rivers.",
        evening: "Take a gentle evening walk through the Punakha Valley's terraced rice paddies.",
        dinner: "Traditional dinner at your Punakha hotel surrounded by the peaceful valley."
      },
      {
        day: 5,
        title: "Punakha Valley & Return to Paro",
        morning: "Hike to the Khamsum Yulley Namgyal Chorten through lush rice fields and riverside trails.",
        lunch: "Enjoy a packed picnic lunch by the Mo Chhu river.",
        afternoon: "Drive back to Paro via the Dochula Pass. Stop at the Simply Bhutan museum for an interactive cultural experience.",
        evening: "Enjoy your final evening in Bhutan with a farewell cultural program featuring masked dances and traditional songs.",
        dinner: "Grand farewell dinner with a special multi-course Bhutanese feast."
      },
      {
        day: 6,
        title: "Departure",
        morning: "Enjoy a final breakfast surrounded by Himalayan peaks. Complete check-out and head to Paro Airport.",
        lunch: "Quick bite at the airport before boarding.",
        afternoon: "Board your flight home, taking with you the peace and happiness of the Land of the Thunder Dragon.",
        evening: "N/A",
        dinner: "N/A"
      }
    ]
  }

];
