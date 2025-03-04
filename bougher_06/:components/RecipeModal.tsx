import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

interface RecipeModalProps {
  recipe: {
    title: string;
    text: string;
  };
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{recipe.title}</Text>
        <Text style={styles.modalText}>{recipe.text}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default RecipeModal;
