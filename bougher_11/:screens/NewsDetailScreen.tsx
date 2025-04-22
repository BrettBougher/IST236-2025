// /screens/NewsDetailScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useBookmarks } from '../context/bookmarks-context';
import { newsData } from '../data/newsData';
import { NewsItem } from '../data/newsData';

interface NewsDetailScreenProps {
  route: any;
}

const NewsDetailScreen: React.FC<NewsDetailScreenProps> = ({ route }) => {
  const { newsId } = route.params;
  const { bookmarkedNews, toggleBookmark } = useBookmarks();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    const foundNews = newsData.find((item) => item.id === newsId);
    setNewsItem(foundNews || null);
  }, [newsId]);

  if (!newsItem) return null;

  const isBookmarked = bookmarkedNews.some((item) => item.id === newsId);

  return (
    <View>
      <Image source={{ uri: newsItem.imageUrl }} style={{ width: 200, height: 200 }} />
      <Text>{newsItem.headline}</Text>
      <Text>{newsItem.date}</Text>
      <Text>{newsItem.author}</Text>
      <Text>{newsItem.agency}</Text>
      <Text>{newsItem.description}</Text>
      <Button
        title={isBookmarked ? 'Remove Bookmark' : 'Add to Bookmarks'}
        onPress={() => toggleBookmark(newsItem)}
      />
    </View>
  );
};

export default NewsDetailScreen;
