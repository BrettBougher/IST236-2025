import React from 'react';
import { Pressable, View, Text, ImageBackground, StyleSheet } from 'react-native';

interface Props {
  title: string;
  imageUrl: string;
  onPress: () => void;
}

const CountryGridTile: React.FC<Props> = ({ title, imageUrl, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} onPress={onPress}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: { flex: 1, margin: 15, height: 150, borderRadius: 10, overflow: 'hidden' },
  button: { flex: 1 },
  bgImage: { width: '100%', height: '100%', justifyContent: 'flex-end' },
  titleContainer: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 },
  title: { color: 'white', fontFamily: 'OpenSans-Bold', fontSize: 18 },
});

export default CountryGridTile;
