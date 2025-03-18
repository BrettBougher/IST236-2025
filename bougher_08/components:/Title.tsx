import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TitleProps {
  campgroundName: string;
}

const Title: React.FC<TitleProps> = ({ campgroundName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{campgroundName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Title;
