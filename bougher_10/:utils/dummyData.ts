// utils/dummyData.ts
import { News } from '../models/News';

export const dummyData: News[] = [
  {
    id: '1',
    headline: 'US Economy Growing Amid Challenges',
    date: '2025-04-21',
    author: 'John Doe',
    agency: 'CNN',
    description: 'The US economy is showing signs of growth despite challenges...',
    imageUrl: 'https://example.com/us_economy.jpg',
  },
  {
    id: '2',
    headline: 'World Leaders Gather for Global Summit',
    date: '2025-04-20',
    author: 'Jane Smith',
    agency: 'BBC',
    description: 'World leaders convened this week to discuss the climate crisis...',
    imageUrl: 'https://example.com/global_summit.jpg',
  },
  // Add more news items here
];
