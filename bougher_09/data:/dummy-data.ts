import { Country } from '../models/country';
import { Destination } from '../models/destination';

export const COUNTRIES: Country[] = [
  new Country('c1', 'Italy', 'https://example.com/italy.jpg'),
  new Country('c2', 'Japan', 'https://example.com/japan.jpg'),
  // Add 8 more countries
];

export const DESTINATIONS: Destination[] = [
  new Destination('d1', 'c1', 'Venice', '$2,000', 421, 4.7, 'Beautiful canals and architecture.', 'https://example.com/venice.jpg'),
  new Destination('d2', 'c1', 'Rome', '$1,800', -753, 4.8, 'Historic capital with iconic ruins.', 'https://example.com/rome.jpg'),
  new Destination('d3', 'c2', 'Tokyo', '$2,500', 1603, 4.9, 'Vibrant tech and culture hub.', 'https://example.com/tokyo.jpg'),
  new Destination('d4', 'c2', 'Kyoto', '$2,200', 794, 4.6, 'Historic temples and gardens.', 'https://example.com/kyoto.jpg'),
  // Add more destinations for each country
];
