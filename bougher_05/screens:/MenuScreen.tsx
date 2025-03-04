import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MenuItem from '../components/MenuItem';

type MenuItemType = {
  id: number;
  name: string;
  image: any;
  price: string;
};

const MenuScreen = ({ navigation }: { navigation: any }) => {
  const menuItems: MenuItemType[] = [
    { id: 1, name: 'Spaghetti', image: require('../assets/images/menu_item_1.jpg'), price: '$12' },
    { id: 2, name: 'Pizza', image: require('../assets/images/menu_item_2.jpg'), price: '$15' },
    { id: 3, name: 'Salad', image: require('../assets/images/menu_item_1.jpg'), price: '$10' },
    { id: 4, name: 'Burger', image: require('../assets/images/menu_item_2.jpg'), price: '$8' },
    { id: 5, name: 'Soup', image: require('../assets/images/menu_item_1.jpg'), price: '$6' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {menuItems.map(item => (
          <MenuItem key={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: '#ff6f61',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MenuScreen;
