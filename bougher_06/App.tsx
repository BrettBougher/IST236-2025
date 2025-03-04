import React, { useState } from 'react';
import { View, Text, Button, Image, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './components/RecipeItem';
import RecipeModal from './components/RecipeModal';
import RecipeForm from './components/RecipeForm';

interface Recipe {
  id: string;
  title: string;
  text: string;
}

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isAddRecipeScreen, setIsAddRecipeScreen] = useState<boolean>(false);

  // Function to handle adding a recipe
  const addRecipe = (title: string, text: string) => {
    setRecipes([...recipes, { id: Math.random().toString(), title, text }]);
    setIsAddRecipeScreen(false);
  };

  // Function to handle deleting a recipe
  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  // Function to handle showing the modal
  const showModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalVisible(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedRecipe(null);
  };

  return (
    <View style={styles.container}>
      {isAddRecipeScreen ? (
        <RecipeForm onSave={addRecipe} onCancel={() => setIsAddRecipeScreen(false)} />
      ) : isModalVisible ? (
        <RecipeModal recipe={selectedRecipe!} onClose={closeModal} />
      ) : (
        <View style={styles.homeScreen}>
          <Text style={styles.title}>Recipes App</Text>
          <Image source={require('./assets/stock-image.jpg')} style={styles.image} />
          <Button title="Go to Recipes" onPress={() => setIsAddRecipeScreen(false)} />
        </View>
      )}

      {!isAddRecipeScreen && !isModalVisible && (
        <View style={styles.recipesScreen}>
          <FlatList
            data={recipes}
            renderItem={({ item }) => (
              <RecipeItem
                recipe={item}
                onView={() => showModal(item)}
                onDelete={() => deleteRecipe(item.id)}
              />
            )}
            keyExtractor={item => item.id}
          />
          <Button title="Add Recipe" onPress={() => setIsAddRecipeScreen(true)} />
          <Button title="Home" onPress={() => setIsAddRecipeScreen(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  homeScreen: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 20,
  },
  recipesScreen: {
    flex: 1,
  },
});
