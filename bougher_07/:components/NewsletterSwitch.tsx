// /components/NewsletterSwitch.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';

interface NewsletterSwitchProps {
  isChecked: boolean;
  onToggle: (value: boolean) => void;
}

const NewsletterSwitch: React.FC<NewsletterSwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <View>
      <Text>Sign up for Newsletter</Text>
      <Switch value={isChecked} onValueChange={onToggle} />
    </View>
  );
};

export default NewsletterSwitch;
