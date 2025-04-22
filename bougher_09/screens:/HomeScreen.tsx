import React from 'react';
import { FlatList } from 'react-native';
import { COUNTRIES } from '../data/dummy-data';
import CountryGridTile from '../components/CountryGridTile';

const HomeScreen = ({ navigation }: any) => {
  return (
    <FlatList
      data={COUNTRIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CountryGridTile
          title={item.name}
          imageUrl={item.imageUrl || ''}
          onPress={() => navigation.navigate('Destinations', { countryId: item.id })}
        />
      )}
      numColumns={2}
    />
  );
};

export default HomeScreen;
