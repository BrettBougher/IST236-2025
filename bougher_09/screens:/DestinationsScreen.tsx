import React, { useState } from 'react';
import { View, FlatList, Modal, Text, Image, Button, StyleSheet } from 'react-native';
import { DESTINATIONS } from '../data/dummy-data';
import DestinationItem from '../components/DestinationItem';

const DestinationsScreen = ({ route }: any) => {
  const { countryId } = route.params;
  const [selectedDestination, setSelectedDestination] = useState<any>(null);

  const destinations = DESTINATIONS.filter((d) => d.countryId === countryId);

  return (
    <View>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationItem
            destination={item}
            onPress={() => setSelectedDestination(item)}
          />
        )}
      />
      <Modal visible={!!selectedDestination} transparent={true} animationType=\"slide\">
        <View style={styles.modalView}>
          {selectedDestination && (
            <>
              <Image source={{ uri: selectedDestination.imageUrl }} style={styles.modalImage} />
              <Text style={styles.modalText}>{selectedDestination.description}</Text>
              <Button title=\"Close\" onPress={() => setSelectedDestination(null)} />
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: { margin: 20, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
  modalImage: { width: 300, height: 200 },
  modalText: { marginVertical: 10 }
});

export default DestinationsScreen;
