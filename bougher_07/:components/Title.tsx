// /components/Title.tsx

import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: 'custom-font', // Use custom font here
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Title;
