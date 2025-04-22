// /screens/BookmarkedNewsScreen.tsx

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useBookmarks } from '../context/bookmarks-context';
import { ListItem } from '../components/ListItem';

const BookmarkedNewsScreen: React.FC = () => {
  const { bookmarkedNews } = useBookmarks();

  return (
    <View>
      {bookmarkedNews.length === 0 ? (
        <Text>No bookmarks yet</Text>
      ) : (
        <FlatList
          data={bookmarkedNews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem news={item} navigation={null} />}
        />
      )}
    </View>
  );
};

export default BookmarkedNewsScreen;
