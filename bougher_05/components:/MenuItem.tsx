import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type MenuItemProps = {
  name: string;
  image: any;
  price: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, image, price }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemDetails: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MenuItem;
