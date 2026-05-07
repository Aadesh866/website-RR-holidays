export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Romantic Destinations for Indian Couples in 2026",
    excerpt: "From the turquoise waters of Maldives to the snowy peaks of Manali, discover the most romantic getaways tailored for newlyweds and couples looking for a memorable escape...",
    category: "Honeymoon",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "How to Plan a Stress-Free Family Vacation to Europe",
    excerpt: "Traveling with kids doesn't have to be overwhelming. Here's our complete guide to planning a European itinerary that keeps everyone happy, from toddlers to grandparents...",
    category: "Family",
    date: "Feb 2, 2026",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Explore Thailand Under ₹40,000: A Complete Guide",
    excerpt: "Yes, you can experience Bangkok's temples, Phuket's beaches, and Krabi's islands without breaking the bank. Here are our budget-friendly tips for the ultimate Thai adventure...",
    category: "Budget Travel",
    date: "Mar 10, 2026",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "When Is The Best Time to Visit Ladakh from South India?",
    excerpt: "Planning a Ladakh trip? Timing is everything. Learn about the best months to visit, road conditions, permit requirements, and how to acclimatize for the high altitude...",
    category: "Adventure",
    date: "Apr 5, 2026",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Your Ultimate Guide to Bali: Money-Saving Tips for Indian Travellers",
    excerpt: "Bali is closer and more affordable than you think. From visa-on-arrival to the best Ubud stays under ₹3,000/night, here's everything you need to know...",
    category: "International",
    date: "Apr 20, 2026",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Rajasthan Road Trip: 7-Day Itinerary for First-Time Visitors",
    excerpt: "Jaipur, Udaipur, Jaisalmer, and Jodhpur — cover the golden triangle of Rajasthan in one epic road trip. Complete with hotel recommendations and must-try food stops...",
    category: "Domestic",
    date: "May 1, 2026",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80&auto=format&fit=crop",
  },
]
