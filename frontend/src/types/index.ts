// Define types for the travel website

export type ThemeMode = 'light' | 'dark';

export interface PackageCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  image: string;
  categoryId: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  features: string[];
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  packageId: string;
  date: string;
}