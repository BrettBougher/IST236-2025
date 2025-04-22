// screens/USNews.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomList from '../components/CustomList';
import { dummyData } from '../utils/dummyData';
import { News } from '../models/News';

const USNews: React.FC = ({ navigation }) => {
  const filteredNews = dummyData.filter((news) => news.agency === 'CNN');

  const handleItemPress = (news: News) => {
    navigation.navigate('NewsDetail', { news });
  };

  return (
    <View style={styles.container}>
      <CustomList newsItems={filteredNews} onItemPress={handleItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default USNews;
