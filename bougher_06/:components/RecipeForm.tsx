import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface RecipeFormProps {
  onSave: (title: string, text: string) => void;
  onCancel: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSave = () => {
    onSave(title, text);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Recipe Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Recipe Text"
        value={text}
        onChangeText={setText}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
});

export default RecipeForm;
