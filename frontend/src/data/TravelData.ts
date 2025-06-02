import { PackageCategory, TravelPackage, Testimonial } from '../types';

export const packageCategories: PackageCategory[] = [
  {
    id: 'umrah',
    name: 'Umrah Packages',
    icon: 'Mosque',
    description: 'Spiritual journeys to holy sites with guided religious experiences'
  },
  {
    id: 'holiday',
    name: 'Holiday Tours',
    icon: 'Umbrella',
    description: 'Relaxing vacations to beautiful destinations around the world'
  },
  {
    id: 'religious',
    name: 'Religious Trips',
    icon: 'Plane',
    description: 'Visits to important religious and historical sites worldwide'
  },
  {
    id: 'adventure',
    name: 'Adventure Packages',
    icon: 'Mountain',
    description: 'Thrilling adventures for those seeking excitement and challenge'
  },
  {
    id: 'student',
    name: 'Student Tours',
    icon: 'GraduationCap',
    description: 'Educational trips designed for students and young travelers'
  }
];

export const travelPackages: TravelPackage[] = [
  {
    id: 'umrah-1',
    title: 'Deluxe Umrah Package',
    description: 'A comprehensive 10-day spiritual journey to the holy cities of Makkah and Madinah, staying in premium accommodations close to the holy sites with expert religious guides.',
    image: 'https://images.pexels.com/photos/2089799/pexels-photo-2089799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryId: 'umrah',
    price: 2500,
    duration: '10 Days',
    location: 'Makkah & Madinah, Saudi Arabia',
    rating: 4.8,
    features: [
      'Visa processing and support',
      'Return flights from major cities',
      '5-star hotel accommodations',
      'Private transportation',
      'Experienced religious guides',
      'All meals included',
      'Ziyarat to historical sites'
    ],
    included: [
      'Umrah visa fees',
      'Return international flights',
      'Hotel accommodations',
      'Daily breakfast and dinner',
      'Private air-conditioned transportation',
      'English & Arabic speaking guides',
      'Ziyarat trips in Makkah and Madinah'
    ],
    notIncluded: [
      'Personal expenses',
      'Travel insurance',
      'PCR tests if required',
      'Optional activities',
      'Tips for guides and drivers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport. Meet and greet by our representative and transfer to your hotel in Makkah.'
      },
      {
        day: 2,
        title: 'Makkah - Umrah Rituals',
        description: 'After Fajr prayer, our guide will assist you with Umrah rituals including Tawaf and Sa\'i. Rest of the day free for prayers.'
      },
      {
        day: 3,
        title: 'Makkah - Holy Sites',
        description: 'Visit important historical sites around Makkah including Jabal al-Noor, Jabal Thawr, and Hudaybiyyah.'
      },
      {
        day: 4,
        title: 'Makkah - Free Day',
        description: 'Full day for personal worship and prayers at Masjid al-Haram.'
      },
      {
        day: 5,
        title: 'Transfer to Madinah',
        description: 'After Fajr prayer, check-out from hotel and transfer to Madinah by private vehicle.'
      },
      {
        day: 6,
        title: 'Madinah - Masjid Nabawi',
        description: 'Visit Masjid Nabawi and pray in Riyadh-ul-Jannah. Evening lecture on the importance of Madinah.'
      },
      {
        day: 7,
        title: 'Madinah - Historical Sites',
        description: 'Visit historical sites including Masjid Quba, Masjid Qiblatain, and Mount Uhud.'
      },
      {
        day: 8,
        title: 'Madinah - Free Day',
        description: 'Full day for personal worship at Masjid Nabawi.'
      },
      {
        day: 9,
        title: 'Madinah - Free Day',
        description: 'Another day for personal worship and reflection.'
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Check-out from hotel and transfer to King Abdulaziz International Airport for your return flight.'
      }
    ]
  },
  {
    id: 'holiday-1',
    title: 'Bali Paradise Escape',
    description: 'Experience the perfect blend of relaxation and adventure in the tropical paradise of Bali with this 7-day tour featuring luxury beach resorts, cultural excursions, and natural wonders.',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryId: 'holiday',
    price: 1800,
    duration: '7 Days',
    location: 'Bali, Indonesia',
    rating: 4.7,
    features: [
      'Luxury beachfront accommodations',
      'Private pool villa options',
      'Island excursions included',
      'Traditional Balinese dinner experience',
      'Spa treatment package',
      'Airport transfers',
      'Daily breakfast'
    ],
    included: [
      'Return flights',
      'Luxury hotel accommodations',
      'Daily breakfast',
      'Welcome dinner',
      'Full-day Ubud tour',
      'Uluwatu temple visit',
      'Airport transfers',
      'English speaking guide'
    ],
    notIncluded: [
      'Personal expenses',
      'Travel insurance',
      'Additional meals not mentioned',
      'Optional activities',
      'Tips for guides and drivers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali',
        description: 'Arrive at Ngurah Rai International Airport. Transfer to your beachfront resort in Nusa Dua. Welcome dinner at sunset.'
      },
      {
        day: 2,
        title: 'Relaxation Day',
        description: 'Free day to enjoy your resort facilities. Optional spa treatment available.'
      },
      {
        day: 3,
        title: 'Ubud Cultural Tour',
        description: 'Full-day tour of Ubud including Monkey Forest, art villages, and Tegalalang Rice Terraces.'
      },
      {
        day: 4,
        title: 'Island Adventure',
        description: 'Day trip to Nusa Penida Island with snorkeling opportunities and visits to stunning beaches.'
      },
      {
        day: 5,
        title: 'Temple Exploration',
        description: 'Visit Bali\'s most iconic temples including Tanah Lot and Uluwatu. Enjoy Kecak fire dance at sunset.'
      },
      {
        day: 6,
        title: 'Free Day',
        description: 'Final day to relax, shop for souvenirs, or take optional activities.'
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Check-out and transfer to airport for your return flight.'
      }
    ]
  },
  {
    id: 'adventure-1',
    title: 'Morocco Desert Adventure',
    description: 'Embark on an unforgettable 8-day journey through Morocco\'s diverse landscapes, from the bustling medinas of Marrakech to the serene Sahara Desert, including camel trekking and nights under the stars.',
    image: 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryId: 'adventure',
    price: 1600,
    duration: '8 Days',
    location: 'Morocco',
    rating: 4.9,
    features: [
      'Guided tour of historic medinas',
      'Camel trek in the Sahara',
      'Night in luxury desert camp',
      'Atlas Mountains hiking',
      'Traditional Moroccan cooking class',
      'Visit to Ait Ben Haddou kasbah',
      'Shopping in traditional souks'
    ],
    included: [
      'All domestic transportation',
      'Hotel accommodations',
      'Desert luxury camp stay',
      'Daily breakfast and dinner',
      'Camel trekking experience',
      'English speaking guide',
      'Entrance fees to monuments'
    ],
    notIncluded: [
      'International flights',
      'Personal expenses',
      'Travel insurance',
      'Lunches',
      'Tips for guides and drivers',
      'Optional activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Marrakech',
        description: 'Arrive in Marrakech and transfer to your riad in the medina. Evening orientation walk and welcome dinner.'
      },
      {
        day: 2,
        title: 'Marrakech Exploration',
        description: 'Full-day guided tour of Marrakech including Bahia Palace, Koutoubia Mosque, and Jemaa el-Fnaa square.'
      },
      {
        day: 3,
        title: 'Atlas Mountains',
        description: 'Journey through the High Atlas Mountains, visit Berber villages, and enjoy a traditional lunch with a local family.'
      },
      {
        day: 4,
        title: 'Ait Ben Haddou & Ouarzazate',
        description: 'Visit the UNESCO World Heritage site of Ait Ben Haddou and the film studios of Ouarzazate.'
      },
      {
        day: 5,
        title: 'Sahara Desert',
        description: 'Travel to Merzouga on the edge of the Sahara. Camel trek into the desert for a night in a luxury camp.'
      },
      {
        day: 6,
        title: 'Todra Gorge & Dades Valley',
        description: 'Watch the sunrise over the dunes, then travel to the dramatic landscapes of Todra Gorge and Dades Valley.'
      },
      {
        day: 7,
        title: 'Return to Marrakech',
        description: 'Journey back to Marrakech. Afternoon cooking class to learn traditional Moroccan dishes.'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Free time for last-minute shopping before transfer to the airport for your departure flight.'
      }
    ]
  },
  {
    id: 'religious-1',
    title: 'Jerusalem & Holy Land Tour',
    description: 'Experience a profound spiritual journey through the Holy Land with this 9-day tour covering major religious sites in Jerusalem, Bethlehem, Nazareth, and the Sea of Galilee with expert theological guides.',
    image: 'https://images.pexels.com/photos/1621242/pexels-photo-1621242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryId: 'religious',
    price: 2200,
    duration: '9 Days',
    location: 'Israel & Palestine',
    rating: 4.8,
    features: [
      'Visit to major religious sites',
      'Expert theological guides',
      'Luxury accommodations',
      'All transportation included',
      'Cultural immersion experiences',
      'Historical context provided',
      'Spiritual reflection opportunities'
    ],
    included: [
      'Meet and assist at airport',
      'Luxury hotel accommodations',
      'Daily breakfast and dinner',
      'Air-conditioned transportation',
      'Licensed English-speaking guide',
      'All entrance fees',
      'Porterage at hotels'
    ],
    notIncluded: [
      'International airfare',
      'Personal expenses',
      'Travel insurance',
      'Lunches',
      'Beverages with meals',
      'Tips for guide and driver'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tel Aviv',
        description: 'Arrive at Ben Gurion Airport. Meet and greet by our representative and transfer to your hotel in Jerusalem.'
      },
      {
        day: 2,
        title: 'Old City of Jerusalem',
        description: 'Full day exploring the Old City including the Western Wall, Via Dolorosa, Church of the Holy Sepulchre, and more.'
      },
      {
        day: 3,
        title: 'Mount of Olives & Bethlehem',
        description: 'Visit the Mount of Olives, Garden of Gethsemane, and travel to Bethlehem to see the Church of the Nativity.'
      },
      {
        day: 4,
        title: 'New City & Yad Vashem',
        description: 'Explore the new city of Jerusalem, visit Yad Vashem Holocaust Memorial, and Israel Museum.'
      },
      {
        day: 5,
        title: 'Dead Sea & Masada',
        description: 'Full day excursion to Masada fortress and float in the Dead Sea. Visit Qumran where the Dead Sea Scrolls were found.'
      },
      {
        day: 6,
        title: 'Jordan River & Sea of Galilee',
        description: 'Travel north to visit the Baptismal Site at Jordan River, then to the Sea of Galilee area.'
      },
      {
        day: 7,
        title: 'Nazareth & Capernaum',
        description: 'Visit Nazareth, Mount of Beatitudes, Capernaum, and take a boat ride on the Sea of Galilee.'
      },
      {
        day: 8,
        title: 'Caesarea & Jaffa',
        description: 'Visit the ancient Roman city of Caesarea and the old port city of Jaffa before returning to Jerusalem.'
      },
      {
        day: 9,
        title: 'Departure',
        description: 'Transfer to Ben Gurion Airport for your departure flight.'
      }
    ]
  },
  {
    id: 'student-1',
    title: 'European Cultural Exchange',
    description: 'A 12-day educational journey through the cultural capitals of Europe designed specifically for students, featuring interactive museum visits, university tours, and cultural exchange opportunities.',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryId: 'student',
    price: 1950,
    duration: '12 Days',
    location: 'Multiple European Cities',
    rating: 4.6,
    features: [
      'Visits to top European universities',
      'Interactive museum experiences',
      'Cultural exchange activities',
      'Local student meetups',
      'Educational workshops',
      'Public transportation passes',
      'Comfortable student accommodations'
    ],
    included: [
      'International flights',
      'Tourist-class hotel accommodations',
      'Daily breakfast',
      'Public transportation passes',
      'Guided city tours',
      'Museum entrance fees',
      'University visits',
      'English-speaking tour manager'
    ],
    notIncluded: [
      'Most meals',
      'Personal expenses',
      'Travel insurance',
      'Optional activities',
      'Tips for guides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Departure',
        description: 'Overnight flight to Europe.'
      },
      {
        day: 2,
        title: 'Arrival in London',
        description: 'Arrive in London. Orientation walk and welcome dinner.'
      },
      {
        day: 3,
        title: 'London - Academic Day',
        description: 'Visits to Imperial College and University College London with student-guided tours.'
      },
      {
        day: 4,
        title: 'London - Cultural Day',
        description: 'British Museum, National Gallery, and Shakespeare\'s Globe Theatre.'
      },
      {
        day: 5,
        title: 'Paris - Arrival',
        description: 'Eurostar train to Paris. Orientation walk and Seine River cruise.'
      },
      {
        day: 6,
        title: 'Paris - Academic Day',
        description: 'Visit to Sorbonne University and meeting with international students.'
      },
      {
        day: 7,
        title: 'Paris - Cultural Day',
        description: 'Louvre Museum, Eiffel Tower, and Montmartre art district.'
      },
      {
        day: 8,
        title: 'Amsterdam - Arrival',
        description: 'Train to Amsterdam. Canal tour and orientation walk.'
      },
      {
        day: 9,
        title: 'Amsterdam - Academic Day',
        description: 'University of Amsterdam visit and innovation workshop.'
      },
      {
        day: 10,
        title: 'Amsterdam - Cultural Day',
        description: 'Van Gogh Museum, Anne Frank House, and cycling tour.'
      },
      {
        day: 11,
        title: 'Final Day',
        description: 'Group project presentations and farewell dinner.'
      },
      {
        day: 12,
        title: 'Return Home',
        description: 'Transfer to airport for return flight.'
      }
    ]
  },
  {
    id: 'holiday-2',
    title: 'Greek Islands Cruise',
    description: 'Discover the enchanting beauty of the Greek Islands with this 8-day luxury cruise, featuring stops at Santorini, Mykonos, Crete, and Rhodes with optional excursions at each destination.',
    image: 'https://images.pexels.com/photos/1269805/pexels-photo-1269805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryId: 'holiday',
    price: 2800,
    duration: '8 Days',
    location: 'Greek Islands',
    rating: 4.7,
    features: [
      'Luxury cruise accommodation',
      'Full board meals',
      'Entertainment program',
      'Island hopping experience',
      'Swimming stops in crystal waters',
      'Sunset views in Santorini',
      'Cultural excursions available'
    ],
    included: [
      'Cruise cabin accommodation',
      'All meals on board',
      'Welcome cocktail',
      'Greek night entertainment',
      'Use of ship facilities',
      'Port charges',
      'English speaking cruise coordinator'
    ],
    notIncluded: [
      'Flights to/from Athens',
      'Shore excursions',
      'Beverages',
      'Spa treatments',
      'Gratuities',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Athens (Piraeus)',
        description: 'Embarkation at Piraeus port. Welcome aboard reception.'
      },
      {
        day: 2,
        title: 'Mykonos',
        description: 'Full day in the cosmopolitan island of Mykonos. Optional walking tour or beach time.'
      },
      {
        day: 3,
        title: 'Kusadasi & Patmos',
        description: 'Morning visit to Kusadasi, Turkey with optional tour to ancient Ephesus. Afternoon in spiritual Patmos.'
      },
      {
        day: 4,
        title: 'Rhodes',
        description: 'Full day in the island of knights. Optional tour to the Acropolis of Lindos and the medieval Old Town.'
      },
      {
        day: 5,
        title: 'Crete (Heraklion)',
        description: 'Morning in Crete with optional tour to the Palace of Knossos. Afternoon sailing.'
      },
      {
        day: 6,
        title: 'Santorini',
        description: 'Full day in the spectacular volcanic island of Santorini. Optional caldera tour and Oia sunset.'
      },
      {
        day: 7,
        title: 'At Sea',
        description: 'Relaxing day at sea with on-board activities and entertainment.'
      },
      {
        day: 8,
        title: 'Athens - Disembarkation',
        description: 'Morning arrival at Piraeus port. Disembarkation after breakfast.'
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Abdullah',
    avatar: 'https://images.unsplash.com/photo-1619235462942-a3aec8aa39cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE11c2xpbSUyMG1hbiUyMHBpY3xlbnwwfDB8MHx8fDA%3D',
    rating: 5,
    text: 'Our Umrah experience with Bin Mustaq was truly life-changing. The arrangements were perfect, the accommodation was close to Haram, and the guides were knowledgeable and helpful throughout our journey.',
    packageId: 'umrah-1',
    date: 'March 2024'
  },
  {
    id: '2',
    name: 'Hamna Ashraf',
    avatar: 'https://images.unsplash.com/photo-1659080540643-7dcbbc530bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE11c2xpbSUyMHBpYyUyMHNpbmdsZXxlbnwwfDB8MHx8fDA%3D',
    rating: 4.5,
    text: 'The Umrah experience exceeded our expectations. Every detail was taken care of — from the comfortable stay to the guided visits. Truly unforgettable!',
    packageId: 'holiday-1',
    date: 'January 2022'
  },
  {
    id: '3',
    name: 'Mohammed Danish',
    avatar: 'data:image/jpeg;base64,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',
    rating: 5,
    text: 'The Umrah journey was a profound spiritual experience. Our guide’s deep knowledge brought every holy site to life.',
    packageId: 'religious-1',
    date: 'February 2025'
  }
];