// screens/NewsDetail.tsx
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const NewsDetail: React.FC = ({ route, navigation }) => {
  const { news } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: news.imageUrl }} style={styles.image} />
      <Text style={styles.headline}>{news.headline}</Text>
      <Text style={styles.date}>{news.date}</Text>
      <Text>{news.author}</Text>
      <Text>{news.agency}</Text>
      <Text>{news.description}</Text>
      <Button title={isBookmarked ? 'Unbookmark' : 'Bookmark'} onPress={toggleBookmark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    color: 'gray',
    marginBottom: 10,
  },
});

export default NewsDetail;
