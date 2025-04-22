// /screens/USNewsScreen.tsx

import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { newsData } from '../data/newsData';
import { ListItem } from '../components/ListItem';
import { NewsItem } from '../data/newsData';

const USNewsScreen: React.FC<any> = ({ navigation }) => {
  const filteredNews = newsData.filter((item: NewsItem) => item.agency === 'CNN');
  
  return (
    <View>
      <FlatList
        data={filteredNews}
        keyExtractor={(item: NewsItem) => item.id}
        renderItem={({ item }: { item: NewsItem }) => (
          <ListItem news={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default USNewsScreen;
