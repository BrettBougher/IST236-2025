// /data/newsData.ts

export interface NewsItem {
  id: string;
  headline: string;
  date: string;
  author: string;
  agency: string;
  description: string;
  imageUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    headline: 'Breaking News in US',
    date: '2025-04-22',
    author: 'John Doe',
    agency: 'CNN',
    description: 'Detailed description of the news.',
    imageUrl: 'https://example.com/image.jpg'
  },
  {
    id: '2',
    headline: 'Global News Highlights',
    date: '2025-04-22',
    author: 'Jane Doe',
    agency: 'BBC',
    description: 'Another description of global news.',
    imageUrl: 'https://example.com/image2.jpg'
  },
];
