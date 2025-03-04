import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Title from '../components/Title';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/restaurant_image.jpg')} style={styles.restaurantImage} />
      <Title text="Restaurant Name" />
      <Text style={styles.details} onPress={() => openLink('tel:+123456789')}>Phone: +1 234 567 89</Text>
      <Text style={styles.details} onPress={() => openLink('https://restaurantwebsite.com')}>Website: restaurantwebsite.com</Text>
      <Text style={styles.details}>Address: 123 Restaurant St, City</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
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

export default HomeScreen;
