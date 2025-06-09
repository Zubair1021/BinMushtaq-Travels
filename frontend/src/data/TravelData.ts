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
    name: 'Holiday Packages',
    icon: 'Beach',
    description: 'Relaxing and adventurous getaways to exotic destinations'
  },
  {
    id: 'adventure',
    name: 'Adventure Tours',
    icon: 'Mountain',
    description: 'Thrilling experiences in nature and extreme sports'
  },
  {
    id: 'religious',
    name: 'Religious Tours',
    icon: 'Cross',
    description: 'Pilgrimages and spiritual journeys to sacred sites'
  },
  {
    id: 'student',
    name: 'Student Packages',
    icon: 'GraduationCap',
    description: 'Educational tours and cultural exchanges for students'
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

];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Abdullah',
    avatar: 'https://images.unsplash.com/photo-1619235462942-a3aec8aa39cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE11c2xpbSUyMG1hbiUyMHBpY3xlbnwwfDB8MHx8fDA%3D',
    rating: 5,
    text: 'Our Umrah experience with Bin Mushtaq was truly life-changing. The arrangements were perfect, the accommodation was close to Haram, and the guides were knowledgeable and helpful throughout our journey.',
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