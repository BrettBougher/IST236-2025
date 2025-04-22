// /components/ListItem.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NewsItem } from '../data/newsData';

interface ListItemProps {
  news: NewsItem;
  navigation: any;
}

export const ListItem: React.FC<ListItemProps> = ({ news, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NewsDetail', { newsId: news.id })}
    >
      <View style={{ marginBottom: 20 }}>
        <Image source={{ uri: news.imageUrl }} style={{ width: 100, height: 100 }} />
        <Text>{news.headline}</Text>
        <Text>{news.date}</Text>
      </View>
    </TouchableOpacity>
  );
};
