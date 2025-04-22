// components/CustomList.tsx
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { News } from '../models/News';
import ListItem from './ListItem';

interface CustomListProps {
  newsItems: News[];
  onItemPress: (news: News) => void;
}

const CustomList: React.FC<CustomListProps> = ({ newsItems, onItemPress }) => {
  return (
    <FlatList
      data={newsItems}
      renderItem={({ item }) => (
        <ListItem news={item} onPress={() => onItemPress(item)} />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CustomList;
