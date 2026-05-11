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
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=95&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=95&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=95&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=95&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566837945700-3005dea9be52?w=1200&q=95&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1590332822003-88bc19d65179?w=1200&q=95&auto=format&fit=crop",
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
  }
];
