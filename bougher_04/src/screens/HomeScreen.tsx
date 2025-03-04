import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { moviesData } from '../data/moviesData';
import MovieCard from '../components/MovieCard';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 10 Movies</Text>
      <FlatList
        data={moviesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard title={item.title} poster={item.poster} rating={item.rating} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
