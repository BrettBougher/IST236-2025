// /components/NavigationButton.tsx

import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NavigationButtonProps {
  title: string;
  to: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ title, to }) => {
  const navigation = useNavigation();
  
  return <Button title={title} onPress={() => navigation.navigate(to)} />;
};

export default NavigationButton;
