// components/ListItem.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { News } from '../models/News';

interface ListItemProps {
  news: News;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ news, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: news.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.headline}>{news.headline}</Text>
          <Text style={styles.date}>{news.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  headline: {
    fontWeight: 'bold',
  },
  date: {
    color: 'gray',
  },
});

export default ListItem;
