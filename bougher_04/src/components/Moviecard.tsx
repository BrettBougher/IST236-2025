import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, rating }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>Rating: {rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
});

export default MovieCard;
