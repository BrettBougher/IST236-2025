import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface RecipeItemProps {
  recipe: {
    id: string;
    title: string;
    text: string;
  };
  onView: () => void;
  onDelete: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, onView, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.buttons}>
        <Button title="View" onPress={onView} />
        <Button title="Delete" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  recipeTitle: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default RecipeItem;
