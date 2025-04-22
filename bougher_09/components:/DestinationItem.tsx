import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

interface Props {
  destination: {
    name: string;
    cost: string;
    yearFounded: number;
    rating: number;
    imageUrl: string;
    description: string;
  };
  onPress: () => void;
}

const DestinationItem: React.FC<Props> = ({ destination, onPress }) => {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Image source={{ uri: destination.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{destination.name}</Text>
        <Text>{destination.cost}</Text>
        <Text>{destination.yearFounded}</Text>
        <Text>{destination.rating} ⭐</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: { flexDirection: 'row', margin: 10, borderRadius: 8, overflow: 'hidden', backgroundColor: '#f5f5f5' },
  image: { width: 100, height: 100 },
  info: { marginLeft: 10, justifyContent: 'center' },
  name: { fontFamily: 'OpenSans-Bold', fontSize: 16 }
});

export default DestinationItem;
